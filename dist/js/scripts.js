"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

(function () {
  var root = document.documentElement;
  var body = document.body;
  var appealCodeRedirect = document.querySelector('a[data-campaign-id][href*="appealCode"]');
  var ecardRedirect = document.querySelector('a[data-campaign-id][href*="action"]');
  var seamlessEcardBlock = document.querySelector('.seamless-ecard'); // Classes

  var activeClass = 'is-active';
  var advocacyShareClass = 'advocacy-share-bar-block';
  var collapseShowClass = 'show';
  var disabledClass = 'disabled';
  var displayClass = 'd-block';
  var errorBoxClass = 'error-box';
  var hiddenClass = 'd-none';
  var hiddenWebOnlyClass = 'd-none--web';
  var paypalSelectedClass = 'paypal-selected';
  var photoInfoClass = 'photo-info';
  var popoverContainerClass = 'popover-container';
  var validClass = 'is-active';
  var validationFailedClass = 'en__field--validationFailed';
  var visuallyHiddenClass = 'visually-hidden'; // Selectors

  var ccExpMonthSelect = '#en__field_transaction_ccexpire';
  var ccExpYearSelect = '.en__field--ccexpire .en__field__item:last-child select';
  var ccNumberFieldSelector = '.en__field--ccnumber';
  var ccNumberInputSelector = '#en__field_transaction_ccnumber';
  var countrySelect = '#en__field_supporter_country';
  var dateInputSelector = '.en__field[class*="date"] .en__field__input--text, .en__field--888858 .en__field__input--text';
  var donationAmountSelector = '.en__field--donationAmt .en__field__element--text';
  var ecardFieldsSelector = '.ecard-fields';
  var ecardSelectSelector = '.ecard-select';
  var errorSelector = '.en__field__error';
  var enFieldSelector = '.en__field';
  var enFieldItemSelector = '.en__field__item';
  var giftDesignationSelect = '#en__field_transaction_dirgift';
  var homePhoneInputSelector = '#en__field_supporter_phoneNumber';
  var honoreeCountrySelect = '#en__field_supporter_NOT_TAGGED_38';
  var honoreeStateProvinceSelect = '#en__field_supporter_NOT_TAGGED_35';
  var informCountrySelect = '#en__field_transaction_infcountry';
  var informStateProvinceSelect = '#en__field_transaction_infreg';
  var mobilePhoneSameAsHomeCheckboxSelector = '#en__field_supporter_questions_891102, .en__field--my-mobile-phone-is-the-same-as-my-primary-phone .en__field__input--checkbox';
  var mobilePhoneInputSelector = '#en__field_supporter_phoneNumber2';
  var otherAmountSelector = '.en__field--donationAmt .en__field__item--other';
  var otherAmountInputSelector = '.en__field--donationAmt .en__field__input--other, .en__field--donationAmt .en__field__input--text';
  var paymentMethodSelector = '[class*="en__field--payment-method"]';
  var paymentMethodRadioSelector = '[class*="en__field--payment-method"].en__field--radio';
  var paymentTypeSelector = '[name="transaction.paymenttype"]';
  var paypalInputSelector = '.en__field--payment-method-paypal .en__field__input--checkbox';
  var stateProvinceSelect = '#en__field_supporter_region';
  var supporterEmailAddressSelector = '#en__field_supporter_emailAddress';
  var supporterStateSelector = '#en__field_supporter_region';
  var supporterZipCodeSelector = '#en__field_supporter_postcode';
  var totalAmountSelector = '.js-total-gift';
  var tributeOptionsSelector = 'select#en__field_transaction_trbopts'; // Custom events

  var iframeSubmitted = new CustomEvent('iframeSubmitted'); // Elements

  var theForm = document.querySelector('.en__component--page') || document.querySelector('.main'); // Masks

  var numberPipe = IMask.createPipe({
    mask: 'num',
    blocks: {
      num: {
        mask: Number,
        thousandsSeparator: ',',
        padFractionalZeros: true,
        radix: '.'
      }
    }
  }); // Widgets

  var cleave = null; // Constants

  var thermThresholdPct = 80;
  var thermIncrease = 1.25;
  /**
   * Form interface enhancements
   */

  var ui = function ui() {
    var el = null;
    var els = null;
    var _parent = null;
    var stateProvinceChoices = null;
    var honoreeStateProvinceChoices = null;
    var informStateProvinceChoices = null;
    var currentChoices = null;
    /**
     * Set the value of choices when autofill is detected
     *
     * @param {choices} choices choices.js instance to set value for
     * @param {event} e
     */

    var handleChoicesChange = function handleChoicesChange(e) {
      var _target = e.target; // Don't reset drop downs in event attendee details block

      if (e.composedPath().indexOf(document.querySelector('.en__registrants__registrantDetails')) === -1) {
        _target.choices.setValue([{
          value: _target.value,
          label: _target.querySelector("option[value=\"" + _target.value + "\"]").textContent
        }]);

        resetSelect(_target.choices, e);
      }
    };
    /**
     * choices.js removes <options> form the native select
     * Restoring the <options> allows choices.js to work with browser autofill
     *
     * @param {choices} choices choices.js instance to restore options to
     */


    var resetSelect = function resetSelect(_choices, e) {
      var selectOne = _choices.passedElement.element;
      var selectValue = selectOne.value; // Clear the native select

      selectOne.innerHTML = ''; //Remove the duplicate that this method generates at bottom of list

      if (e) {
        _choices.choiceList.element.removeChild(_choices.choiceList.element.lastChild);
      } // Re-add all <options> to native select


      getAll('.choices__item', _choices.choiceList.element).forEach(function (el) {
        var choiceSelected = el.dataset.value === selectValue ? true : false;
        var opt = document.createElement('option');
        opt.value = el.dataset.value;
        opt.text = el.textContent;
        opt.selected = choiceSelected;
        selectOne.add(opt, null);
      });
      currentChoices = _choices;
      selectOne.choices = _choices; // Listen for an autofill (change event)

      selectOne.removeEventListener('change', handleChoicesChange);
      selectOne.addEventListener('change', handleChoicesChange);
    };
    /**
     * Creates choices.js instance
     *
     * @param {node} el Target to apply choices to
     */


    var createChoices = function createChoices(el) {
      return new Choices(el, {
        silent: true,
        addItems: false,
        duplicateItemsAllowed: false,
        itemSelectText: '',
        searchResultLimit: 100,
        shouldSort: false,
        fuseOptions: {
          distance: 0
        },
        callbackOnInit: function callbackOnInit() {
          var _choices = this;

          var label = theForm.querySelector("label[for=\"" + _choices.passedElement.element.id + "\"]");
          var choicesId = "choices" + generateId();

          _choices.enable();

          if (label) {
            // Add aria attributes to combobox
            _choices.containerOuter.element.setAttribute('aria-label', label.textContent);

            setAttributes(_choices.containerOuter.element, {
              'aria-label': label.textContent,
              'aria-owns': choicesId
            }); // Add aria attributes to listbox

            _choices.choiceList.element.setAttribute('aria-label', "Select " + label.textContent.replace(/Select/, ''));

            _choices.choiceList.element.id = choicesId;
          } // restrict the search field to one character to avoid false results
          //_choices.input.element.setAttribute('maxlength', '1');
          // role=textbox is unnecessary in our setup


          getAll('[role="textbox"]', _choices.containerOuter.element).forEach(function (el) {
            el.removeAttribute('role');
          });
          resetSelect(_choices, null);
        }
      });
    };
    /**
     * Destroys a choices.js instance
     *
     * @param {choices} choices choices.js instance to destroy
     */


    var destroyChoices = function destroyChoices(_choices, selector) {
      _choices.clearInput();

      _choices.destroy();

      _choices = null;
    }; // Add body classes


    if (typeof pageJson !== 'undefined') {
      addClass(body, "page--" + pageJson.pageNumber);
    }

    if (document.querySelector('.quiz')) {
      addClass(body, 'page--quiz');
    } else if (document.querySelector('.hub')) {
      addClass(body, 'page--hub');
    } else if (document.querySelector('.related-actions.card')) {
      addClass(body, 'has-related-actions');
    } else if (document.querySelector('.action-center')) {
      addClass(body, 'page--action-center');
    } else if (typeof pageJson !== 'undefined') {
      if (pageJson.pageCount === pageJson.pageNumber) {
        addClass(body, 'page--confirmation');
      }
    } // Set width of full bleed elements


    var scrollbarWidth = window.innerWidth - document.body.clientWidth;
    getAll('.page--quiz .en__component--advrow, .page--hub.page--1 .en__component--advrow, .hero-full-bleed').forEach(function (el) {
      el.style.width = "calc(100vw - " + scrollbarWidth + "px)";
      el.style.marginLeft = "calc(-50vw + " + scrollbarWidth / 2 + "px)";
    }); // Don't forget pseudo elements

    root.style.setProperty('--scrollbarWidth', scrollbarWidth + "px"); // Initiate choices.js

    getAll("select:not(" + stateProvinceSelect + "):not(" + informStateProvinceSelect + "):not(" + giftDesignationSelect + ")").forEach(function (el) {
      createChoices(el);
    }); // Structure modals

    els = getAll('.modal-header, .modal-body, .modal-footer');

    if (els.length > 0) {
      wrapAll(els, 'div', 'modal-content');
    }

    getAll('.modal-content').forEach(function (el) {
      wrapEl(el, 'div', ['modal-dialog', 'modal-lg']);
    });
    getAll('.modal').forEach(function (el) {
      // Add attributes
      setAttributes(el, {
        'data-bs-backdrop': 'static',
        'data-bs-keyboard': 'false',
        'data-bs-dismiss': 'false',
        'tabindex': '-1',
        'aria-labelledby': 'modalTitle',
        'aria-hidden': 'true'
      });
    }); // Allow EN swap lists for billing state/province field

    el = theForm.querySelector(stateProvinceSelect);

    if (el) {
      stateProvinceChoices = createChoices(el);
    } // Allow EN swap lists on country field change


    el = theForm.querySelector(countrySelect);

    if (el) {
      if (stateProvinceChoices) {
        el.addEventListener('change', function (e) {
          // Rebuild state/province choices
          destroyChoices(stateProvinceChoices);
          setTimeout(function () {
            stateProvinceChoices = createChoices(theForm.querySelector(stateProvinceSelect));
          }, 100);
        });
      }
    } // Allow EN swap lists for honoree state/province field


    el = theForm.querySelector(honoreeStateProvinceSelect);

    if (el) {
      honoreeStateProvinceChoices = createChoices(el);
    } // Allow EN swap lists on country field change


    el = theForm.querySelector(honoreeCountrySelect);

    if (el) {
      if (honoreeStateProvinceChoices) {
        el.addEventListener('change', function (e) {
          // Rebuild state/province choices
          destroyChoices(honoreeStateProvinceChoices);
          setTimeout(function () {
            honoreeStateProvinceChoices = createChoices(theForm.querySelector(honoreeStateProvinceSelect));
          }, 100);
        });
      }
    } // Allow EN swap lists for person to be notified state/province field


    el = theForm.querySelector(informStateProvinceSelect);

    if (el) {
      informStateProvinceChoices = createChoices(el);
    } // Allow EN swap lists on person to be notified country field change


    el = theForm.querySelector(informCountrySelect);

    if (el) {
      if (informStateProvinceChoices) {
        el.addEventListener('change', function (e) {
          // Rebuild state/province choices
          destroyChoices(informStateProvinceChoices);
          setTimeout(function () {
            informStateProvinceChoices = createChoices(theForm.querySelector(informStateProvinceSelect));
          }, 100);
        });
      }
    } // Allow EN swap value for gift designation field


    el = theForm.querySelector(giftDesignationSelect);

    if (el) {
      giftDesignationChoices = createChoices(el);
      getAll('.en__field--gift-designation-managed-donors-yn .en__field__input--radio').forEach(function (el) {
        if (giftDesignationChoices) {
          el.addEventListener('click', function (e) {
            // Rebuild gift designation choices
            destroyChoices(giftDesignationChoices);
            setTimeout(function () {
              giftDesignationChoices = createChoices(theForm.querySelector(giftDesignationSelect));
            }, 100);
          });
        }
      });
    }
    /**
     * Shows tribute headings that match headingClass
     *
     * @param {string} headingClass Class of headings to show
     */


    var showTributeHeadings = function showTributeHeadings(headingClass) {
      // Hide everything
      getAll('.heading-honor, .heading-memory, .heading-gift').forEach(function (el) {
        addClass(el, hiddenWebOnlyClass);
      }); // Show the right heading

      getAll(headingClass).forEach(function (el) {
        removeClass(el, hiddenWebOnlyClass);
      });
    }; // Selecting a tribute option might change headings on the form


    el = theForm.querySelector(tributeOptionsSelector);

    if (el) {
      el.addEventListener('change', function (e) {
        switch (e.target.value) {
          case 'In Honor':
            showTributeHeadings('.heading-honor');
            break;

          case 'In Memory':
            showTributeHeadings('.heading-memory');
            break;

          case 'Gift':
            showTributeHeadings('.heading-gift');
            break;
        }
      });
    } // Is there a full bleed hero?


    addClass(document.body, maybeHasHero()); // Is there a solid color hero?

    addClass(document.body, maybeHasHeroSolid()); // Is there a processing error?

    els = getAll('.en__errorHeader, .en__errorList');

    if (els.length > 0 && !isEmpty(theForm.querySelector('.en__errorList'))) {
      wrapAll(els, 'div', errorBoxClass);
      trackProcessingErrors();
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
    }); // Placeholders for address 2 fields

    getAll('[name*="address2"], [name*="add2"]').forEach(function (el) {
      el.setAttribute('placeholder', 'Apt, ste, bldg.');
    }); // Hard code placeholder for date fields

    getAll(dateInputSelector).forEach(function (el) {
      addPlaceholder(el, 'Select Date');
    }); // Maybe convert event address to Google maps link

    getAll('.link-to-map address').forEach(function (el) {
      var wrap = wrapEl(el, 'a');

      if (wrap) {
        setAttributes(wrap, {
          'href': "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(el.textContent),
          'target': '_blank'
        });
      }
    }); // Wrap event ticket selector

    getAll('.en__ticket__selector').forEach(function (el) {
      els = getAll('.en__ticket__minus, .en__ticket__quantity, .en__ticket__plus', el);

      if (els.length > 0) {
        wrapAll(els, 'div', 'input-group');
      }
    }); // Missing event ticket quantity labels

    getAll('.en__ticket__quantity').forEach(function (el) {
      addLabel(el, el.parentElement, 'Quantity');
    }); // Missing additional donation label

    getAll('.en__additional__input').forEach(function (el) {
      addLabel(el, el.parentElement, 'Additional donation (optional)');
    }); // Missing promo code label

    getAll('.en__additional__code').forEach(function (el) {
      addLabel(el, el.parentElement, 'Promo code');
    }); // Move additional donation fields

    el = theForm.querySelector('.en__additional__amount');
    _parent = theForm.querySelector('.form-heading--additional');

    if (el && _parent) {
      _parent.append(el);
    } // Move promo code field


    el = theForm.querySelector('.en__additional__promo');
    _parent = theForm.querySelector('.form-heading--promo');

    if (el && _parent) {
      _parent.append(el);
    } // Wrap additional donation and promo code fields


    els = getAll('.form-heading--additional, .form-heading--promo');

    if (els.length > 0) {
      wrapAll(els, 'div', ['row', 'justify-content-between', 'additional-promo']);
    } // Missing split select labels


    el = theForm.querySelector('.en__field--ccexpire.en__field--splitselect .en__field__item:last-child .en__field__input--splitselect');
    _parent = theForm.querySelector('.en__field--ccexpire.en__field--splitselect .en__field__item:last-child');

    if (el && _parent) {
      addLabel(el, el.parentElement, 'Credit card expiration year').then(function (labelId) {
        var _parent = theForm.querySelector('.en__field--ccexpire.en__field--splitselect .en__field__item:last-child');

        getAll('[role="combobox"], [role="listbox"]', _parent).forEach(function (el) {
          el.setAttribute('aria-labelledby', labelId);
        });
      });
    } // Missing triple select labels


    getAll('.en__field--tripleselect').forEach(function (el) {
      var label = el.querySelector('.en__field__label');

      if (label) {
        labelId = label.id ? label.id : "label" + generateId();
        label.id = labelId;
        getAll('[role="combobox"], [role="listbox"]', el).forEach(function (el) {
          el.setAttribute('aria-labelledby', labelId);
        });
      }
    }); // Radio element accessibility

    getAll('.en__field--radio').forEach(function (el) {
      // Some radio elements have loose labels
      var looseLabel = el.querySelector('label:first-child');
      var replaceLabel = null;

      if (looseLabel) {
        replaceLabel = document.createElement('p');
        replaceLabel.textContent = looseLabel.textContent;
        replaceLabel.id = looseLabel.id;
        replaceLabel.classList = looseLabel.classList;
        looseLabel.parentNode.replaceChild(replaceLabel, looseLabel);
      } // Add aria role


      el.setAttribute('role', 'radiogroup');

      if (hasClass(el, 'en__field--donationAmt')) {
        el.setAttribute('aria-labelledby', 'giftAmountLabel');
      } else {
        addAriaLabelledBy(el);
      }
    }); // Checkbox element accessibility

    getAll('.en__field--checkbox.en__field--survey').forEach(function (el) {
      // Some checkbox elements have loose labels
      var looseLabel = el.querySelector('label:first-child');
      var replaceLabel = null;

      if (looseLabel) {
        replaceLabel = document.createElement('p');
        replaceLabel.textContent = looseLabel.textContent;
        replaceLabel.id = looseLabel.id;
        replaceLabel.classList = looseLabel.classList;
        looseLabel.parentNode.replaceChild(replaceLabel, looseLabel);
      } // Add aria role


      el.setAttribute('role', 'group');
      addAriaLabelledBy(el);
    }); // Missing Other Amount label

    el = theForm.querySelector(otherAmountInputSelector);
    _parent = theForm.querySelector(otherAmountSelector);

    if (el && _parent) {
      placeholderToLabel(el, _parent);
    } // Aria role for split selects


    getAll('.en__field--splitselect').forEach(function (el) {
      el.setAttribute('role', 'group');
      addAriaLabelledBy(el);
    }); // Labels are sometimes blank

    getAll('.en__field__label').forEach(function (el) {
      if (isEmpty(el)) {
        if (el.parentNode) {
          el.parentNode.removeChild(el);
        }
      }
    }); // Convert URL strings to images for dummy select ecard radios

    el = theForm.querySelector('[class*="select-an-ecard"]');

    if (el) {
      getAll('.en__field__label--item', el).forEach(function (el) {
        createImgFromUrl(el.textContent, el);
      });
    } // Add mask and inputmode attribute for currency fields. Also prevent autofill


    getAll('[name*="Amt"]:not([name*="Amt2"]):not([name*="Amt3"]):not([name*="Amt4"]), [name*="amt"]:not([name*="amt2"]):not([name*="amt3"]):not([name*="amt4"]), input[type="text"].en__additional__input').forEach(function (el) {
      setAttributes(el, {
        'autocomplete': 'photo',
        'inputmode': 'decimal'
      });
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
    }); // Prevent autofill on mem/trib fields

    getAll('.en__field--ecard-recipient-email-addresses .en__field__input, .en__field--honname .en__field__input, .en__field--honname ~ .en__field .en__field__input, .en__field--infname .en__field__input, .en__field--infname ~ .en__field .en__field__input').forEach(function (el) {
      el.setAttribute('autocomplete', 'photo');
    }); // Autocomplete attributes for CC expiration fields

    el = theForm.querySelector(ccExpMonthSelect);

    if (el) {
      el.setAttribute('autocomplete', 'cc-exp-month');
    }

    el = theForm.querySelector(ccExpYearSelect);

    if (el) {
      el.setAttribute('autocomplete', 'cc-exp-year');
    } // Add inputmode attribute for credit card fields


    getAll('[name*="ccnumber"], [name*="ccvv"]').forEach(function (el) {
      el.setAttribute('inputmode', 'numeric');
    }); // Display minimum donation amount
    // el = theForm.querySelector(donationAmountSelector) || theForm.querySelector(otherAmountSelector);
    // if (el) {
    //   // Getting the minimum amount from the EN validator
    //   const minAmountValidator = EngagingNetworks.validators.filter(obj => {
    //     if (obj.format) {
    //       return obj.format.indexOf('~') > -1;
    //     }
    //     return false;
    //   });
    //   if (minAmountValidator[0]) {
    //     // Add paragraph with min amount underneath Other Amount field
    //     addEl(el, 'p', `$${minAmountValidator[0].format.split('~')[0]} minimum`, 'fw-medium');
    //   }
    // }
    // Other amount field is always visible, so the corresponding radio need to be button clicked here even though hidden

    el = theForm.querySelector('.en__field__input--other');

    if (el) {
      el.addEventListener('focus', function (e) {
        var otherRadio = e.target.closest('.en__field__item').previousElementSibling.querySelector('.en__field__input--radio');

        if (otherRadio) {
          otherRadio.click();
        }
      });
    } // Reposition help text found in labels


    getAll('.field__help').forEach(function (el) {
      getClosestEl(el, enFieldSelector).append(el);
    }); // Provide credit card type feedback

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
    } // Handle switching between Check and CC payment methods


    el = theForm.querySelector(paymentMethodRadioSelector);

    if (el && cleave) {
      getAll('.en__field__input--radio', el).forEach(function (el) {
        el.addEventListener('click', function (e) {
          var paymentMethod = e.target.value;

          if (paymentMethod === 'CC') {
            updatePaymentType(cleave.properties.creditCardType);
          } else if (paymentMethod === 'Check') {
            var paymentType = theForm.querySelector(paymentTypeSelector);

            if (paymentType) {
              paymentType.value = 'ACH';
            }
          }
        });
      });
    }

    var setPaymentType = function setPaymentType(paymentType) {
      var hasPaymentMethod = theForm.querySelector(paymentMethodRadioSelector);
      var selectedPaymentMethod = null;

      if (hasPaymentMethod) {
        selectedPaymentMethod = hasPaymentMethod.querySelector('.en__field__input--radio:checked').value;

        if (selectedPaymentMethod === 'CC') {
          updatePaymentType(cleave.properties.creditCardType);
        } else if (selectedPaymentMethod === 'Check') {
          paymentType.value = 'ACH';
        }
      } else {
        updatePaymentType(cleave.properties.creditCardType);
      }
    }; // Paypal checkbox needs to hide credit card blocks and set payment type


    el = theForm.querySelector(paypalInputSelector);
    _parent = theForm.querySelector(paymentMethodSelector);

    if (el && _parent) {
      el.addEventListener('click', function (e) {
        var paymentType = theForm.querySelector(paymentTypeSelector);
        _parent = getClosestEl(_parent, '.en__component--formblock');

        if (_parent && paymentType) {
          if (e.target.checked) {
            addClass(_parent, paypalSelectedClass);
            paymentType.value = 'Paypal';
          } else {
            removeClass(_parent, paypalSelectedClass);
            setPaymentType(paymentType);
          }
        }
      });
    } // Set sharing URLs for action center items


    getAll('.advocacy-related-actions:not(:only-of-type)').forEach(function (el) {
      var facebookShareLink = el.querySelector('.en__socialShare--facebook');
      var twitterShareLink = el.querySelector('.en__socialShare--twitter');
      var shareLink = el.querySelector('a[data-campaign-id]');
      var shareUrl = null;

      if (facebookShareLink && twitterShareLink && shareLink) {
        shareUrl = shareLink.getAttribute('href');
        facebookShareLink.setAttribute('href', makeFacebookUrl(facebookShareLink.getAttribute('href'), shareUrl));
        twitterShareLink.setAttribute('href', makeTwitterUrl(shareLink.textContent, twitterShareLink.getAttribute('href'), shareUrl));
      }
    }); // Active state for field containers

    getAll('.en__field__input').forEach(function (el) {
      el.addEventListener('focus', activateField);
      el.addEventListener('blur', deactivateField);
    }); // Init datepickers

    var datepickers = [].slice.call(document.querySelectorAll(dateInputSelector));
    var datepickersList = datepickers.map(function (el) {
      var today = new Date();
      var maxDate = new Date(today); // Restrict date selection to one year out

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
        todayHighlight: false
      });
    }); // Add inputmode attribute for date fields to prevent mobile keyboard

    getAll('.datepicker-input').forEach(function (el) {
      el.setAttribute('inputmode', 'none');
      el.readOnly = true;
    }); // Each photo in hero and sidebar elements needs description and meta info popover

    getAll('.en__component--imageblock, .en__component--copyblock .card').forEach(function (el) {
      createImgTooltip(el);
    }); // Create popovers elements

    if (typeof popoverTranslations !== 'undefined' && typeof pageJson !== 'undefined') {
      popoverTranslations.forEach(function (translation) {
        var locale = translation[pageJson.locale] ? pageJson.locale : 'en-US';
        createPopover(translation.field, translation.placement, translation[locale].label, translation[locale].text);
      });
    } // Init accordions


    getAll('.accordion').forEach(function (accordion) {
      getAll('.accordion-button').forEach(function (el) {
        el.addEventListener('click', function (e) {
          setTimeout(function () {
            addAriaCollapsedAttr(document.getElementById(e.target.dataset.bsTarget.replace(/#/, '')), getAll('.accordion-collapse', accordion));
          }, 500);
        });
      });
    }); // Init collapsibles

    getAll('.btn-collapse').forEach(function (el) {
      el.addEventListener('click', function (e) {
        var _target = e.target;

        if (hasClass(_target, 'expanded')) {
          removeClass(_target, 'expanded');
          _target.textContent = 'See more';
        } else {
          addClass(_target, 'expanded');
          _target.textContent = 'See less';
        }
      });
    }); //Init popovers

    var popoverTriggerList = [].slice.call(theForm.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
      return new bootstrap.Popover(popoverTriggerEl, {
        boundry: theForm,
        container: getClosestEl(popoverTriggerEl, '.popover-container') ? getClosestEl(popoverTriggerEl, '.popover-container') : getClosestEl(popoverTriggerEl, enFieldSelector),
        html: true,
        placement: 'bottom',
        fallbackPlacements: ['bottom', 'top'],
        template: '<div class="popover" role="tooltip"><div class="popover-control"><a class="popover-close" role="button" aria-label="close popover" onclick="closePopover(); return false;"></a></div><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: 'click focus',
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
  /**
   * Donation form enhancements
   */


  var donationForm = function donationForm() {
    var appealCode = theForm.querySelector('.en__field--appealCode');
    var bequestIframe = theForm.querySelector('.iframe--bequest iframe');
    var bequestModal = theForm.querySelector('.modal--bequest');
    var donationAmt = theForm.querySelector('.en__field--donationAmt');
    var feeCoverCheckbox = theForm.querySelector('[name="transaction.feeCover"]');
    var giftDesignationYN = theForm.querySelector('.en__field--gift-designation-yn');
    var otherAmountInput = theForm.querySelector(otherAmountInputSelector);
    var recurrenceCheckbox = theForm.querySelector('[name="transaction.recurrpay"][type="checkbox"]');
    var recurrenceFrequency = theForm.querySelector('.en__field--recurrfreq');
    var donationAmtRadios = null;
    var modal = null;
    var feeCoverUserChecked = false;

    var maybeUncheckFeeCover = function maybeUncheckFeeCover(amt) {
      if (feeCoverCheckbox.checked && !feeCoverUserChecked && !isNaN(amt)) {
        if (Number(amt) >= 1000) {
          feeCoverCheckbox.checked = false;
        }
      }
    };

    var handleDonationAmountChange = function handleDonationAmountChange(e) {
      if (feeCoverCheckbox) {
        maybeUncheckFeeCover(getOriginalDonationAmount());
      }
    };

    var initDonationAmount = function initDonationAmount() {
      donationAmtRadios = getAll('.en__field__input--radio:not([value=""])', donationAmt);
      selectedAmount = getSelectedAmount();
      donationAmtRadios.forEach(function (el) {
        el.addEventListener('click', handleDonationAmountChange);
      });

      if (feeCoverCheckbox) {
        feeCoverCheckbox.addEventListener('click', function (e) {
          feeCoverUserChecked = true;
        });
      } // Listen for other amount change


      if (otherAmountInput) {
        otherAmountInput.addEventListener('input', handleDonationAmountChange);
      }
    };

    resetDonationAmount = function resetDonationAmount() {
      setTimeout(function () {
        initDonationAmount(); // window.initMasks();
      }, 500);
    };

    if (theForm.action.indexOf('donate') > -1 && pageJson.pageNumber === 1) {
      if (donationAmt) {
        initDonationAmount(); // Listen for recurrence change

        if (recurrenceFrequency) {
          getAll('.en__field__input--radio', recurrenceFrequency).forEach(function (el) {
            el.addEventListener('click', resetDonationAmount);
          });
        } else if (recurrenceCheckbox) {
          recurrenceCheckbox.addEventListener('click', resetDonationAmount);
        }
      } // Gift designation Y/N


      if (giftDesignationYN && appealCode) {
        giftDesignationYN.querySelector('.en__field__input--radio[value="N"]').addEventListener('click', function (e) {
          disableEl(appealCode);
        });
        giftDesignationYN.querySelector('.en__field__input--radio[value="Y"]').addEventListener('click', function (e) {
          enableEl(appealCode);
        });

        if (giftDesignationYN.querySelector('.en__field__input--radio[value="N"]').checked) {
          disableEl(appealCode);
        }
      }
    }

    if (bequestIframe) {
      bequestIframe.addEventListener('load', function (e) {
        bequestIframe.contentWindow.enOnError = function () {
          // Fit iframe to parent
          resizeIframe(bequestIframe);
        }; // Fit iframe to parent


        resizeIframe(bequestIframe);
      }); // Listen for submitted message from iframe

      window.addEventListener('iframeSubmitted', function (e) {
        // Fire tracking
        if (typeof utag !== 'undefined') {
          utag.link({
            'event_name': 'lightbox_click',
            'lightbox_name': 'bequest'
          });
        } // Close modal


        modal.hide();
        focusFirst();
      }); // Fit iframe to parent

      window.addEventListener('resize', function (e) {
        resizeIframe(bequestIframe);
      });
    }

    if (bequestModal) {
      modal = new bootstrap.Modal(bequestModal, {
        backdrop: 'static',
        keyboard: false
      }); // Open modal

      modal.show(); // Fire tracking

      setTimeout(function () {
        if (typeof utag !== 'undefined') {
          utag.link({
            'event_name': 'lightbox_impression',
            'lightbox_name': 'bequest'
          });
        }
      }, 1000);
    }
  };
  /**
   * Event form enhancements
   */


  var eventForm = function eventForm() {
    var pageNumber = pageJson.pageNumber;
    var savedTotalAmount = sessionStorage.getItem('savedTotalAmount');
    var waitListLink = theForm.querySelector('.waitlist-link a');
    var el = null;
    var _parent = null;
    var hasPromo = false;
    var totalAmount = 0;
    var totalDiscount = 0;
    /**
     * Updates total amount
     */

    var updateTotalAmount = function updateTotalAmount() {
      var additionalInput = theForm.querySelector('.en__additional__input');
      var totalAmount = 0; // Sum all tickets

      getAll('.en__ticket__quantity').forEach(function (el) {
        var row = getClosestEl(el, '.en__ticket');
        var price = Number(row.querySelector('.en__ticket__price').textContent);

        if (price !== '0') {
          totalAmount += el.value === '0' ? 0 : Number(Number(el.value) * price);
        }
      }); // Include additional donation

      if (additionalInput) {
        totalAmount += !isNaN(Number(additionalInput.value)) ? Number(additionalInput.value) : 0;
      } // Display total amount


      getAll(totalAmountSelector).forEach(function (el) {
        el.textContent = numberPipe(String(totalAmount));
      }); // Save total for use on billing page

      sessionStorage.setItem('savedTotalAmount', totalAmount);
    };

    var getPromo = function getPromo(el) {
      return el.querySelector('.en__orderSummary__data--promo').textContent !== '';
    }; // Make ticket quantity field readonly to avoid invalid ticket numbers


    getAll('.en__ticket__quantity').forEach(function (el) {
      el.readOnly = true;
      el.setAttribute('tabindex', '-1');
    }); // Add ticket quantity plus/minus to tab order

    getAll('.en__ticket__minus, .en__ticket__plus').forEach(function (el) {
      el.setAttribute('tabindex', '0');
    }); // Strip currency indicators and $ signs

    getAll('.en__orderSummary__data--cost, .en__orderSummary__data--totalAmount').forEach(function (el) {
      el.textContent = el.textContent.replace(/USD/, '');
    }); // Strip label colons

    getAll('.en__orderSummary__header').forEach(function (el) {
      el.textContent = el.textContent.replace(/\:/, '');
    }); // Maybe on page 1

    if (pageNumber === 1) {
      // Display waitlist confirmation if coming from a chained redirect
      el = theForm.querySelector('.waitlist-confirmation');

      if (el && location.href.indexOf('chain') > -1) {
        removeClass(el, hiddenWebOnlyClass);
      } // Maybe add waitlist links


      if (waitListLink) {
        getAll('.en__ticket__soldout').forEach(function (el) {
          var clone = waitListLink.cloneNode(true);
          el.parentElement.append(clone);
        });
      } // Listen for additional donation


      el = theForm.querySelector('.en__additional__input');

      if (el) {
        el.addEventListener('change', function (e) {
          updateTotalAmount();
        });
      } // Listen for ticket selection


      getAll('.en__ticket__quantity').forEach(function (el) {
        el.addEventListener('change', function (e) {
          setTimeout(function () {
            updateTotalAmount();
          }, 100);
        });
      }); // Listen for reset

      el = theForm.querySelector('button[type="reset"]');

      if (el) {
        el.addEventListener('click', function (e) {
          setTimeout(function () {
            updateTotalAmount();
          }, 100);
        });
      } // Init total amount


      updateTotalAmount(); // Force ticket total cost update

      getAll('.en__ticket__minus, .en__ticket__plus').forEach(function (el) {
        var row = getClosestEl(el, '.en__ticket');
        var ticketQuantity = row.querySelector('.en__ticket__quantity');
        el.addEventListener('click', function (e) {
          triggerEvent(ticketQuantity, 'change');
        }); // Add keyboard nav to plus/minus buttons

        el.addEventListener('keyup', function (e) {
          if (e.key === 'Enter' || e.keyCode === 13) {
            e.target.click();
          }
        });
      }); // Maybe on page 2
    } else if (pageNumber === 2) {
      // Customize order summary table
      getAll('.en__orderSummary__item').forEach(function (el) {
        var itemType = el.querySelector('.en__orderSummary__data--type');
        var itemQuantity = el.querySelector('.en__orderSummary__data--quantity').textContent;
        itemType.textContent = itemQuantity + "x  " + itemType.textContent;
        hasPromo = hasPromo || getPromo(el);
      }); // Maybe add promo discount line

      el = theForm.querySelector('.en__orderSummary__data--totalAmount');
      _parent = theForm.querySelector('.en__orderSummary');

      if (savedTotalAmount && hasPromo && el && _parent) {
        totalAmount = Number(el.textContent.replace(/\$/, ''));
        el = document.getElementById('orderSummaryPromo');

        if (el) {
          totalDiscount = Number(savedTotalAmount) - totalAmount;
          el.querySelector('.js-applied-promo').textContent = totalDiscount.toFixed(2);

          _parent.insertBefore(el, theForm.querySelector('.en__orderSummary__total'));

          removeClass(el, hiddenWebOnlyClass);
        } // Cleanup


        theForm.querySelector('.en__submit button').addEventListener('click', function (e) {
          sessionStorage.removeItem('savedTotalAmount');
        });
      } // Remove attendee index number


      getAll('.en__registrants__registrantHead').forEach(function (el) {
        el.textContent = el.textContent.replace(/^\d{1,3}/, '').replace(/ticket \d{1,3}$/, '');
      }); // Re-number attendees

      getAll('.en__registrants__ticket').forEach(function (el) {
        var attendees = getAll('.en__registrants__registrantHead', el);

        if (attendees.length > 1) {
          attendees.forEach(function (el, index) {
            el.textContent = el.textContent + " " + (index + 1);
          });
        }
      }); // Labels for Attendee custom checkbox questions do not have for attributes

      getAll('.en__field--checkbox.en__field--registrant .en__field__item').forEach(function (el) {
        var checkboxId = "checkbox" + generateId();
        el.querySelector('.en__field__input--checkbox').id = checkboxId;
        el.querySelector('.en__field__label--item').setAttribute('for', checkboxId);
      }); // Adding commas to totals

      getAll('.en__orderSummary__data--cost, .en__orderSummary__data--totalAmount').forEach(function (el) {
        el.textContent = numberPipe(el.textContent);
      }); // Adjust the page if zero amount due

      el = theForm.querySelector('.en__orderSummary__data--totalAmount');

      if (el) {
        if (parseInt(el.textContent) === 0) {
          // Some of the form headings have 'Billing' in them
          getAll('.form-heading h3').forEach(function (el) {
            el.textContent = el.textContent.replace(/Billing\s/i, '');
          }); // Find the form block with address info

          el = document.getElementById('en__field_supporter_address1');

          if (el) {
            // CSS will hide everything below .last-visible except the submit block
            addClass(getClosestEl(el, '.en__component--formblock'), 'last-visible');
          }
        }
      } // Display total amount


      el = theForm.querySelector('.en__orderSummary__data--totalAmount');

      if (el) {
        // Prevent double $ symbols
        setTimeout(function () {
          el.textContent = el.textContent.indexOf('$') > -1 ? el.textContent.replace(/\$/g, '') : el.textContent;
          addClass(el, activeClass);
          getAll(totalAmountSelector).forEach(function (el) {
            el.textContent = "$" + theForm.querySelector('.en__orderSummary__data--totalAmount').textContent.replace(/\$/, '');
          });
        }, 500);
      }
    }
  };
  /**
   * Email to target enhancements
   */


  var emailToTarget = function emailToTarget() {
    var contactBlock = theForm.querySelector('.en__component--contactblock');

    if (contactBlock) {
      // Already visually hidden, but hide from screen readers too without using display: none
      contactBlock.setAttribute('aria-hidden', 'true');
    }
  };
  /**
   * Hub enhancements
   */


  var hub = function hub() {
    var hubImage = theForm.querySelector('.hub-image .en__component--imageblock:last-child img');
    var emailAddress = theForm.querySelector('.en__supporterHubLogin__emailAddress .en__field__input'); // Convert large image to a background to better styling

    if (hubImage) {
      hubImage.parentElement.style.backgroundImage = "url(" + hubImage.getAttribute('src') + ")";
    } // Enable autocomplete on email address field


    if (emailAddress) {
      emailAddress.id = emailAddress;
      emailAddress.setAttribute('autocomplete', 'email');
    }
  };
  /**
   * Quiz form enhancements
   */


  var quiz = function quiz() {
    var leadGenModal = theForm.querySelector('.modal--lead-gen');
    var isInvalid = false;
    var formType = null;
    var el = null;

    var getFormType = function getFormType(form) {
      var emailUnsubscribeChecked = form.querySelector('.en__field--unsubscribe-from-emails:not(.en__hidden) .en__field__input--checkbox') ? form.querySelector('.en__field--unsubscribe-from-emails:not(.en__hidden) .en__field__input--checkbox').checked : false;
      var mobilePhoneField = form.querySelector('#en__field_supporter_phoneNumber2:not(:placeholder-shown)');
      var textOptInChecked = form.querySelector('.en__field--home-phone-opt-in .en__field__input--checkbox') ? form.querySelector('.en__field--home-phone-opt-in .en__field__input--checkbox').checked : false;
      var formType = {};
      formType.lightbox_name = "lightbox-" + utag_data.page_name;
      formType.form_name = "lightbox-" + utag_data.page_name;
      formType.email_signup_location = "lightbox-" + utag_data.page_name; //These conditions assume that if the field exists, it is required, e.g. mobilePhoneField
      //Unsubscribe not checked, mobile phone field exists and optin checked

      if (!emailUnsubscribeChecked && mobilePhoneField && textOptInChecked) {
        formType.event_name = 'frm_ltbx_emt_emo_txt_txto_submit';
        formType.form_type = 'email_text_signup';
        formType.text_signup_location = "lightbox-" + utag_data.page_name; //Unsubscribe not checked, mobile phone field exists (and optin not checked)
      } else if (!emailUnsubscribeChecked && mobilePhoneField) {
        formType.event_name = 'frm_ltbx_emt_emo_txt_submit';
        formType.form_type = 'email_text_signup';
        formType.text_signup_location = "lightbox-" + utag_data.page_name; //Unsubscribe not checked, no mobile phone field
      } else if (!emailUnsubscribeChecked) {
        formType.event_name = 'frm_ltbx_emt_emo_submit';
        formType.form_type = 'email_signup'; //Unsubscribe checked, mobile phone field exists and optin checked
      } else if (mobilePhoneField && textOptInChecked) {
        formType.event_name = 'rm_ltbx_emt_txt_txto_submit';
        formType.form_type = 'email_text_signup';
        formType.text_signup_location = "lightbox-" + utag_data.page_name; //Unsubscribe checked, mobile phone field exists and optin not checked
      } else if (mobilePhoneField) {
        formType.event_name = 'frm_ltbx_emt_txt_submit';
        formType.form_type = 'email_text_signup';
        formType.text_signup_location = "lightbox-" + utag_data.page_name; //Unsubscribe checked, mobile phone field doesn't exist
      } else {
        formType.event_name = 'frm_ltbx_emt_submit';
        formType.form_type = 'email_signup';
      }

      return formType;
    }; // Maybe display lead gen modal


    if (leadGenModal) {
      // Set placeholder on mobile phone field so it can be selected with :placeholder-shown
      el = leadGenModal.querySelector('#en__field_supporter_phoneNumber2');

      if (el) {
        el.setAttribute('placeholder', ' ');
      }

      formType = getFormType(leadGenModal);
      var modal = new bootstrap.Modal(leadGenModal, {
        backdrop: 'static',
        keyboard: false
      });
      modal.show(); // Fire tracking

      setTimeout(function () {
        if (typeof utag !== 'undefined') {
          utag.link({
            'event_name': 'lightbox_form_impression',
            'lightbox_name': formType.lightbox_name,
            'form_type': formType.form_type,
            'form_name': formType.form_name
          });
        }
      }, 100);

      var validateModal = function validateModal() {
        if (formIsValid(leadGenModal)) {
          formType = getFormType(leadGenModal);
          modal.hide();
          focusFirst(leadGenModal); // Fire tracking

          if (typeof utag !== 'undefined') {
            utag.link(formType);
          } // Submit buttons are disabled after clicking


          enableSubmitButtons();
        } else {
          // Submit buttons are disabled after clicking
          isInvalid = true;
          enableSubmitButtons();
        }

        return false;
      };

      var enableSubmitButtons = function enableSubmitButtons() {
        setTimeout(function () {
          getAll('.en__submit button').forEach(function (el) {
            el.disabled = false;
          });
        }, 100);
      }; // Handle modal submit button click


      leadGenModal.querySelector('.btn').addEventListener('click', function (e) {
        if (isInvalid) {
          validateModal();
          e.preventDefault();
          return false;
        } else {
          setTimeout(function () {
            validateModal();
            e.preventDefault();
            return false;
          }, 100);
        }
      });
    } // Listen for validation error


    el = theForm.querySelector('.en__field--survey');

    if (el) {
      var mutationCallback = function mutationCallback(mutationsList, observer) {
        for (var i = 0; i < mutationsList.length; i++) {
          if (mutationsList[i].addedNodes.length > 0) {
            // Move error message to end of form
            var _el = theForm.querySelector(errorSelector);

            if (_el) {
              theForm.querySelector('.en__component--formblock').append(_el);
            }
          }
        }
      };

      var errorObserver = new MutationObserver(mutationCallback);
      errorObserver.observe(el, {
        attributes: false,
        childList: true,
        subtree: false
      });
    }

    getAll('.en__field__input--radio').forEach(function (el) {
      el.addEventListener('click', function (e) {
        var el = void 0; // Clicking any answer removes error message

        el = theForm.querySelector(errorSelector);

        if (el) {
          el.remove();
        }
      });
    });

    var checkAnswer = function checkAnswer() {
      var correctAnswer = theForm.querySelector('.correct');
      var incorrectAnswer = theForm.querySelector('.incorrect');
      var selectedAnswerRadio = theForm.querySelector('.en__field__input--radio:checked');
      var correctAnswerRadio = theForm.querySelector('.en__field__input--radio[value="1"]');
      var questionCount = sessionStorage.getItem('questionCount') ? sessionStorage.getItem('questionCount') : 0;
      var quizScore = sessionStorage.getItem('quizScore') ? sessionStorage.getItem('quizScore') : 0;
      var alreadyAnswered = sessionStorage.getItem('alreadyAnswered') ? sessionStorage.getItem('alreadyAnswered') : 'false'; // Prevent more answer clicks

      disableFields(getAll('.en__field__input--radio'));

      if (correctAnswer && incorrectAnswer && correctAnswerRadio) {
        // Check for correct answer
        if (selectedAnswerRadio === correctAnswerRadio) {
          correctAnswer.style.display = 'inline'; // Update running score

          if (alreadyAnswered === 'false') {
            quizScore++;
          }
        } else {
          addClass(selectedAnswerRadio.nextElementSibling, 'is-incorrect');
          incorrectAnswer.style.display = 'inline';
        }

        addClass(correctAnswerRadio.nextElementSibling, 'is-correct'); // Show answer

        theForm.querySelector('.quiz-answer p').style.display = 'block'; // Show next question button

        theForm.querySelector('.en__component--formblock:last-child').style.display = 'block';

        if (alreadyAnswered === 'false') {
          // Update running count of quiz questions
          questionCount++;
          sessionStorage.setItem('questionCount', questionCount); // Save running score

          sessionStorage.setItem('quizScore', quizScore);
          sessionStorage.setItem('alreadyAnswered', 'true');
        }
      }
    }; // Handle check answer button click


    el = theForm.querySelector('.en__submit button[type="button"]');

    if (el) {
      el.addEventListener('click', function (e) {
        var fieldError = theForm.querySelector('.en__field__error');

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
    } // Handle submit button click


    el = theForm.querySelector('.en__submit button:not([type="button"])');

    if (el) {
      el.addEventListener('click', function (e) {
        sessionStorage.setItem('alreadyAnswered', 'false');
      });
    } // Display quiz results if on the last page


    if (pageJson.pageNumber === pageJson.pageCount) {
      // Display quiz score
      if (theForm.querySelector('.js-quiz-score') && sessionStorage.getItem('quizScore')) {
        theForm.querySelector('.js-quiz-score').textContent = sessionStorage.getItem('quizScore');
      } // Display number of questions


      if (theForm.querySelector('.js-question-count') && sessionStorage.getItem('questionCount')) {
        theForm.querySelector('.js-question-count').textContent = sessionStorage.getItem('questionCount');
      } // Clean up


      sessionStorage.removeItem('quizScore');
      sessionStorage.removeItem('questionCount');
      sessionStorage.removeItem('alreadyAnswered');
    }
  };
  /**
   * Action center form enhancements
   */


  var actionCenter = function actionCenter() {
    // Make image blocks clickable
    getAll('.card').forEach(function (el) {
      var link = el.querySelector('a[data-type="campaignpage_url_pb"]');
      var img = el.querySelector('.en__component--imageblock img');
      var clone = null;

      if (link && img) {
        clone = link.cloneNode();
        img.parentNode.insertBefore(clone, img);
        clone.appendChild(img);
      }
    });
  };
  /**
   * Track form errors
   */


  var trackFormErrors = function trackFormErrors() {
    var invalidFields = '';
    var errors = '';

    if (typeof utag !== 'undefined') {
      // Gather invalid fields and error messages
      getAll('.en__field--validationFailed').forEach(function (el) {
        if (el.querySelector('.en__field__error')) {
          invalidFields += el.querySelector('.en__field__input').getAttribute('name') + "|";
          errors += el.querySelector('.en__field__error').textContent + "|";
        }
      }); // Fire tracking if errors were found

      if (invalidFields !== '') {
        utag.link({
          'event_name': 'form_error',
          'form_field_error_field': invalidFields.slice(0, -1),
          'form_field_error_value': errors.slice(0, -1),
          'form_name': utag_data.page_name.slice(0, -2),
          'form_type': pageJson.pageType
        });
      }
    }
  };
  /**
   * Track processing errors
   */


  var trackProcessingErrors = function trackProcessingErrors() {
    var paymentMethod = document.querySelector(paymentTypeSelector);

    if (typeof utag !== 'undefined' && paymentMethod) {
      utag.link({
        'event_name': 'form_error',
        'form_field_error_field': 'payment error',
        'form_field_error_value': 'payment error',
        'payment_type': paymentMethod.value,
        'form_name': utag_data.page_name.slice(0, -2),
        'form_type': pageJson.pageType
      });
    }
  };

  var mobilePhone = function mobilePhone() {
    var initPhoneFields = function initPhoneFields() {
      var mobilePhoneInput = theForm.querySelector(mobilePhoneInputSelector);
      var homePhoneInput = theForm.querySelector(homePhoneInputSelector);
      var mobileSameAsHomeCheckbox = theForm.querySelector(mobilePhoneSameAsHomeCheckboxSelector);

      if (mobilePhoneInput.value.length && homePhoneInput.value.length && homePhoneInput.value !== mobilePhoneInput.value && mobileSameAsHomeCheckbox.checked) {
        mobileSameAsHomeCheckbox.click();
      } else if (mobilePhoneInput.value.length === 0 && homePhoneInput.value.length && mobileSameAsHomeCheckbox.checked) {
        mobilePhoneInput.disabled = false;
        mobilePhoneInput.value = homePhoneInput.value;
      }

      var setMobilePhoneField = function setMobilePhoneField(e) {
        if (e.target.checked) {
          //override EN's disabling of the field
          setTimeout(syncMobilePhoneField, 500);
        } else {
          mobilePhoneInput.value = '';
        }
      };

      var syncMobilePhoneField = function syncMobilePhoneField(e) {
        if (mobileSameAsHomeCheckbox.checked) {
          mobilePhoneInput.disabled = false;
          mobilePhoneInput.value = homePhoneInput.value;
        }
      }; //attach event handler to the checkbox


      mobileSameAsHomeCheckbox.addEventListener('change', setMobilePhoneField); //attach event handler to the home input

      homePhoneInput.addEventListener('input', syncMobilePhoneField);
    }; //if all three fields are present


    if (theForm.querySelectorAll(mobilePhoneInputSelector).length && theForm.querySelectorAll(homePhoneInputSelector).length && theForm.querySelectorAll(mobilePhoneSameAsHomeCheckboxSelector).length) {
      //initialize phone field features
      initPhoneFields();
    }
  };
  /**
   * Form validation enhancements
   */


  var validation = function validation() {
    var setValidation = function setValidation(el) {
      var field = el.closest(enFieldSelector); // Hide/display error formatting

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
            // Check for valid credit card (https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-2.php)
            el.setAttribute('pattern', '^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$');
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

      theForm.setAttribute('novalidate', true);
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
    var monthlyCheckbox = document.getElementById('en__field_transaction_recurrpay');
    var continueButton = theForm.querySelector('.btn-continue');
    var upsellButton = theForm.querySelector('.btn-upsell');
    var upsellModal = theForm.querySelector('.modal--upsell');
    var hasUpsell = monthlyCheckbox && upsellModal && upsellButton && continueButton;
    var otherAmountInput = theForm.querySelector(otherAmountInputSelector);
    var otherAmountOriginal = null;
    var isInvalid = false; // Don't submit form on ENTER if focused on an input

    window.addEventListener('keydown', function (e) {
      if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
        if (e.target.nodeName == 'INPUT') {
          e.preventDefault();
          return false;
        }
      }
    }, true);

    window.enOnError = function () {
      setTimeout(function () {
        // Scroll to first invalid field
        var firstError = document.querySelector('.en__field__error');
        var field = firstError ? firstError.closest('.en__field') : null;

        if (firstError && field) {
          field.scrollIntoView({
            behavior: 'smooth'
          });
        }
      }, 10);
      trackFormErrors();
    };

    window.enOnValidate = function () {
      var donationAmount = document.querySelector('[data-token="amount-total"]') ? parseFloat(document.querySelector('[data-token="amount-total"]').textContent.replace(/\$/, '')) : parseFloat(getTotalDonationAmount());
      var ecardFields = theForm.querySelector(ecardFieldsSelector);
      var ecardSelect = theForm.querySelector(ecardSelectSelector);
      var feeCoverCheckbox = theForm.querySelector('[name="transaction.feeCover"]');
      var mobilePhoneNumber = theForm.querySelector('.en__field--phoneNumber2:not(:placeholder-shown) .en__field__input');
      var mobilePhoneOptIn = theForm.querySelector('.en__field--mobile-text-opt-in .en__field__input--checkbox:checked');
      var trackSubmit = theForm.querySelector('.track-submit');
      var donationData = {};
      var ecardData = sessionStorage.getItem('ecardData');
      var extraAmount = 0;
      var mobilePhoneData = {};
      var upsellDone = false;

      var doUpsell = function doUpsell() {
        if (!upsellDone) {
          // Display monthly amount
          getAll('.js-monthly-gift').forEach(function (el) {
            el.textContent = "$" + numberPipe(String(setMonthlyAmount(donationAmount)));
          });
          setMonthlyAmount(donationAmount); // Open modal

          var modal = new bootstrap.Modal(upsellModal, {
            backdrop: 'static',
            keyboard: false
          });
          modal.show(); // Fire tracking

          if (typeof utag !== 'undefined') {
            utag.link({
              'event_name': 'lightbox_impression',
              'lightbox_name': 'sustainer upsell'
            });
          } // Handle modal clicks


          upsellButton.addEventListener('click', function (e) {
            // Fire tracking
            if (typeof utag !== 'undefined') {
              utag.link({
                'event_name': 'lightbox_click',
                'lightbox_name': 'sustainer upsell'
              });
            } // Select monthly option and proceed to confirmation


            monthlyCheckbox.click();
            otherAmountInput.value = setMonthlyAmount(donationAmount);
            theForm.submit();
          });
          getAll('.btn-close, .btn-continue').forEach(function (el) {
            el.addEventListener('click', function (e) {
              theForm.submit();
            });
          });
          upsellDone = true;
        }
      };

      if (feeCoverCheckbox) {
        // Calculate extra fee cover amount for data layer
        if (feeCoverCheckbox.checked) {
          var totalDonationAmount = Number(theForm.querySelector('[data-token="amount-total"]').textContent.replace(/\$/, '').replace(/\,/g, '')).toFixed(2);
          var originalDonationAmount = getOriginalDonationAmount();
          extraAmount = (totalDonationAmount - originalDonationAmount).toFixed(2);
          donationData.originalDonationAmount = originalDonationAmount;
        }
      }

      if (pageJson.pageType === 'donation' && pageJson.pageNumber === 1) {
        // Maybe save ecard fields for use on seamless ecard page
        if (ecardSelect && ecardFields) {
          if (ecardSelect.querySelector('.en__field__input--checkbox').checked) {
            // Set ecardSelected before saving donationData
            donationData.ecardSelected = 'true';
            ecardData = {};
            ecardData.selectEcard = ecardSelect.querySelector('.en__field__input--radio:checked').value;
            ecardData.recipients = ecardFields.querySelector('.en__field__input--email').value;
            ecardData.message = ecardFields.querySelector('.en__field--ecard-message .en__field__input--textarea').value;
            ecardData.sendDate = ecardFields.querySelector('.datepicker-input').value;
            sessionStorage.setItem('ecardData', JSON.stringify(ecardData));
          } else {
            delete donationData.ecardSelected;
            sessionStorage.removeItem('ecardData');
          }
        } // Save donation data for data layer on confirmation page


        donationData.productId = utag_data.page_name.slice(0, -2);
        donationData.campaignId = typeof pageJson !== 'undefined' ? pageJson.campaignId : '';
        donationData.campaignPageId = typeof pageJson !== 'undefined' ? pageJson.campaignPageId : '';
        donationData.extraAmount = extraAmount;
        donationData.state = theForm.querySelector(supporterStateSelector) ? theForm.querySelector(supporterStateSelector).value : '';
        donationData.zipCode = theForm.querySelector(supporterZipCodeSelector) ? theForm.querySelector(supporterZipCodeSelector).value : '';
        donationData.emailAddress = theForm.querySelector(supporterEmailAddressSelector) ? theForm.querySelector(supporterEmailAddressSelector).value : '';
        sessionStorage.setItem('donationData', JSON.stringify(donationData));
      } // Looking for non-hidden, non-blank mobile phone field and mobile text opt-in to save and pass to SMS platform


      if (mobilePhoneNumber) {
        mobilePhoneData.phoneNumber = mobilePhoneNumber.value;

        if (mobilePhoneOptIn) {
          mobilePhoneData.optIn = 'Y';
        } else {
          mobilePhoneData.optIn = null;
        }

        sessionStorage.setItem('mobilePhoneData', JSON.stringify(mobilePhoneData));
      } // // Maybe track form submit
      // if (trackSubmit) {
      //   trackFormSubmit();
      // }
      // Maybe display upsell modal


      if (hasUpsell && donationAmount >= 5 && donationAmount <= 100 && !monthlyCheckbox.checked) {
        if (isInvalid) {
          if (formIsValid()) {
            doUpsell();
          }
        } else {
          setTimeout(function () {
            if (formIsValid()) {
              doUpsell();
            } else {
              isInvalid = true;
            }
          }, 100);
        }

        return false;
      } else {
        return true;
      }
    };

    window.enOnSubmit = function () {
      // handle async code with promises
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve(); // will allow submit when timeout runs in 1000ms
        }, 1000);
      });
    };
  };
  /**
   * Member care form
   */


  var memberCare = function memberCare() {
    var emailAddress = document.getElementById('en__field_supporter_emailAddress');
    var generateEmailButton = document.getElementById('generateEmail');
    var optIns = getAll('.hide-opt-ins .en__field--question .en__field__input--checkbox');

    var unCheckOptIns = function unCheckOptIns() {
      optIns.forEach(function (el) {
        el.checked = false;
      });
    };

    var checkOptIns = function checkOptIns() {
      optIns.forEach(function (el) {
        el.checked = true;
      });
    }; // Auto check/uncheck opt in checkboxes


    if (emailAddress && generateEmailButton) {
      emailAddress.addEventListener('change', function (e) {
        if (e.target.value.indexOf('fakeemail') > -1) {
          unCheckOptIns();
        } else {
          checkOptIns();
        }
      }); // For anonymous actions, or actions that don't require an email address,
      // the database still needs an email address to be able to store the data.

      generateEmailButton.addEventListener('click', function (e) {
        var theDate = new Date();
        var milliseconds = theDate.getTime();
        var anonAddress = milliseconds + ".first.last@fakeemail.com";
        emailAddress.value = anonAddress;
        triggerEvent(emailAddress, 'change');
      });
    }
  };
  /**
   * Track data capture submits
   */


  var dataCaptureTracking = function dataCaptureTracking() {
    if (pageJson.pageType === 'otherdatacapture') {
      theForm.addEventListener('submit', function (e) {
        setTimeout(function () {
          if (formIsValid() && typeof utag !== 'undefined') {
            utag.link({
              'event_name': 'frm_emt_submit',
              'form_type': 'otherdatacapture',
              'form_name': utag_data.page_name.slice(0, -2),
              'email_signup_location': 'otherdatacapture'
            });
          }
        }, 100);
      });
    }
  };
  /**
   * Track social share clicks
   */


  var socialShareTracking = function socialShareTracking() {
    getAll('.en__socialShare__image').forEach(function (el) {
      el.addEventListener('click', function (e) {
        if (typeof utag !== 'undefined') {
          utag.link({
            'event_name': 'social_share',
            'social_share_id': "preserve.nature.org.share." + e.target.parentElement.dataset.enshare,
            'social_share_platform': e.target.parentElement.dataset.enshare
          });
        }
      });
    });
  };
  /**
   * Track ETT and petition submits
   */


  var advocacyTracking = function advocacyTracking() {
    if (pageJson.pageType === 'advocacypetition' || pageJson.pageType === 'emailtotarget') {
      theForm.addEventListener('submit', function (e) {
        setTimeout(function () {
          if (formIsValid() && typeof utag !== 'undefined') {
            utag.link({
              'event_name': 'frm_emt_submit',
              'form_type': pageJson.pageType,
              'form_name': utag_data.page_name.slice(0, -2),
              'action_id': utag_data.form_name,
              'action_type': pageJson.pageType,
              'zip_code': document.getElementById('en__field_supporter_postcode') ? document.getElementById('en__field_supporter_postcode').value : '',
              'email_signup_location': pageJson.pageType
            });
          }
        }, 100);
      });
    }
  };
  /**
   * Track footer clicks
   */


  var footerTracking = function footerTracking() {
    var footer = document.querySelector('.footer');

    if (footer) {
      getAll('a', footer).forEach(function (el) {
        el.addEventListener('click', function (e) {
          if (typeof utag !== 'undefined') {
            utag.link({
              'event_name': 'footer_nav_click',
              'nav_click_location': "preserve.nature.org.fnav." + e.target.textContent.toLowerCase()
            });
          }
        });
      });
    }
  };
  /**
   * Track url parameters
   */


  var URLTracking = function URLTracking() {
    var params = new URLSearchParams(location.search);
    var trackers = ['src', 'vid', 'vid2', 'en_txn1', 'en_txn2', 'en_txn3', 'en_txn4', 'en_txn5', 'en_txn7', 'en_txn8', 'en_txn9', 'en_txn10'];
    var visitData = sessionStorage.getItem('visitData') ? JSON.parse(sessionStorage.getItem('visitData')) : {}; // Add tracking params as found

    trackers.forEach(function (tracker) {
      if (params.has(tracker)) {
        visitData[tracker] = params.get(tracker);
      }
    });
    sessionStorage.setItem('visitData', JSON.stringify(visitData));
  };
  /**
   * Redirect enhancements
   */


  var redirects = function redirects() {
    // Need to carry appealCode URL param to redirected campaign
    if (typeof pageJson !== 'undefined') {
      if (pageJson.pageNumber === 1 && pageJson.appealCode) {
        // Save appeal code for use on redirect page
        sessionStorage.setItem('appealCode', pageJson.appealCode);
      }
    } // Redirect with appeal code


    if (appealCodeRedirect && sessionStorage.getItem('appealCode')) {
      // The appeal code URL param has already been added to the redirect link with a default value of 'xxx'
      // Replace 'xxx' with saved appeal code
      appealCodeRedirect.setAttribute('href', appealCodeRedirect.getAttribute('href').replace(/xxx/, sessionStorage.getItem('appealCode')));
      sessionStorage.removeItem('appealCode');
      appealCodeRedirect.click();
    }
  };
  /**
   * Confirmation page enhancements
   */


  var confirmation = function confirmation() {
    var donationData = sessionStorage.getItem('donationData');
    var recurringStatus = theForm.querySelector('.js-recurring-status');

    if (window.self !== window.top) {
      // window.parent.postMessage('submitted', '*');
      window.parent.dispatchEvent(iframeSubmitted);
    }

    if (donationData) {
      donationData = JSON.parse(donationData);
    }

    if (recurringStatus) {
      if (window.navigator.userLanguage === 'es-MX' || window.navigator.language === 'es-MX' || window.location.href.indexOf('locale=es-MX') > -1 || pageJson.locale === 'es-MX') {
        recurringStatus.textContent = recurringStatus.textContent === 'ACTIVE' ? 'Mensual' : 'Una vez';
      } else {
        recurringStatus.textContent = recurringStatus.textContent === 'ACTIVE' ? 'Monthly' : 'One-time';
      }
    }
  };
  /**
   * Seamless ecard enhancements
   */


  var seamlessEcard = function seamlessEcard() {
    var ecardData = sessionStorage.getItem('ecardData');
    /**
     * Adds an email address to list of ecard recipients
     *
     * @param {string} recipient The email address to add
     */

    var addEcardRecipient = function addEcardRecipient(recipient) {
      document.querySelector('.en__ecardrecipients__name input').value = 'My Recipient';
      document.querySelector('.en__ecardrecipients__email input').value = recipient;
      document.querySelector('.en__ecarditems__addrecipient').click();
    };

    if (ecardData) {
      setTimeout(function () {
        // Populate fields
        ecardData = JSON.parse(ecardData);
        document.querySelector(".en__ecarditems__thumb:nth-child(" + ecardData.selectEcard + ")").click();
        document.querySelector('.en__ecardmessage__default').value = ecardData.message;
        document.querySelector('.en__ecardrecipients__futureDelivery input').value = ecardData.sendDate.replace(/(..).(..).(....)/, '$3-$1-$2');
        addEcardRecipient(ecardData.recipients); // Cleanup

        sessionStorage.removeItem('ecardData'); // Submit

        document.querySelector('.en__submit button').click();
      }, 1000);
    }
  };
  /**
   * Thermometer enhancements
   */


  var thermometers = function thermometers() {
    // Thermometer goals need to dynamically increase once a certain "raised" is reached
    getAll('.enWidget--progressBar').forEach(function (el) {
      var fill = el.querySelector('.enWidget__fill');
      var raisedPct = parseInt(fill.style.width);
      var raisedNumber = parseInt(el.querySelector('.raised > div').textContent.replace(/\,/g, ''));
      var newGoal = null; // Calculate and display updated therm numbers

      if (raisedPct >= thermThresholdPct) {
        // Reset fill width so that animation runs once new width is set
        fill.style.width = '0';
        newGoal = Math.ceil(raisedNumber * thermIncrease / 1000) * 1000;
        el.querySelector('.remaining > div').textContent = numberPipe(String(newGoal - raisedNumber)).replace(/\.00/, '');
        fill.style.width = raisedNumber / newGoal * 100 + "%";
      } // Therms are hidden with CSS


      setTimeout(function () {
        addClass(el, activeClass);
      }, 100);
    });
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
   * Adds aria-expanded attribute to collapsible elements
   *
   * @param {node} el Target element
   * @param {nodeList} collapsibles List of collapsibles in same component as target
   */


  var addAriaCollapsedAttr = function addAriaCollapsedAttr(el, collapsibles) {
    if (el) {
      var isOpen = hasClass(el, collapseShowClass) ? 'true' : 'false';

      if (collapsibles.length) {
        collapsibles.forEach(function (collapsible) {
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


  var addAriaLabelledBy = function addAriaLabelledBy(el) {
    var maybeLabel = el.firstElementChild;

    if (hasClass(maybeLabel, 'en__field__label')) {
      setTimeout(function () {
        labelId = "label" + generateId();
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


  var addClass = function addClass(el, _classes) {
    if (Array.isArray(_classes)) {
      var _el$classList;

      (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(_classes));
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


  var addEl = function addEl(parentEl, elType, textContent, cls) {
    var el = document.createElement(elType);

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


  var addLabel = function addLabel(el, _parent, txt) {
    return new Promise(function (resolve, reject) {
      el.id = el.id ? el.id : el.name.replace(/\./g, '');
      label = document.createElement('label');
      label.setAttribute('for', el.id);
      label.textContent = txt;
      addClass(label, visuallyHiddenClass);
      label.id = "label" + generateId();

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


  var createImgFromUrl = function createImgFromUrl(textContent, el) {
    var newImg = new Image();
    var altText = textContent.split('~')[0];
    var url = textContent.split('~')[1];

    if (altText && url) {
      el.textContent = '';
      newImg.src = url;
      newImg.setAttribute('alt', altText);
      el.appendChild(newImg);
    }
  };
  /**
   * Creates tooltip element for images
   *
   * @param {node} el The image block to create the tooltip for
   */


  var createImgTooltip = function createImgTooltip(el) {
    var img = el.querySelector('img');

    if (img) {
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
    var field = theForm.querySelector("." + fieldSelector);

    if (field) {
      var popoverContainer = document.createElement('p');
      addClass(popoverContainer, popoverContainerClass);
      var popover = document.createElement('a');
      setAttributes(popover, {
        'data-bs-content': txt,
        'data-bs-toggle': 'popover',
        'data-bs-trigger': 'click focus',
        'role': 'button',
        'tabindex': '0'
      });
      popover.textContent = label;

      switch (placement) {
        case 'before':
          field.insertBefore(popover, field.querySelector('.en__field__element'));
          break;

        case 'after':
          popoverContainer.appendChild(popover);
          getClosestEl(field, enFieldSelector).appendChild(popoverContainer);
          break;

        default:
          field.insertBefore(popover, fiel.querySelector('.en__field__element'));
      }
    }
  };
  /**
   * Removes active class from element
   *
   * @param {node} el The element to remove class from
   */


  var deactivateField = function deactivateField(el) {
    removeClass((el.target || el).parentElement, activeClass);
  };
  /**
   * Disables input elements
   *
   * @param {nodeList} fields The elements to disable
   */


  var disableFields = function disableFields(fields) {
    fields.forEach(function (el) {
      addClass(el, disabledClass);
    });
  };
  /**
   * Adds disabled class to element
   *
   * @param {node} el The element to remove class from
   */


  var disableEl = function disableEl(el) {
    addClass(el, disabledClass);
  };
  /**
   * Removed disabled class from element
   *
   * @param {node} el The element to remove class from
   */


  var enableEl = function enableEl(el) {
    removeClass(el, disabledClass);
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
   * Returns does form pass EN validation
   *
   * @param {node} _parent The node to check for validation errors
   */


  var formIsValid = function formIsValid() {
    var _parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : theForm;

    var errorList = _parent.querySelector('.en__errorList');

    var invalidFields = getAll('.en__field--validationFailed', _parent);
    var valid = true; // Looking for form errors

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
  /**
   * Places focus on first focusable element
   */


  var focusFirst = function focusFirst() {
    var focusables = getAll('button, a:not(.skip), input, select, textarea, [tabindex]:not([tabindex="-1"])');

    if (focusables.length > 0) {
      setTimeout(function () {
        focusables[0].focus();
      }, 500);
    }
  };
  /**
   * Returns a unique ID
   */


  var generateId = function generateId() {
    return Math.round(new Date().getTime() + Math.random() * 100);
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
   * Returns locale of page
   */


  var getLocale = function getLocale() {
    return typeof pageJson !== 'undefined' ? pageJson.locale : 'en-US';
  };
  /**
   * Returns Donation amount without upsell fee or null
   */


  var getOriginalDonationAmount = function getOriginalDonationAmount() {
    var selectedAmount = theForm.querySelector('[name="transaction.donationAmt"]:not([value=""]):checked') || theForm.querySelector(otherAmountInputSelector);
    return selectedAmount ? selectedAmount.dataset.original ? selectedAmount.dataset.original : selectedAmount.value.replace(/\,/g, '') : null;
  };
  /**
   * Returns selected amount radio button or null
   */


  var getSelectedAmount = function getSelectedAmount() {
    return theForm.querySelector('[name="transaction.donationAmt"]:not([value=""]):checked');
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
   * Returns a Facebook sharer URL
   *
   * @param {string} sharerUrl Base Facebook sharer URL
   * @param {string} url The URL to share
   * @returns {string} Share URL
   */


  var makeFacebookUrl = function makeFacebookUrl(sharerUrl, url) {
    url = encodeURIComponent(url.replace(/\?chain/, '') + "?locale=" + getLocale() + "&en_chan=fb");
    return sharerUrl + "?u=" + url;
  };
  /*
   * Returns a Twitter tweet URL
   *
   * @param {string} sharerUrl Base Twitter tweet URL
   * @param {string} text The text to tweet
   * @param {string} url The URL to tweet
   * @returns {string} Tweet URL
   */


  var makeTwitterUrl = function makeTwitterUrl(text, sharerUrl, url) {
    text = encodeURIComponent(text);
    url = encodeURIComponent(url.replace(/\?chain/, '') + "?locale=" + getLocale() + "&en_chan=tw");
    return sharerUrl + "?text=" + text + "&url=" + url;
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
   * Returns Class for form element.
   *
   * @returns {string} Class for form element
   */


  var maybeHasHeroSolid = function maybeHasHeroSolid() {
    return theForm.querySelector('.hero-solid') ? 'has-hero-solid' : 'not-has-hero-solid';
  };
  /**
   * Creates a label from placeholder value and associates it with an input
   *
   * @param {node} el The input element before which the new label is inserted.
   * @param {node} _parent The parent of the newly inserted label.
   */


  var placeholderToLabel = function placeholderToLabel(el, _parent) {
    var label = void 0;

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
   * Dynamically resizes iframe to fit content
   *
   * @param {node} el The iframe to resize
   */


  var resizeIframe = function resizeIframe(el) {
    setTimeout(function () {
      el.style.height = el.contentWindow.document.body.scrollHeight + "px";
    }, 100);
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
   * Returns monthly upsell amount
   *
   * @param {number} amt Original donation amount
   */


  var setMonthlyAmount = function setMonthlyAmount(amt) {
    if (amt >= 5 && amt <= 24) {
      return 5;
    } else if (amt >= 25 && amt <= 50) {
      return 10;
    } else if (amt > 50 && amt <= 100) {
      return 15;
    }
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
      el.textContent = !isNaN(amt) ? "$" + numberPipe(amt) : '';
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
  };
  /**
   * Returns wrapped node.
   *
   * @param {node} nodes The node to wrap.
   * @param {string} wrapperType The node element for the wrapper.
   * @param {string} wrapperClass The class to assign the wrapper
   * @returns Wrapped element
   */


  var wrapEl = function wrapEl(node, wrapperType, wrapperClass) {
    var wrapper = document.createElement(wrapperType);

    if (wrapperClass) {
      addClass(wrapper, wrapperClass);
    }

    node.parentNode.insertBefore(wrapper, node);
    wrapper.appendChild(node);
    return wrapper;
  }; // Before load


  if (ecardRedirect && sessionStorage.getItem('ecardData')) {
    ecardRedirect.click();
  } // On load


  document.addEventListener('DOMContentLoaded', function (e) {
    if (seamlessEcardBlock) {
      seamlessEcard();
    }

    ui();

    if (typeof pageJson !== 'undefined') {
      if (pageJson.pageType === 'donation') {
        donationForm();
      } else if (pageJson.pageType === 'event') {
        eventForm();
      } else if (pageJson.pageType === 'emailtotarget' && pageJson.pageNumber === 1) {
        emailToTarget();
      }

      if (hasClass(body, 'page--hub')) {
        hub();
      }

      if (hasClass(body, 'page--quiz')) {
        quiz();
      }

      if (hasClass(body, 'page--action-center')) {
        actionCenter();
      }

      if (hasClass(body, 'page--confirmation')) {
        confirmation();
      }

      mobilePhone();
      validation();
      formSubmit();
      dataCaptureTracking();
      socialShareTracking();
      advocacyTracking();
      footerTracking();
      URLTracking();
      redirects();
    }

    memberCare();
  });
  window.addEventListener('load', function (e) {
    var checkThermometer = setInterval(function () {
      if (theForm.querySelector('.enWidget--progressBar')) {
        clearInterval(checkThermometer);
        thermometers();
      }
    }, 100);
  });
})();
