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
  var ecardRedirect = document.querySelector('a[data-campaign-id]');
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
  var popoverClass = 'popover';
  var popoverContainerClass = 'popover-container';
  var validClass = 'is-active';
  var validationFailedClass = 'en__field--validationFailed';
  var visuallyHiddenClass = 'visually-hidden'; // Selectors

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
  var informCountrySelect = '#en__field_transaction_infcountry';
  var informStateProvinceSelect = '#en__field_transaction_infreg';
  var mobilePhoneSameAsHomeCheckboxSelector = '#en__field_supporter_questions_891102';
  var mobilePhoneInputSelector = '#en__field_supporter_phoneNumber2';
  var otherAmountSelector = '.en__field--donationAmt .en__field__item--other';
  var otherAmountInputSelector = '.en__field--donationAmt .en__field__input--other';
  var paymentMethodSelector = '[class*="en__field--payment-method"]';
  var paymentMethodRadioSelector = '[class*="en__field--payment-method"].en__field--radio';
  var paymentTypeSelector = '[name="transaction.paymenttype"]';
  var paypalInputSelector = '.en__field--payment-method-paypal .en__field__input--checkbox';
  var stateProvinceSelect = '#en__field_supporter_region';
  var supporterEmailAddressSelector = '#en__field_supporter_emailAddress';
  var supporterStateSelector = '#en__field_supporter_region';
  var supporterZipCodeSelector = '#en__field_supporter_postcode';
  var tipJarSelector = '.en__field--tip-jar';
  var tipJarAmountSelector = '.js-total-gift--tipjar';
  var tipJarToggle = '.tip-jar-toggle';
  var totalAmountSelector = '.js-total-gift';
  var tributeOptionsSelector = 'select#en__field_transaction_trbopts'; // Elements

  var theForm = document.querySelector('.en__component--page'); // Masks

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
  });
  var otherAmountMask = null; // Widgets

  var cleave = null; // Constants

  var thermThresholdPct = 80;
  var thermIncrease = 1.25;
  var tipJarPct = 0.03;
  /**
  * Form interface enhancements
  */

  var ui = function ui() {
    var el = null;
    var els = null;
    var _parent = null;
    var wrap = null;
    var stateProvinceChoices = void 0;
    var informStateProvinceChoices = void 0;
    var currentChoices = void 0;
    /**
     * Set the value of choices when autofill is detected
     *
     * @param {choices} choices choices.js instance to set value for
     * @param {event} e
     */

    var handleChoicesChange = function handleChoicesChange(e) {
      var _target = e.target;

      _target.choices.setValue([{
        value: _target.value,
        label: _target.querySelector("option[value=\"" + _target.value + "\"]").textContent
      }]);

      resetSelect(_target.choices, e);
    };
    /**
    * choices.js removes <options> form the native select
    * Restoring the <options> allows choices.js to work with browser autofill
    *
    * @param {choices} choices choices.js instance to restore options to
    */


    var resetSelect = function resetSelect(_choices, e) {
      var selectOne = _choices.passedElement.element;
      var selectValue = selectOne.value;
      var html = '';
      var index = 1; // Only do this for state selects

      if (_choices._baseId.indexOf('region') > -1) {
        // Clear the native select
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
      }
    };
    /**
    * Creates choices.js instance
    *
    * @param {node} el Target to apply choices to
    */


    var createChoices = function createChoices(el) {
      return new Choices(el, {
        silent: true,
        duplicateItemsAllowed: false,
        itemSelectText: '',
        shouldSort: false,
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
          } // role=textbox is unneccesary in our setup


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


    if (document.querySelector('.quiz')) {
      addClass(body, 'page--quiz');
    } else if (pageJson.pageCount === pageJson.pageNumber) {
      addClass(body, 'page--confirmation');
    } // Set width of full bleed elements


    var scrollbarWidth = window.innerWidth - document.body.clientWidth;
    getAll('.page--quiz .en__component--advrow, .hero-full-bleed').forEach(function (el) {
      el.style.width = "calc(100vw - " + scrollbarWidth + "px)";
      el.style.marginLeft = "calc(-50vw + " + scrollbarWidth / 2 + "px)";
    }); // Dont forget pseudo elements

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
      }); // Move modals to end of main form

      theForm.append(el);
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
    }); // Missing event ticket quanity labels

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
    } // Missing CC expiration year label


    el = theForm.querySelector('.en__field--ccexpire.en__field--splitselect .en__field__item:last-child .en__field__input--splitselect');
    _parent = theForm.querySelector('.en__field--ccexpire.en__field--splitselect .en__field__item:last-child');

    if (el && _parent) {
      addLabel(el, el.parentElement, 'Credit card expiration year').then(function (labelId) {
        var _parent = theForm.querySelector('.en__field--ccexpire.en__field--splitselect .en__field__item:last-child');

        getAll('[role="combobox"], [role="listbox"]', _parent).forEach(function (el) {
          el.setAttribute('aria-labelledby', labelId);
        });
      });
    } // Radio element accessibility


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

    el = theForm.querySelector('.en__field--ecard-select-an-ecard');

    if (el) {
      getAll('.en__field__label--item', el).forEach(function (el) {
        createImgFromUrl(el.textContent, el);
      });
    } // Add mask and inputmode attribute for currency fields


    getAll('[name*="Amt"]:not([name*="Amt2"]):not([name*="Amt3"]):not([name*="Amt4"]), [name*="amt"]:not([name*="amt2"]):not([name*="amt3"]):not([name*="amt4"]), input[type="text"].en__additional__input').forEach(function (el) {
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
    }); // Add inputmode attribute for credit card fields

    getAll('[name*="ccnumber"], [name*="ccvv"]').forEach(function (el) {
      el.setAttribute('inputmode', 'numeric');
    }); // Display minimum donation amount

    el = theForm.querySelector(donationAmountSelector) || theForm.querySelector(otherAmountSelector);

    if (el) {
      // Getting the minimum amount from the EN validator
      var minAmountValidator = EngagingNetworks.validators.filter(function (obj) {
        if (obj.format) {
          return obj.format.indexOf('~') > -1;
        }

        return false;
      });

      if (minAmountValidator[0]) {
        // Add paragraph with min amount underneath Other Amount field
        addEl(el, 'p', "$" + minAmountValidator[0].format.split('~')[0] + " minimum", 'fw-medium');
      }
    } // Other amount field is always visible, so the corresponding radio need to be button clicked here even though hidden


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
    }); // Paypal checkbox needs to hide credit card blocks and set payment type

    el = theForm.querySelector(paypalInputSelector);
    _parent = theForm.querySelector(paymentMethodSelector);

    if (el && _parent) {
      el.addEventListener('click', function (e) {
        var paymentType = theForm.querySelector(paymentTypeSelector);
        _parent = getClosestEl(_parent, '.en__component--formblock');

        if (e.target.checked) {
          addClass(_parent, paypalSelectedClass);

          if (paymentType) {
            paymentType.value = 'Paypal';
          }
        } else {
          removeClass(_parent, paypalSelectedClass);
        }
      });
    } // ACH button needs to set payment type


    el = theForm.querySelector('.en__field--payment-method-cc-and-ach-');

    if (el) {
      el.addEventListener('click', function (el) {
        var paymentType = theForm.querySelector(paymentTypeSelector);

        if (paymentType) {
          paymentType.value = 'ACH';
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
    }); // Each photo in hero and sidebar elements needs description and meta info popover

    getAll('.en__component--imageblock').forEach(function (el) {
      createImgTooltip(el);
    }); // Create popovers elements

    if (typeof popoverTranslations !== 'undefined') {
      popoverTranslations.forEach(function (translation) {
        createPopover(translation.field, translation.placement, translation[pageJson.locale].label, translation[pageJson.locale].text);
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
    var donationAmt = theForm.querySelector('.en__field--donationAmt');
    var otherAmountInput = theForm.querySelector(otherAmountInputSelector);
    var tipJar = theForm.querySelector('.en__field--tip-jar');
    var donationAmtRadios = null;
    var tipJarCheckbox = null;
    var tipJarUserChecked = false;

    var disableTipJar = function disableTipJar() {
      restoreDonationAmounts();
      updateTotalGift(getOriginalDonationAmount());
      addClass(tipJar, disabledClass);
    };

    var enableTipJar = function enableTipJar() {
      removeClass(tipJar, disabledClass);
    };

    var increaseDonationAmounts = function increaseDonationAmounts() {
      if (otherAmountInput) {
        if (otherAmountInput.value !== '') {
          otherAmountInput.dataset.tipjar = getTipJar(otherAmountInput.value);
          return;
        }
      }

      getAll('.en__field__input--radio:not([value=""])', donationAmt).forEach(function (el) {
        if (!el.dataset.original) {
          el.dataset.original = el.value.replace(/\,/g, '');
        }

        el.value = getTipJar(el.dataset.original).replace(/\,/g, '');
      });
    };

    var restoreDonationAmounts = function restoreDonationAmounts() {
      getAll('.en__field__input--radio:not([value=""])', donationAmt).forEach(function (el) {
        el.value = el.dataset.original ? el.dataset.original : el.value.replace(/\,/g, '');
      });
    };

    var updateDonationAmounts = function updateDonationAmounts(el, fieldType) {
      if (el.checked) {
        increaseDonationAmounts();
      } else {
        restoreDonationAmounts();
      }
    };

    var maybeUncheckTipJar = function maybeUncheckTipJar(amt) {
      if (!tipJarUserChecked && !isNaN(amt)) {
        if (Number(amt) >= 1000) {
          tipJarCheckbox.checked = false;
          triggerEvent(tipJarCheckbox, 'click');
        }
      }
    };

    var toggleTipJar = function toggleTipJar(el) {
      var toggle = theForm.querySelector(tipJarToggle);

      if (toggle) {
        toggle.style.display = el.checked ? 'inline' : 'none';
      }
    };

    if (theForm.action.indexOf('donate') > -1 && pageJson.pageNumber === 1) {
      if (donationAmt) {
        donationAmtRadios = getAll('.en__field__input--radio:not([value=""])', donationAmt); // Display tip jar amount

        el = theForm.querySelector(tipJarSelector);

        if (el) {
          updateTipJar(getTipJar(getOriginalDonationAmount()));
          updateTotalGift(getTipJar(getOriginalDonationAmount()));
        } else {
          updateTotalGift(getOriginalDonationAmount());
        } // Maybe a tip jar?


        if (tipJar && tipJarPct) {
          tipJarCheckbox = tipJar.querySelector('.en__field__input--checkbox'); // Handle tip jar click

          tipJarCheckbox.addEventListener('click', function (e) {
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
        } // Handle donation amount change


        var handleDonationAmountChange = function handleDonationAmountChange(e) {
          if (tipJarCheckbox) {
            maybeUncheckTipJar(getOriginalDonationAmount());
            updateDonationAmounts(tipJarCheckbox);
            updateTipJar(getTipJar(getOriginalDonationAmount()));
            updateTotalGift(tipJarCheckbox.checked ? getTipJar(getOriginalDonationAmount()) : e.target.value);
          } else {
            updateTotalGift(e.target.value);
          }
        };

        donationAmtRadios.forEach(function (el) {
          el.addEventListener('click', handleDonationAmountChange);
        });

        if (otherAmountInput) {
          otherAmountInput.addEventListener('input', handleDonationAmountChange);
        }
      }
    }

    var initPhoneFields = function initPhoneFields() {
      var mobilePhoneInput = theForm.querySelector(mobilePhoneInputSelector);
      var homePhoneInput = theForm.querySelector(homePhoneInputSelector);
      var mobileSameAsHomeCheckbox = theForm.querySelector(mobilePhoneSameAsHomeCheckboxSelector);
      var submitButton = theForm.querySelector('.en__submit button');

      if (mobilePhoneInput.value.length && homePhoneInput.value.length && homePhoneInput.value !== mobilePhoneInput.value && mobileSameAsHomeCheckbox.checked) {
        mobileSameAsHomeCheckbox.click();
      } else if (mobilePhoneInput.value.length === 0 && homePhoneInput.value.length && mobileSameAsHomeCheckbox.checked) {
        mobilePhoneInput.disabled = false;
        mobilePhoneInput.value = homePhoneInput.value;
      }

      var setMobilePhoneField = function setMobilePhoneField(e) {
        if (e.target.checked) {
          //override EN's diabling of the field
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


      mobileSameAsHomeCheckbox.addEventListener('change', setMobilePhoneField); //attach event hanfler to the home input

      homePhoneInput.addEventListener('input', syncMobilePhoneField);
    }; //if all three fields are present


    if (theForm.querySelectorAll(mobilePhoneInputSelector).length && theForm.querySelectorAll(homePhoneInputSelector).length && theForm.querySelectorAll(mobilePhoneSameAsHomeCheckboxSelector).length) {
      //initialize phone field features
      initPhoneFields();
    }
  };
  /**
  * Quiz form enhancements
  */


  var quiz = function quiz() {
    var leadGenModal = theForm.querySelector('.modal--lead-gen');
    var el = null;
    var score = 0; // Maybe display lead gen modal

    if (leadGenModal) {
      var modal = new bootstrap.Modal(leadGenModal, {
        backdrop: 'static',
        keyboard: false
      });
      modal.show(); // Handle modal submit button click

      leadGenModal.querySelector('.btn').addEventListener('click', function (e) {
        setTimeout(function () {
          if (formIsValid(leadGenModal)) {
            modal.hide();
            focusFirst();
          }
        }, 100);
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
        var _target = e.target;
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
  * Event form enhancements
  */


  var events = function events() {
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
        el.textContent = totalAmount.toFixed(2);
      }); // Save total for use on billing page

      sessionStorage.setItem('savedTotalAmount', totalAmount);
    };

    var getPromoDiscount = function getPromoDiscount() {
      return true;
    }; // Make ticket quantity field readonly to avoid invalid ticket numbers


    getAll('.en__ticket__quantity').forEach(function (el) {
      el.readOnly = true;
      el.setAttribute('tabindex', '-1');
    }); // Add ticket quantity plus/minus to tab order

    getAll('.en__ticket__minus, .en__ticket__plus').forEach(function (el) {
      el.setAttribute('tabindex', '0');
    }); // Strip currency indicators

    getAll('.en__orderSummary__data--cost, .en__orderSummary__data--totalAmount').forEach(function (el) {
      el.textContent = el.textContent.replace(/USD/, '');
    }); // Strip label colons

    getAll('.en__orderSummary__header').forEach(function (el) {
      el.textContent = el.textContent.replace(/\:/, '');
    }); // Maybe on page 1

    if (pageNumber === 1) {
      // Maybe add waitlist links
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
      }); // Init total amount

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
      // Display total amount
      el = theForm.querySelector('.en__orderSummary__data--totalAmount');

      if (el) {
        getAll(totalAmountSelector).forEach(function (el) {
          el.textContent = "$" + el.textContent;
        });
      } // Customize order summary table


      getAll('.en__orderSummary__item').forEach(function (el) {
        var itemType = el.querySelector('.en__orderSummary__data--type');
        var itemQuantity = el.querySelector('.en__orderSummary__data--quantity').textContent;
        itemType.textContent = itemQuantity + "x  " + itemType.textContent;
        hasPromo = getPromoDiscount(el) || hasPromo;
      }); // Maybe add promo discount line

      el = theForm.querySelector('.en__orderSummary__data--totalAmount');
      _parent = theForm.querySelector('.en__orderSummary');

      if (savedTotalAmount && hasPromo && el && _parent) {
        totalAmount = Number(el.textContent);
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
      }
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
      //theForm.addEventListener('submit', e => {
      //  e.preventDefault();
      //});
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
    var submitButton = theForm.querySelector('.en__submit button');
    var otherAmountInput = theForm.querySelector(otherAmountInputSelector);
    var savedSubmit = void 0;
    var otherAmountOriginal = null; // Don't submit form on ENTER if focused on an input

    window.addEventListener('keydown', function (e) {
      if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
        if (e.target.nodeName == 'INPUT') {
          e.preventDefault();
          return false;
        }
      }
    }, true);

    var setMonthlyAmount = function setMonthlyAmount(amt) {
      if (amt >= 10 && amt <= 24) {
        return 5;
      } else if (amt >= 25 && amt < 50) {
        return 10;
      } else if (amt >= 50 && amt <= 100) {
        return 15;
      }
    };

    var doSubmit = function doSubmit() {
      // Restore the EN form submit handler
      theForm.submit = savedSubmit;
      theForm.submit();
    }; // Maybe an upsell modal


    if (hasUpsell) {
      // A valid form always wants to submit, so
      // save the EN form submit handler then remove it if the upsell modal is present      
      savedSubmit = theForm.submit;
      theForm.submit = null;
    }

    if (submitButton) {
      submitButton.addEventListener('click', function (e) {
        var otherAmountValue = void 0;
        var donationAmount = parseFloat(getTotalDonationAmount()); // Set other amount field to tip jar amount if needed

        if (otherAmountInput && !getSelectedAmount()) {
          if (otherAmountInput.value !== '') {
            otherAmountOriginal = otherAmountInput.value;
            otherAmountInput.value = otherAmountInput.dataset.tipjar ? otherAmountInput.dataset.tipjar : otherAmountInput.value;
          } // Restore other amount value if validation errors


          setTimeout(function () {
            if (!formIsValid()) {
              otherAmountInput.value = otherAmountOriginal;
            }
          });
        } // Maybe display upsell modal


        if (hasUpsell) {
          if (donationAmount >= 10 && donationAmount <= 100) {
            setTimeout(function () {
              if (formIsValid()) {
                if (!monthlyCheckbox.checked) {
                  // Open modal
                  var modal = new bootstrap.Modal(upsellModal, {
                    backdrop: 'static',
                    keyboard: false
                  });
                  modal.show(); // Handle modal clicks

                  upsellButton.addEventListener('click', function (e) {
                    monthlyCheckbox.click();
                    otherAmountInput.value = setMonthlyAmount(donationAmount);
                    doSubmit();
                  });
                  getAll('.btn-close, .btn-continue').forEach(function (el) {
                    el.addEventListener('click', function (e) {
                      doSubmit();
                    });
                  });
                } else {
                  doSubmit();
                }
              }
            }, 100);
          } else {
            doSubmit();
          }
        }
      });
    }

    theForm.addEventListener('submit', function (e) {
      var tipJar = theForm.querySelector('.en__field--tip-jar');
      var ecardSelect = theForm.querySelector(ecardSelectSelector);
      var ecardFields = theForm.querySelector(ecardFieldsSelector);
      var extraAmount = 0;
      var donationData = {};
      var ecardData = {};

      var getEcardRecipients = function getEcardRecipients(ecardFields) {
        var recipientsInput = ecardFields.querySelector('.en__field__input--textarea');
        var recipientEmails = void 0;
        var validEmails = [];
        var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (recipientsInput) {
          recipientEmails = recipientsInput.value.replace(/\s/g, '').split(',');

          for (var i = 0; i < recipientEmails.length; i++) {
            if (recipientEmails[i] !== "" || regex.test(recipientEmails[i])) {
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
            var totalDonationAmount = getTotalDonationAmount();
            var originalDonationAmount = otherAmountOriginal || getOriginalDonationAmount();
            extraAmount = (totalDonationAmount - originalDonationAmount).toFixed(2);
            donationData.originalDonationAmount = originalDonationAmount;
          }
        } // Maybe save ecard fields for use on seamless ecard page


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
        } // Looking for URL tracking params to pass to data layer on confirmation page


        var trackingParams = new URLSearchParams(location.search);
        donationData.src = trackingParams.has('src') ? trackingParams.get('src') : '';
        donationData.vid = trackingParams.has('vid') ? trackingParams.get('vid') : '';
        donationData.vid2 = trackingParams.has('vid2') ? trackingParams.get('vid2') : ''; // Save non-pageJson data for data layer on confirmation page

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


  var confirmation = function confirmation() {
    var donationData = sessionStorage.getItem('donationData');
    var recurringStatus = theForm.querySelector('.js-recurring-status');

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
      ecardData = JSON.parse(ecardData);
      document.querySelector(".en__ecarditems__thumb:nth-child(" + ecardData.selectEcard + ")").click();
      document.querySelector('.en__ecardmessage__default').value = ecardData.message;
      document.querySelector('[name="ecard.schedule"]').value = ecardData.sendDate.replace(/(..).(..).(....)/, '$3-$1-$2');
      ecardData.recipients.forEach(function (recipient) {
        addEcardRecipient(recipient);
      });
      sessionStorage.removeItem('ecardData');
      document.querySelector('.en__submit button').click();
    }
  };
  /**
  * Thermometer enhancements
  */


  var thermometers = function thermometers() {
    // Thermometer goals need to dynaically increase once a certain "raised" is reached
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
   * @param {nodeList} collapsibles List of collapsibles in same comnponent as target
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
    var maybeLabel = el.firstElementChild; //if (maybeLabel.nodeName.toLowerCase() === 'label') {

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
   * Removes active class to element
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
      el.disabled = true;
    });
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
    var focusables = getAll('button, a, input, select, textarea, [tabindex]:not([tabindex="-1"])');

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
   * Returns Donation amount with tip jar added
   *
   * @param {string} amt Daontion amount to add tip to
   */


  var getTipJar = function getTipJar(amt) {
    if (typeof amt === 'string') {
      amt = amt.replace(/\,/g, '');
      return !isNaN(amt) ? (parseFloat(amt) + parseFloat(amt) * tipJarPct).toFixed(2) : '';
    }
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
  * Updates everywhere tip jar amount is displayed.
  *
  * @param {string} amt Total donation amount
  */


  var updateTipJar = function updateTipJar(amt) {
    getAll(tipJarAmountSelector).forEach(function (el) {
      el.textContent = !isNaN(amt) ? "$" + numberPipe(amt) : '';
    });
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
  window.addEventListener('load', function (e) {
    thermometers();
  });
})();
