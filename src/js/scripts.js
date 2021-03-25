(function() {
  let root = document.documentElement;
  let body = document.body;
  const ecardRedirect = document.querySelector('a[data-campaign-id]');
  const seamlessEcardBlock = document.querySelector('.seamless-ecard');

  // Classes
  const activeClass = 'is-active';
  const advocacyShareClass = 'advocacy-share-bar-block';
  const collapseShowClass = 'show';
  const disabledClass = 'disabled';
  const displayClass = 'd-block';
  const errorBoxClass = 'error-box';
  const hiddenClass = 'd-none';
  const paypalSelectedClass = 'paypal-selected';
  const photoInfoClass = 'photo-info';
  const popoverClass = 'popover';
  const popoverContainerClass = 'popover-container';
  const validClass = 'is-active';
  const validationFailedClass = 'en__field--validationFailed';
  const visuallyHiddenClass = 'visually-hidden';

  // Selectors
  const ccNumberFieldSelector = '.en__field--ccnumber';
  const ccNumberInputSelector = '#en__field_transaction_ccnumber';
  const countrySelect = '#en__field_supporter_country';
  const dateInputSelector = '.en__field[class*="date"] .en__field__input--text, .en__field--888858 .en__field__input--text';
  const donationAmountSelector = '.en__field--donationAmt .en__field__element--text';
  const ecardFieldsSelector = '.ecard-fields';
  const ecardSelectSelector = '.ecard-select';
  const errorSelector = '.en__field__error';
  const enFieldSelector = '.en__field';
  const enFieldItemSelector = '.en__field__item';
  const giftDesignationSelect = '#en__field_transaction_dirgift';  
  const informCountrySelect = '#en__field_transaction_infcountry';
  const informStateProvinceSelect = '#en__field_transaction_infreg';
  const otherAmountSelector = '.en__field--donationAmt .en__field__item--other';
  const otherAmountInputSelector = '.en__field--donationAmt .en__field__input--other';
  const paymentMethodSelector = '[class*="en__field--payment-method"]';
  const paymentMethodRadioSelector = '[class*="en__field--payment-method"].en__field--radio';
  const paymentTypeSelector = '[name="transaction.paymenttype"]';
  const paypalInputSelector = '.en__field--payment-method-paypal .en__field__input--checkbox';
  const stateProvinceSelect = '#en__field_supporter_region';
  const supporterEmailAddressSelector = '#en__field_supporter_emailAddress';
  const supporterStateSelector = '#en__field_supporter_region';
  const supporterZipCodeSelector = '#en__field_supporter_postcode';
  const tipJarSelector = '.en__field--tip-jar';
  const tipJarAmountSelector = '.js-total-gift--tipjar';
  const tipJarToggle = '.tip-jar-toggle';
  const totalAmountSelector = '.js-total-gift';

  // Elements
  const theForm = document.querySelector('.en__component--page');
  
  // Masks
  let otherAmountMask = null;

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
    let wrap = null;
    let stateProvinceChoices;
    let informStateProvinceChoices;
    let currentChoices;

    /**
     * Set the value of choices when autofill is detected
     *
     * @param {choices} choices choices.js instance to set value for
     * @param {event} e
     */
    const handleChoicesChange = e => {
      const _target = e.target;

      _target.choices.setValue([
        {
          value: _target.value,
          label: _target.querySelector(`option[value="${_target.value}"]`).textContent,
        }
      ]);
      resetSelect(_target.choices, e);
    };

    /**
    * choices.js removes <options> form the native select
    * Restoring the <options> allows choices.js to work with browser autofill
    *
    * @param {choices} choices choices.js instance to restore options to
    */

    const resetSelect = (_choices, e) => {
      const selectOne = _choices.passedElement.element;
      const selectValue = selectOne.value;
      let html = '';
      let index = 1;
      
      // Only do this for state selects
      if (_choices._baseId.indexOf('region') > -1) {
        // Clear the native select
        selectOne.innerHTML = '';      
        //Remove the duplicate that this method generates at bottom of list
        if (e) {
          _choices.choiceList.element.removeChild(_choices.choiceList.element.lastChild);                      
        }
        // Re-add all <options> to native select
        getAll('.choices__item', _choices.choiceList.element).forEach(el => {
          let choiceSelected = el.dataset.value === selectValue ? true : false;
          let opt = document.createElement('option');

          opt.value = el.dataset.value;
          opt.text = el.textContent;
          opt.selected = choiceSelected;
          selectOne.add(opt, null);
        });
        currentChoices = _choices;
        selectOne.choices = _choices;
        // Listen for an autofill (change event)
        selectOne.removeEventListener('change', handleChoicesChange);
        selectOne.addEventListener('change', handleChoicesChange);        
      }
    };

    /**
    * Creates choices.js instance
    *
    * @param {node} el Target to apply choices to
    */
    const createChoices = el => {
      return new Choices(el, {
        silent: true,
        duplicateItemsAllowed: false,
        itemSelectText: '',
        shouldSort: false,
        callbackOnInit: function() {
          const _choices = this;
          const label = theForm.querySelector('label[for="' + _choices.passedElement.element.id + '"]');

          _choices.enable();
          if (label) {
            _choices.containerOuter.element.setAttribute('aria-label', label.textContent);
            _choices.choiceList.element.setAttribute('aria-label', 'Select ' + label.textContent.replace(/Select/, ''));
          }
          getAll('[role="textbox"]', _choices.containerOuter.element).forEach(el => {
            el.removeAttribute('role');
          });
          resetSelect(_choices, null);
        },
      });
    };

    /**
    * Destroys a choices.js instance
    *
    * @param {choices} choices choices.js instance to destroy
    */
    const destroyChoices = (_choices, selector) => {
      _choices.clearInput();
      _choices.destroy();
      _choices = null;
    };

    // Add body classes
    if (document.querySelector('.quiz')) {
      addClass(body, 'page--quiz');
    } else if (pageJson.pageCount === pageJson.pageNumber) {
      addClass(body, 'page--confirmation');
    }

    // Set width of full bleed elements
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
    getAll('.page--quiz .en__component--advrow, .hero-full-bleed').forEach(el => {
      el.style.width = `calc(100vw - ${scrollbarWidth}px)`;
      el.style.marginLeft = `calc(-50vw + ${scrollbarWidth / 2}px)`;
    });
    // Dont forget pseudo elements
    root.style.setProperty('--scrollbarWidth', `${scrollbarWidth}px`);

    // Initiate choices.js
    getAll('select:not(' +  stateProvinceSelect + '):not(' +  informStateProvinceSelect + '):not(' +  giftDesignationSelect + ')').forEach(el => {
      createChoices(el);
    });
    
    // Structure modals
    els = getAll('.modal-header, .modal-body, .modal-footer');
    if (els.length > 0) {
      wrapAll(els, 'div', 'modal-content');
    }
    getAll('.modal-content').forEach(el => {
      wrapEl(el, 'div', ['modal-dialog', 'modal-lg']);
    });    
                  
    getAll('.modal').forEach(el => {
      // Add attributes
      setAttributes(el, {
        'data-bs-backdrop': 'static',
        'data-bs-keyboard': 'false',
        'data-bs-dismiss': 'false',
        'tabindex': '-1',
        'aria-labelledby': 'modalTitle',
        'aria-hidden': 'true',
      });

      // Move modals to end of main form
      theForm.append(el);
    });

    // Allow EN swap lists for billing state/province field
    el = theForm.querySelector(stateProvinceSelect);
    if (el) {
      stateProvinceChoices = createChoices(el);
    }

    // Allow EN swap lists on country field change
    el = theForm.querySelector(countrySelect);
    if (el) {
      if (stateProvinceChoices) {
        el.addEventListener('change', e => {
          // Rebuild state/province choices
          destroyChoices(stateProvinceChoices);
          setTimeout( function () {
            stateProvinceChoices = createChoices(theForm.querySelector(stateProvinceSelect));
          }, 100);
        });
      }
    }

    // Allow EN swap lists for person to be notified state/province field
    el = theForm.querySelector(informStateProvinceSelect);
    if (el) {
      informStateProvinceChoices = createChoices(el);
    }

    // Allow EN swap lists on person to be notified country field change
    el = theForm.querySelector(informCountrySelect);
    if (el) {
      if (informStateProvinceChoices) {
        el.addEventListener('change', e => {
          // Rebuild state/province choices
          destroyChoices(informStateProvinceChoices);
          setTimeout( function () {
            informStateProvinceChoices = createChoices(theForm.querySelector(informStateProvinceSelect));
          }, 100);
        });
      }
    }

    // Allow EN swap value for gift designation field
    el = theForm.querySelector(giftDesignationSelect);
    if (el) {
      giftDesignationChoices = createChoices(el);

      getAll('.en__field--gift-designation-managed-donors-yn .en__field__input--radio').forEach(el => {
        if (giftDesignationChoices) {
          el.addEventListener('click', e => {
            // Rebuild gift designation choices
            destroyChoices(giftDesignationChoices);
            setTimeout( function () {
              giftDesignationChoices = createChoices(theForm.querySelector(giftDesignationSelect));
            }, 100);
          });
        }
      });
    }

    // Is there a full bleed hero?
    addClass(document.body, maybeHasHero());

    // Is there a solid color hero?
    addClass(document.body, maybeHasHeroSolid());

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

    // Missing Other Amount label
    el = theForm.querySelector(otherAmountInputSelector);
    _parent = theForm.querySelector(otherAmountSelector);
    if (el && _parent) {
      placeholderToLabel(el, _parent);
    }

    // Missing CC expiration year label
    el = theForm.querySelector('.en__field--ccexpire.en__field--splitselect .en__field__item:last-child .en__field__input--splitselect');
    _parent = theForm.querySelector('.en__field--ccexpire.en__field--splitselect .en__field__item:last-child');
    if (el && _parent) {
     addLabel(el, el.parentElement, 'Credit card expiration year').then(labelId => {
       const _parent = theForm.querySelector('.en__field--ccexpire.en__field--splitselect .en__field__item:last-child');

       getAll('[role="combobox"], [role="listbox"]', _parent).forEach(el => {
          el.setAttribute('aria-labelledby', labelId);
       });
     });
    }
    
    // Wrap event ticket selector
    getAll('.en__ticket__selector').forEach(el => {
      els = getAll('.en__ticket__minus, .en__ticket__quantity, .en__ticket__plus', el);
      if (els.length > 0) {
        wrapAll(els, 'div', 'input-group');
      }      
    });

    // Move additional donation fields
    els = getAll('.en__additional__label, .en__additional__amount');
    _parent = theForm.querySelector('.form-heading--additional');
    if (els.length > 0 && _parent) {
      wrap = wrapAll(els, 'div', 'd-flex');
      _parent.append(wrap);
    }

    // Move promo code field
    el = theForm.querySelector('.en__additional__promo');
    _parent = theForm.querySelector('.form-heading--promo');
    if (el && _parent) {
      _parent.append(el);
    }

    // Aria role for radio groups
    getAll('.en__field--radio').forEach(el => {
      let labelId;

      el.setAttribute('role', 'radiogroup');
      if (hasClass(el, 'en__field--donationAmt')) {
        el.setAttribute('aria-labelledby', 'giftAmountLabel');
      } else {
        addAriaLabelledBy(el);
      }
    });

    // Aria role for split selects
    getAll('.en__field--splitselect').forEach(el => {
      el.setAttribute('role', 'group');
      addAriaLabelledBy(el);
    });

    // Convert URL strings to images for dummy select ecard radios
    el = theForm.querySelector('.en__field--ecard-select-an-ecard');
    if (el) {
      getAll('.en__field__label--item', el).forEach(el => {
        createImgFromUrl(el.textContent, el);
      });
    }

    // Add mask and inputmode attribute for currency fields
    getAll('[name*="Amt"]:not([name*="Amt2"]:not([name*="Amt3"]:not([name*="Amt4"]), [name*="amt"]:not([name*="amt2"]):not([name*="amt3"]):not([name*="amt4"])').forEach(el => {
      otherAmountMask = el.setAttribute('inputmode', 'decimal');
      IMask(el, {
        mask: 'num',
        blocks: {
          num: {
            mask: Number,
            thousandsSeparator: '',
            padFractionalZeros: true,
            radix: '.'
          }
        }
      });      
    });

    // Add inputmode attribute for credit card fields
    getAll('[name*="ccnumber"], [name*="ccvv"]').forEach(el => {
      el.setAttribute('inputmode', 'numeric');
    });

    // Display minimum donation amount
    el = theForm.querySelector(donationAmountSelector) || theForm.querySelector(otherAmountSelector);
    if (el) {
      // Getting the minimum amount from the EN validator
      const minAmountValidator = EngagingNetworks.validators.filter(obj => {
        if (obj.format) {
          return obj.format.indexOf('~') > -1;
        }
        return false;
      });
      if (minAmountValidator[0]) {
        // Add paragraph with min amount underneath Other Amount field
        addEl(el, 'p', '$' + minAmountValidator[0].format.split('~')[0] + ' minimum', 'fw-medium');
      }
    }

    // Display tip jar amount
    el = theForm.querySelector(tipJarSelector);
    if (el) {
      updateTipJar(getTipJar(getOriginalDonationAmount()));
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
    }

    // Reposition help text found in labels
    getAll('.field__help').forEach(el => {
      getClosestEl(el, enFieldSelector).append(el);
    });

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
      maxDate.setDate(maxDate.getDate() + 90);

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

    // Add inputmode attribute for date fields to prevent mobile keyboard
    getAll('.datepicker-input').forEach(el => {
      el.setAttribute('inputmode', 'none');
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

    // Init accordions
    getAll('.accordion').forEach(accordion => {
      getAll('.accordion-button').forEach(el => {
        el.addEventListener('click', e => {
          setTimeout(function() {
            addAriaCollapsedAttr(document.getElementById(e.target.dataset.bsTarget.replace(/#/, '')), getAll('.accordion-collapse', accordion));
          }, 500);
        });
      });
    });

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

  /**
  * Donation form enhancements
  */
  const donationForm = () => {
    const donationAmt = theForm.querySelector('.en__field--donationAmt');
    const otherAmountInput = theForm.querySelector(otherAmountInputSelector);
    const tipJar = theForm.querySelector('.en__field--tip-jar');
    let donationAmtRadios = null;
    let tipJarCheckbox = null;
    let tipJarUserChecked = false;
     
    const disableTipJar = () => {
      restoreDonationAmounts();     
      updateTotalGift(getOriginalDonationAmount());
      addClass(tipJar, disabledClass);
    };
    
    const enableTipJar = () => {
      removeClass(tipJar, disabledClass);
    };

    const increaseDonationAmounts = () => {
      if (otherAmountInput) {
        if (otherAmountInput.value !== '') {
          otherAmountInput.dataset.tipjar = getTipJar(otherAmountInput.value);
          return;
        }
      }

      getAll('.en__field__input--radio:not([value=""])', donationAmt).forEach(el => {
        if (!el.dataset.original) {
          el.dataset.original = el.value.replace(/\,/g, '');
        }
        el.value = getTipJar(el.dataset.original).replace(/\,/g, '');
      });
    };

    const restoreDonationAmounts = () => {
      getAll('.en__field__input--radio:not([value=""])', donationAmt).forEach(el => {
        el.value = el.dataset.original ?  el.dataset.original : el.value.replace(/\,/g, '');
      });
    };

    const updateDonationAmounts = (el, fieldType) => {
      if (el.checked) {
        increaseDonationAmounts();
      } else {
        restoreDonationAmounts();
      }
    };
    
    const maybeUncheckTipJar = (amt) => {
      if (!tipJarUserChecked && !isNaN(amt)) {
        if (Number(amt) >= 1000) {
          tipJarCheckbox.checked = false;
          triggerEvent(tipJarCheckbox, 'click');
        }        
      }
    };
    
    const toggleTipJar = (el) => {
      const toggle = theForm.querySelector(tipJarToggle);

      if (toggle) {
        toggle.style.display = el.checked ? 'inline' : 'none';
      }      
    };

    if (theForm.action.indexOf('donate') > -1 && pageJson.pageNumber !== pageJson.pageCount) {
      // Donation amount
      if (donationAmt) {
        donationAmtRadios = getAll('.en__field__input--radio:not([value=""])', donationAmt);
        if (tipJar && tipJarPct) {
          tipJarCheckbox = tipJar.querySelector('.en__field__input--checkbox');
          tipJarCheckbox.addEventListener('click', e => {
            tipJarUserChecked = true;
            toggleTipJar(e.target);
            updateDonationAmounts(e.target);
            updateTotalGift(tipJarCheckbox.checked ? getTipJar(getOriginalDonationAmount()) : getOriginalDonationAmount());
          });
          toggleTipJar(tipJarCheckbox);                    
          maybeUncheckTipJar(getOriginalDonationAmount());

          if (tipJarCheckbox.checked) {
            updateDonationAmounts(tipJarCheckbox);
          }

          donationAmtRadios.forEach(el => {
            el.addEventListener('click', e => {
              maybeUncheckTipJar(getOriginalDonationAmount());
              updateTipJar(getTipJar(getOriginalDonationAmount()));
              updateTotalGift(tipJarCheckbox.checked ? getTipJar(getOriginalDonationAmount()) : e.target.value);                
            });
          });

          if (otherAmountInput) {
            otherAmountInput.addEventListener('input', e => {
              maybeUncheckTipJar(getOriginalDonationAmount());
              updateDonationAmounts(tipJarCheckbox);
              updateTipJar(getTipJar(getOriginalDonationAmount()));
              updateTotalGift(tipJarCheckbox.checked ? getTipJar(getOriginalDonationAmount()) : e.target.value);
            });
          }
        }
      }      
    }
  };

  /**
  * Quiz form enhancements
  */
  const quiz = () => {
    let score = 0;

    // Listen for validation error
    const mutationCallback = (mutationsList, observer) => {
      for (let i = 0; i < mutationsList.length; i++) {
        if (mutationsList[i].addedNodes.length > 0) {
          // Move error message to end of form
          const el = theForm.querySelector(errorSelector);

          if (el) {
            theForm.querySelector('.en__component--formblock').append(el);
          }
        }
      }
    };

    const errorObserver = new MutationObserver(mutationCallback);

    errorObserver.observe(theForm.querySelector('.en__field--survey'), {
      attributes: false,
      childList: true,
      subtree: false,
    });

    getAll('.en__field__input--radio').forEach(el => {
      el.addEventListener('click', e => {
        const _target = e.target;
        let el;

        // Clicking any answer removes error message
        el = theForm.querySelector(errorSelector);
        if (el) {
          el.remove();
        }
      });
    });
    
    const checkAnswer = () => {
      const correctAnswer = theForm.querySelector('.correct');
      const incorrectAnswer = theForm.querySelector('.incorrect');
      const selectedAnswerRadio = theForm.querySelector('.en__field__input--radio:checked');
      const correctAnswerRadio = theForm.querySelector('.en__field__input--radio[value="1"]');

      // Prevent more answer clicks
      disableFields(getAll('.en__field__input--radio'));

      if (correctAnswer && incorrectAnswer && correctAnswerRadio) {
        // Check for correct answer
        if (selectedAnswerRadio === correctAnswerRadio) {
          correctAnswer.style.display = 'inline';
        } else {
          addClass(selectedAnswerRadio.nextElementSibling, 'is-incorrect');
          incorrectAnswer.style.display = 'inline';
        }
        addClass(correctAnswerRadio.nextElementSibling, 'is-correct');
        // Show answer
        theForm.querySelector('.quiz-answer p').style.display = 'block';
        // Show next question button
        theForm.querySelector('.en__component--formblock:last-child').style.display = 'block';      
      }      
    };

    theForm.querySelector('.en__submit button[type="button"]').addEventListener('click', e => {
      const fieldError = theForm.querySelector('.en__field__error');
      
      if (theForm.querySelector('.en__field__input--radio:checked')) {
        addClass(getClosestEl(e.target, '.en__submit'), hiddenClass);
        if (fieldError) {
          removeClass(fieldError, displayClass);
          addClass(fieldError, hiddenClass);
        }
        checkAnswer();        
      } else {
        if (fieldError) {
          removeClass(fieldError, hiddenClass);
          addClass(fieldError, displayClass);
        }
      }
    });
  };
  
  /**
  * Event form enhancements
  */
  const events = () => {
    let el = null;

    /**
     * Updates total amount
     */
    const updateTotalAmount = () => {
      const additionalInput = theForm.querySelector('.en__additional__input');
      let totalAmount = 0;
      
      // Sum all tickets
      getAll('.en__ticket__quantity').forEach(el => {
        const row = getClosestEl(el, '.en__ticket');
        const price = Number(row.querySelector('.en__ticket__price').textContent);
        
        if (price !== '0') {
          totalAmount += el.value === '0' ? 0 : Number(Number(el.value) * price);          
        }
      });           
      // Include additional donation       
      if (additionalInput) {
        totalAmount += !isNaN(Number(additionalInput.value)) ? Number(additionalInput.value) : 0;
      }     
      // Display total amount
      getAll('.js-total-gift').forEach(el => {
        el.textContent = totalAmount.toFixed(2);
      });      
    };

    // Strip currency indicators
    getAll('.en__orderSummary__data--cost, .en__orderSummary__data--totalAmount').forEach(el => {
      el.textContent = el.textContent.replace(/USD/, '');
    });
    
    // Strip label colons
    getAll('.en__orderSummary__header').forEach(el => {
      el.textContent = el.textContent.replace(/\:/, '');
    });


    // Listen for additional donation    
    el = theForm.querySelector('.en__additional__input');
    if (el) {
      el.addEventListener('change', e => {
        updateTotalAmount();        
      });
    }
    
    // Listen for ticket selection
    getAll('.en__ticket__quantity').forEach(el => {
      el.addEventListener('change', e => {
        setTimeout(function() {
          updateTotalAmount();
        }, 100);        
      });      
    });    

    // Force ticket total cost update
    getAll('.en__ticket__minus, .en__ticket__plus').forEach(el => {
      const row = getClosestEl(el, '.en__ticket');
      const ticketQuantity = row.querySelector('.en__ticket__quantity');
      
      el.addEventListener('click', e => {
        triggerEvent(ticketQuantity, 'change');
      });
    });
    
    // Display total amount
    el = theForm.querySelector('.en__orderSummary__data--totalAmount'); 
    if (el) {
      getAll('.js-total-gift').forEach(el => {
        el.textContent = `$${theForm.querySelector('.en__orderSummary__data--totalAmount').textContent}`;
      });      
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
          el.setAttribute('pattern', '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-z]{2,}$');
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
      //theForm.addEventListener('submit', e => {
      //  e.preventDefault();
      //});
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
    const monthlyCheckbox = document.getElementById('en__field_transaction_recurrpay');
    const continueButton = theForm.querySelector('.btn-continue');
    const upsellButton = theForm.querySelector('.btn-upsell');
    const upsellModal = theForm.querySelector('.modal--upsell');
    const hasUpsell = monthlyCheckbox && upsellModal && upsellButton && continueButton;
    const submitButton = theForm.querySelector('.en__submit button');
    const otherAmountInput = theForm.querySelector(otherAmountInputSelector);
    let savedSubmit;
    let otherAmountOriginal = null;

    // Don't submit form on ENTER if focused on an input
    window.addEventListener('keydown', e => {
      if (e.keyIdentifier=='U+000A' || e.keyIdentifier=='Enter' || e.keyCode==13) {
        if (e.target.nodeName=='INPUT') {
          e.preventDefault();
          return false;
        }
      }
    }, true);

    const formIsValid = () => {
      const errorList = theForm.querySelector('.en__errorList');
      const invalidFields = getAll('.en__field--validationFailed');
      let valid = true;

      // Looking for form errors
      if (errorList) {
        if (errorList.textContent.trim() !== '') {
          valid = false;
        }
      }
      if (invalidFields.length > 0) {
        valid = false;
      }
      return valid;
    };
    
    const setMonthlyAmount = (amt) => {
      if (amt >= 10 && amt <= 24) {
        return 5;
      } else if (amt >= 25 && amt < 50) {
        return 10;        
      } else if (amt >= 50 && amt <= 100) {
        return 15;        
      }      
    };

    const doSubmit = () => {
      // Restore the EN form submit handler
      theForm.submit = savedSubmit;
      theForm.submit();
    };
    
    // Maybe an upsell modal
    if (hasUpsell) {
      // A valid form always wants to submit, so
      // save the EN form submit handler then remove it if the upsell modal is present      
      savedSubmit = theForm.submit;
      theForm.submit = null;
    }

    if (submitButton) {
      submitButton.addEventListener('click', e => {
        let otherAmountValue;
        const donationAmount = parseFloat(getTotalDonationAmount());

        // Set other amount field to tip jar amount if needed
        if (otherAmountInput && !getSelectedAmount()) {
          if (otherAmountInput.value !== '') {
            otherAmountOriginal = otherAmountInput.value;
            otherAmountInput.value = otherAmountInput.dataset.tipjar ? otherAmountInput.dataset.tipjar : otherAmountInput.value;
          }
          
          // Restore other amount value if validation errors
          setTimeout(function() {
            if (!formIsValid()) {
              otherAmountInput.value = otherAmountOriginal;              
            }            
          });
        }

        // Maybe display upsell modal
        if (hasUpsell && donationAmount >= 10 && donationAmount <= 100) {
          setTimeout(function() {
            if (formIsValid()) {
              if (!monthlyCheckbox.checked) {
                // Open modal
                const modal = new bootstrap.Modal(upsellModal, {
                  backdrop: 'static',
                  keyboard: false
                });
                modal.show();
                // Handle modal clicks
                upsellButton.addEventListener('click', e => {
                  monthlyCheckbox.click();
                  otherAmountInput.value = setMonthlyAmount(donationAmount);
                  doSubmit();
                });
                getAll('.btn-close, .btn-continue').forEach(el => {
                  el.addEventListener('click', e => {
                    doSubmit();
                  });                 
                });
              } else {
                doSubmit();
              }                                      
            }
          }, 100);
        }
      });
    }

    theForm.addEventListener('submit', e => {
      const tipJar = theForm.querySelector('.en__field--tip-jar');
      const ecardSelect = theForm.querySelector(ecardSelectSelector);
      const ecardFields = theForm.querySelector(ecardFieldsSelector);
      let extraAmount = 0;
      let donationData = {};
      let ecardData = {};

      const getEcardRecipients = (ecardFields) => {
        const recipientsInput = ecardFields.querySelector('.en__field__input--textarea');
        let recipientEmails;
        let validEmails = [];

        const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (recipientsInput) {
          recipientEmails = recipientsInput.value.replace(/\s/g, '').split(',');

          for (var i = 0; i < recipientEmails.length; i++) {
            if( recipientEmails[i] !== "" || regex.test(recipientEmails[i])){
              validEmails.push(recipientEmails[i]);
            }
          }
          return validEmails;
        }
        return null;
      };

      if (formIsValid()) {
        if (tipJar) {
          // Calculate extra tip jar amount for data layer
          if (tipJar.querySelector('.en__field__input--checkbox').checked) {
            const totalDonationAmount = getTotalDonationAmount();
            const originalDonationAmount = otherAmountOriginal || getOriginalDonationAmount();

            extraAmount = (totalDonationAmount - originalDonationAmount).toFixed(2);
            donationData.originalDonationAmount = originalDonationAmount;
          }
        }
        
        // Maybe save ecard fields for use on seamless ecard page
        if (ecardSelect && ecardFields) {
          if (ecardSelect.querySelector('.en__field__input--checkbox').checked) {
            ecardData.recipients = getEcardRecipients(ecardFields);
            if (ecardData.recipients.length > 0) {
              ecardData.selectEcard = ecardSelect.querySelector('.en__field__input--radio:checked').value;
              ecardData.subject = ecardFields.querySelector('.en__field__input--text').value;
              ecardData.message = ecardFields.querySelector('.en__field--ecard-message .en__field__input--textarea').value;
              ecardData.sendDate = ecardFields.querySelector('.datepicker-input').value;
              sessionStorage.setItem('ecardData', JSON.stringify(ecardData));
            }
          } else {
            sessionStorage.removeItem('ecardData');
          }
        }

        // Looking for URL tracking params to pass to data layer on confirmation page
        const trackingParams = new URLSearchParams(location.search);
        donationData.src = trackingParams.has('src') ? trackingParams.get('src') : '';
        donationData.vid = trackingParams.has('vid') ? trackingParams.get('vid') : '';
        donationData.vid2 = trackingParams.has('vid2') ? trackingParams.get('vid2') : '';

        // Save non-pageJson data for data layer on confirmation page
        donationData.extraAmount = extraAmount;
        donationData.state = theForm.querySelector(supporterStateSelector) ? theForm.querySelector(supporterStateSelector).value : '';
        donationData.zipCode = theForm.querySelector(supporterZipCodeSelector) ? theForm.querySelector(supporterZipCodeSelector).value : '';
        donationData.emailAddress = theForm.querySelector(supporterEmailAddressSelector) ? theForm.querySelector(supporterEmailAddressSelector).value : '';
        sessionStorage.setItem('donationData', JSON.stringify(donationData));
      }
    });
  };

  /**
  * Confirmation page enhancements
  */
  const confirmation = () => {
    let donationData = sessionStorage.getItem('donationData');
    const recurringStatus = theForm.querySelector('.js-recurring-status');

    if (donationData) {
      donationData = JSON.parse(donationData);
    }
    
    if (recurringStatus) {
      recurringStatus.textContent = recurringStatus.textContent === 'ACTIVE' ? 'Monthly' : 'One-time';      
    }
  };

  /**
  * Seamless ecard enhancements
  */
  const seamlessEcard = () => {
    let ecardData = sessionStorage.getItem('ecardData');

    /**
     * Adds an email address to list of ecard recipients
     *
     * @param {string} recipient The email address to add
     */
    const addEcardRecipient = recipient => {
      document.querySelector('.en__ecardrecipients__name input').value = 'My Recipient';
      document.querySelector('.en__ecardrecipients__email input').value = recipient;
      document.querySelector('.en__ecarditems__addrecipient').click();
    };

    if (ecardData) {
      ecardData = JSON.parse(ecardData);
      document.querySelector('.en__ecarditems__thumb:nth-child(' + ecardData.selectEcard + ')').click();
      document.querySelector('.en__ecardmessage__default').value = ecardData.message;
      document.querySelector('[name="ecard.schedule"]').value = ecardData.sendDate.replace(/(..).(..).(....)/, '$3-$1-$2');
      ecardData.recipients.forEach(recipient => {
        addEcardRecipient(recipient);
      });
      sessionStorage.removeItem('ecardData');
      document.querySelector('.en__submit button').click();
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
   * Adds aria-expanded attribute to collapsible elements
   *
   * @param {node} el Target element
   * @param {nodeList} collapsibles List of collapsibles in same comnponent as target
   */
  const addAriaCollapsedAttr = (el, collapsibles) => {
    if (el) {
      const isOpen = hasClass(el, collapseShowClass) ? 'true' : 'false';

      if (collapsibles.length) {
        collapsibles.forEach(collapsible => {
          collapsible.setAttribute('aria-expanded', 'false');
        });
      }
      el.setAttribute('aria-expanded', isOpen);
    }
  };


  /**
   * Adds aria-labelledby attribute to an untitled element
   *
   * @param {node} el Target element to add attribute to
   */
  const addAriaLabelledBy = el => {
    const maybeLabel = el.firstElementChild;

    if (maybeLabel.nodeName.toLowerCase() === 'label') {
      setTimeout(function() {
        labelId = 'label' + generateId();
        maybeLabel.id = labelId;
        el.setAttribute('aria-labelledby', labelId);
      }, 100);
    }
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
   * Return an element that has been added to the DOM
   *
   * @param {node} parentEl The node to add element to
   * @param {string} elType The type of element to add
   * @param {string} textContent Text to add to new element
   * @param {string} cls Class to add to new element
   */
  const addEl = (parentEl, elType, textContent, cls) => {
    let el = document.createElement(elType);

    if (cls) {
      addClass(el, cls);
    }
    el.textContent = textContent;
    parentEl.append(el);
    return el;
  };


  /**
   * Adds label with for attribute
   *
   * @param {node} el The field to associate the label with
   * @param {node} _parent Element to append label to
   * @param {string} txt Text content for label
   */
  const addLabel = (el, _parent, txt) => {
    return new Promise((resolve, reject) => {
      el.id = el.id ? el.id : el.name.replace(/\./g, '');
      label = document.createElement('label');
      label.setAttribute('for', el.id);
      label.textContent = txt;
      addClass(label, visuallyHiddenClass);
      label.id = 'label' + generateId();
      _parent.insertBefore(label, el);
      resolve(label.id);
    });
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
    
    if (img) {
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
   * Disables input elements
   *
   * @param {nodeList} fields The elements to disable
   */
  const disableFields = (fields) => {
    fields.forEach(el => {
      el.disabled = true;
    });
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
  * Returns a unique ID
  */
  const generateId = () => {
    return Math.round(new Date().getTime() + (Math.random() * 100));
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

    return selectedAmount ? (selectedAmount.dataset.original ? selectedAmount.dataset.original : selectedAmount.value.replace(/\,/g, '')) : null;
  };

  /**
   * Returns selected amount radio button or null
   */
  const getSelectedAmount = () => {
    return theForm.querySelector('[name="transaction.donationAmt"]:not([value=""]):checked');
  };

  /**
   * Returns Donation amount with tip jar added
   *
   * @param {string} amt Daontion amount to add tip to
   */
  const getTipJar = amt => {
    if (typeof amt === 'string') {
      amt = amt.replace(/\,/g, '');
      return !isNaN(amt) ? (parseFloat(amt) + (parseFloat(amt) * tipJarPct)).toFixed(2) : '';      
    }
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
  * Returns Class for form element.
  *
  * @returns {string} Class for form element
  */
  const maybeHasHeroSolid = () => {
    return theForm.querySelector('.hero-solid') ? 'has-hero-solid' : 'not-has-hero-solid';
  };

  /**
  * Creates a label from placeholder value and associates it with an input
  *
  * @param {node} el The input element before which the new label is inserted.
  * @param {node} _parent The parent of the newly inserted label.
  */
  const placeholderToLabel = (el, _parent) => {
    let label;

    if (el && _parent) {
      el.id = el.id ? el.id : el.name.replace(/\./g, '');
      label = document.createElement('label');
      label.setAttribute('for', el.id);
      label.textContent = el.getAttribute('placeholder');
      addClass(label, visuallyHiddenClass);
      _parent.insertBefore(label, el);
    }
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
  * Updates everywhere tip jar amount is displayed.
  *
  * @param {string} amt Total donation amount
  */
  const updateTipJar = amt => {
    getAll(tipJarAmountSelector).forEach(el => {
      el.textContent = !isNaN(amt) ? '$' + amt : '';
    });
  };

  /**
  * Updates everywhere donation amount is displayed.
  *
  * @param {string} amt Total donation amount
  */
  const updateTotalGift = amt => {
    getAll(totalAmountSelector).forEach(el => {
      el.textContent = !isNaN(amt) ? '$' + amt : '';
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

  /**
   * Returns wrapped node.
   *
   * @param {node} nodes The node to wrap.
   * @param {string} wrapperType The node element for the wrapper.
   * @param {string} wrapperClass The class to assign the wrapper
   * @returns Wrapped element
   */
  const wrapEl = (node, wrapperType, wrapperClass) => {
    let wrapper = document.createElement(wrapperType);
    
    if (wrapperClass) {
      addClass(wrapper, wrapperClass);
    }

    node.parentNode.insertBefore(wrapper, node);
    wrapper.appendChild(node);

    return wrapper;
  };

  // Before load
  if (ecardRedirect && sessionStorage.getItem('ecardData')) {
    ecardRedirect.click();
  }

  // On load
  document.addEventListener('DOMContentLoaded', () => {
    if (seamlessEcardBlock) {
     seamlessEcard();
    }
    ui();
    donationForm();
    if (document.querySelector('.en__component--page[action*="event"]')) {
      events();
    }
    if (hasClass(body, 'page--quiz')) {
      quiz();
    }
    if (hasClass(body, 'page--confirmation')) {
      confirmation();
    }
    validation();
    formSubmit();
  });
})();