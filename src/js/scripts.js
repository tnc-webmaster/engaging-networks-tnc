(function() {
  let root = document.documentElement;
  
  // Classes
  const activeClass = 'is-active';
  const advocacyShareClass = 'advocacy-share-bar-block';
  const errorBoxClass = 'error-box';
  const paypalSelectedClass = 'paypal-selected';
  const photoInfoClass = 'photo-info';
  const popoverClass = 'popover';
  const popoverContainerClass = 'popover-container';
  const validClass = 'is-active';
  const validationFailedClass = 'en__field--validationFailed';

  // Selectors
  const ccNumberFieldSelector = '.en__field--ccnumber';
  const ccNumberInputSelector = '#en__field_transaction_ccnumber';
  const dateInputSelector = '.en__field[class*="date"] .en__field__input--text, .en__field--888858 .en__field__input--text';
  const donationAmountSelector = '.en__field--donationAmt .en__field__element--text';
  const enFieldSelector = '.en__field';
  const enFieldItemSelector = '.en__field__item';
  const otherAmountSelector = '.en__field--donationAmt .en__field__item--other';
  const otherAmountInputSelector = '.en__field__input--other';
  const paymentMethodSelector = '[class*="en__field--payment-method"]';
  const paymentMethodRadioSelector = '[class*="en__field--payment-method"].en__field--radio';
  const paymentTypeSelector = '[name="transaction.paymenttype"]';
  const paypalInputSelector = '.en__field--payment-method-paypal .en__field__input--checkbox';
  const supporterEmailAddressSelector = '#en__field_supporter_emailAddress';
  const supporterStateSelector = '#en__field_supporter_region';
  const supporterZipCodeSelector = '#en__field_supporter_postcode';
  const tipJarSelector = '.en__field--tip-jar';
  const totalAmountSelector = '.js-total-gift';
  
  // Elements
  const theForm = document.querySelector('.en__component--page');
  const calculatedDonationAmountInput = theForm.querySelector('[name="supporter.NOT_TAGGED_9"]');
  
  // Widgets
  let cleave = null;
  
  // Constants
  const tipJarPct = 0.03;
  
  /**
  * Form interface enhancements
  */
  const ui = () => {
    let el = null;
    let els = null;
    let _parent = null;
    
    // Set the value of choices when autofill is detected
    const handleChoicesChange = (choices, e) => {
      choices.setValue([
      {
        value: e.target.value,
        label: e.target.querySelector('option[value="' + e.target.value + '"]').textContent,
      }
      ]);
      resetSelect(choices);
    };

    // choices.js removes <options> form the native select
    // Restoring the <options> allows choices.js to work with browser autofill
    const resetSelect = (choices) => {
      const selectOne = choices.passedElement.element;
      const selectValue = selectOne.value;
      let html = '';
      let index = 1;

      // Clear the native select
      selectOne.innerHTML = '';
      // Re-add all <options> to native select
      getAll('.choices__item', choices.choiceList.element).forEach(el => {
        let choiceSelected = el.dataset.value === selectValue ? true : false;
        let opt = document.createElement('option');

        opt.value = el.dataset.value;
        opt.text = el.textContent;
        opt.selected = choiceSelected;
        selectOne.add(opt, null);
      });
      // Listen for an autofill (change event)
      selectOne.removeEventListener('change', handleChoicesChange.bind(null, choices), false);
      selectOne.addEventListener('change', handleChoicesChange.bind(null, choices), false);
    };
    
    // Initiate choices.js
    getAll('select').forEach(el => {
      choices = new Choices(el, {
        silent: true,
        itemSelectText: '',
        callbackOnInit: function() {
          resetSelect(this);
        },
      });
    });
    
    // Is there a full bleed hero?
    addClass(theForm, maybeHasHero());

    // Is there a processing error?
    els = getAll('.en__errorHeader, .en__errorList');
    if (els.length > 0 && !isEmpty(theForm.querySelector('.en__errorList'))) {
      wrapAll(els, 'div', errorBoxClass);
    }
    
    // Advocacy share text and share buttons blocks need to be wrapped for layout
    els = getAll('.advocacy-share-bar, .advocacy-share-bar + .en__component--socialshareblock');
    if (els.length > 0) {
      wrapAll(els, 'div', advocacyShareClass);
    }

    // Placeholders for some inputs
    getAll(otherAmountInputSelector).forEach(el => {
      const fieldItem = getClosestEl(el, enFieldItemSelector);

      if (fieldItem) {
        addPlaceholder(el, fieldItem.previousElementSibling.querySelector('label').textContent);
      }
    });

    // Hardcode placeholder for date fields
    getAll(dateInputSelector).forEach(el => {
      addPlaceholder(el, 'Select Date');
    });

    // Convert URL strings to images for dummy select ecard radios
    el = theForm.querySelector('.en__field--ecard-select-an-ecard');
    if (el) {
      getAll('.en__field__label--item', el).forEach(el => {
        createImgFromUrl(el.textContent, el);
      });
    }

    // Add inputmode attribute for currency fields
    getAll('[name*="Amt"], [name*="amt"]').forEach(el => {
      el.setAttribute('inputmode', 'decimal');
    });

    // Add inputmode attribute for credit card fields
    getAll('[name*="ccnumber"], [name*="ccvv"]').forEach(el => {
      el.setAttribute('inputmode', 'numeric');
    });

    // Display minimum donation amount
    el = theForm.querySelector(donationAmountSelector) || theForm.querySelector(otherAmountSelector);
    if (el) {
      const minAmountValidator = EngagingNetworks.validators.filter(obj => {
        if (obj.format) {
          return obj.format.indexOf('~') > -1;
        }
        return false;
      });
      if (minAmountValidator[0]) {
        // Add paragraph with min amount underneath Other Amount field
        addEl(el, 'p', '$' + minAmountValidator[0].format.split('~')[0] + ' minimum');
      }
    }

    // The upsell amount is in a hidden untaggged field that updates according to form dependencies
    //if (calculatedDonationAmountInput) {
    //  updateTotalGift(calculatedDonationAmountInput.value);
    //  calculatedDonationAmountInput.addEventListener('change', e => {
    //    updateTotalGift(e.target.value);
    //  });
    //
    //  // Changing donation amount need to trigger a change for calculated donation amount
    //  getAll('[name="transaction.donationAmt"]').forEach(el => {
    //    el.addEventListener('click', e => {
    //      setTimeout(() => {
    //        triggerEvent(calculatedDonationAmountInput, 'change');
    //      }, 100);
    //    });
    //  });
    //}
    
    // Display tip jar amount
    el = theForm.querySelector(tipJarSelector);
    if (el) {
      updateTotalGift(getTipJar(getOriginalDonationAmount()));
      
    }

    // Other amount field is always visible, so the corresponding radio need to be button clicked here even though hidden
    el = theForm.querySelector('.en__field__input--other');
    if (el) {
      el.addEventListener('focus', e => {
        const otherRadio = e.target.closest('.en__field__item').previousElementSibling.querySelector('.en__field__input--radio');

        if (otherRadio) {
          otherRadio.click();
        }
      });
      
      // Changing donation amount needs to trigger a change for calculated donation amount
      //if (calculatedDonationAmountInput) {        
      //  el.addEventListener('change', e => {
      //    setTimeout(() => {
      //      triggerEvent(calculatedDonationAmountInput, 'change');
      //    }, 100);
      //  });
      //}
    }

    // Paypal checkbox needs to hide credit card blocks
    el = theForm.querySelector(paypalInputSelector);
    _parent = theForm.querySelector(paymentMethodSelector);
    if (el && _parent) {
      el.addEventListener('click', e => {
        _parent = getClosestEl(_parent, '.en__component--formblock');
        if (e.target.checked) {
          addClass(_parent, paypalSelectedClass);
        } else {
          removeClass(_parent, paypalSelectedClass);
        }
      });
    }
    
    // Provide credit card type feedback
    el = theForm.querySelector(ccNumberInputSelector);
    if (el) {
      cleave = new Cleave(ccNumberInputSelector, {
        creditCard: true,
        onCreditCardTypeChanged: type => {
          const ccField = theForm.querySelector(ccNumberFieldSelector);
          
          updatePaymentType(type);    
          if (ccField) {
            removeClass(ccField, ['amex', 'mastercard', 'visa', 'diners', 'discover', 'jcb', 'dankort', 'instapayment', 'uatp', 'mir', 'unionPay', 'unknown']);
            addClass(ccField, type);
          }
        }
      });
    }
    
    // Switching between Check and CC payment methods loses the value for payment type
    el = theForm.querySelector(paymentMethodRadioSelector);
    if (el && cleave) {
      el = el.querySelector('.en__field__input--radio[value="CC"]');
      if (el) {
        el.addEventListener('click', e => {
          updatePaymentType(cleave.properties.creditCardType);    
        });        
      }
    }
    
    // Active state for field containers
    getAll('.en__field__input').forEach(el => {
      el.addEventListener('focus', activateField);
      el.addEventListener('blur', deactivateField);
    });

    // Init datepickers
    const datepickers = [].slice.call(document.querySelectorAll(dateInputSelector));
    const datepickersList = datepickers.map(el => {
      const today = new Date();
      const maxDate = new Date(today);

      // Restrict date selection to one year out
      maxDate.setDate(maxDate.getDate() + 365);

      return new Datepicker(el, {
        autohide: true,
        buttonClass: 'btn btn-link',
        clearBtn: true,
        maxDate: maxDate,
        minDate: new Date(),
        nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="7.121" height="11.414" viewBox="0 0 7.121 11.414"><path id="Stroke_1_Copy_2" data-name="Stroke 1 Copy 2" d="M10,0,5,5,0,0" transform="translate(0.707 10.707) rotate(-90)" fill="none" stroke-miterlimit="10" stroke-width="2"/></svg>',
        orientation: 'bottom top auto',
        prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="7.121" height="11.414" viewBox="0 0 7.121 11.414"><path id="Stroke_1_Copy_2" data-name="Stroke 1 Copy 2" d="M10,0,5,5,0,0" transform="translate(6.414 0.707) rotate(90)" fill="none" stroke-miterlimit="10" stroke-width="2"/></svg>',
        showOnClick: true,
        todayHighlight: false,
      });
    });

    // Each photo in hero and sidebar elements needs description and meta info popover
    getAll('.en__component--imageblock').forEach(el => {
      createImgTooltip(el);
    });

    // Create popovers elements
    if (typeof popoverTranslations !== 'undefined') {
      popoverTranslations.forEach(translation => {
        createPopover(translation.field, translation.placement, translation[pageJson.locale].label, translation[pageJson.locale].text);
      });
    }
    
    //Init popovers
    const popoverTriggerList = [].slice.call(theForm.querySelectorAll('.popover-container [data-bs-toggle="popover"]'));
    const popoverList = popoverTriggerList.map(popoverTriggerEl => {
      return new bootstrap.Popover(popoverTriggerEl, {
        boundry: theForm,
        container: '.popover-container',
        html: true,
        placement: 'bottom',
        fallbackPlacements: ['bottom', 'top'],
        template: '<div class="popover" role="tooltip"><div class="popover-control"><a class="popover-close" role="button" aria-label="close popover" onclick="closePopover(); return false;"></a></div><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: 'click',
        sanitize: false,
      });
    });

    // Workaround for not being able to set popover position explicity
    for (let i = 0; i < popoverTriggerList.length; i++) {
      const _index = i;
      const _root = root;

      popoverTriggerList[i].addEventListener('shown.bs.popover', e => {
        _root.style.setProperty('--popperTranslateX', popoverList[_index]._popper.state.styles.popper.transform.match(/\d*\.?\d+(?:px)?/gi)[0]);
        _root.style.setProperty('--popperTranslateY', popoverList[_index]._popper.state.styles.popper.transform.match(/\d*\.?\d+(?:px)?/gi)[1]);
      });
    }

    // Close popovers with button
    const closePopover = () => {
      for (let i = 0; i < popoverList.length; i++) {
        popoverList[i].hide();
      }
    };
    // Globalize for inline onclick
    window.closePopover = closePopover;
  };
  
  const donationForm = () => {
    const donationAmt = theForm.querySelector('.en__field--donationAmt');
    let donationAmtRadios = null;
    const otherAmountInput = theForm.querySelector(otherAmountInputSelector);
    const tipJar = theForm.querySelector('.en__field--tip-jar');
    let tipJarCheckbox;
        
    const increaseDonationAmounts = () => {      
      if (otherAmountInput) {
        if (otherAmountInput.value !== '') {
          otherAmountInput.dataset.tipjar = getTipJar(otherAmountInput.value);          
          return;
        }
      }
      
      getAll('.en__field__input--radio:not([value=""])', donationAmt).forEach(el => {
        if (!el.dataset.original) {
          el.dataset.original = el.value;
        }
        el.value = getTipJar(el.value);
      });
    };
    
    const restoreDonationAmounts = () => {
      getAll('.en__field__input--radio:not([value=""])', donationAmt).forEach(el => {
        el.value = el.dataset.original;
      });      
    };    
    
    const updateDonationAmounts = (el, fieldType) => {
      if (el.checked) {
        increaseDonationAmounts();
      } else {
        restoreDonationAmounts();
      }
    };    
    
    if (theForm.action.indexOf('donate') > -1 && pageJson.pageNumber !== pageJson.pageCount) {
      // Donation amount
      if (donationAmt) {
        donationAmtRadios = getAll('.en__field__input--radio:not([value=""])', donationAmt);
        if (tipJar && tipJarPct) {

          tipJarCheckbox = tipJar.querySelector('.en__field__input--checkbox');
          tipJarCheckbox.addEventListener('click', e => {
            updateDonationAmounts(e.target);
          });          
          
          if (tipJarCheckbox.checked) {
            updateDonationAmounts(tipJarCheckbox);            
          }
          
          donationAmtRadios.forEach(el => {
            el.addEventListener('click', e => {
              updateTotalGift(tipJarCheckbox.checked ? e.target.value : getTipJar(getOriginalDonationAmount()));              
            });
          });

          if (otherAmountInput) {
            otherAmountInput.addEventListener('input', e => {
              updateDonationAmounts(tipJarCheckbox);                
              updateTotalGift(getTipJar(getOriginalDonationAmount()));          
            });
          }
        }              
      }
    }    
  };

  /**
  * Form validation enhancements
  */
  const validation = () => {
    const setValidation = el => {
      const field = el.closest('.en__field');

      // Hide/display error formatting
      if (el.validity.valid) {
        addClass(el, validClass);
        removeClass(field, validationFailedClass);
      } else {
        removeClass(el, validClass);
        addClass(field, validationFailedClass);
      }      
    };
    
    const handleInput = e => {
      e.preventDefault();
      setValidation(e.target);
    };

    const handleChange = e => {
      e.preventDefault();
      setValidation(e.target);
    };

    // Set validation patterns
    getAll('.en__mandatory .en__field__input').forEach(el => {
      el.required = true;
      switch (el.type) {
        case 'email':
          // Check for valid email
          el.setAttribute('pattern', '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$');
          el.addEventListener('input', handleInput);
          break;
        case 'number':
          break;
        case 'select-one':
          el.addEventListener('change', handleChange);
          break;
        default:
          if (el.getAttribute('inputmode') === 'decimal') {
            // Check for US currency
            el.setAttribute('pattern', '^\\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\\.[0-9]{1,2})?$');            
          } else if (el.name.indexOf('ccnumber') > -1) {
            // Check for valid credit card (https://regexlib.com/REDetails.aspx?regexp_id=100)
            el.setAttribute('pattern', '^((?:4\\d{3})|(?:5[1-5]\\d{2})|(?:6011)|(?:3[68]\\d{2})|(?:30[012345]\\d))[ -]?(\\d{4})[ -]?(\\d{4})[ -]?(\\d{4}|3[4,7]\\d{13})$');            
          } else if (el.name.indexOf('ccvv') > -1) {
            // Check for 3 or 4 digits
            el.setAttribute('pattern', '^([0-9]{3,4})$');            
          } else if (hasClass(el, 'datepicker-input')) {
            // Check for date as mm/dd/yyyy
            el.setAttribute('pattern', '(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\\d\\d');                        
            el.addEventListener('changeDate', handleChange);
          } else {
            // Check empty pattern
            el.setAttribute('pattern', '.*\\S.*');            
          }
          el.addEventListener('input', handleInput);
      }

      // Don't display browser error messages
      el.addEventListener('oninvalid', e => {
        e.preventDefault();
      });

      // No browser form validation
      theForm.setAttribute('novalidate', true);

      // Allow form submit with invalid fields
      theForm.addEventListener('submit', e => {
        e.preventDefault();
      });
    });

    // Processing error don't always trigger a reload
    const errorList = theForm.querySelector('.en__errorList');
    if (errorList) {
      const mutationCallback = (mutationsList, observer) => {
        for (let i = 0; i < mutationsList.length; i++) {
          if (mutationsList[i].addedNodes.length > 0) {
            formatError(mutationsList[i].addedNodes[0]);
            addClass(errorList, errorBoxClass);
            scrollToEl(errorList);
          } else {
            removeClass(errorList, errorBoxClass);
          }
        }
      };

      const errorObserver = new MutationObserver(mutationCallback);

      errorObserver.observe(errorList, {
        attributes: false,
        childList: true,
        subtree: false,
      });
    }
  };

  /**
  * Form submit enhancements
  */
  const formSubmit = () => {
    const submitButton = theForm.querySelector('.en__submit button');
    const otherAmountInput = theForm.querySelector(otherAmountInputSelector);
    let otherAmountOriginal = null;

    if (submitButton) {
      submitButton.addEventListener('click', e => {
        if (otherAmountInput) {
          if (otherAmountInput.value !== '') {
            otherAmountOriginal = otherAmountInput.value;
            otherAmountInput.value = otherAmountInput.dataset.tipjar ? otherAmountInput.dataset.tipjar : otherAmountInput.value;
          }
        }
      });
    }

    theForm.addEventListener('submit', e => {
      const tipJar = theForm.querySelector('.en__field--tip-jar');
      let extraAmount = 0;
      let donationData = {};

      if (tipJar) {
        if (tipJar.querySelector('.en__field__input--checkbox').checked) {
          const errorList = theForm.querySelector('.en__errorList');
          const invalidFields = getAll('.en__field--validationFailed');
          const totalDonationAmount = getTotalDonationAmount();
          const originalDonationAmount = otherAmountOriginal || getOriginalDonationAmount();
          let formIsValid = true;

          // Looking for form errors
          if (errorList) {
            if (errorList.textContent.trim() !== '') {
              formIsValid = false;
            }
          }
          if (invalidFields.length > 0) {
            formIsValid = false;
          }

          if (formIsValid) {
            extraAmount = (totalDonationAmount - originalDonationAmount).toFixed(2);
            donationData.originalDonationAmount = originalDonationAmount;
          }
        }
      }

      // Save non-pageJson date for data layer on confirmation page
      donationData.extraAmount = extraAmount;
      donationData.state = theForm.querySelector(supporterStateSelector) ? theForm.querySelector(supporterStateSelector).value : '';
      donationData.zipCode = theForm.querySelector(supporterZipCodeSelector) ? theForm.querySelector(supporterZipCodeSelector).value : '';
      donationData.emailAddress = theForm.querySelector(supporterEmailAddressSelector) ? theForm.querySelector(supporterEmailAddressSelector).value : '';
      sessionStorage.setItem('donationData', JSON.stringify(donationData));
    });
  };
  
  /**
  * Confirmation page enhancements
  */
  const confirmation = () => {
    let donationData = sessionStorage.getItem('donationData');
    
    if (donationData) {
      donationData = JSON.parse(donationData);
    }    
  };

  /**
   * Adds active class to element
   *
   * @param {node} el The element to add class to
   */
  const activateField = el => {
    addClass((el.target || el).parentElement, activeClass);
  };

  /**
   * Adds a specified class
   *
   * @param {node} el Node to add class to
   * @param {Array || string} cls Classes to add
   */
  const addClass = (el, _classes) => {
    if (Array.isArray(_classes)) {
      el.classList.add(..._classes);
    } else {
      el.classList.add(_classes);      
    }
  };

  /**
   * Adds an element to the DOM
   *
   * @param {node} parentEl The node to add element to
   * @param {string} elType The type of element to add
   * @param {string} textContent Text to add to new element
   */
  const addEl = (parentEl, elType, textContent) => {
    let el = document.createElement(elType);

    el.textContent = textContent;
    parentEl.append(el);
  };

  /**
   * Adds placeholder attribute
   *
   * @param {node} el The field to add placeholder to
   * @param {string} textContent Placeholder value
   */
  const addPlaceholder = (el, textContent) => {
    el.setAttribute('placeholder', textContent);
  };

  /**
   * Clears all classes
   *
   * @param {node} el Node to clear classes from
   */
  const clearClass = el => el.className = '';

  /**
  * Creates image element from a url string
  *
  * @param {string} url The URL to the image
  * @param {node} el Node to append image to
  */
  const createImgFromUrl = (url, el) => {
    let newImg = new Image();

    newImg.src = url;
    el.appendChild(newImg);
    //el.textContent = '';
  };
    
  /**
  * Creates tooltip element for images
  *
  * @param {node} el The image block to create the tooltip for
  */
  const createImgTooltip = (el) => {
    const img = el.querySelector('img');
    const tooltipContent = img.getAttribute('alt');

    if (tooltipContent !== '' && tooltipContent !== 'null') {
      let tooltip = document.createElement('a');

      addClass(tooltip, photoInfoClass);
      setAttributes(tooltip, {
        'title': tooltipContent,
        'data-bs-toggle': 'tooltip',
        'tabindex': '0',
        'aria-hidden': 'true',
      });
      el.appendChild(tooltip);

      const imageTooltip = new bootstrap.Tooltip(tooltip, {
        container: el,
        html: true,
        placement: 'top',
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
        trigger: 'click'
      });
    }
  };

  /**
  * Creates popover element
  *
  * @param {string} fieldSelector The field to attach popover to
  * @param {string} label Text for popover trigger
  * @param {string} txt Popover content
  */
  const createPopover = (fieldSelector, placement, label, txt) => {
    const field = theForm.querySelector('.' + fieldSelector);
    
    if (field) {
      let popoverContainer = document.createElement('p');
      addClass(popoverContainer, popoverContainerClass);
      let popover = document.createElement('a');   
      setAttributes(popover, {
        'data-bs-content': txt,
        'data-bs-toggle': 'popover',
        'role': 'button',
        'tabindex': '0',
      });
      popover.textContent = label;
      popoverContainer.appendChild(popover);
      switch (placement) {
        case 'before':
          field.querySelector('.en__field__label').appendChild(popoverContainer);        
          break;
        case 'after':
          getClosestEl(field, '.en__field').appendChild(popoverContainer);                
          break;
        default:
          field.querySelector('.en__field__label').appendChild(popoverContainer);                  
      }
    }
  };

  /**
   * Removes active class to element
   *
   * @param {node} el The element to remove class from
   */
  const deactivateField = el => {
    removeClass((el.target || el).parentElement, activeClass);
  };

  /**
  * Splits error text blob into sentences.
  *
  * @param {node} el Element containing the error content
  */
  const formatError = el => {
    const sentences = el.textContent.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|');

    el.textContent = '';
    sentences.forEach(sentence => {
      addEl(el, 'p', sentence);
    });
  };
  
  /**
   * Returns NodeList.
   *
   * @param {string} selectors One or more selectors to match against.
   * @param {node} root The node to select over
   */
  const getAll = (selector, root = document) => {
    return Array.prototype.slice.call(root.querySelectorAll(selector), 0);
  };

  /**
   * Returns Closest element up tree that matches selector
   *
   * @param {node} el Child node.
   * @param {string} selector Selector for parent
   */
  const getClosestEl = (el, selector) => {
    if (el) {
      let closestNode = el.closest(selector);
      return closestNode ? closestNode : null;
    }
  };

  /**
   * Returns Donation amount without upsell fee or null
   */
  const getOriginalDonationAmount = () => {
    const selectedAmount = theForm.querySelector('[name="transaction.donationAmt"]:not([value=""]):checked') || theForm.querySelector(otherAmountInputSelector);
    
    return selectedAmount ? (selectedAmount.dataset.original ? selectedAmount.dataset.original : selectedAmount.value) : null;    
  };

  /**
   * Returns Donation amount with tip jar added
   *
   * @param {string} amt Daontion amount to add tip to
   */
  const getTipJar = amt => {
    return !isNaN(amt) ? (parseFloat(amt) + (parseFloat(amt) * tipJarPct)).toFixed(2) : '';
  };

  /**
   * Returns Donation amount with or without upsell fee or null
   */
  const getTotalDonationAmount = () => {
    const selectedAmount = theForm.querySelector('[name="transaction.donationAmt"]:not([value=""]):checked') || theForm.querySelector(otherAmountInputSelector);
    
    return selectedAmount ? selectedAmount.value : null;    
  };

  /**
   * Returns Element has specified class
   *
   * @param {node} el Node to check
   * @param {string} cls Class to check for
   */
  const hasClass = (el, cls) => {
    return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  };

  /**
   * Returns True if element is empty or has only whitespace.
   *
   * @param {node} el Element to check if empty.
   * @returns {boolean} If element is empty or has only whitespace
   */
  const isEmpty = el => {
    return el.innerHTML.replace(/^\s*/, '').replace(/\s*$/, '') === '';
  };

  /**
  * Returns Class for form element.
  *
  * @returns {string} Class for form element
  */
  const maybeHasHero = () => {
    return theForm.querySelector('.hero-full-bleed') ? 'has-hero' : 'not-has-hero';
  };

  /**
   * Removes multiple attributes
   *
   * @param {node} el The field to remove attributes from
   * @param {object} attrs Attributes to remove
   */
  const removeAttributes = (el, ...attrs) => {
    attrs.forEach(attr => el.removeAttribute(attr));
  };
  
   /**
   * Remove a specified class
   *
   * @param {node} el Node to clear class from
   * @param {Array || string} cls Class to remove
   */
  const removeClass = (el, _classes) => {
    if (Array.isArray(_classes)) {
      el.classList.remove(..._classes);
    } else {
      el.classList.remove(_classes);      
    }
  };

  /**
   * Scrolls to element on page
   *
   * @param {node} el Element to scroll to
   */
  const scrollToEl = el => {
    el.scrollIntoView({
      behavior: 'smooth',
    });
  };

  /**
   * Adds multiple attributes
   *
   * @param {Node} el The field to add attributes to
   * @param {object} attrs Attributes to add
   */
  const setAttributes = (el, attrs) => {
    Object.keys(attrs).forEach(attr => {
      el.setAttribute(attr, attrs[attr]);
    });
  };

  /**
   * Returns str with no spaces
   *
   * @param {sting} str String to strip spaces from
   */
  const stripSpaces = str => {
    return str.replace(/\s/g, '');
  };

  /**
   * Triggers an event
   *
   * @param {node} el Target element
   * @param {string} evt Type of event
   */
  const triggerEvent = (el, evt) => {
    el.dispatchEvent(new Event(evt));
  };

  /**
  * Updates payment method hidden field
  *
  * @param {string} ccType CC type returned from cleave
  */
  const updatePaymentType = (ccType) => {
    const paymentType = theForm.querySelector(paymentTypeSelector);
    let paymentTypeCode = '';

    if (paymentType) {
      switch (ccType) {
        case 'amex':
        paymentTypeCode = 'AX';
        break;
        case 'discover':
        paymentTypeCode = 'DI';
        break;
        case 'mastercard':
        paymentTypeCode = 'MC';
        break;
        case 'visa':
        paymentTypeCode = 'VI';
        break;
      }
      paymentType.value = paymentTypeCode;
    }
  };

  /**
  * Updates everywhere donation amount is displayed.
  *
  * @param {string} amt Total donation amount
  */
  const updateTotalGift = amt => {
    getAll(totalAmountSelector).forEach(el => {
      el.textContent = '$' + amt;
    });
  };

  /**
   * Returns wrapped nodes.
   *
   * @param {NodeList} nodes The nodes to wrap.
   * @param {string} wrapperType The node element for the wrapper.
   * @param {string} wrapperClass The class to assign the wrapper
   * @returns Wrapped elements
   */
  const wrapAll = (nodes, wrapperType, wrapperClass) => {
    let parent = nodes[0].parentNode;
    let previousSibling = nodes[0].previousSibling;
    let wrapper = document.createElement(wrapperType);

    if (wrapperClass) {
      addClass(wrapper, wrapperClass);
    }

    for (let i = 0; nodes.length - i; wrapper.firstChild === nodes[0] && i++) {
      wrapper.appendChild(nodes[i]);
    }

    let nextSibling = previousSibling ? previousSibling.nextSibling : parent.firstChild;
    parent.insertBefore(wrapper, nextSibling);
    return wrapper;
  };

  // On load
  document.addEventListener('DOMContentLoaded', () => {
    ui();
    donationForm();
    validation();
    formSubmit();    
    if (pageJson.pageNumber === pageJson.pageCount) {
      confirmation();
    }
  });
})();