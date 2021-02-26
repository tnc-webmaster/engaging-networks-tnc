"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  var root = document.documentElement; // Classes

  var activeClass = 'is-active';
  var advocacyShareClass = 'advocacy-share-bar-block';
  var errorBoxClass = 'error-box';
  var paypalSelectedClass = 'paypal-selected';
  var photoInfoClass = 'photo-info';
  var popoverClass = 'popover';
  var popoverContainerClass = 'popover-container';
  var validClass = 'is-active';
  var validationFailedClass = 'en__field--validationFailed'; // Selectors

  var ccNumberFieldSelector = '.en__field--ccnumber';
  var ccNumberInputSelector = '#en__field_transaction_ccnumber';
  var dateInputSelector = '.en__field[class*="date"] .en__field__input--text, .en__field--888858 .en__field__input--text';
  var donationAmountSelector = '.en__field--donationAmt .en__field__element--text';
  var enFieldSelector = '.en__field';
  var enFieldItemSelector = '.en__field__item';
  var otherAmountSelector = '.en__field--donationAmt .en__field__item--other';
  var otherAmountInputSelector = '.en__field__input--other';
  var paymentMethodSelector = '[class*="en__field--payment-method"]';
  var paymentMethodRadioSelector = '[class*="en__field--payment-method"].en__field--radio';
  var paymentTypeSelector = '[name="transaction.paymenttype"]';
  var paypalInputSelector = '.en__field--payment-method-paypal .en__field__input--checkbox';
  var supporterEmailAddressSelector = '#en__field_supporter_emailAddress';
  var supporterStateSelector = '#en__field_supporter_region';
  var supporterZipCodeSelector = '#en__field_supporter_postcode';
  var tipJarSelector = '.en__field--tip-jar';
  var totalAmountSelector = '.js-total-gift'; // Elements

  var theForm = document.querySelector('.en__component--page');
  var calculatedDonationAmountInput = theForm.querySelector('[name="supporter.NOT_TAGGED_9"]'); // Widgets

  var cleave = null; // Constants

  var tipJarPct = 0.03;
  /**
  * Form interface enhancements
  */

  var ui = function ui() {
    var el = null;
    var els = null;
    var _parent = null; // Set the value of choices when autofill is detected

    var handleChoicesChange = function handleChoicesChange(choices, e) {
      choices.setValue([{
        value: e.target.value,
        label: e.target.querySelector('option[value="' + e.target.value + '"]').textContent
      }]);
      resetSelect(choices);
    }; // choices.js removes <options> form the native select
    // Restoring the <options> allows choices.js to work with browser autofill


    var resetSelect = function resetSelect(choices) {
      var selectOne = choices.passedElement.element;
      var selectValue = selectOne.value;
      var html = '';
      var index = 1; // Clear the native select

      selectOne.innerHTML = ''; // Re-add all <options> to native select

      getAll('.choices__item', choices.choiceList.element).forEach(function (el) {
        var choiceSelected = el.dataset.value === selectValue ? true : false;
        var opt = document.createElement('option');
        opt.value = el.dataset.value;
        opt.text = el.textContent;
        opt.selected = choiceSelected;
        selectOne.add(opt, null);
      }); // Listen for an autofill (change event)

      selectOne.removeEventListener('change', handleChoicesChange.bind(null, choices), false);
      selectOne.addEventListener('change', handleChoicesChange.bind(null, choices), false);
    }; // Initiate choices.js


    getAll('select').forEach(function (el) {
      choices = new Choices(el, {
        silent: true,
        itemSelectText: '',
        callbackOnInit: function callbackOnInit() {
          resetSelect(this);
        }
      });
    }); // Is there a full bleed hero?

    addClass(theForm, maybeHasHero()); // Is there a processing error?

    els = getAll('.en__errorHeader, .en__errorList');

    if (els.length > 0 && !isEmpty(theForm.querySelector('.en__errorList'))) {
      wrapAll(els, 'div', errorBoxClass);
    } // Advocacy share text and share buttons blocks need to be wrapped for layout


    els = getAll('.advocacy-share-bar, .advocacy-share-bar + .en__component--socialshareblock');

    if (els.length > 0) {
      wrapAll(els, 'div', advocacyShareClass);
    } // Placeholders for some inputs


    getAll(otherAmountInputSelector).forEach(function (el) {
      var fieldItem = getClosestEl(el, enFieldItemSelector);

      if (fieldItem) {
        addPlaceholder(el, fieldItem.previousElementSibling.querySelector('label').textContent);
      }
    }); // Hardcode placeholder for date fields

    getAll(dateInputSelector).forEach(function (el) {
      addPlaceholder(el, 'Select Date');
    }); // Convert URL strings to images for dummy select ecard radios

    el = theForm.querySelector('.en__field--ecard-select-an-ecard');

    if (el) {
      getAll('.en__field__label--item', el).forEach(function (el) {
        createImgFromUrl(el.textContent, el);
      });
    } // Add inputmode attribute for currency fields


    getAll('[name*="Amt"], [name*="amt"]').forEach(function (el) {
      el.setAttribute('inputmode', 'decimal');
    }); // Add inputmode attribute for credit card fields

    getAll('[name*="ccnumber"], [name*="ccvv"]').forEach(function (el) {
      el.setAttribute('inputmode', 'numeric');
    }); // Display minimum donation amount

    el = theForm.querySelector(donationAmountSelector) || theForm.querySelector(otherAmountSelector);

    if (el) {
      var minAmountValidator = EngagingNetworks.validators.filter(function (obj) {
        if (obj.format) {
          return obj.format.indexOf('~') > -1;
        }

        return false;
      });

      if (minAmountValidator[0]) {
        // Add paragraph with min amount underneath Other Amount field
        addEl(el, 'p', '$' + minAmountValidator[0].format.split('~')[0] + ' minimum');
      }
    } // The upsell amount is in a hidden untaggged field that updates according to form dependencies
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
    } // Other amount field is always visible, so the corresponding radio need to be button clicked here even though hidden


    el = theForm.querySelector('.en__field__input--other');

    if (el) {
      el.addEventListener('focus', function (e) {
        var otherRadio = e.target.closest('.en__field__item').previousElementSibling.querySelector('.en__field__input--radio');

        if (otherRadio) {
          otherRadio.click();
        }
      }); // Changing donation amount needs to trigger a change for calculated donation amount
      //if (calculatedDonationAmountInput) {        
      //  el.addEventListener('change', e => {
      //    setTimeout(() => {
      //      triggerEvent(calculatedDonationAmountInput, 'change');
      //    }, 100);
      //  });
      //}
    } // Paypal checkbox needs to hide credit card blocks


    el = theForm.querySelector(paypalInputSelector);
    _parent = theForm.querySelector(paymentMethodSelector);

    if (el && _parent) {
      el.addEventListener('click', function (e) {
        _parent = getClosestEl(_parent, '.en__component--formblock');

        if (e.target.checked) {
          addClass(_parent, paypalSelectedClass);
        } else {
          removeClass(_parent, paypalSelectedClass);
        }
      });
    } // Provide credit card type feedback


    el = theForm.querySelector(ccNumberInputSelector);

    if (el) {
      cleave = new Cleave(ccNumberInputSelector, {
        creditCard: true,
        onCreditCardTypeChanged: function onCreditCardTypeChanged(type) {
          var ccField = theForm.querySelector(ccNumberFieldSelector);
          updatePaymentType(type);

          if (ccField) {
            removeClass(ccField, ['amex', 'mastercard', 'visa', 'diners', 'discover', 'jcb', 'dankort', 'instapayment', 'uatp', 'mir', 'unionPay', 'unknown']);
            addClass(ccField, type);
          }
        }
      });
    } // Switching between Check and CC payment methods loses the value for payment type


    el = theForm.querySelector(paymentMethodRadioSelector);

    if (el && cleave) {
      el = el.querySelector('.en__field__input--radio[value="CC"]');

      if (el) {
        el.addEventListener('click', function (e) {
          updatePaymentType(cleave.properties.creditCardType);
        });
      }
    } // Active state for field containers


    getAll('.en__field__input').forEach(function (el) {
      el.addEventListener('focus', activateField);
      el.addEventListener('blur', deactivateField);
    }); // Init datepickers

    var datepickers = [].slice.call(document.querySelectorAll(dateInputSelector));
    var datepickersList = datepickers.map(function (el) {
      var today = new Date();
      var maxDate = new Date(today); // Restrict date selection to one year out

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
        todayHighlight: false
      });
    }); // Each photo in hero and sidebar elements needs description and meta info popover

    getAll('.en__component--imageblock').forEach(function (el) {
      createImgTooltip(el);
    }); // Create popovers elements

    if (typeof popoverTranslations !== 'undefined') {
      popoverTranslations.forEach(function (translation) {
        createPopover(translation.field, translation.placement, translation[pageJson.locale].label, translation[pageJson.locale].text);
      });
    } //Init popovers


    var popoverTriggerList = [].slice.call(theForm.querySelectorAll('.popover-container [data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl, {
        boundry: theForm,
        container: '.popover-container',
        html: true,
        placement: 'bottom',
        fallbackPlacements: ['bottom', 'top'],
        template: '<div class="popover" role="tooltip"><div class="popover-control"><a class="popover-close" role="button" aria-label="close popover" onclick="closePopover(); return false;"></a></div><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: 'click',
        sanitize: false
      });
    }); // Workaround for not being able to set popover position explicity

    var _loop = function _loop(i) {
      var _index = i;
      var _root = root;
      popoverTriggerList[i].addEventListener('shown.bs.popover', function (e) {
        _root.style.setProperty('--popperTranslateX', popoverList[_index]._popper.state.styles.popper.transform.match(/\d*\.?\d+(?:px)?/gi)[0]);

        _root.style.setProperty('--popperTranslateY', popoverList[_index]._popper.state.styles.popper.transform.match(/\d*\.?\d+(?:px)?/gi)[1]);
      });
    };

    for (var i = 0; i < popoverTriggerList.length; i++) {
      _loop(i);
    } // Close popovers with button


    var closePopover = function closePopover() {
      for (var i = 0; i < popoverList.length; i++) {
        popoverList[i].hide();
      }
    }; // Globalize for inline onclick


    window.closePopover = closePopover;
  };

  var donationForm = function donationForm() {
    var donationAmt = theForm.querySelector('.en__field--donationAmt');
    var donationAmtRadios = null;
    var otherAmountInput = theForm.querySelector(otherAmountInputSelector);
    var tipJar = theForm.querySelector('.en__field--tip-jar');
    var tipJarCheckbox = void 0;

    var increaseDonationAmounts = function increaseDonationAmounts() {
      if (otherAmountInput) {
        if (otherAmountInput.value !== '') {
          otherAmountInput.dataset.tipjar = getTipJar(otherAmountInput.value);
          return;
        }
      }

      getAll('.en__field__input--radio:not([value=""])', donationAmt).forEach(function (el) {
        if (!el.dataset.original) {
          el.dataset.original = el.value;
        }

        el.value = getTipJar(el.value);
      });
    };

    var restoreDonationAmounts = function restoreDonationAmounts() {
      getAll('.en__field__input--radio:not([value=""])', donationAmt).forEach(function (el) {
        el.value = el.dataset.original;
      });
    };

    var updateDonationAmounts = function updateDonationAmounts(el, fieldType) {
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
          tipJarCheckbox.addEventListener('click', function (e) {
            updateDonationAmounts(e.target);
          });

          if (tipJarCheckbox.checked) {
            updateDonationAmounts(tipJarCheckbox);
          }

          donationAmtRadios.forEach(function (el) {
            el.addEventListener('click', function (e) {
              updateTotalGift(tipJarCheckbox.checked ? e.target.value : getTipJar(getOriginalDonationAmount()));
            });
          });

          if (otherAmountInput) {
            otherAmountInput.addEventListener('input', function (e) {
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


  var validation = function validation() {
    var setValidation = function setValidation(el) {
      var field = el.closest('.en__field'); // Hide/display error formatting

      if (el.validity.valid) {
        addClass(el, validClass);
        removeClass(field, validationFailedClass);
      } else {
        removeClass(el, validClass);
        addClass(field, validationFailedClass);
      }
    };

    var handleInput = function handleInput(e) {
      e.preventDefault();
      setValidation(e.target);
    };

    var handleChange = function handleChange(e) {
      e.preventDefault();
      setValidation(e.target);
    }; // Set validation patterns


    getAll('.en__mandatory .en__field__input').forEach(function (el) {
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
      } // Don't display browser error messages


      el.addEventListener('oninvalid', function (e) {
        e.preventDefault();
      }); // No browser form validation

      theForm.setAttribute('novalidate', true); // Allow form submit with invalid fields

      theForm.addEventListener('submit', function (e) {
        e.preventDefault();
      });
    }); // Processing error don't always trigger a reload

    var errorList = theForm.querySelector('.en__errorList');

    if (errorList) {
      var mutationCallback = function mutationCallback(mutationsList, observer) {
        for (var i = 0; i < mutationsList.length; i++) {
          if (mutationsList[i].addedNodes.length > 0) {
            formatError(mutationsList[i].addedNodes[0]);
            addClass(errorList, errorBoxClass);
            scrollToEl(errorList);
          } else {
            removeClass(errorList, errorBoxClass);
          }
        }
      };

      var errorObserver = new MutationObserver(mutationCallback);
      errorObserver.observe(errorList, {
        attributes: false,
        childList: true,
        subtree: false
      });
    }
  };
  /**
  * Form submit enhancements
  */


  var formSubmit = function formSubmit() {
    var submitButton = theForm.querySelector('.en__submit button');
    var otherAmountInput = theForm.querySelector(otherAmountInputSelector);
    var otherAmountOriginal = null;

    if (submitButton) {
      submitButton.addEventListener('click', function (e) {
        if (otherAmountInput) {
          if (otherAmountInput.value !== '') {
            otherAmountOriginal = otherAmountInput.value;
            otherAmountInput.value = otherAmountInput.dataset.tipjar ? otherAmountInput.dataset.tipjar : otherAmountInput.value;
          }
        }
      });
    }

    theForm.addEventListener('submit', function (e) {
      var tipJar = theForm.querySelector('.en__field--tip-jar');
      var extraAmount = 0;
      var donationData = {};

      if (tipJar) {
        if (tipJar.querySelector('.en__field__input--checkbox').checked) {
          var errorList = theForm.querySelector('.en__errorList');
          var invalidFields = getAll('.en__field--validationFailed');
          var totalDonationAmount = getTotalDonationAmount();
          var originalDonationAmount = otherAmountOriginal || getOriginalDonationAmount();
          var formIsValid = true; // Looking for form errors

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
      } // Save non-pageJson date for data layer on confirmation page


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


  var confirmation = function confirmation() {
    var donationData = sessionStorage.getItem('donationData');

    if (donationData) {
      donationData = JSON.parse(donationData);
    }
  };
  /**
   * Adds active class to element
   *
   * @param {node} el The element to add class to
   */


  var activateField = function activateField(el) {
    addClass((el.target || el).parentElement, activeClass);
  };
  /**
   * Adds a specified class
   *
   * @param {node} el Node to add class to
   * @param {Array || string} cls Classes to add
   */


  var addClass = function addClass(el, _classes) {
    if (Array.isArray(_classes)) {
      var _el$classList;

      (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(_classes));
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


  var addEl = function addEl(parentEl, elType, textContent) {
    var el = document.createElement(elType);
    el.textContent = textContent;
    parentEl.append(el);
  };
  /**
   * Adds placeholder attribute
   *
   * @param {node} el The field to add placeholder to
   * @param {string} textContent Placeholder value
   */


  var addPlaceholder = function addPlaceholder(el, textContent) {
    el.setAttribute('placeholder', textContent);
  };
  /**
   * Clears all classes
   *
   * @param {node} el Node to clear classes from
   */


  var clearClass = function clearClass(el) {
    return el.className = '';
  };
  /**
  * Creates image element from a url string
  *
  * @param {string} url The URL to the image
  * @param {node} el Node to append image to
  */


  var createImgFromUrl = function createImgFromUrl(url, el) {
    var newImg = new Image();
    newImg.src = url;
    el.appendChild(newImg); //el.textContent = '';
  };
  /**
  * Creates tooltip element for images
  *
  * @param {node} el The image block to create the tooltip for
  */


  var createImgTooltip = function createImgTooltip(el) {
    var img = el.querySelector('img');
    var tooltipContent = img.getAttribute('alt');

    if (tooltipContent !== '' && tooltipContent !== 'null') {
      var tooltip = document.createElement('a');
      addClass(tooltip, photoInfoClass);
      setAttributes(tooltip, {
        'title': tooltipContent,
        'data-bs-toggle': 'tooltip',
        'tabindex': '0',
        'aria-hidden': 'true'
      });
      el.appendChild(tooltip);
      var imageTooltip = new bootstrap.Tooltip(tooltip, {
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


  var createPopover = function createPopover(fieldSelector, placement, label, txt) {
    var field = theForm.querySelector('.' + fieldSelector);

    if (field) {
      var popoverContainer = document.createElement('p');
      addClass(popoverContainer, popoverContainerClass);
      var popover = document.createElement('a');
      setAttributes(popover, {
        'data-bs-content': txt,
        'data-bs-toggle': 'popover',
        'role': 'button',
        'tabindex': '0'
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


  var deactivateField = function deactivateField(el) {
    removeClass((el.target || el).parentElement, activeClass);
  };
  /**
  * Splits error text blob into sentences.
  *
  * @param {node} el Element containing the error content
  */


  var formatError = function formatError(el) {
    var sentences = el.textContent.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|');
    el.textContent = '';
    sentences.forEach(function (sentence) {
      addEl(el, 'p', sentence);
    });
  };
  /**
   * Returns NodeList.
   *
   * @param {string} selectors One or more selectors to match against.
   * @param {node} root The node to select over
   */


  var getAll = function getAll(selector) {
    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return Array.prototype.slice.call(root.querySelectorAll(selector), 0);
  };
  /**
   * Returns Closest element up tree that matches selector
   *
   * @param {node} el Child node.
   * @param {string} selector Selector for parent
   */


  var getClosestEl = function getClosestEl(el, selector) {
    if (el) {
      var closestNode = el.closest(selector);
      return closestNode ? closestNode : null;
    }
  };
  /**
   * Returns Donation amount without upsell fee or null
   */


  var getOriginalDonationAmount = function getOriginalDonationAmount() {
    var selectedAmount = theForm.querySelector('[name="transaction.donationAmt"]:not([value=""]):checked') || theForm.querySelector(otherAmountInputSelector);
    return selectedAmount ? selectedAmount.dataset.original ? selectedAmount.dataset.original : selectedAmount.value : null;
  };
  /**
   * Returns Donation amount with tip jar added
   *
   * @param {string} amt Daontion amount to add tip to
   */


  var getTipJar = function getTipJar(amt) {
    return !isNaN(amt) ? (parseFloat(amt) + parseFloat(amt) * tipJarPct).toFixed(2) : '';
  };
  /**
   * Returns Donation amount with or without upsell fee or null
   */


  var getTotalDonationAmount = function getTotalDonationAmount() {
    var selectedAmount = theForm.querySelector('[name="transaction.donationAmt"]:not([value=""]):checked') || theForm.querySelector(otherAmountInputSelector);
    return selectedAmount ? selectedAmount.value : null;
  };
  /**
   * Returns Element has specified class
   *
   * @param {node} el Node to check
   * @param {string} cls Class to check for
   */


  var hasClass = function hasClass(el, cls) {
    return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  };
  /**
   * Returns True if element is empty or has only whitespace.
   *
   * @param {node} el Element to check if empty.
   * @returns {boolean} If element is empty or has only whitespace
   */


  var isEmpty = function isEmpty(el) {
    return el.innerHTML.replace(/^\s*/, '').replace(/\s*$/, '') === '';
  };
  /**
  * Returns Class for form element.
  *
  * @returns {string} Class for form element
  */


  var maybeHasHero = function maybeHasHero() {
    return theForm.querySelector('.hero-full-bleed') ? 'has-hero' : 'not-has-hero';
  };
  /**
   * Removes multiple attributes
   *
   * @param {node} el The field to remove attributes from
   * @param {object} attrs Attributes to remove
   */


  var removeAttributes = function removeAttributes(el) {
    for (var _len = arguments.length, attrs = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      attrs[_key - 1] = arguments[_key];
    }

    attrs.forEach(function (attr) {
      return el.removeAttribute(attr);
    });
  };
  /**
  * Remove a specified class
  *
  * @param {node} el Node to clear class from
  * @param {Array || string} cls Class to remove
  */


  var removeClass = function removeClass(el, _classes) {
    if (Array.isArray(_classes)) {
      var _el$classList2;

      (_el$classList2 = el.classList).remove.apply(_el$classList2, _toConsumableArray(_classes));
    } else {
      el.classList.remove(_classes);
    }
  };
  /**
   * Scrolls to element on page
   *
   * @param {node} el Element to scroll to
   */


  var scrollToEl = function scrollToEl(el) {
    el.scrollIntoView({
      behavior: 'smooth'
    });
  };
  /**
   * Adds multiple attributes
   *
   * @param {Node} el The field to add attributes to
   * @param {object} attrs Attributes to add
   */


  var setAttributes = function setAttributes(el, attrs) {
    Object.keys(attrs).forEach(function (attr) {
      el.setAttribute(attr, attrs[attr]);
    });
  };
  /**
   * Returns str with no spaces
   *
   * @param {sting} str String to strip spaces from
   */


  var stripSpaces = function stripSpaces(str) {
    return str.replace(/\s/g, '');
  };
  /**
   * Triggers an event
   *
   * @param {node} el Target element
   * @param {string} evt Type of event
   */


  var triggerEvent = function triggerEvent(el, evt) {
    el.dispatchEvent(new Event(evt));
  };
  /**
  * Updates payment method hidden field
  *
  * @param {string} ccType CC type returned from cleave
  */


  var updatePaymentType = function updatePaymentType(ccType) {
    var paymentType = theForm.querySelector(paymentTypeSelector);
    var paymentTypeCode = '';

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


  var updateTotalGift = function updateTotalGift(amt) {
    getAll(totalAmountSelector).forEach(function (el) {
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


  var wrapAll = function wrapAll(nodes, wrapperType, wrapperClass) {
    var parent = nodes[0].parentNode;
    var previousSibling = nodes[0].previousSibling;
    var wrapper = document.createElement(wrapperType);

    if (wrapperClass) {
      addClass(wrapper, wrapperClass);
    }

    for (var i = 0; nodes.length - i; wrapper.firstChild === nodes[0] && i++) {
      wrapper.appendChild(nodes[i]);
    }

    var nextSibling = previousSibling ? previousSibling.nextSibling : parent.firstChild;
    parent.insertBefore(wrapper, nextSibling);
    return wrapper;
  }; // On load


  document.addEventListener('DOMContentLoaded', function () {
    ui();
    donationForm();
    validation();
    formSubmit();

    if (pageJson.pageNumber === pageJson.pageCount) {
      confirmation();
    }
  });
})();
