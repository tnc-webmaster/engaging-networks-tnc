(function() {
  let root = document.documentElement
  let body = document.body
  const appealCodeRedirect = document.querySelector('a[data-campaign-id][href*="appealCode"]')
  const ecardRedirect = document.querySelector('a[data-campaign-id][href*="action"]')
  const seamlessEcardBlock = document.querySelector('.seamless-ecard')

  // Classes
  const activeClass = 'is-active'
  const advocacyShareClass = 'advocacy-share-bar-block'
  const collapseShowClass = 'show'
  const disabledClass = 'disabled'
  const displayClass = 'd-block'
  const errorBoxClass = 'error-box'
  const hiddenClass = 'd-none'
  const hiddenWebOnlyClass = 'd-none--web'
  const paypalSelectedClass = 'paypal-selected'
  const photoInfoClass = 'photo-info'
  const popoverContainerClass = 'popover-container'
  const validClass = 'is-active'
  const validationFailedClass = 'en__field--validationFailed'
  const visuallyHiddenClass = 'visually-hidden'

  // Selectors
  const ccExpMonthSelect = '#en__field_transaction_ccexpire'
  const ccExpYearSelect = '.en__field--ccexpire .en__field__item:last-child select'
  const ccNumberFieldSelector = '.en__field--ccnumber'
  const ccNumberInputSelector = '#en__field_transaction_ccnumber'
  const countrySelect = '#en__field_supporter_country'
  const dateInputSelector = '.en__field[class*="date"] .en__field__input--text, .en__field--888858 .en__field__input--text'
  const donationAmountSelector = '.en__field--donationAmt .en__field__element--text'
  const ecardFieldsSelector = '.ecard-fields'
  const ecardSelectSelector = '.ecard-select'
  const errorSelector = '.en__field__error'
  const enFieldSelector = '.en__field'
  const enFieldItemSelector = '.en__field__item'
  const giftDesignationSelect = '#en__field_transaction_dirgift'
  const homePhoneInputSelector = '#en__field_supporter_phoneNumber'
  const honoreeCountrySelect = '#en__field_supporter_NOT_TAGGED_38'
  const honoreeStateProvinceSelect = '#en__field_supporter_NOT_TAGGED_35'
  const informCountrySelect = '#en__field_transaction_infcountry'
  const informStateProvinceSelect = '#en__field_transaction_infreg'
  const mobilePhoneSameAsHomeCheckboxSelector = '#en__field_supporter_questions_891102, .en__field--my-mobile-phone-is-the-same-as-my-primary-phone .en__field__input--checkbox'
  const mobilePhoneInputSelector = '#en__field_supporter_phoneNumber2'
  const otherAmountSelector = '.en__field--donationAmt .en__field__item--other'
  const otherAmountInputSelector = '.en__field--donationAmt .en__field__input--other, .en__field--donationAmt .en__field__input--text'
  const paymentMethodSelector = '[class*="en__field--payment-method"]'
  const paymentMethodRadioSelector = '[class*="en__field--payment-method"].en__field--radio'
  const paymentTypeSelector = '[name="transaction.paymenttype"]'
  const paypalInputSelector = '.en__field--payment-method-paypal .en__field__input--checkbox'
  const stateProvinceSelect = '#en__field_supporter_region'
  const supporterEmailAddressSelector = '#en__field_supporter_emailAddress'
  const supporterStateSelector = '#en__field_supporter_region'
  const supporterZipCodeSelector = '#en__field_supporter_postcode'
  const totalAmountSelector = '.js-total-gift'
  const tributeOptionsSelector = 'select#en__field_transaction_trbopts'

  // Custom events
  const iframeReady = new CustomEvent('iframeReady')
  const iframeSubmitted = new CustomEvent('iframeSubmitted')

  // Elements
  const theForm = document.querySelector('.en__component--page') || document.querySelector('.main')

  // Masks
  const numberPipe = IMask.createPipe({
    mask: 'num',
    blocks: {
      num: {
        mask: Number,
        thousandsSeparator: ',',
        padFractionalZeros: true,
        radix: '.'
      }
    }
  })

  // Widgets
  let cleave = null

  // Constants
  const thermThresholdPct = 80
  const thermIncrease = 1.25

  /**
   * Form interface enhancements
   */
  const ui = () => {
    let el = null
    let els = null
    let _parent = null
    let stateProvinceChoices = null
    let honoreeStateProvinceChoices = null
    let informStateProvinceChoices = null
    let currentChoices = null

    /**
     * Set the value of choices when autofill is detected
     *
     * @param {choices} choices choices.js instance to set value for
     * @param {event} e
     */
    const handleChoicesChange = e => {
      const _target = e.target

      // Don't reset drop downs in event attendee details block
      if (e.composedPath().indexOf(document.querySelector('.en__registrants__registrantDetails')) === -1) {
        _target.choices.setValue([{
          value: _target.value,
          label: _target.querySelector(`option[value="${_target.value}"]`).textContent,
        }])
        resetSelect(_target.choices, e)
      }
    }

    /**
     * choices.js removes <options> form the native select
     * Restoring the <options> allows choices.js to work with browser autofill
     *
     * @param {choices} choices choices.js instance to restore options to
     */

    const resetSelect = (_choices, e) => {
      const selectOne = _choices.passedElement.element
      const selectValue = selectOne.value

      // Clear the native select
      selectOne.innerHTML = ''
      //Remove the duplicate that this method generates at bottom of list
      if (e) {
        _choices.choiceList.element.removeChild(_choices.choiceList.element.lastChild)
      }
      // Re-add all <options> to native select
      getAll('.choices__item', _choices.choiceList.element).forEach(el => {
        let choiceSelected = el.dataset.value === selectValue ? true : false
        let opt = document.createElement('option')

        opt.value = el.dataset.value
        opt.text = el.textContent
        opt.selected = choiceSelected
        selectOne.add(opt, null)
      })
      currentChoices = _choices
      selectOne.choices = _choices
      // Listen for an autofill (change event)
      selectOne.removeEventListener('change', handleChoicesChange)
      selectOne.addEventListener('change', handleChoicesChange)
    }

    /**
     * Creates choices.js instance
     *
     * @param {node} el Target to apply choices to
     */
    const createChoices = el => {
      return new Choices(el, {
        silent: true,
        addItems: false,
        duplicateItemsAllowed: false,
        itemSelectText: '',
        searchResultLimit: 100,
        shouldSort: false,
        fuseOptions: {
          distance: 0,
        },
        callbackOnInit: function() {
          const _choices = this
          const label = theForm.querySelector(`label[for="${_choices.passedElement.element.id}"]`)
          const choicesId = `choices${generateId()}`

          _choices.enable()
          if (label) {
            // Add aria attributes to combobox
            _choices.containerOuter.element.setAttribute('aria-label', label.textContent)
            setAttributes(_choices.containerOuter.element, {
              'aria-label': label.textContent,
              'aria-owns': choicesId,
            })
            // Add aria attributes to listbox
            _choices.choiceList.element.setAttribute('aria-label', `Select ${label.textContent.replace(/Select/, '')}`)
            _choices.choiceList.element.id = choicesId
          }

          // restrict the search field to one character to avoid false results
          //_choices.input.element.setAttribute('maxlength', '1');

          // role=textbox is unnecessary in our setup
          getAll('[role="textbox"]', _choices.containerOuter.element).forEach(el => {
            el.removeAttribute('role')
          })
          resetSelect(_choices, null)
        },
      })
    }

    /**
     * Destroys a choices.js instance
     *
     * @param {choices} choices choices.js instance to destroy
     */
    const destroyChoices = (_choices, selector) => {
      _choices.clearInput()
      _choices.destroy()
      _choices = null
    }

    // Add body classes
    if (typeof pageJson !== 'undefined') {
      addClass(body, `page--${pageJson.pageNumber}`)
    }
    if (document.querySelector('.quiz')) {
      addClass(body, 'page--quiz')
    } else if (document.querySelector('.hub')) {
      addClass(body, 'page--hub')
    } else if (document.querySelector('.related-actions.card')) {
      addClass(body, 'has-related-actions')
    } else if (document.querySelector('.action-center')) {
      addClass(body, 'page--action-center')
    } else if (typeof pageJson !== 'undefined') {
      if (pageJson.pageCount === pageJson.pageNumber) {
        addClass(body, 'page--confirmation')
      }
    }

    // Set width of full bleed elements
    const scrollbarWidth = window.innerWidth - document.body.clientWidth
    getAll('.page--quiz .en__component--advrow, .page--hub.page--1 .en__component--advrow, .hero-full-bleed').forEach(el => {
      el.style.width = `calc(100vw - ${scrollbarWidth}px)`
      el.style.marginLeft = `calc(-50vw + ${scrollbarWidth / 2}px)`
    })
    // Don't forget pseudo elements
    root.style.setProperty('--scrollbarWidth', `${scrollbarWidth}px`)

    // Initiate choices.js
    getAll(`select:not(${stateProvinceSelect}):not(${informStateProvinceSelect}):not(${giftDesignationSelect})`).forEach(el => {
      createChoices(el)
    })

    // OOB FB share only opens new window if image inside button is clicked
    getAll('a.en__socialShare--facebook').forEach(el => {
      el.addEventListener('click', e => {
        const img = e.currentTarget.querySelector('.en__socialShare__image')

        if (img) {
          // Don't let social share dialog open in same tab
          e.preventDefault()
          // The image opens the new window
          img.click()
          triggerEvent(img, 'click')
        }
      })
    })

    // Structure modals
    els = getAll('.modal-header, .modal-body, .modal-footer')
    if (els.length > 0) {
      wrapAll(els, 'div', 'modal-content')
    }
    getAll('.modal-content').forEach(el => {
      wrapEl(el, 'div', ['modal-dialog', 'modal-lg'])
    })

    getAll('.modal').forEach(el => {
      // Add attributes
      setAttributes(el, {
        'data-bs-backdrop': 'static',
        'data-bs-keyboard': 'false',
        'data-bs-dismiss': 'false',
        'tabindex': '-1',
        'aria-labelledby': 'modalTitle',
        'aria-hidden': 'true',
      })
    })

    // Allow EN swap lists for billing state/province field
    el = theForm.querySelector(stateProvinceSelect)
    if (el) {
      stateProvinceChoices = createChoices(el)
    }

    // Allow EN swap lists on country field change
    el = theForm.querySelector(countrySelect)
    if (el) {
      if (stateProvinceChoices) {
        el.addEventListener('change', e => {
          // Rebuild state/province choices
          destroyChoices(stateProvinceChoices)
          setTimeout(function() {
            stateProvinceChoices = createChoices(theForm.querySelector(stateProvinceSelect))
          }, 100)
        })
      }
    }

    // Allow EN swap lists for honoree state/province field
    el = theForm.querySelector(honoreeStateProvinceSelect)
    if (el) {
      honoreeStateProvinceChoices = createChoices(el)
    }

    // Allow EN swap lists on country field change
    el = theForm.querySelector(honoreeCountrySelect)
    if (el) {
      if (honoreeStateProvinceChoices) {
        el.addEventListener('change', e => {
          // Rebuild state/province choices
          destroyChoices(honoreeStateProvinceChoices)
          setTimeout(function() {
            honoreeStateProvinceChoices = createChoices(theForm.querySelector(honoreeStateProvinceSelect))
          }, 100)
        })
      }
    }

    // Allow EN swap lists for person to be notified state/province field
    el = theForm.querySelector(informStateProvinceSelect)
    if (el) {
      informStateProvinceChoices = createChoices(el)
    }

    // Allow EN swap lists on person to be notified country field change
    el = theForm.querySelector(informCountrySelect)
    if (el) {
      if (informStateProvinceChoices) {
        el.addEventListener('change', e => {
          // Rebuild state/province choices
          destroyChoices(informStateProvinceChoices)
          setTimeout(function() {
            informStateProvinceChoices = createChoices(theForm.querySelector(informStateProvinceSelect))
          }, 100)
        })
      }
    }

    // Allow EN swap value for gift designation field
    el = theForm.querySelector(giftDesignationSelect)
    if (el) {
      giftDesignationChoices = createChoices(el)

      getAll('.en__field--gift-designation-managed-donors-yn .en__field__input--radio').forEach(el => {
        if (giftDesignationChoices) {
          el.addEventListener('click', e => {
            // Rebuild gift designation choices
            destroyChoices(giftDesignationChoices)
            setTimeout(function() {
              giftDesignationChoices = createChoices(theForm.querySelector(giftDesignationSelect))
            }, 100)
          })
        }
      })
    }

    /**
     * Shows tribute headings that match headingClass
     *
     * @param {string} headingClass Class of headings to show
     */
    const showTributeHeadings = (headingClass) => {
      // Hide everything
      getAll('.heading-honor, .heading-memory, .heading-gift').forEach(el => {
        addClass(el, hiddenWebOnlyClass)
      })
      // Show the right heading
      getAll(headingClass).forEach(el => {
        removeClass(el, hiddenWebOnlyClass)
      })
    }

    // Selecting a tribute option might change headings on the form
    el = theForm.querySelector(tributeOptionsSelector)
    if (el) {
      el.addEventListener('change', e => {
        switch (e.target.value) {
          case 'In Honor':
            showTributeHeadings('.heading-honor')
            break
          case 'In Memory':
            showTributeHeadings('.heading-memory')
            break
          case 'Gift':
            showTributeHeadings('.heading-gift')
            break
        }
      })
    }

    // Is there a full bleed hero?
    addClass(document.body, maybeHasHero())

    // Is there a solid color hero?
    addClass(document.body, maybeHasHeroSolid())

    // Is there a processing error?
    els = getAll('.en__errorHeader, .en__errorList')
    if (els.length > 0 && !isEmpty(theForm.querySelector('.en__errorList'))) {
      wrapAll(els, 'div', errorBoxClass)
      trackProcessingErrors()
    }

    // Advocacy share text and share buttons blocks need to be wrapped for layout
    els = getAll('.advocacy-share-bar, .advocacy-share-bar + .en__component--socialshareblock')
    if (els.length > 0) {
      wrapAll(els, 'div', advocacyShareClass)
    }

    // Placeholders for some inputs
    getAll(otherAmountInputSelector).forEach(el => {
      const fieldItem = getClosestEl(el, enFieldItemSelector)

      if (fieldItem) {
        addPlaceholder(el, fieldItem.previousElementSibling.querySelector('label').textContent)
      }
    })

    // Placeholders for address 2 fields
    getAll('[name*="address2"], [name*="add2"]').forEach(el => {
      el.setAttribute('placeholder', 'Apt, ste, bldg.')
    })

    // Hard code placeholder for date fields
    getAll(dateInputSelector).forEach(el => {
      addPlaceholder(el, 'Select Date')
    })

    // Maybe convert event address to Google maps link
    getAll('.link-to-map address').forEach(el => {
      const wrap = wrapEl(el, 'a')

      if (wrap) {
        setAttributes(wrap, {
          'href': `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(el.textContent)}`,
          'target': '_blank',
        })
      }
    })

    // Wrap event ticket selector
    getAll('.en__ticket__selector').forEach(el => {
      els = getAll('.en__ticket__minus, .en__ticket__quantity, .en__ticket__plus', el)
      if (els.length > 0) {
        wrapAll(els, 'div', 'input-group')
      }
    })

    // Missing event ticket quantity labels
    getAll('.en__ticket__quantity').forEach(el => {
      addLabel(el, el.parentElement, 'Quantity')
    })

    // Missing additional donation label
    getAll('.en__additional__input').forEach(el => {
      addLabel(el, el.parentElement, 'Additional donation (optional)')
    })

    // Missing promo code label
    getAll('.en__additional__code').forEach(el => {
      addLabel(el, el.parentElement, 'Promo code')
    })

    // Move additional donation fields
    el = theForm.querySelector('.en__additional__amount')
    _parent = theForm.querySelector('.form-heading--additional')
    if (el && _parent) {
      _parent.append(el)
    }

    // Move promo code field
    el = theForm.querySelector('.en__additional__promo')
    _parent = theForm.querySelector('.form-heading--promo')
    if (el && _parent) {
      _parent.append(el)
    }

    // Wrap additional donation and promo code fields
    els = getAll('.form-heading--additional, .form-heading--promo')
    if (els.length > 0) {
      wrapAll(els, 'div', ['row', 'justify-content-between', 'additional-promo'])
    }

    // Missing split select labels
    el = theForm.querySelector('.en__field--ccexpire.en__field--splitselect .en__field__item:last-child .en__field__input--splitselect')
    _parent = theForm.querySelector('.en__field--ccexpire.en__field--splitselect .en__field__item:last-child')
    if (el && _parent) {
      addLabel(el, el.parentElement, 'Credit card expiration year').then(labelId => {
        const _parent = theForm.querySelector('.en__field--ccexpire.en__field--splitselect .en__field__item:last-child')

        getAll('[role="combobox"], [role="listbox"]', _parent).forEach(el => {
          el.setAttribute('aria-labelledby', labelId)
        })
      })
    }

    // Missing triple select labels
    getAll('.en__field--tripleselect').forEach(el => {
      const label = el.querySelector('.en__field__label')

      if (label) {
        labelId = label.id ? label.id : `label${generateId()}`
        label.id = labelId

        getAll('[role="combobox"], [role="listbox"]', el).forEach(el => {
          el.setAttribute('aria-labelledby', labelId)
        })
      }
    })

    // Radio element accessibility
    getAll('.en__field--radio').forEach(el => {
      // Some radio elements have loose labels
      const looseLabel = el.querySelector('label:first-child')
      let replaceLabel = null

      if (looseLabel) {
        replaceLabel = document.createElement('p')
        replaceLabel.textContent = looseLabel.textContent
        replaceLabel.id = looseLabel.id
        replaceLabel.classList = looseLabel.classList
        looseLabel.parentNode.replaceChild(replaceLabel, looseLabel)
      }

      // Add aria role
      el.setAttribute('role', 'radiogroup')
      if (hasClass(el, 'en__field--donationAmt')) {
        el.setAttribute('aria-labelledby', 'giftAmountLabel')
      } else {
        addAriaLabelledBy(el)
      }
    })

    // Checkbox element accessibility
    getAll('.en__field--checkbox.en__field--survey').forEach(el => {
      // Some checkbox elements have loose labels
      const looseLabel = el.querySelector('label:first-child')
      let replaceLabel = null

      if (looseLabel) {
        replaceLabel = document.createElement('p')
        replaceLabel.textContent = looseLabel.textContent
        replaceLabel.id = looseLabel.id
        replaceLabel.classList = looseLabel.classList
        looseLabel.parentNode.replaceChild(replaceLabel, looseLabel)
      }

      // Add aria role
      el.setAttribute('role', 'group')
      addAriaLabelledBy(el)
    })

    // Missing Other Amount label
    el = theForm.querySelector(otherAmountInputSelector)
    _parent = theForm.querySelector(otherAmountSelector)
    if (el && _parent) {
      placeholderToLabel(el, _parent)
    }

    // Aria role for split selects
    getAll('.en__field--splitselect').forEach(el => {
      el.setAttribute('role', 'group')
      addAriaLabelledBy(el)
    })

    // Labels are sometimes blank
    getAll('.en__field__label').forEach(el => {
      if (isEmpty(el)) {
        if (el.parentNode) {
          el.parentNode.removeChild(el)
        }
      }
    })

    // Convert URL strings to images for dummy select ecard radios
    el = theForm.querySelector('[class*="select-an-ecard"]')
    if (el) {
      getAll('.en__field__label--item', el).forEach(el => {
        createImgFromUrl(el.textContent, el)
      })
    }
    // Add mask and inputmode attribute for currency fields. Also prevent autofill
    // getAll('[name*="Amt"]:not([name*="Amt2"]):not([name*="Amt3"]):not([name*="Amt4"]), [name*="amt"]:not([name*="amt2"]):not([name*="amt3"]):not([name*="amt4"]), input[type="text"].en__additional__input').forEach(el => {
    getAll('[name*="Amt"]:not([name*="Amt1"]):not([name*="Amt2"]):not([name*="Amt3"]):not([name*="Amt4"]), [name*="amt"]:not([name*="amt1"]):not([name*="amt2"]):not([name*="amt3"]):not([name*="amt4"]), input[type="text"].en__additional__input').forEach(el => {
      setAttributes(el, {
        'autocomplete': 'photo',
        'inputmode': 'decimal',
      })
      IMask(el, {
        mask: 'num',
        blocks: {
          num: {
            mask: Number,
            thousandsSeparator: '',
            padFractionalZeros: true,
            radix: '.',
          }
        }
      })
    })

    // Prevent autofill on mem/trib fields
    getAll('.en__field--ecard-recipient-email-addresses .en__field__input, .en__field--honname .en__field__input, .en__field--honname ~ .en__field .en__field__input, .en__field--infname .en__field__input, .en__field--infname ~ .en__field .en__field__input').forEach(el => {
      el.setAttribute('autocomplete', 'photo')
    })

    // Autocomplete attributes for CC expiration fields
    el = theForm.querySelector(ccExpMonthSelect)
    if (el) {
      el.setAttribute('autocomplete', 'cc-exp-month')
    }
    el = theForm.querySelector(ccExpYearSelect)
    if (el) {
      el.setAttribute('autocomplete', 'cc-exp-year')
    }

    // Add inputmode attribute for credit card fields
    getAll('[name*="ccnumber"], [name*="ccvv"]').forEach(el => {
      el.setAttribute('inputmode', 'numeric')
    })

    // Display minimum donation amount
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
    el = theForm.querySelector('.en__field__input--other')
    if (el) {
      el.addEventListener('focus', e => {
        const otherRadio = e.target.closest('.en__field__item').previousElementSibling.querySelector('.en__field__input--radio')

        if (otherRadio) {
          otherRadio.click()
        }
      })
    }

    // Reposition help text found in labels
    getAll('.field__help').forEach(el => {
      getClosestEl(el, enFieldSelector).append(el)
    })

    // Provide credit card type feedback
    el = theForm.querySelector(ccNumberInputSelector)
    if (el) {
      cleave = new Cleave(ccNumberInputSelector, {
        creditCard: true,
        onCreditCardTypeChanged: type => {
          const ccField = theForm.querySelector(ccNumberFieldSelector)

          updatePaymentType(type)
          if (ccField) {
            removeClass(ccField, ['amex', 'mastercard', 'visa', 'diners', 'discover', 'jcb', 'dankort', 'instapayment', 'uatp', 'mir', 'unionPay', 'unknown'])
            addClass(ccField, type)
          }
        }
      })
    }

    // Handle switching between Check and CC payment methods
    el = theForm.querySelector(paymentMethodRadioSelector)
    if (el && cleave) {
      getAll('.en__field__input--radio', el).forEach(el => {
        el.addEventListener('click', e => {
          const paymentMethod = e.target.value

          if (paymentMethod === 'CC') {
            updatePaymentType(cleave.properties.creditCardType)
          } else if (paymentMethod === 'Check') {
            const paymentType = theForm.querySelector(paymentTypeSelector)

            if (paymentType) {
              paymentType.value = 'ACH'
            }
          }
        })
      })
    }

    const setPaymentType = (paymentType) => {
      const hasPaymentMethod = theForm.querySelector(paymentMethodRadioSelector)
      let selectedPaymentMethod = null

      if (hasPaymentMethod) {
        selectedPaymentMethod = hasPaymentMethod.querySelector('.en__field__input--radio:checked').value
        if (selectedPaymentMethod === 'CC') {
          updatePaymentType(cleave.properties.creditCardType)
        } else if (selectedPaymentMethod === 'Check') {
          paymentType.value = 'ACH'
        }
      } else {
        updatePaymentType(cleave.properties.creditCardType)
      }
    }

    // Paypal checkbox needs to hide credit card blocks and set payment type
    el = theForm.querySelector(paypalInputSelector)
    _parent = theForm.querySelector(paymentMethodSelector)
    if (el && _parent) {
      el.addEventListener('click', e => {
        const paymentType = theForm.querySelector(paymentTypeSelector)
        _parent = getClosestEl(_parent, '.en__component--formblock')

        if (_parent && paymentType) {
          if (e.target.checked) {
            addClass(_parent, paypalSelectedClass)
            paymentType.value = 'Paypal'
          } else {
            removeClass(_parent, paypalSelectedClass)
            setPaymentType(paymentType)
          }
        }
      })
    }

    // Set sharing URLs for action center items
    getAll('.advocacy-related-actions:not(:only-of-type)').forEach(el => {
      const facebookShareLink = el.querySelector('.en__socialShare--facebook')
      const twitterShareLink = el.querySelector('.en__socialShare--twitter')
      const shareLink = el.querySelector('a[data-campaign-id]')
      let shareUrl = null

      if (facebookShareLink && twitterShareLink && shareLink) {
        shareUrl = shareLink.getAttribute('href')
        facebookShareLink.setAttribute('href', makeFacebookUrl(facebookShareLink.getAttribute('href'), shareUrl))
        twitterShareLink.setAttribute('href', makeTwitterUrl(shareLink.textContent, twitterShareLink.getAttribute('href'), shareUrl))
      }
    })

    // Active state for field containers
    getAll('.en__field__input').forEach(el => {
      el.addEventListener('focus', activateField)
      el.addEventListener('blur', deactivateField)
    })

    // Init datepickers
    const datepickers = [].slice.call(document.querySelectorAll(dateInputSelector))
    const datepickersList = datepickers.map(el => {
      const today = new Date()
      const maxDate = new Date(today)

      // Restrict date selection to one year out
      maxDate.setDate(maxDate.getDate() + 90)

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
      })
    })

    // Add inputmode attribute for date fields to prevent mobile keyboard
    getAll('.datepicker-input').forEach(el => {
      el.setAttribute('inputmode', 'none')
      el.readOnly = true
    })

    // Each photo in hero and sidebar elements needs description and meta info popover
    getAll('.en__component--imageblock, .en__component--copyblock .card').forEach(el => {
      createImgTooltip(el)
    })

    // Create popovers elements
    if (typeof popoverTranslations !== 'undefined' && typeof pageJson !== 'undefined') {
      popoverTranslations.forEach(translation => {
        const locale = translation[pageJson.locale] ? pageJson.locale : 'en-US'

        createPopover(translation.field, translation.placement, translation[locale].label, translation[locale].text)
      })
    }

    // Init accordions
    getAll('.accordion').forEach(accordion => {
      getAll('.accordion-button').forEach(el => {
        el.addEventListener('click', e => {
          setTimeout(function() {
            addAriaCollapsedAttr(document.getElementById(e.target.dataset.bsTarget.replace(/#/, '')), getAll('.accordion-collapse', accordion))
          }, 500)
        })
      })
    })

    // Init collapsibles
    getAll('.btn-collapse').forEach(el => {
      el.addEventListener('click', e => {
        const _target = e.target

        if (hasClass(_target, 'expanded')) {
          removeClass(_target, 'expanded')
          _target.textContent = 'See more'
        } else {
          addClass(_target, 'expanded')
          _target.textContent = 'See less'
        }
      })
    })

    //Init popovers
    const popoverTriggerList = [].slice.call(theForm.querySelectorAll('[data-bs-toggle="popover"]'))
    const popoverList = popoverTriggerList.map(popoverTriggerEl => {
      return new bootstrap.Popover(popoverTriggerEl, {
        boundry: theForm,
        container: getClosestEl(popoverTriggerEl, '.popover-container') ? getClosestEl(popoverTriggerEl, '.popover-container') : getClosestEl(popoverTriggerEl, enFieldSelector),
        html: true,
        placement: 'bottom',
        fallbackPlacements: ['bottom', 'top'],
        template: '<div class="popover" role="tooltip"><div class="popover-control"><a class="popover-close" role="button" aria-label="close popover" onclick="closePopover(); return false;"></a></div><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: 'click focus',
        sanitize: false,
      })
    })

    // Workaround for not being able to set popover position explicity
    for (let i = 0; i < popoverTriggerList.length; i++) {
      const _index = i
      const _root = root

      popoverTriggerList[i].addEventListener('shown.bs.popover', e => {
        _root.style.setProperty('--popperTranslateX', popoverList[_index]._popper.state.styles.popper.transform.match(/\d*\.?\d+(?:px)?/gi)[0])
        _root.style.setProperty('--popperTranslateY', popoverList[_index]._popper.state.styles.popper.transform.match(/\d*\.?\d+(?:px)?/gi)[1])
      })
    }

    // Close popovers with button
    const closePopover = () => {
      for (let i = 0; i < popoverList.length; i++) {
        popoverList[i].hide()
      }
    }
    // Globalize for inline onclick
    window.closePopover = closePopover
  }

  /**
   * Donation form enhancements
   */
  const donationForm = () => {
    const appealCode = theForm.querySelector('.en__field--appealCode')
    const initAppealCode = document.getElementById('en__field_supporter_appealCode')
    let initAppealCodeVal = ''
    if (initAppealCode) {initAppealCodeVal = initAppealCode.value}
    const bequestIframe = theForm.querySelector('.iframe--bequest iframe')
    const bequestModal = theForm.querySelector('.modal--bequest')
    const donationAmt = theForm.querySelector('.en__field--donationAmt')
    const feeCoverCheckbox = theForm.querySelector('[name="transaction.feeCover"]')
    const giftDesignationYN = theForm.querySelector('.en__field--gift-designation-yn')
    const otherAmountInput = theForm.querySelector(otherAmountInputSelector)
    const otherAmountInputMin = theForm.querySelector('.en__otherFieldMin input')
    const otherAmountContainer = theForm.querySelector(otherAmountSelector)
    const formPremiumBlock = theForm.querySelector('.ff-donation-premium')
    const monthlyPremiumMin = theForm.querySelector('.en__field--premium-monthly-min input')
    const singlePremiumMin = theForm.querySelector('.en__field--premium-single-min input')
    const premiumFreqCheckbox = theForm.querySelector('.en__field--premium-frequency input')
    const premiumWaiver = theForm.querySelector('.en__field--waive-premium input')
    const premiumVisibleCheckbox = theForm.querySelector('.en__field--premium-visible input')
    const monthlyGive = document.getElementById('en__field_transaction_recurrpay')
    let otherAmountErrorContainer = document.createElement('div')
    otherAmountErrorContainer.classList.add('en__other__field__error')
    const recurrenceCheckbox = theForm.querySelector('[name="transaction.recurrpay"][type="checkbox"]')
    const recurrenceFrequency = theForm.querySelector('.en__field--recurrfreq')
    let donationAmtRadios = null
    let modal = null
    let feeCoverUserChecked = false

    const maybeUncheckFeeCover = (amt) => {
      if (feeCoverCheckbox.checked && !feeCoverUserChecked && !isNaN(amt)) {
        if (Number(amt) >= 1000) {
          feeCoverCheckbox.checked = false
        }
      }
    }

    const otherFieldClear = () => {
      otherAmountInput.classList.remove('_checkAmtErr')
      theForm.querySelector('.en__other__field__error').textContent = ''
      otherAmountInput.value = ''
      theForm.querySelector('.en__submit button').disabled = false
    };

    const premiumClear = () => {
      formPremiumBlock.classList.remove('visible');
      if (premiumVisibleCheckbox && premiumVisibleCheckbox.checked) {
        premiumVisibleCheckbox.click()
      }
      // premiumVisibleCheckbox.checked ? premiumVisibleCheckbox.click() : ''
      if (premiumWaiver && premiumWaiver.checked) {
        premiumWaiver.click()
      }
      // premiumWaiver.checked ? premiumWaiver.click() : ''
      initAppealCode.value = initAppealCodeVal
    }

    const handleDonationAmountChange = (e) => {
      if (feeCoverCheckbox) {
        maybeUncheckFeeCover(getOriginalDonationAmount())
      }
    }

    const validateDonationAmountChangeMin = (e) => {
      if (otherAmountInputMin && otherAmountInputMin != null) {
        var _otherInputParsed = parseInt(e.target.value)
        var _otherInputMinParsed = parseInt(otherAmountInputMin.value)
        // if monthly box is checked, new min is 15
        if (monthlyGive.checked) {
           _otherInputMinParsed = 15
        }
        // other field can't be less than 'Other Field Minimum' code block val or greater than 50k
        // if monthly box is checked, other field can't be lower than 15 or greater than 50k
        switch (true) {
          case ((_otherInputParsed < _otherInputMinParsed || _otherInputParsed > 50000) && monthlyGive.checked):
            e.target.classList.add('_checkAmtErr')
            theForm.querySelector('.en__other__field__error').textContent = 'Your donation must be between $'+_otherInputMinParsed+'.00 and $50,000.00'
            theForm.querySelector('.en__submit button').disabled = true
            break;
          case _otherInputParsed < _otherInputMinParsed || _otherInputParsed > 50000:
            e.target.classList.add('_checkAmtErr')
            theForm.querySelector('.en__other__field__error').textContent = 'Your donation must be between $'+_otherInputMinParsed+'.00 and $50,000.00'
            theForm.querySelector('.en__submit button').disabled = true
            break
          default:
            e.target.classList.remove('_checkAmtErr')
            theForm.querySelector('.en__other__field__error').textContent = ''
            theForm.querySelector('.en__submit button').disabled = false
        }
      }
    }

    const donationPremiumCalc = (val,e) => {
      var inputParsed
      if (val) {
        inputParsed = parseInt(val.replace(/,/g, ''))
      } else {
        inputParsed = parseInt(e.target.value)
      }
      // monthly premium mins set in EN form
      if (monthlyPremiumMin && singlePremiumMin != null ) {
        var _monthlyParsed = parseInt(monthlyPremiumMin.value);
        var _singleParsed = parseInt(singlePremiumMin.value);
        switch (true) {
          // IF one-time premium gift
          case !monthlyGive.checked:
            // default uncheck 'Monthly Premium' box
            if (premiumFreqCheckbox.checked) {
              premiumFreqCheckbox.click()
            }
            // default uncheck 'Premium Visible' box
            if (premiumVisibleCheckbox.checked) {
              premiumVisibleCheckbox.click();
            }
            if (inputParsed >= _singleParsed) {
              // show premium content if qualifying
              formPremiumBlock.classList.add('visible')
              if (!premiumVisibleCheckbox.checked) {
                premiumVisibleCheckbox.click()
              }
            } else {
              formPremiumBlock.classList.remove('visible');
              initAppealCode.value = initAppealCodeVal;
            }
          break;
          // IF monthly premium gift
          case monthlyGive.checked:
            // default uncheck 'Monthly Premium' box
            if (premiumFreqCheckbox.checked) {
              premiumFreqCheckbox.click()
            }
            if (inputParsed >= _monthlyParsed) {
              // show premium content if qualifying
              formPremiumBlock.classList.add('visible')
              if (!premiumVisibleCheckbox.checked) {
                premiumVisibleCheckbox.click()
              }
              // check 'Monthly Premium' box if qualifying
              if (!premiumFreqCheckbox.checked) {
                premiumFreqCheckbox.click()
              }
              // if monthly gift more than monthly gift min BUT less than single gift min
              if (inputParsed >= _singleParsed) {
                if (premiumFreqCheckbox.checked) {
                premiumFreqCheckbox.click();
              }
            }
          } else {
              formPremiumBlock.classList.remove('visible');
              initAppealCode.value = initAppealCodeVal;
            }
          break;
          default:
            formPremiumBlock.classList.remove('visible')
            initAppealCode.value = initAppealCodeVal
            break;
        }
      }
    }

    const initDonationAmount = () => {
      donationAmtRadios = getAll('.en__field__input--radio:not([value=""])', donationAmt)
      selectedAmount = getSelectedAmount()

      donationAmtRadios.forEach(el => {
        el.addEventListener('click', handleDonationAmountChange)
      })

      if (feeCoverCheckbox) {
        feeCoverCheckbox.addEventListener('click', e => {
          feeCoverUserChecked = true
        })
      }

      // Listen for other amount change
      if (otherAmountInput) {
        if (otherAmountContainer) {
          otherAmountContainer.append(otherAmountErrorContainer)
        }
        otherAmountInput.addEventListener('input', handleDonationAmountChange)
        // add front end validation to 'other' field on focusout
        otherAmountInput.addEventListener('focusout', validateDonationAmountChangeMin)
        // handle premium logic if block is present
        if ((typeof(formPremiumBlock) != 'undefined' && formPremiumBlock != null) && (typeof(singlePremiumMin) != 'undefined' && singlePremiumMin != null)) {
          otherAmountInput.addEventListener('focusout',function (event) {
            donationPremiumCalc(null,event)
          });
        }

        // clear 'other' field front end validation logic if other amount buttons are click
        document.addEventListener('click', function(event) {
          if (event.target.matches('label.en__field__label[for*="transaction_donationAmt"]')) {
            otherFieldClear()
            if ((typeof(formPremiumBlock) != 'undefined' && formPremiumBlock != null) && (typeof(singlePremiumMin) != 'undefined' && singlePremiumMin != null)) {
              premiumClear()
              if (event.target.previousElementSibling.value) {
                donationPremiumCalc(event.target.previousElementSibling.value)
              }
            }
          }
        }, false)
      }
    }


    resetDonationAmount = () => {
      setTimeout(() => {
        initDonationAmount()
        // window.initMasks();
      }, 500)
    }

    // JS Dollar Sign Fix - START
    // Amount Label rewrite func
    const formLabelAdd = (labels,s,t) => {
      /* jshint ignore:start */
      labels != null ? labels = labels : labels = document.querySelectorAll(".en__field--donationAmt .en__field__element .en__field__item label")
      /* jshint ignore:end */
      if (labels.length) {
        labels.forEach(label => {
          var labelForAttr = label.getAttribute('for');
          if (labelForAttr.match('^transaction_donationAmt[0-5]')) {
            if (s != null) {
              label.prepend(s);
            }
            if (t != null) {
              label.append(t);
            }
          }
        })
      }
    }

    const nsgInit = () => {
        // init label rewrite
        formLabelAdd(null, '$', null);
        // persist js label rewrites when recurring/monthly is toggled
        monthlyGive.addEventListener('click', e => {
          if (e.target.checked) {
            setTimeout(function(){
              // because of how EN updates the labels, need to catch labels at moment of click in order to append/prepend strings
              var amtLabels = document.querySelectorAll(".en__field--donationAmt .en__field__element .en__field__item label")
              formLabelAdd(amtLabels,null,'/MONTH')
            },100)
          } else {
            setTimeout(function(){
              // because of how EN updates the labels, need to catch labels at moment of click in order to append/prepend strings
              var amtLabels = document.querySelectorAll(".en__field--donationAmt .en__field__element .en__field__item label")
              formLabelAdd(amtLabels,'$',null)
            },100)

          }
        })
    }


    // if on 2.0 form w/ nsg param/if not on 2.0 form

    if (document.getElementById('_ff-container') && window.location.href.indexOf("ea.campaigner.email") > -1 && document.querySelector('.en__field--donationAmt')) {
        //init on page load when nsg param is present
        nsgInit()

      } else if (!document.getElementById('_ff-container') && window.location.href.indexOf("ea.campaigner.email") > -1 && document.querySelector('.en__field--donationAmt')) {
       setTimeout(formLabelAdd(null, '$', null),500);
       // 1.0 form - repeat js dollar sign rewrite when monthly is toggled
       monthlyGive.addEventListener('click', e => {
         if (!e.target.checked) {
           setTimeout(function(){
             var amtLabels = document.querySelectorAll(".en__field--donationAmt .en__field__element .en__field__item label")
             formLabelAdd(amtLabels,'$',null)
           },100)
         }
       })
     }
     //
     // JS Dollar Sign Fix - END
     //

    /**   * Gets a cookie by name   *   * @param {string} name The name of the cookie   */
    const getCookie = (name) => {
      function escape(s) {
          return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1')
      }
      var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'))

      return match ? match[1] : null
    }

    const shouldShowBequestModal = () => {
      /*
      * Opens bequest lightbox if conditions are met
      *
      * Conditions for opening lightbox:
      * US AND
      *  (
      *    (Have visited the Gift Planning site section OR Gift Planning Email)
      * *
      *    OR Have made 3 or more gifts
      *    OR Has the BBCRM attribute “Planned Giving Tag, Include in PG Solicitations”
      *    OR Has the BBCRM attribute “Planned Giving Tag, Planned Gift Prospect”
      *  )
      *  AND >= $100
      *  AND NOT a Legacy Club constituent
      *  AND The two Cookie bequest_lb_select time based criteria
      *  AND Has the BBCRM communications preference “Do Not Send Solicitations – Planned Giving”
      */

      // Uncomment to see the lightbox
      // return true

      const userProfile = typeof bequestUserProfile !== 'undefined' ? bequestUserProfile : null // bequestUserProfile is defined in EN code block

      const totalNumberOfGifts = function() {
        if (userProfile.hasOwnProperty('totalNumberOfGifts')) {
          /* jshint ignore:start */
          if (userProfile.totalNumberOfGifts !== '' && parseInt(userProfile.totalNumberOfGifts) !== NaN) {
            return parseInt(userProfile.totalNumberOfGifts)
          }
          /* jshint ignore:end */
          return 0
        }
      }

      const includeInPlannedGivingSolicitations = function() {
        if (userProfile.hasOwnProperty('includeInPlannedGivingSolicitations')) {
          return userProfile.includeInPlannedGivingSolicitations === 'Y'
        }
        return false
      }

      const isPlannedGiftProspect = function() {
        if (userProfile.hasOwnProperty('plannedGiftProspect')) {
          return userProfile.plannedGiftProspect === 'Y'
        }
        return false
      }

      const inLegacyClub = function() {
        if (userProfile.hasOwnProperty('crmConstituency')) {
          return userProfile.crmConstituency.indexOf('Legacy Club') > -1
        }
        return false
      }

      const doNotSendSolicitations = function() {
        if (userProfile.hasOwnProperty('doNotSendSolicitations')) {
          return userProfile.doNotSendSolicitations === 'Y'
        }
        return false
      }


      // Opens modal if modal--always-open class is found
      if (bequestModal && bequestModal.classList.contains('modal--always-open')) {
        // console.log(`bequestModal class: ${bequestModal.classList}`)
        return true
      }

      // Checks other conditions for opening modal
      if (userProfile && pageJson.country === 'US' && !doNotSendSolicitations() && !inLegacyClub() && pageJson.amount >= 100 && !getCookie('bequest_lb_select') && !getCookie('gp_form_submitted')) {
        // console.log(`pageJson.country ${pageJson.country}`)
        // console.log(`getCookie('per_gp'): ${getCookie('per_gp')}`)
        // console.log(`getCookie('per_email'): ${getCookie('per_email')}`)
        //
        // console.log(`totalNumberOfGifts() >= 3: ${totalNumberOfGifts() >= 3}`)
        // console.log(`includeInPlannedGivingSolicitations(): ${includeInPlannedGivingSolicitations()}`)
        // console.log(`isPlannedGiftProspect(): ${isPlannedGiftProspect()}`)
        //
        // console.log(`pageJson.amount ${pageJson.amount}`)
        // console.log(`inLegacyClub(): ${inLegacyClub()}`)
        // console.log(`getCookie('bequest_lb_select'): ${getCookie('bequest_lb_select')}`)
        // console.log(`doNotSendSolicitations(): ${doNotSendSolicitations()}`)
        // console.log(`getCookie('gp_form_submitted'): ${getCookie('gp_form_submitted')}`)
        //
        // console.log('shouldShowBequestModal: passed first condition')

        if (getCookie('per_gp') === 'true' || getCookie('gp_email') === 'true' || totalNumberOfGifts() >= 3 || includeInPlannedGivingSolicitations() || isPlannedGiftProspect()) {
          // console.log('shouldShowBequestModal: passed second condition')
          return true
        } else {
          return false
        }
      } else {
        return false
      }
    }

    if (theForm.action.indexOf('donate') > -1 && pageJson.pageNumber === 1) {
      if (donationAmt) {
        initDonationAmount()
        // Listen for recurrence change
        if (recurrenceFrequency) {
          getAll('.en__field__input--radio', recurrenceFrequency).forEach(el => {
            el.addEventListener('click', resetDonationAmount)
          })
        } else if (recurrenceCheckbox) {
          recurrenceCheckbox.addEventListener('click', resetDonationAmount)
        }
      }

      // Gift designation Y/N
      if (giftDesignationYN && appealCode) {
        giftDesignationYN.querySelector('.en__field__input--radio[value="N"]').addEventListener('click', e => {
          disableEl(appealCode)
        })
        giftDesignationYN.querySelector('.en__field__input--radio[value="Y"]').addEventListener('click', e => {
          enableEl(appealCode)
        })
        if (giftDesignationYN.querySelector('.en__field__input--radio[value="N"]').checked) {
          disableEl(appealCode)
        }
      }
    }

    if (bequestIframe) {
      // Listen for submitted message from iframe
      window.addEventListener('iframeSubmitted', e => {
        // Fire tracking
        if (typeof utag !== 'undefined') {
          utag.link({
            'event_name': 'lightbox_click',
            'lightbox_name': 'bequest'
          })
        }
        // Close modal
        modal.hide()
        focusFirst()
      })

      // Fit iframe to parent
      window.addEventListener('resize', e => {
        resizeIframe(bequestIframe)
      })
    }

    if (bequestModal) {
      modal = new bootstrap.Modal(bequestModal, {
        backdrop: 'static',
        keyboard: false
      })

      bequestModal.addEventListener('shown.bs.modal', () => {
        resizeIframe(bequestIframe)
      })

      // Open modal
      window.addEventListener('iframeReady', e => {
        if (shouldShowBequestModal()) {
          modal.show()
          bequestIframe.contentWindow.enOnError = function() {
            resizeIframe(bequestIframe)
          }
        }
      })

      // Fire tracking
      setTimeout(function() {
        if (typeof utag !== 'undefined') {
          utag.link({
            'event_name': 'lightbox_impression',
            'lightbox_name': 'bequest'
          })
        }
      }, 1000)
    }
  }

  /**
   * Event form enhancements
   */
  const eventForm = () => {
    const savedTotalAmount = sessionStorage.getItem('savedTotalAmount')
    const waitListLink = theForm.querySelector('.waitlist-link a')
    let el = null
    let _parent = null
    let hasPromo = false
    let totalAmount = 0
    let totalDiscount = 0

    /**
     * Updates total amount
     */
    const updateTotalAmount = () => {
      const additionalInput = theForm.querySelector('.en__additional__input')
      let totalAmount = 0

      // Sum all tickets
      getAll('.en__ticket__quantity').forEach(el => {
        const row = getClosestEl(el, '.en__ticket')
        const price = Number(row.querySelector('.en__ticket__price').textContent)

        if (price !== '0') {
          totalAmount += el.value === '0' ? 0 : Number(Number(el.value) * price)
        }
      })
      // Include additional donation
      if (additionalInput) {
        totalAmount += !isNaN(Number(additionalInput.value)) ? Number(additionalInput.value) : 0
      }
      // Display total amount
      getAll(totalAmountSelector).forEach(el => {
        el.textContent = numberPipe(String(totalAmount))
      })
      // Save total for use on billing page
      sessionStorage.setItem('savedTotalAmount', totalAmount)
    }

    const getPromo = (el) => {
      return el.querySelector('.en__orderSummary__data--promo').textContent !== '' ? el.querySelector('.en__orderSummary__data--promo').textContent : false
    }

    // Make ticket quantity field readonly to avoid invalid ticket numbers
    getAll('.en__ticket__quantity').forEach(el => {
      el.readOnly = true
      el.setAttribute('tabindex', '-1')
    })

    // Add ticket quantity plus/minus to tab order
    getAll('.en__ticket__minus, .en__ticket__plus').forEach(el => {
      el.setAttribute('tabindex', '0')
    })

    // Strip currency indicators and $ signs
    getAll('.en__orderSummary__data--cost, .en__orderSummary__data--totalAmount').forEach(el => {
      el.textContent = el.textContent.replace(/USD/, '')
    })

    // Strip label colons
    getAll('.en__orderSummary__header').forEach(el => {
      el.textContent = el.textContent.replace(/\:/, '')
    })

    // Maybe on page 1
    if (pageJson.pageNumber === 1) {
      // Display waitlist confirmation if coming from a chained redirect
      el = theForm.querySelector('.waitlist-confirmation')
      if (el && location.href.indexOf('chain') > -1) {
        removeClass(el, hiddenWebOnlyClass)
      }

      // Maybe add waitlist links
      if (waitListLink) {
        getAll('.en__ticket__soldout').forEach(el => {
          let clone = waitListLink.cloneNode(true)

          el.parentElement.append(clone)
        })
      }

      // Listen for additional donation
      el = theForm.querySelector('.en__additional__input')
      if (el) {
        el.addEventListener('change', e => {
          updateTotalAmount()
        })
      }

      // Listen for ticket selection
      getAll('.en__ticket__quantity').forEach(el => {
        el.addEventListener('change', e => {
          setTimeout(function() {
            updateTotalAmount()
          }, 100)
        })
      })

      // Listen for reset
      el = theForm.querySelector('button[type="reset"]')
      if (el) {
        el.addEventListener('click', e => {
          setTimeout(function() {
            updateTotalAmount()
          }, 100)
        })
      }

      // Init total amount
      updateTotalAmount()

      // Force ticket total cost update
      getAll('.en__ticket__minus, .en__ticket__plus').forEach(el => {
        const row = getClosestEl(el, '.en__ticket')
        const ticketQuantity = row.querySelector('.en__ticket__quantity')

        el.addEventListener('click', e => {
          triggerEvent(ticketQuantity, 'change')
        })

        // Add keyboard nav to plus/minus buttons
        el.addEventListener('keyup', e => {
          if (e.key === 'Enter' || e.keyCode === 13) {
            e.target.click()
          }
        })
      })
      // Maybe on page 2
    } else if (pageJson.pageNumber >= 2) {
      // Customize order summary table
      getAll('.en__orderSummary__item').forEach(el => {
        const itemType = el.querySelector('.en__orderSummary__data--type')
        const itemQuantity = el.querySelector('.en__orderSummary__data--quantity').textContent
        const itemAmount = el.querySelector('.en__orderSummary__data--cost')
        // look for item in pageJson and get original per-ticket total
        if (pageJson.tickets && pageJson.tickets.length) {
          let originalTicket = pageJson.tickets.filter(ticket => ticket.name === itemType.textContent)
          if (originalTicket.length === 1) {
            itemAmount.textContent = (originalTicket[0].quantity * originalTicket[0].price).toFixed(2)
          }
        }
        itemType.textContent = `${itemQuantity}x  ${itemType.textContent}`
        hasPromo = hasPromo || getPromo(el)
        const itemPromo = el.querySelector('.en__orderSummary__data--promo')
        if (itemPromo) {
          itemPromo.textContent = ''
        }
      })

      // Maybe add promo discount line
      el = theForm.querySelector('.en__orderSummary__data--totalAmount')
      _parent = theForm.querySelector('.en__orderSummary')
      if (savedTotalAmount && hasPromo && el && _parent) {
        totalAmount = Number(el.textContent.replace(/\$/, ''))
        el = document.getElementById('orderSummaryPromo')
        if (el) {
          totalDiscount = Number(savedTotalAmount) - totalAmount
          el.querySelector('.js-applied-promo').textContent = totalDiscount.toFixed(2)
          _parent.classList.add("promo-used")
          el.querySelector('.en__orderSummary__data--fill+.en__orderSummary__data--fill').textContent = hasPromo
          _parent.insertBefore(el, theForm.querySelector('.en__orderSummary__total'))
          removeClass(el, hiddenWebOnlyClass)
        }
        // Cleanup
        if (pageJson.pageNumber === pageJson.pageCount) {
          sessionStorage.removeItem('savedTotalAmount')
        }
      }

      // Remove attendee index number
      getAll('.en__registrants__registrantHead').forEach(el => {
        el.textContent = el.textContent.replace(/^\d{1,3}/, '').replace(/ticket \d{1,3}$/, '')
      })

      // Re-number attendees
      getAll('.en__registrants__ticket').forEach(el => {
        const attendees = getAll('.en__registrants__registrantHead', el)

        if (attendees.length > 1) {
          attendees.forEach((el, index) => {
            el.textContent = `${el.textContent} ${index + 1}`
          })
        }
      })
      // Labels for Attendee custom checkbox questions do not have for attributes
      getAll('.en__field--checkbox.en__field--registrant .en__field__item').forEach(el => {
        const checkboxId = `checkbox${generateId()}`

        el.querySelector('.en__field__input--checkbox').id = checkboxId
        el.querySelector('.en__field__label--item').setAttribute('for', checkboxId)
      })

      // Adding commas to totals
      getAll('.en__orderSummary__data--cost, .en__orderSummary__data--totalAmount').forEach(el => {
        el.textContent = numberPipe(el.textContent)
      })

      // Adjust the page if zero amount due
      el = theForm.querySelector('.en__orderSummary__data--totalAmount')
      if (el) {
        if (parseInt(el.textContent) === 0) {
          // Some of the form headings have 'Billing' in them
          getAll('.form-heading h3').forEach(el => {
            el.textContent = el.textContent.replace(/Billing\s/i, '')
          })
          // Find the form block with address info
          el = document.getElementById('en__field_supporter_address1')
          if (el) {
            // CSS will hide everything below .last-visible except the submit block
            addClass(getClosestEl(el, '.en__component--formblock'), 'last-visible')
          }
        }
      }

      // Display total amount
      el = theForm.querySelector('.en__orderSummary__data--totalAmount')
      if (el) {
        // Prevent double $ symbols
        setTimeout(function() {
          el.textContent = el.textContent.indexOf('$') > -1 ? el.textContent.replace(/\$/g, '') : el.textContent
          addClass(el, activeClass)

          getAll(totalAmountSelector).forEach(el => {
            el.textContent = `$${theForm.querySelector('.en__orderSummary__data--totalAmount').textContent.replace(/\$/, '')}`
          })
        }, 500)
      }
    }
  }

  /**
   * Email to target enhancements
   */
  const emailToTarget = () => {
    const contactBlock = theForm.querySelector('.en__component--contactblock')
    const phone = document.querySelector('.en__field--telephone .en__field__input')
    const homePhone = document.querySelector('[name="supporter.phoneNumber"]')
    const mobilePhone = document.querySelector('[name="supporter.phoneNumber2"]')
    const mobilePhoneCheck = document.querySelector('.en__field--this-is-my-mobile .en__field__input--checkbox')

    const setPhoneFields = () => {
      //  Set standard phone fields
      if (mobilePhoneCheck.checked) {
        homePhone.value = ''
        mobilePhone.value = phone.value
      } else {
        mobilePhone.value = ''
        homePhone.value = phone.value
      }
    }

    if (contactBlock) {
      // Already visually hidden, but hide from screen readers too without using display: none
      contactBlock.setAttribute('aria-hidden', 'true')
    }

    if (pageJson.pageType === 'emailtotarget' && phone && homePhone && mobilePhone && mobilePhoneCheck) {
      phone.addEventListener('input', setPhoneFields)
      phone.addEventListener('change', setPhoneFields)
      mobilePhoneCheck.addEventListener('click', setPhoneFields)
    }
  }

  /**
   * Hub enhancements
   */
  const hub = () => {
    const hubImage = theForm.querySelector('.hub-image .en__component--imageblock:last-child img')
    const emailAddress = theForm.querySelector('.en__supporterHubLogin__emailAddress .en__field__input')

    // Convert large image to a background to better styling
    if (hubImage) {
      hubImage.parentElement.style.backgroundImage = `url(${hubImage.getAttribute('src')})`
    }

    // Enable autocomplete on email address field
    if (emailAddress) {
      emailAddress.id = emailAddress
      emailAddress.setAttribute('autocomplete', 'email')
    }
  }

  /**
   * Quiz form enhancements
   */
  const quiz = () => {
    const leadGenModal = theForm.querySelector('.modal--lead-gen')
    let isInvalid = false
    let formType = null
    let el = null

    const getFormType = (form) => {
      const emailUnsubscribeChecked = form.querySelector('.en__field--unsubscribe-from-emails:not(.en__hidden) .en__field__input--checkbox') ? form.querySelector('.en__field--unsubscribe-from-emails:not(.en__hidden) .en__field__input--checkbox').checked : false
      const mobilePhoneField = form.querySelector('#en__field_supporter_phoneNumber2:not(:placeholder-shown)')
      const textOptInChecked = form.querySelector('.en__field--home-phone-opt-in .en__field__input--checkbox') ? form.querySelector('.en__field--home-phone-opt-in .en__field__input--checkbox').checked : false
      let formType = {}

      formType.lightbox_name = `lightbox-${utag_data.page_name}`
      formType.form_name = `lightbox-${utag_data.page_name}`
      formType.email_signup_location = `lightbox-${utag_data.page_name}`

      //These conditions assume that if the field exists, it is required, e.g. mobilePhoneField

      //Unsubscribe not checked, mobile phone field exists and optin checked
      if (!emailUnsubscribeChecked && mobilePhoneField && textOptInChecked) {
        formType.event_name = 'frm_ltbx_emt_emo_txt_txto_submit'
        formType.form_type = 'email_text_signup'
        formType.text_signup_location = "lightbox-" + utag_data.page_name

        //Unsubscribe not checked, mobile phone field exists (and optin not checked)
      } else if (!emailUnsubscribeChecked && mobilePhoneField) {
        formType.event_name = 'frm_ltbx_emt_emo_txt_submit'
        formType.form_type = 'email_text_signup'
        formType.text_signup_location = "lightbox-" + utag_data.page_name

        //Unsubscribe not checked, no mobile phone field
      } else if (!emailUnsubscribeChecked) {
        formType.event_name = 'frm_ltbx_emt_emo_submit'
        formType.form_type = 'email_signup'

        //Unsubscribe checked, mobile phone field exists and optin checked
      } else if (mobilePhoneField && textOptInChecked) {
        formType.event_name = 'rm_ltbx_emt_txt_txto_submit'
        formType.form_type = 'email_text_signup'
        formType.text_signup_location = "lightbox-" + utag_data.page_name

        //Unsubscribe checked, mobile phone field exists and optin not checked
      } else if (mobilePhoneField) {
        formType.event_name = 'frm_ltbx_emt_txt_submit'
        formType.form_type = 'email_text_signup'
        formType.text_signup_location = "lightbox-" + utag_data.page_name

        //Unsubscribe checked, mobile phone field doesn't exist
      } else {
        formType.event_name = 'frm_ltbx_emt_submit'
        formType.form_type = 'email_signup'
      }
      return formType
    }

    // Maybe display lead gen modal
    if (leadGenModal) {
      // Set placeholder on mobile phone field so it can be selected with :placeholder-shown
      el = leadGenModal.querySelector('#en__field_supporter_phoneNumber2')
      if (el) {
        el.setAttribute('placeholder', ' ')
      }
      formType = getFormType(leadGenModal)
      const modal = new bootstrap.Modal(leadGenModal, {
        backdrop: 'static',
        keyboard: false
      })
      modal.show()
      // Fire tracking
      setTimeout(function() {
        if (typeof utag !== 'undefined') {
          utag.link({
            'event_name': 'lightbox_form_impression',
            'lightbox_name': formType.lightbox_name,
            'form_type': formType.form_type,
            'form_name': formType.form_name
          })
        }
      }, 100)

      const validateModal = () => {
        if (formIsValid(leadGenModal)) {
          formType = getFormType(leadGenModal)
          modal.hide()
          focusFirst(leadGenModal)
          // Fire tracking
          if (typeof utag !== 'undefined') {
            utag.link(formType)
          }
          // Submit buttons are disabled after clicking
          enableSubmitButtons()
        } else {
          // Submit buttons are disabled after clicking
          isInvalid = true
          enableSubmitButtons()
        }
        return false
      }

      const enableSubmitButtons = () => {
        setTimeout(function() {
          getAll('.en__submit button').forEach(el => {
            el.disabled = false
          })
        }, 100)
      }

      // Handle modal submit button click
      leadGenModal.querySelector('.btn').addEventListener('click', e => {
        if (isInvalid) {
          validateModal()
          e.preventDefault()
          return false
        } else {
          setTimeout(function() {
            validateModal()
            e.preventDefault()
            return false
          }, 100)
        }
      })
    }

    // Listen for validation error
    el = theForm.querySelector('.en__field--survey')
    if (el) {
      const mutationCallback = (mutationsList, observer) => {
        for (let i = 0; i < mutationsList.length; i++) {
          if (mutationsList[i].addedNodes.length > 0) {
            // Move error message to end of form
            const el = theForm.querySelector(errorSelector)

            if (el) {
              theForm.querySelector('.en__component--formblock').append(el)
            }
          }
        }
      }

      const errorObserver = new MutationObserver(mutationCallback)

      errorObserver.observe(el, {
        attributes: false,
        childList: true,
        subtree: false,
      })
    }

    getAll('.en__field__input--radio').forEach(el => {
      el.addEventListener('click', e => {
        let el

        // Clicking any answer removes error message
        el = theForm.querySelector(errorSelector)
        if (el) {
          el.remove()
        }
      })
    })

    const checkAnswer = () => {
      const correctAnswer = theForm.querySelector('.correct')
      const incorrectAnswer = theForm.querySelector('.incorrect')
      const selectedAnswerRadio = theForm.querySelector('.en__field__input--radio:checked')
      const correctAnswerRadio = theForm.querySelector('.en__field__input--radio[value="1"]')
      let questionCount = sessionStorage.getItem('questionCount') ? sessionStorage.getItem('questionCount') : 0
      let quizScore = sessionStorage.getItem('quizScore') ? sessionStorage.getItem('quizScore') : 0
      let alreadyAnswered = sessionStorage.getItem('alreadyAnswered') ? sessionStorage.getItem('alreadyAnswered') : 'false'

      // Prevent more answer clicks
      disableFields(getAll('.en__field__input--radio'))

      if (correctAnswer && incorrectAnswer && correctAnswerRadio) {
        // Check for correct answer
        if (selectedAnswerRadio === correctAnswerRadio) {
          correctAnswer.style.display = 'inline'
          // Update running score
          if (alreadyAnswered === 'false') {
            quizScore++
          }
        } else {
          addClass(selectedAnswerRadio.nextElementSibling, 'is-incorrect')
          incorrectAnswer.style.display = 'inline'
        }
        addClass(correctAnswerRadio.nextElementSibling, 'is-correct')
        // Show answer
        theForm.querySelector('.quiz-answer p').style.display = 'block'
        // Show next question button
        theForm.querySelector('.en__component--formblock:last-child').style.display = 'block'

        if (alreadyAnswered === 'false') {
          // Update running count of quiz questions
          questionCount++
          sessionStorage.setItem('questionCount', questionCount)
          // Save running score
          sessionStorage.setItem('quizScore', quizScore)
          sessionStorage.setItem('alreadyAnswered', 'true')
        }
      }
    }

    // Handle check answer button click
    el = theForm.querySelector('.en__submit button[type="button"]')
    if (el) {
      el.addEventListener('click', e => {
        const fieldError = theForm.querySelector('.en__field__error')

        if (theForm.querySelector('.en__field__input--radio:checked')) {
          addClass(getClosestEl(e.target, '.en__submit'), hiddenClass)
          if (fieldError) {
            removeClass(fieldError, displayClass)
            addClass(fieldError, hiddenClass)
          }
          checkAnswer()
        } else {
          if (fieldError) {
            removeClass(fieldError, hiddenClass)
            addClass(fieldError, displayClass)
          }
        }
      })
    }

    // Handle submit button click
    el = theForm.querySelector('.en__submit button:not([type="button"])')
    if (el) {
      el.addEventListener('click', e => {
        sessionStorage.setItem('alreadyAnswered', 'false')
      })
    }

    // Display quiz results if on the last page
    if (pageJson.pageNumber === pageJson.pageCount) {
      // Display quiz score
      if (theForm.querySelector('.js-quiz-score') && sessionStorage.getItem('quizScore')) {
        theForm.querySelector('.js-quiz-score').textContent = sessionStorage.getItem('quizScore')
      }
      // Display number of questions
      if (theForm.querySelector('.js-question-count') && sessionStorage.getItem('questionCount')) {
        theForm.querySelector('.js-question-count').textContent = sessionStorage.getItem('questionCount')
      }
      // Clean up
      sessionStorage.removeItem('quizScore')
      sessionStorage.removeItem('questionCount')
      sessionStorage.removeItem('alreadyAnswered')
    }
  }

  /**
   * Action center form enhancements
   */
  const actionCenter = () => {
    // Make image blocks clickable
    getAll('.card').forEach(el => {
      const link = el.querySelector('a[data-type="campaignpage_url_pb"]')
      const img = el.querySelector('.en__component--imageblock img')
      let clone = null

      if (link && img) {
        clone = link.cloneNode()
        img.parentNode.insertBefore(clone, img)
        clone.appendChild(img)
      }
    })
  }

  /**
   * Track form errors
   */
  const trackFormErrors = () => {
    let invalidFields = ''
    let errors = ''

    if (typeof utag !== 'undefined') {
      // Gather invalid fields and error messages
      getAll('.en__field--validationFailed').forEach(el => {
        if (el.querySelector('.en__field__error')) {
          invalidFields += `${el.querySelector('.en__field__input').getAttribute('name')}|`
          errors += `${el.querySelector('.en__field__error').textContent}|`
        }
      })

      // Fire tracking if errors were found
      if (invalidFields !== '') {
        utag.link({
          'event_name': 'form_error',
          'form_field_error_field': invalidFields.slice(0, -1),
          'form_field_error_value': errors.slice(0, -1),
          'form_name': utag_data.page_name.slice(0, -2),
          'form_type': pageJson.pageType
        })
      }
    }
  }

  /**
   * Track processing errors
   */
  const trackProcessingErrors = () => {
    let paymentMethod = document.querySelector(paymentTypeSelector)

    if (typeof utag !== 'undefined' && paymentMethod) {
      utag.link({
        'event_name': 'form_error',
        'form_field_error_field': 'payment error',
        'form_field_error_value': 'payment error',
        'payment_type': paymentMethod.value,
        'form_name': utag_data.page_name.slice(0, -2),
        'form_type': pageJson.pageType
      })
    }
  }

  const optIns = () => {
    const permissionToContact = document.querySelector('.en__field--permission-to-contact-me')
    const mobileTextOptIn = document.querySelector('.en__field--mobile-text-opt-in')
    const mobileCallOptIn = document.querySelector('.en__field--mobile-call-opt-in')

    // Hide the "permission to contact" QCB if user is known and has not opted-in to both
    // Opt-ins are not added to form if user id known and already opted-in
    if (permissionToContact) {
      if (!mobileTextOptIn && !mobileCallOptIn) {
        permissionToContact.classList.add(hiddenClass)
      }
    }
  }

  const mobilePhone = () => {
    const initPhoneFields = () => {
      let mobilePhoneInput = theForm.querySelector(mobilePhoneInputSelector)
      let homePhoneInput = theForm.querySelector(homePhoneInputSelector)
      let mobileSameAsHomeCheckbox = theForm.querySelector(mobilePhoneSameAsHomeCheckboxSelector)

      if (mobilePhoneInput.value.length && homePhoneInput.value.length && homePhoneInput.value !== mobilePhoneInput.value && mobileSameAsHomeCheckbox.checked) {
        mobileSameAsHomeCheckbox.click()
      } else if (mobilePhoneInput.value.length === 0 && homePhoneInput.value.length && mobileSameAsHomeCheckbox.checked) {
        mobilePhoneInput.disabled = false
        mobilePhoneInput.value = homePhoneInput.value
      }

      const setMobilePhoneField = (e) => {
        if (e.target.checked) {
          //override EN's disabling of the field
          setTimeout(syncMobilePhoneField, 500)
        } else {
          mobilePhoneInput.value = ''
        }
      }

      const syncMobilePhoneField = (e) => {
        if (mobileSameAsHomeCheckbox.checked) {
          mobilePhoneInput.disabled = false
          mobilePhoneInput.value = homePhoneInput.value
        }
      }

      //attach event handler to the checkbox
      mobileSameAsHomeCheckbox.addEventListener('change', setMobilePhoneField)
      //attach event handler to the home input
      homePhoneInput.addEventListener('input', syncMobilePhoneField)
    }

    //if all three fields are present
    if (theForm.querySelectorAll(mobilePhoneInputSelector).length && theForm.querySelectorAll(homePhoneInputSelector).length && theForm.querySelectorAll(mobilePhoneSameAsHomeCheckboxSelector).length) {
      //initialize phone field features
      initPhoneFields()
    }
  }

  /**
   * Form validation enhancements
   */
  const validation = () => {
    const setValidation = el => {
      const field = el.closest(enFieldSelector)

      // Hide/display error formatting
      if (el.validity.valid) {
        addClass(el, validClass)
        removeClass(field, validationFailedClass)
      } else {
        removeClass(el, validClass)
        addClass(field, validationFailedClass)
      }
    }

    const handleInput = e => {
      e.preventDefault()
      setValidation(e.target)
    }

    const handleChange = e => {
      e.preventDefault()
      setValidation(e.target)
    }

    // Set validation patterns
    getAll('.en__mandatory .en__field__input').forEach(el => {
      el.required = true
      switch (el.type) {
        case 'email':
          // Check for valid email
          el.setAttribute('pattern', '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-z]{2,}$')
          el.addEventListener('input', handleInput)
          break
        case 'number':
          break
        case 'select-one':
          el.addEventListener('change', handleChange)
          break
        default:
          if (el.getAttribute('inputmode') === 'decimal') {
            // Check for US currency
            el.setAttribute('pattern', '^\\$?([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\\.[0-9]{1,2})?$')
          } else if (el.name.indexOf('ccnumber') > -1) {
            // Check for valid credit card (https://www.w3resource.com/javascript-exercises/javascript-regexp-exercise-2.php)
            el.setAttribute('pattern', '^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$')
          } else if (el.name.indexOf('ccvv') > -1) {
            // Check for 3 or 4 digits
            el.setAttribute('pattern', '^([0-9]{3,4})$')
          } else if (hasClass(el, 'datepicker-input')) {
            // Check for date as mm/dd/yyyy
            el.setAttribute('pattern', '(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)\\d\\d')
            el.addEventListener('changeDate', handleChange)
          } else {
            // Check empty pattern
            el.setAttribute('pattern', '.*\\S.*')
          }
          el.addEventListener('input', handleInput)
      }

      // Don't display browser error messages
      el.addEventListener('oninvalid', e => {
        e.preventDefault()
      })

      // No browser form validation
      theForm.setAttribute('novalidate', true)
    })

    // Processing error don't always trigger a reload
    const errorList = theForm.querySelector('.en__errorList')
    if (errorList) {
      const mutationCallback = (mutationsList, observer) => {
        for (let i = 0; i < mutationsList.length; i++) {
          if (mutationsList[i].addedNodes.length > 0) {
            formatError(mutationsList[i].addedNodes[0])
            addClass(errorList, errorBoxClass)
            scrollToEl(errorList)
          } else {
            removeClass(errorList, errorBoxClass)
          }
        }
      }

      const errorObserver = new MutationObserver(mutationCallback)

      errorObserver.observe(errorList, {
        attributes: false,
        childList: true,
        subtree: false,
      })
    }
  }

  /**
   * Form submit enhancements
   */
  const formSubmit = () => {
    const monthlyCheckbox = document.getElementById('en__field_transaction_recurrpay')
    const continueButton = theForm.querySelector('.btn-continue')
    const upsellButton = theForm.querySelector('.btn-upsell')
    const upsellModal = theForm.querySelector('.modal--upsell')
    const hasUpsell = monthlyCheckbox && upsellModal && upsellButton && continueButton
    const otherAmountInput = theForm.querySelector(otherAmountInputSelector)
    let otherAmountOriginal = null
    let isInvalid = false
    const mobileWalletContainer = document.getElementById('en__digitalWallet')

    // Don't submit form on ENTER if focused on an input
    window.addEventListener('keydown', e => {
      if (e.keyIdentifier == 'U+000A' || e.keyIdentifier == 'Enter' || e.keyCode == 13) {
        if (e.target.nodeName == 'INPUT') {
          e.preventDefault()
          return false
        }
      }
    }, true)

    //Mobile Wallets donation data creation
    if (mobileWalletContainer) {
      const dataListener = addEventListener('blur', function () {
        const iframe = mobileWalletContainer.getElementsByTagName('iframe')

        if (document.activeElement === iframe[0]) {
          window.enOnValidate()
        }
        removeEventListener('blur', dataListener);
      })
    }

    window.enOnError = () => {
      setTimeout(() => {
        // Scroll to first invalid field
        const firstError = document.querySelector('.en__field__error')
        const field = firstError ? firstError.closest('.en__field') : null

        if (firstError && field) {
          field.scrollIntoView({
            behavior: 'smooth'
          })
        }
      }, 10)
      trackFormErrors()
    }

    window.enOnValidate = function() {
      const donationAmount = document.querySelector('[data-token="amount-total"]') ? parseFloat(document.querySelector('[data-token="amount-total"]').textContent.replace(/\$/, '')) : parseFloat(getTotalDonationAmount())
      const ecardFields = theForm.querySelector(ecardFieldsSelector)
      const ecardSelect = theForm.querySelector(ecardSelectSelector)
      const feeCoverCheckbox = theForm.querySelector('[name="transaction.feeCover"]')
      const mobilePhoneNumber = theForm.querySelector('.en__field--phoneNumber2:not(:placeholder-shown) .en__field__input')
      const mobilePhoneOptIn = theForm.querySelector('.en__field--mobile-text-opt-in .en__field__input--checkbox:checked')
      const trackSubmit = theForm.querySelector('.track-submit')
      let donationData = {}
      let ecardData = sessionStorage.getItem('ecardData')
      let extraAmount = 0
      let mobilePhoneData = {}
      let upsellDone = false

      const doUpsell = () => {
        if (!upsellDone) {
          // Display monthly amount
          getAll('.js-monthly-gift').forEach(el => {
            el.textContent = `$${numberPipe(String(setMonthlyAmount(donationAmount)))}`
          })
          setMonthlyAmount(donationAmount)
          // Open modal
          const modal = new bootstrap.Modal(upsellModal, {
            backdrop: 'static',
            keyboard: false
          })
          modal.show()
          // Fire tracking
          if (typeof utag !== 'undefined') {
            utag.link({
              'event_name': 'lightbox_impression',
              'lightbox_name': 'sustainer upsell'
            })
          }
          // Handle modal clicks
          upsellButton.addEventListener('click', e => {
            // Fire tracking
            if (typeof utag !== 'undefined') {
              utag.link({
                'event_name': 'lightbox_click',
                'lightbox_name': 'sustainer upsell'
              })
            }
            // Select monthly option and proceed to confirmation
            monthlyCheckbox.click()
            otherAmountInput.value = setMonthlyAmount(donationAmount)
            theForm.submit()
          })
          getAll('.btn-close, .btn-continue').forEach(el => {
            el.addEventListener('click', e => {
              theForm.submit()
            })
          })
          upsellDone = true
        }
      }

      const enSustainerUpsell = () => {
        setTimeout(() => {
          var enUpsellLightbox = document.getElementById('en__upsellModal')
          var enUpsellYesButton = document.getElementById('en__upsellModal__yes')

          if (enUpsellYesButton) {
            // Fire tracking if EN Upsell yes button is clicked
            enUpsellYesButton.addEventListener('click', e => {
              if (typeof utag !== 'undefined') {
                utag.link({
                  'event_name': 'lightbox_click',
                  'lightbox_name': 'sustainer upsell'
                })
              }
            })
          }

          if (enUpsellLightbox) {
            // Fire tracking when EN lightbox opens
            if (typeof utag !== 'undefined') {
              utag.link({
                'event_name': 'lightbox_impression',
                'lightbox_name': 'sustainer upsell'
              });
            }
          }
        }, 1500)
      }

      if (feeCoverCheckbox) {
        // Calculate extra fee cover amount for data layer
        if (feeCoverCheckbox.checked) {
          const totalDonationAmount = Number(theForm.querySelector('[data-token="amount-total"]').textContent.replace(/\$/, '').replace(/\,/g, '')).toFixed(2)
          const originalDonationAmount = getOriginalDonationAmount()

          extraAmount = (totalDonationAmount - originalDonationAmount).toFixed(2)
          donationData.originalDonationAmount = originalDonationAmount
        }
      }

      if (pageJson.pageType === 'donation' && pageJson.pageNumber === 1) {
        // Maybe save ecard fields for use on seamless ecard page
        if (ecardSelect && ecardFields) {
          if (ecardSelect.querySelector('.en__field__input--checkbox').checked) {
            // Set ecardSelected before saving donationData
            donationData.ecardSelected = 'true'
            ecardData = {}
            ecardData.selectEcard = ecardSelect.querySelector('.en__field__input--radio:checked').value
            ecardData.recipients = ecardFields.querySelector('.en__field__input--email').value
            ecardData.message = ecardFields.querySelector('.en__field--ecard-message .en__field__input--textarea').value
            ecardData.sendDate = ecardFields.querySelector('.datepicker-input').value
            sessionStorage.setItem('ecardData', JSON.stringify(ecardData))
          } else {
            delete donationData.ecardSelected
            sessionStorage.removeItem('ecardData')
          }
        }
        // Save donation data for data layer on confirmation page
        donationData.productId = utag_data.page_name.slice(0, -2)
        donationData.campaignId = (typeof pageJson !== 'undefined') ? pageJson.campaignId : ''
        donationData.campaignPageId = (typeof pageJson !== 'undefined') ? pageJson.campaignPageId : ''
        donationData.extraAmount = extraAmount
        donationData.state = theForm.querySelector(supporterStateSelector) ? theForm.querySelector(supporterStateSelector).value : ''
        donationData.zipCode = theForm.querySelector(supporterZipCodeSelector) ? theForm.querySelector(supporterZipCodeSelector).value : ''
        donationData.emailAddress = theForm.querySelector(supporterEmailAddressSelector) ? theForm.querySelector(supporterEmailAddressSelector).value : ''
        sessionStorage.setItem('donationData', JSON.stringify(donationData))
      }

      // Looking for non-hidden, non-blank mobile phone field and mobile text opt-in to save and pass to SMS platform
      if (mobilePhoneNumber) {
        mobilePhoneData.phoneNumber = mobilePhoneNumber.value
        if (mobilePhoneOptIn) {
          mobilePhoneData.optIn = 'Y'
        } else {
          mobilePhoneData.optIn = null
        }
        sessionStorage.setItem('mobilePhoneData', JSON.stringify(mobilePhoneData))
      }
      // // Maybe track form submit
      // if (trackSubmit) {
      //   trackFormSubmit();
      // }

      // Check for EN lighbox
      if (window.EngagingNetworks.upsell.length && window.EngagingNetworks.upsell[0].componentId && window.EngagingNetworks.upsell[0].componentId !== 'undefined') {
        if (formIsValid()) {
          enSustainerUpsell();
        }
      }

      // Maybe display upsell modal
      if (hasUpsell && donationAmount >= 5 && donationAmount <= 100 && !monthlyCheckbox.checked) {
        if (isInvalid) {
          if (formIsValid()) {
            doUpsell()
          }
        } else {
          setTimeout(function() {
            if (formIsValid()) {
              doUpsell()
            } else {
              isInvalid = true
            }
          }, 100)
        }
        return false
      } else {
        return true
      }
    }

    window.enOnSubmit = function() {
      // handle async code with promises
      return new Promise(function(resolve, reject) {
        setTimeout(function() {
          resolve() // will allow submit when timeout runs in 1000ms
        }, 1000)
      })
    }
  }

  /**
   * Member care form
   */
  const memberCare = () => {
    const emailAddress = document.getElementById('en__field_supporter_emailAddress')
    const generateEmailButton = document.getElementById('generateEmail')
    const optIns = getAll('.hide-opt-ins .en__field--question .en__field__input--checkbox')

    const unCheckOptIns = () => {
      optIns.forEach(el => {
        el.checked = false
      })
    }

    const checkOptIns = () => {
      optIns.forEach(el => {
        el.checked = true
      })
    }

    // Auto check/uncheck opt in checkboxes
    if (emailAddress && generateEmailButton) {
      emailAddress.addEventListener('change', e => {
        if (e.target.value.indexOf('fakeemail') > -1) {
          unCheckOptIns()
        } else {
          checkOptIns()
        }
      })

      // For anonymous actions, or actions that don't require an email address,
      // the database still needs an email address to be able to store the data.
      generateEmailButton.addEventListener('click', e => {
        const theDate = new Date()
        const milliseconds = theDate.getTime()
        const anonAddress = `${milliseconds}.first.last@fakeemail.com`

        emailAddress.value = anonAddress
        triggerEvent(emailAddress, 'change')
      })
    }
  }

  /**
   * Track data capture submits
   */
  const dataCaptureTracking = () => {
    if (pageJson.pageType === 'otherdatacapture') {
      theForm.addEventListener('submit', function(e) {
        setTimeout(function() {
          if (formIsValid() && typeof utag !== 'undefined') {
            utag.link({
              'event_name': 'frm_emt_submit',
              'form_type': 'otherdatacapture',
              'form_name': utag_data.page_name.slice(0, -2),
              'email_signup_location': 'otherdatacapture'
            })
          }
        }, 100)
      })
    }
  }

  /**
   * Track social share clicks
   */
  const socialShareTracking = () => {
    getAll('.en__socialShare__image').forEach(el => {
      el.addEventListener('click', e => {
        if (typeof utag !== 'undefined') {
          utag.link({
            'event_name': 'social_share',
            'social_share_id': `preserve.nature.org.share.${e.target.parentElement.dataset.enshare}`,
            'social_share_platform': e.target.parentElement.dataset.enshare
          })
        }
      })
    })
  }

  /**
   * Track ETT and petition submits
   */
  const advocacyTracking = () => {
    if (pageJson.pageType === 'advocacypetition' || pageJson.pageType === 'emailtotarget') {
      theForm.addEventListener('submit', e => {
        setTimeout(function() {
          const phoneOptIn = document.getElementById('en__field_supporter_questions_1107654')
          let utagData = {}

          if (formIsValid() && typeof utag !== 'undefined') {
            utagData.event_name = phoneOptIn ? (phoneOptIn.checked ? 'frm_emt_txt_submit' : 'frm_emt_submit') : 'frm_emt_submit'
            utagData.form_type = pageJson.pageType
            utagData.form_name = utag_data.page_name.slice(0, -2)
            utagData.action_id = utag_data.form_name
            utagData.action_type = pageJson.pageType
            utagData.zip_code = document.getElementById('en__field_supporter_postcode') ? document.getElementById('en__field_supporter_postcode').value : ''
            utagData.email_signup_location = pageJson.pageType
            if (phoneOptIn) {
              if (phoneOptIn.checked) {
                utagData.text_signup_location = pageJson.pageType
              }
            }
            utag.link(utagData)
          }
        }, 100)
      })
    }
  }

  /**
   * Track footer clicks
   */
  const footerTracking = () => {
    const footer = document.querySelector('.footer')
    if (footer) {
      getAll('a', footer).forEach(el => {
        el.addEventListener('click', e => {
          if (typeof utag !== 'undefined') {
            utag.link({
              'event_name': 'footer_nav_click',
              'nav_click_location': `preserve.nature.org.fnav.${e.target.textContent.toLowerCase()}`
            })
          }
        })
      })
    }
  }

  /**
   * Track url parameters
   */
  const URLTracking = () => {
    const params = new URLSearchParams(location.search)
    const trackers = [
      'src',
      'vid',
      'vid2',
      'en_txn1',
      'en_txn2',
      'en_txn3',
      'en_txn4',
      'en_txn5',
      'en_txn7',
      'en_txn8',
      'en_txn9',
      'en_txn10'
    ]
    let visitData = sessionStorage.getItem('visitData') ? JSON.parse(sessionStorage.getItem('visitData')) : {}

    // Add tracking params as found
    trackers.forEach(tracker => {
      if (params.has(tracker)) {
        visitData[tracker] = params.get(tracker)
      }
    })
    sessionStorage.setItem('visitData', JSON.stringify(visitData))
  }

  /**
   * Redirect enhancements
   */
  const redirects = () => {
    // Need to carry appealCode URL param to redirected campaign
    if (typeof pageJson !== 'undefined') {
      if (pageJson.pageNumber === 1 && pageJson.appealCode) {
        // Save appeal code for use on redirect page
        sessionStorage.setItem('appealCode', pageJson.appealCode)
      }
    }

    // Redirect with appeal code
    if (appealCodeRedirect && sessionStorage.getItem('appealCode')) {
      // The appeal code URL param has already been added to the redirect link with a default value of 'xxx'
      // Replace 'xxx' with saved appeal code
      appealCodeRedirect.setAttribute('href', appealCodeRedirect.getAttribute('href').replace(/xxx/, sessionStorage.getItem('appealCode')))
      sessionStorage.removeItem('appealCode')
      appealCodeRedirect.click()
    }
  }

  /**
   * Confirmation page enhancements
   */
  const confirmation = () => {
    let donationData = sessionStorage.getItem('donationData')
    const recurringStatus = theForm.querySelector('.js-recurring-status')

    if (window.self !== window.top) {
      // window.parent.postMessage('submitted', '*');
      window.parent.dispatchEvent(iframeSubmitted)
    }

    if (donationData) {
      donationData = JSON.parse(donationData)
    }

    if (recurringStatus) {
      if (window.navigator.userLanguage === 'es-MX' || window.navigator.language === 'es-MX' || window.location.href.indexOf('locale=es-MX') > -1 || pageJson.locale === 'es-MX') {
        recurringStatus.textContent = recurringStatus.textContent === 'ACTIVE' ? 'Mensual' : 'Una vez'
      } else {
        recurringStatus.textContent = recurringStatus.textContent === 'ACTIVE' ? 'Monthly' : 'One-time'
      }
    }
  }

  /**
   * Seamless ecard enhancements
   */
  const seamlessEcard = () => {
    let ecardData = sessionStorage.getItem('ecardData')

    /**
     * Adds an email address to list of ecard recipients
     *
     * @param {string} recipient The email address to add
     */
    const addEcardRecipient = recipient => {
      document.querySelector('.en__ecardrecipients__name input').value = 'My Recipient'
      document.querySelector('.en__ecardrecipients__email input').value = recipient
      document.querySelector('.en__ecarditems__addrecipient').click()
    }

    if (ecardData) {
      setTimeout(function() {
        // Populate fields
        ecardData = JSON.parse(ecardData)
        document.querySelector(`.en__ecarditems__thumb:nth-child(${ecardData.selectEcard})`).click()
        document.querySelector('.en__ecardmessage__default').value = ecardData.message
        document.querySelector('.en__ecardrecipients__futureDelivery input').value = ecardData.sendDate.replace(/(..).(..).(....)/, '$3-$1-$2')
        addEcardRecipient(ecardData.recipients)

        // Cleanup
        sessionStorage.removeItem('ecardData')

        // Submit
        document.querySelector('.en__submit button').click()
      }, 1000)
    }
  }

  /**
   * Thermometer enhancements
   */
  const thermometers = () => {
    // Advocacy thermometer goals need to dynamically increase once a certain "raised" is reached
     getAll('.en__component--page[action*="/action"] .enWidget--progressBar, .en__component--page[action*="/petition"] .enWidget--progressBar').forEach(el => {
    // getAll('.enWidget--progressBar').forEach(el => {
      const fill = el.querySelector('.enWidget__fill')
      const raisedPct = parseInt(fill.style.width)
      const raisedNumber = parseInt(el.querySelector('.raised > div').textContent.replace(/\,/g, ''))
      let newGoal = null

      // Calculate and display updated therm numbers
      if (raisedPct >= thermThresholdPct) {
        // Reset fill width so that animation runs once new width is set
        fill.style.width = '0'
        newGoal = Math.ceil((raisedNumber * thermIncrease) / 1000) * 1000
        el.querySelector('.remaining > div').textContent = numberPipe(String(newGoal - raisedNumber)).replace(/\.00/, '')
        fill.style.width = `${raisedNumber / newGoal * 100}%`
      }
      // Therms are hidden with CSS
      addClass(el, activeClass)
    })
  }

  /**
   * Adds active class to element
   *
   * @param {node} el The element to add class to
   */
  const activateField = el => {
    addClass((el.target || el).parentElement, activeClass)
  }

  /**
   * Adds aria-expanded attribute to collapsible elements
   *
   * @param {node} el Target element
   * @param {nodeList} collapsibles List of collapsibles in same component as target
   */
  const addAriaCollapsedAttr = (el, collapsibles) => {
    if (el) {
      const isOpen = hasClass(el, collapseShowClass) ? 'true' : 'false'

      if (collapsibles.length) {
        collapsibles.forEach(collapsible => {
          collapsible.setAttribute('aria-expanded', 'false')
        })
      }
      el.setAttribute('aria-expanded', isOpen)
    }
  }

  /**
   * Adds aria-labelledby attribute to an untitled element
   *
   * @param {node} el Target element to add attribute to
   */
  const addAriaLabelledBy = el => {
    const maybeLabel = el.firstElementChild

    if (hasClass(maybeLabel, 'en__field__label')) {
      setTimeout(function() {
        labelId = `label${generateId()}`
        maybeLabel.id = labelId
        el.setAttribute('aria-labelledby', labelId)
      }, 100)
    }
  }

  /**
   * Adds a specified class
   *
   * @param {node} el Node to add class to
   * @param {Array || string} cls Classes to add
   */
  const addClass = (el, _classes) => {
    if (Array.isArray(_classes)) {
      el.classList.add(..._classes)
    } else {
      el.classList.add(_classes)
    }
  }

  /**
   * Return an element that has been added to the DOM
   *
   * @param {node} parentEl The node to add element to
   * @param {string} elType The type of element to add
   * @param {string} textContent Text to add to new element
   * @param {string} cls Class to add to new element
   */
  const addEl = (parentEl, elType, textContent, cls) => {
    let el = document.createElement(elType)

    if (cls) {
      addClass(el, cls)
    }
    el.textContent = textContent
    parentEl.append(el)
    return el
  }


  /**
   * Adds label with for attribute
   *
   * @param {node} el The field to associate the label with
   * @param {node} _parent Element to append label to
   * @param {string} txt Text content for label
   */
  const addLabel = (el, _parent, txt) => {
    return new Promise((resolve, reject) => {
      el.id = el.id ? el.id : el.name.replace(/\./g, '')
      label = document.createElement('label')
      label.setAttribute('for', el.id)
      label.textContent = txt
      addClass(label, visuallyHiddenClass)
      label.id = `label${generateId()}`
      _parent.insertBefore(label, el)
      resolve(label.id)
    })
  }

  /**
   * Adds placeholder attribute
   *
   * @param {node} el The field to add placeholder to
   * @param {string} textContent Placeholder value
   */
  const addPlaceholder = (el, textContent) => {
    el.setAttribute('placeholder', textContent)
  }

  /**
   * Clears all classes
   *
   * @param {node} el Node to clear classes from
   */
  const clearClass = el => el.className = ''

  /**
   * Creates image element from a url string
   *
   * @param {string} url The URL to the image
   * @param {node} el Node to append image to
   */
  const createImgFromUrl = (textContent, el) => {
    let newImg = new Image()
    const altText = textContent.split('~')[0]
    const url = textContent.split('~')[1]

    if (altText && url) {
      el.textContent = ''
      newImg.src = url
      newImg.setAttribute('alt', altText)
      el.appendChild(newImg)
    }
  }

  /**
   * Creates tooltip element for images
   *
   * @param {node} el The image block to create the tooltip for
   */
  const createImgTooltip = (el) => {
    const img = el.querySelector('img')

    if (img) {
      const tooltipContent = img.getAttribute('alt')

      if (tooltipContent !== '' && tooltipContent !== 'null') {
        let tooltip = document.createElement('a')

        addClass(tooltip, photoInfoClass)
        setAttributes(tooltip, {
          'title': tooltipContent,
          'data-bs-toggle': 'tooltip',
          'tabindex': '0',
          'aria-hidden': 'true',
        })
        el.appendChild(tooltip)

        const imageTooltip = new bootstrap.Tooltip(tooltip, {
          container: el,
          html: true,
          placement: 'top',
          template: '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
          trigger: 'click'
        })
      }
    }
  }

  /**
   * Creates popover element
   *
   * @param {string} fieldSelector The field to attach popover to
   * @param {string} label Text for popover trigger
   * @param {string} txt Popover content
   */
  const createPopover = (fieldSelector, placement, label, txt) => {
    const field = theForm.querySelector(`.${fieldSelector}`)

    if (field) {
      let popoverContainer = document.createElement('p')

      addClass(popoverContainer, popoverContainerClass)
      let popover = document.createElement('a')
      setAttributes(popover, {
        'data-bs-content': txt,
        'data-bs-toggle': 'popover',
        'data-bs-trigger': 'click focus',
        'role': 'button',
        'tabindex': '0',
      })
      popover.textContent = label
      switch (placement) {
        case 'before':
          field.insertBefore(popover, field.querySelector('.en__field__element'))
          break
        case 'after':
          popoverContainer.appendChild(popover)
          getClosestEl(field, enFieldSelector).appendChild(popoverContainer)
          break
        default:
          field.insertBefore(popover, fiel.querySelector('.en__field__element'))
      }
    }
  }

  /**
   * Removes active class from element
   *
   * @param {node} el The element to remove class from
   */
  const deactivateField = el => {
    removeClass((el.target || el).parentElement, activeClass)
  }

  /**
   * Disables input elements
   *
   * @param {nodeList} fields The elements to disable
   */
  const disableFields = (fields) => {
    fields.forEach(el => {
      addClass(el, disabledClass)
    })
  }

  /**
   * Adds disabled class to element
   *
   * @param {node} el The element to remove class from
   */
  const disableEl = el => {
    addClass(el, disabledClass)
  }

  /**
   * Removed disabled class from element
   *
   * @param {node} el The element to remove class from
   */
  const enableEl = el => {
    removeClass(el, disabledClass)
  }

  /**
   * Splits error text blob into sentences.
   *
   * @param {node} el Element containing the error content
   */
  const formatError = el => {
    const sentences = el.textContent.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|')

    el.textContent = ''
    sentences.forEach(sentence => {
      addEl(el, 'p', sentence)
    })
  }

  /**
   * Returns does form pass EN validation
   *
   * @param {node} _parent The node to check for validation errors
   */
  const formIsValid = (_parent = theForm) => {
    const errorList = _parent.querySelector('.en__errorList')
    const invalidFields = getAll('.en__field--validationFailed', _parent)
    let valid = true

    // Looking for form errors
    if (errorList) {
      if (errorList.textContent.trim() !== '') {
        valid = false
      }
    }
    if (invalidFields.length > 0) {
      valid = false
    }
    return valid
  }

  /**
   * Places focus on first focusable element
   */
  const focusFirst = () => {
    const focusables = getAll('button, a:not(.skip), input, select, textarea, [tabindex]:not([tabindex="-1"])')

    if (focusables.length > 0) {
      setTimeout(function() {
        focusables[0].focus()
      }, 500)
    }
  }

  /**
   * Returns a unique ID
   */
  const generateId = () => {
    // return Math.round(new Date().getTime() + (Math.random() * 100))
    return self.crypto.randomUUID()
  }

  /**
   * Returns NodeList.
   *
   * @param {string} selectors One or more selectors to match against.
   * @param {node} root The node to select over
   */
  const getAll = (selector, root = document) => {
    return Array.prototype.slice.call(root.querySelectorAll(selector), 0)
  }

  /**
   * Returns Closest element up tree that matches selector
   *
   * @param {node} el Child node.
   * @param {string} selector Selector for parent
   */
  const getClosestEl = (el, selector) => {
    if (el) {
      let closestNode = el.closest(selector)
      return closestNode ? closestNode : null
    }
  }

  /**
   * Returns locale of page
   */
  const getLocale = () => {
    return typeof pageJson !== 'undefined' ? pageJson.locale : 'en-US'
  }

  /**
   * Returns Donation amount without upsell fee or null
   */
  const getOriginalDonationAmount = () => {
    const selectedAmount = theForm.querySelector('[name="transaction.donationAmt"]:not([value=""]):checked') || theForm.querySelector(otherAmountInputSelector)

    return selectedAmount ? (selectedAmount.dataset.original ? selectedAmount.dataset.original : selectedAmount.value.replace(/\,/g, '')) : null
  }

  /**
   * Returns selected amount radio button or null
   */
  const getSelectedAmount = () => {
    return theForm.querySelector('[name="transaction.donationAmt"]:not([value=""]):checked')
  }

  /**
   * Returns Donation amount with or without upsell fee or null
   */
  const getTotalDonationAmount = () => {
    const selectedAmount = theForm.querySelector('[name="transaction.donationAmt"]:not([value=""]):checked') || theForm.querySelector(otherAmountInputSelector)

    return selectedAmount ? selectedAmount.value : null
  }

  /**
   * Returns Element has specified class
   *
   * @param {node} el Node to check
   * @param {string} cls Class to check for
   */
  const hasClass = (el, cls) => {
    return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'))
  }

  /**
   * Returns True if element is empty or has only whitespace.
   *
   * @param {node} el Element to check if empty.
   * @returns {boolean} If element is empty or has only whitespace
   */
  const isEmpty = el => {
    return el.innerHTML.replace(/^\s*/, '').replace(/\s*$/, '') === ''
  }

  /**
   * Returns a Facebook sharer URL
   *
   * @param {string} sharerUrl Base Facebook sharer URL
   * @param {string} url The URL to share
   * @returns {string} Share URL
   */
  const makeFacebookUrl = (sharerUrl, url) => {
    url = encodeURIComponent(`${url.replace(/\?chain/, '')}?locale=${getLocale()}&en_chan=fb`)
    return `${sharerUrl}?u=${url}`
  }

  /*
   * Returns a Twitter tweet URL
   *
   * @param {string} sharerUrl Base Twitter tweet URL
   * @param {string} text The text to tweet
   * @param {string} url The URL to tweet
   * @returns {string} Tweet URL
   */
  const makeTwitterUrl = (text, sharerUrl, url) => {
    text = encodeURIComponent(text)
    url = encodeURIComponent(`${url.replace(/\?chain/, '')}?locale=${getLocale()}&en_chan=tw`)
    return `${sharerUrl}?text=${text}&url=${url}`
  }

  /**
   * Returns Class for form element.
   *
   * @returns {string} Class for form element
   */
  const maybeHasHero = () => {
    return theForm.querySelector('.hero-full-bleed') ? 'has-hero' : 'not-has-hero'
  }

  /**
   * Returns Class for form element.
   *
   * @returns {string} Class for form element
   */
  const maybeHasHeroSolid = () => {
    return theForm.querySelector('.hero-solid') ? 'has-hero-solid' : 'not-has-hero-solid'
  }

  /**
   * Creates a label from placeholder value and associates it with an input
   *
   * @param {node} el The input element before which the new label is inserted.
   * @param {node} _parent The parent of the newly inserted label.
   */
  const placeholderToLabel = (el, _parent) => {
    let label

    if (el && _parent) {
      el.id = el.id ? el.id : el.name.replace(/\./g, '')
      label = document.createElement('label')
      label.setAttribute('for', el.id)
      label.textContent = el.getAttribute('placeholder')
      addClass(label, visuallyHiddenClass)
      _parent.insertBefore(label, el)
    }
  }

  /**
   * Removes multiple attributes
   *
   * @param {node} el The field to remove attributes from
   * @param {object} attrs Attributes to remove
   */
  const removeAttributes = (el, ...attrs) => {
    attrs.forEach(attr => el.removeAttribute(attr))
  }

  /**
   * Remove a specified class
   *
   * @param {node} el Node to clear class from
   * @param {Array || string} cls Class to remove
   */
  const removeClass = (el, _classes) => {
    if (Array.isArray(_classes)) {
      el.classList.remove(..._classes)
    } else {
      el.classList.remove(_classes)
    }
  }

  /**
   * Dynamically resizes iframe to fit content
   *
   * @param {node} el The iframe to resize
   */
  const resizeIframe = el => {
    setTimeout(function() {
      el.style.height = el.contentWindow.document.body.scrollHeight + "px"
    }, 100)
  }

  /**
   * Scrolls to element on page
   *
   * @param {node} el Element to scroll to
   */
  const scrollToEl = el => {
    el.scrollIntoView({
      behavior: 'smooth',
    })
  }

  /**
   * Adds multiple attributes
   *
   * @param {Node} el The field to add attributes to
   * @param {object} attrs Attributes to add
   */
  const setAttributes = (el, attrs) => {
    Object.keys(attrs).forEach(attr => {
      el.setAttribute(attr, attrs[attr])
    })
  }

  /**
   * Returns monthly upsell amount
   *
   * @param {number} amt Original donation amount
   */
  const setMonthlyAmount = (amt) => {
    if (amt >= 5 && amt <= 24) {
      return 5
    } else if (amt >= 25 && amt <= 50) {
      return 10
    } else if (amt > 50 && amt <= 100) {
      return 15
    }
  }

  /**
   * Returns str with no spaces
   *
   * @param {sting} str String to strip spaces from
   */
  const stripSpaces = str => {
    return str.replace(/\s/g, '')
  }

  /**
   * Triggers an event
   *
   * @param {node} el Target element
   * @param {string} evt Type of event
   */
  const triggerEvent = (el, evt) => {
    el.dispatchEvent(new Event(evt))
  }

  /**
   * Updates payment method hidden field
   *
   * @param {string} ccType CC type returned from cleave
   */
  const updatePaymentType = (ccType) => {
    const paymentType = theForm.querySelector(paymentTypeSelector)
    let paymentTypeCode = ''

    if (paymentType) {
      switch (ccType) {
        case 'amex':
          paymentTypeCode = 'AX'
          break
        case 'discover':
          paymentTypeCode = 'DI'
          break
        case 'mastercard':
          paymentTypeCode = 'MC'
          break
        case 'visa':
          paymentTypeCode = 'VI'
          break
      }
      paymentType.value = paymentTypeCode
    }
  }

  /**
   * Updates everywhere donation amount is displayed.
   *
   * @param {string} amt Total donation amount
   */
  const updateTotalGift = amt => {
    getAll(totalAmountSelector).forEach(el => {
      el.textContent = !isNaN(amt) ? `$${numberPipe(amt)}` : ''
    })
  }

  /**
   * Returns wrapped nodes.
   *
   * @param {NodeList} nodes The nodes to wrap.
   * @param {string} wrapperType The node element for the wrapper.
   * @param {string} wrapperClass The class to assign the wrapper
   * @returns Wrapped elements
   */
  const wrapAll = (nodes, wrapperType, wrapperClass) => {
    let parent = nodes[0].parentNode
    let previousSibling = nodes[0].previousSibling
    let wrapper = document.createElement(wrapperType)

    if (wrapperClass) {
      addClass(wrapper, wrapperClass)
    }

    for (let i = 0; nodes.length - i; wrapper.firstChild === nodes[0] && i++) {
      wrapper.appendChild(nodes[i])
    }

    let nextSibling = previousSibling ? previousSibling.nextSibling : parent.firstChild
    parent.insertBefore(wrapper, nextSibling)
    return wrapper
  }

  /**
   * Returns wrapped node.
   *
   * @param {node} nodes The node to wrap.
   * @param {string} wrapperType The node element for the wrapper.
   * @param {string} wrapperClass The class to assign the wrapper
   * @returns Wrapped element
   */
  const wrapEl = (node, wrapperType, wrapperClass) => {
    let wrapper = document.createElement(wrapperType)

    if (wrapperClass) {
      addClass(wrapper, wrapperClass)
    }

    node.parentNode.insertBefore(wrapper, node)
    wrapper.appendChild(node)

    return wrapper
  }

  // Before load
  if (ecardRedirect && sessionStorage.getItem('ecardData')) {
    ecardRedirect.click()
  }

  // On load
  document.addEventListener('DOMContentLoaded', e => {
    if (window.self !== window.top) {
      window.parent.dispatchEvent(iframeReady)
    }
    if (seamlessEcardBlock) {
      seamlessEcard()
    }
    ui()
    if (typeof pageJson !== 'undefined') {
      if (pageJson.pageType === 'donation') {
        donationForm()
        ihmoTribute()
      } else if (pageJson.pageType === 'event') {
        eventForm()
        eventFormNew()
      } else if (pageJson.pageType === 'emailtotarget' && pageJson.pageNumber === 1) {
        emailToTarget()
      } else if (pageJson.pageType === 'e-card') {
        ihmoEcard()
      }
      if (hasClass(body, 'page--hub')) {
        hub()
      }
      if (hasClass(body, 'page--quiz')) {
        quiz()
      }
      if (hasClass(body, 'page--action-center')) {
        actionCenter()
      }
      if (hasClass(body, 'page--confirmation')) {
        confirmation()
      }
      optIns()
      mobilePhone()
      validation()
      formSubmit()
      dataCaptureTracking()
      socialShareTracking()
      advocacyTracking()
      footerTracking()
      URLTracking()
      redirects()
    }
    memberCare()
  })

  window.addEventListener('load', e => {
    let checkThermometer = setInterval(function() {
      if (theForm.querySelector('.enWidget--progressBar')) {
        clearInterval(checkThermometer)
        thermometers()
      }
    }, 100)
  })

  const eventFormNew = () => {

    const summary = () => {
      renderSummary()

      if (pageJson.pageNumber === pageJson.pageCount) {
        sessionStorage.removeItem('eventSummary')
      }
    }

    /**
    * @renderSummary Gets event summary text from either the
    * #event-summary element or sessionStorage and display them
    * in an <event-summary> element.
    *
    * Engaging Networks elements
    * Requires "Event Settings" text block with #event-summary
    * element on the first page of the event form.
    * Add "Event Summary" text block to an event page to display.
    */
    const renderSummary = () => {
      /**
      * Get event summary from sessionStorage or #event-summary element.
      */
      const getSummary = new Promise((resolve, reject) => {
        if (document.querySelector('#event-summary')) {
          let eventSummary = {}

          document.querySelector('#event-summary').querySelectorAll('[slot]').forEach(slot => {
            eventSummary[slot.getAttribute('slot')] = slot.textContent
          })
          sessionStorage.setItem('eventSummary', JSON.stringify(eventSummary))
          resolve(eventSummary)
        } else {
          resolve(JSON.parse(sessionStorage.getItem('eventSummary')))
        }
      })

      /**
      * Populate <event-summary> elements.
      * @param {Object} summary - Event summary
      */
      const setCustomElementContent = (summary) => {
        return new Promise((resolve, reject) => {
          const template = pageJson.pageNumber === 1 ? document.getElementById('event-summary-template-overlay').content : document.getElementById('event-summary-template-tabular').content
          const clone = template.cloneNode(true)
          let eventStartDate
          let eventEndDate

          document.querySelectorAll('event-summary').forEach(customSummary => {
            for (const detailItem in summary) {
              if (detailItem === 'event-start-date') {
                eventStartDate = summary[detailItem]
              } else if (detailItem === 'event-end-date') {
                eventEndDate = summary[detailItem]
                // Only display end date if needed
                clone.querySelector(`slot[name="event-date"]`).textContent = (eventEndDate !== '' && eventEndDate !== eventStartDate) ? `${eventStartDate}-${eventEndDate}` : eventStartDate
              } else {
                clone.querySelector(`slot[name="${detailItem}"]`).textContent = summary[detailItem]
              }
            }
            // Create link to google maps out of address
            const googleMapLink = `https://www.google.com/maps/place/?q=${encodeURI(clone.querySelector('slot[name="event-location"]')?.textContent)}`
            clone.querySelector('a').href = googleMapLink

            customSummary.appendChild(clone)
          })
          resolve()
        })
      }
      getSummary.then(data => setCustomElementContent(data))
    }

    /**
    * @tickets shows coded tickets as needed, customizes display of ticket names
    * and attendee labels adn shows additional donation in the summary if needed.
    */
    const delimiter = '/' // The character to separate the ticket name from the ticket code
    const tickets = () => {
      if (pageJson.pageNumber === 1) {
        showTickets()
      } else {
        formatTicketNames()
        formatAttendeeLabels()
        showAdditionalDonation()
      }
    }

    /**
    * @showTickets
    *
    * Tickets are hidden by default with CSS
    *
    * If a "&code" parameter is in the URL, tickets named as [ticket name]~[code]
    * pattern will be displayed if the url and ticket code match.
    *
    * If a "&code" parameter is not in the URL, tickets named normally
    * will be displayed
    */
    const showTickets = () => {
      let ticketCode = new URLSearchParams(location.search).get('code')

      const showNonCodedTickets = () => {
        // Show all tickets that donot have a code attached
        let ticketsToShow = [...document.querySelectorAll('.en__ticket')]
          .filter(ticket => ticket.querySelector('.en__ticket__name')?.textContent.indexOf(delimiter) === -1)
          .forEach(ticket => {
            ticket.classList.add('d-table-row')
          })
      }

      const showCodedTickets = () => {
        let regex = new RegExp(`^${ticketCode}$`)

        // Show tickets who's code matches the url parameter
        let ticketsToShow = [...document.querySelectorAll('.en__ticket')]
          .filter(ticket => regex.test(ticket.querySelector('.en__ticket__name')?.textContent.split(delimiter)[1]))
          .forEach(ticket => {
            const ticketName = ticket.querySelector('.en__ticket__name').textContent.split(delimiter)[0]
            ticket.querySelector('.en__ticket__name').textContent = ticketName
            ticket.classList.add('d-table-row')
          })
      }

      showNonCodedTickets()
      if (ticketCode) {
        showCodedTickets()
      }
    }

    const formatTicketNames = () => {
      document.querySelectorAll('.en__orderSummary__data--type, .en__registrants__ticketHead').forEach(el => {
        // Strip out ticket code so {ticket name}~{ticket code} appears as {ticket name}
        el.textContent = el.textContent.replace(/\/[0-9A-Za-z]*[0-9A-Za-z]/, '')
      })
    }

    const formatAttendeeLabels = () => {
      document.querySelectorAll('.en__registrants__registrantHead').forEach(el => {
        // Convert strings like "Attendee 2 1" to "Attendee 2"
        el.textContent = el.textContent.replace(/(\w+)(\s[0-9]*\s)([0-9]*$)/, '$1 $2')
      })
    }

    const showAdditionalDonation = () => {
      // display non-zero additional donation in the summary
      const additionalDonationSummary = document.querySelector('.en__orderSummary__additional')

      if (additionalDonationSummary) {
        if (parseInt(additionalDonationSummary.querySelector('.en__orderSummary__data--cost').textContent) !== 0) {
          additionalDonationSummary.classList.add('d-table-row')
        }
      }
    }

    const recurringEvent = () => {
      const checkForProcessingError = () => {
        const processingError = document.querySelector('.en__errorList .en__error:not(:empty)')

        if (processingError) {
          processingError.textContent = processingError.textContent.replace(/Event Occurrence Identifier Not Found or Invalid/, ' No date was selected. Please adjust and resubmit.')
        }
      }

      const handleSelectDateButtonClick = () => {
        // Collapses the event date list when clicking on the Select Date button and the event date list is expanded.
        // Need to listen for a mousedown or keydown event instead of a click since EN expands the list before the click is completed.
        const selectDateButtons = document.querySelectorAll('.en__ticketRecurring__select, .en__occurrenceSummary__change')
        const eventOccurrences = document.querySelector('.en__eventOccurrences ')
        const ticketBlock = document.querySelector('.en__ticketBlock--recurring')

        function throttle(callback, interval) {
          let enableCall = true

          return function(...args) {
            if (!enableCall) return

            enableCall = false
            callback.apply(this, args)
            setTimeout(() => enableCall = true, interval)
          }
        }

        const toggleSelectDate = () => {
          if (eventOccurrences.classList.contains('en__eventOccurrences--selecting')) {
            setTimeout(() => {
              eventOccurrences.classList.remove('en__eventOccurrences--selecting')
              ticketBlock.classList.remove('en__ticketBlock--recurring--pending')
            }, 300)
          }
        }

        if (selectDateButtons.length > 0 && eventOccurrences && ticketBlock) {
          selectDateButtons.forEach(el => {
            // The change date button is an anchor element that is not focusing normally for some reason
            if (el.nodeName === 'A') {
              el.setAttribute('tabindex', '0')
            }
            el.addEventListener('mousedown', throttle(toggleSelectDate, 300))
            el.addEventListener('keydown', e => {
              if (e.key === 'Enter') {
                toggleSelectDate()
              }
            })
          })
        }
      }

      checkForProcessingError()
      handleSelectDateButtonClick()
    }

    summary()
    tickets()
    recurringEvent()
  }

  const ihmoTribute = () => {
    const addDefaultSourceCode = () => {
      // Adds page level default source code to the source code select
      const inMemCheckbox = document.getElementById('en__field_transaction_inmem')
      const sourceCode = document.getElementById('en__field_supporter_appealCode')
      const defaultSourceCode = document.querySelector('[name="supporter.NOT_TAGGED_72"]')?.value

      const addDefaultOption = () => {
        // Adds a new option to the source code select
        const defaultSourceCodeOption = document.createElement('option')

        defaultSourceCodeOption.text = 'Form Default Source Code'
        defaultSourceCodeOption.text = defaultSourceCode
        sourceCode.add(defaultSourceCodeOption)
      }

      const setDefaultSourceCode = () => {
        // Sets source code value to the added default option
        /* jshint ignore:start */
        !sourceCode.querySelector(`option[value="${defaultSourceCode}"]`) && addDefaultOption()
        sourceCode.value = defaultSourceCode
        /* jshint ignore:end */
      }

      if (inMemCheckbox && sourceCode && defaultSourceCode) {
        inMemCheckbox.addEventListener('click', (e) => {
          // Toggles source code value when the tribute checkbox is clicked
          if (e.target.checked) {
            sourceCode.value = sourceCode.querySelector('option').value
          } else {
            setDefaultSourceCode()
          }
        })
        window.addEventListener('load', () => setDefaultSourceCode())
      }
    }

    const insertEcard = () => {
      // Moves ecard iframe under delivery options
      const ecardContainer = document.getElementById('ecardIframe')?.closest('.ecard-collapse')
      const referenceNode = document.querySelector('.en__field--infname')
      /* jshint ignore:start */
      ecardContainer && referenceNode && referenceNode.parentElement.insertBefore(ecardContainer, referenceNode)
      /* jshint ignore:end */
    }

    const insertHeadings = () => {
      // Moves headings (H3 tags) contained in copy block into the form block (in order)
      const headingsContainer = document.querySelector('.tribute-collapse')?.querySelector('.form-heading')
      const referenceNodes = [
        '.en__field--honname',
        '.en__field--gift-designation-yn',
        '.en__field--select-notification-option',
        '.en__field--infname'
      ]
      let headingsMoved = 0

      // Assumes there are only form headings in the headingsContainer
      /* jshint ignore:start */
      headingsContainer && headingsContainer.querySelectorAll('h3, p').forEach((heading) => {
        const referenceNode = document.querySelector(referenceNodes[headingsMoved])
        referenceNode && referenceNode.parentElement.insertBefore(heading, referenceNode) && headingsMoved++
      })
      headingsMoved > 0 && headingsContainer.remove()
      /* jshint ignore:end */
    }

    const createTributeBlock = () => {
      const inMemContainer = document.querySelector('.en__field--inmem')?.closest('.en__component--row ')
      const ihmoTribute = document.querySelector('.ihmo-tribute')

      if (inMemContainer && ihmoTribute) {
        inMemContainer.classList.add('ihmo-donation')
        inMemContainer.appendChild(ihmoTribute)
      }
    }

    const toggleHonoreeAddressHeading = () => {
      const honoreeAddressHeading = document.querySelector('.en__field--infname')?.previousElementSibling

      const toggleClass = (e) => {
        if (!e) return

        const target = e.target ? e.target : e

        honoreeAddressHeading.removeAttribute('class')
        switch (target.value) {
          case 'Send an ecard':
            honoreeAddressHeading.classList.add('ecard')
            break
          case 'Notify by mail':
            honoreeAddressHeading.classList.add('mail')
            break
          case 'Do not notify':
            honoreeAddressHeading.classList.add('d-none')
            break
        }
      }
      /* jshint ignore:start */
      honoreeAddressHeading && honoreeAddressHeading.nodeName === 'H3' && document.querySelectorAll('.en__field--select-notification-option .en__field__input--radio').forEach(el => {
        el.addEventListener('click', toggleClass)
      })
      /* jshint ignore:end */

      toggleClass(document.querySelector('.en__field--select-notification-option .en__field__input--radio:checked'))
    }

    const toggleHonoreeLabelText = () => {
      const toggleClass = (e) => {
        if (!e) return

        const target = e.target ? e.target : e
        const classToAdd = target.value === 'In Honor' ? 'honor' : 'memory'
        const classToRemove = target.value === 'In Honor' ? 'memory' : 'honor'

        document.querySelector('.tribute-collapse').classList.remove(classToRemove)
        document.querySelector('.tribute-collapse').classList.add(classToAdd)
      }

      document.querySelectorAll('.en__field--trbopts .en__field__input').forEach(el => {
        el.addEventListener('click', toggleClass)
      })

      toggleClass(document.querySelector('.en__field--trbopts .en__field__input:checked'))
    }

    const toggleHonoreeFieldPlacement = () => {
      const honoreeCity = document.querySelector('.en__field--NOT_TAGGED_36')
      const honoreeState = document.querySelector('.en__field--NOT_TAGGED_35')
      // Honoree address 2 OR address 1
      const inHonorReferenceNode = document.querySelector('.en__field--NOT_TAGGED_34') || document.querySelector('.en__field--NOT_TAGGED_33')
      // Honoree last name
      const inMemoryReferenceNode = document.querySelector('.en__field--othamt2')

      const moveHonoreeFields = (e) => {
        if (!e) return
        const target = e.target ? e.target : e
        const referenceNode = target.value === 'In Honor' ? inHonorReferenceNode : inMemoryReferenceNode

        referenceNode.after(honoreeCity, honoreeState)
      }

      if (honoreeCity && honoreeState && inHonorReferenceNode && inMemoryReferenceNode) {
        document.querySelectorAll('.en__field--trbopts .en__field__input--radio').forEach(el => el.addEventListener('click', moveHonoreeFields))
        moveHonoreeFields(document.querySelector('.en__field--trbopts .en__field__input--radio:checked'))
      }
    }

    const toggleHonoreeFieldVisibility = () => {
      const tributeCheckbox = document.getElementById('en__field_transaction_inmem')
      const mailLetterButton = document.querySelector('.en__field--select-notification-option .en__field__input--radio[value="Notify by mail"]')
      // Honoree city, state
      const fields = document.querySelectorAll('.en__field--NOT_TAGGED_36, .en__field--NOT_TAGGED_35')

      const disableField = (field) => {
        field.classList.add('en__hidden')
        field.querySelector('.en__field__input').disabled = true
      }

      const enableField = (field) => {
        field.classList.remove('en__hidden')
        field.querySelector('.en__field__input').disabled = false
      }

      const toggleVisibility = (e) => {
        if (e.target.checked && mailLetterButton.checked) {
          fields.forEach(field => enableField(field))
        } else {
          fields.forEach(field => disableField(field))
        }
      }
      /* jshint ignore:start */
      tributeCheckbox && mailLetterButton && tributeCheckbox.addEventListener('click', toggleVisibility)
      /* jshint ignore:end */
    }

    const handleTributeCheckboxClick = () => {
      const tributeCheckbox = document.getElementById('en__field_transaction_inmem')
      /* jshint ignore:start */
      tributeCheckbox && tributeCheckbox.addEventListener('click', () => sessionStorage.setItem('en__field_transaction_inmem', tributeCheckbox.checked))
      /* jshint ignore:end */
    }

    const handleNotificationOptionsClick = () => {
      // Saves the selected notification option for use on thank you page
      const notificationOptions = document.querySelector('.en__field--select-notification-option')
      const inMem = document.getElementById('en__field_transaction_inmem')

      const saveNotificationOption = (option) => {
        if (option) {
          switch (option) {
            case 'Send an ecard':
              option = 'ecard'
              break
            case 'Notify by mail':
              option = 'mail'
              break
            case 'Do not notify':
              option = 'do-not-notify'
              break
          }
          sessionStorage.setItem('en__field--select-notification-option', option)
        }
      }

      if (notificationOptions && inMem) {
        if (inMem.checked) {
          saveNotificationOption(notificationOptions.querySelector('.en__field__input--radio:checked')?.value)
        } else {
          sessionStorage.removeItem('en__field--select-notification-option')
        }

        notificationOptions.querySelectorAll('.en__field__input--radio').forEach(el => {
          el.addEventListener('click', e => e.target.checked && saveNotificationOption(notificationOptions.querySelector('.en__field__input--radio:checked')?.value))
        })

        inMem.addEventListener('click', e => {
          if (e.target.checked) {
            saveNotificationOption(notificationOptions.querySelector('.en__field__input--radio:checked')?.value)
          } else {
            sessionStorage.removeItem('en__field--select-notification-option')
          }
        })
      }
    }

    const initCollapsibles = () => {
      const makeCollapseTrigger = (el, target) => {
        el.dataset.bsToggle = 'collapse'
        el.dataset.bsTarget = target

        document.querySelectorAll(target).forEach(el => {
          el.classList.add('collapse')
          new bootstrap.Collapse(el, {
            toggle: false
          })
        })
      }

      const hideCollapsibles = (selector) => {
        // Collapses collapse elements matching the selector
        document.querySelectorAll(selector).forEach(el => {
          bootstrap.Collapse.getOrCreateInstance(el).hide()
        })
      }

      const showCollapsibles = (selector) => {
        // Expands collapse elements matching the selector
        document.querySelectorAll(selector).forEach(el => {
          bootstrap.Collapse.getOrCreateInstance(el).show()
        })
      }

      // Collapse elements that are controlled by the Monthly recurring gift button
      document.querySelector('.giveBlock.mnthly label')?.addEventListener('click', e => {
        hideCollapsibles('.one-time-collapse')
        showCollapsibles('.recurrence-collapse')
      })

      // Collapse elements that are controlled by the One-time gift button
      document.querySelector('.giveBlock.oneTime label')?.addEventListener('click', e => {
        hideCollapsibles('.recurrence-collapse')
        showCollapsibles('.one-time-collapse')
      })

      // Collapse elements that are controlled by the In Honor or Memory checkbox
      /* jshint ignore:start */
      document.getElementById('en__field_transaction_inmem') && makeCollapseTrigger(document.getElementById('en__field_transaction_inmem'), '.tribute-collapse')
      /* jshint ignore:end */
      // Collapse elements that are controlled by the Notification Options buttons
      const notificationOptions = document.querySelector('.en__field--select-notification-option')
      if (notificationOptions) {
        // Collapses the ecard elements
        notificationOptions.querySelectorAll('.en__field__input--radio:not([value*="ecard"])').forEach(el => {
          el.addEventListener('click', () => hideCollapsibles('.ecard-collapse'))
        })
        // Expands the ecard elements
        notificationOptions.querySelector('.en__field__input--radio[value*="ecard"]').addEventListener('click', () => showCollapsibles('.ecard-collapse'))
        // Expands the inform[property] elements
        notificationOptions.querySelectorAll('.en__field__input--radio[value*="ecard"], .en__field__input--radio[value*="mail"]').forEach(el => {
          el.addEventListener('click', () => showCollapsibles('.do-not-notify-collapse'))
        })
        // Collapses the inform[property] elements
        /* jshint ignore:start */
        notificationOptions.querySelector('.en__field__input--radio:not([value*="ecard"]):not([value*="mail"])').addEventListener('click', () => hideCollapsibles('.do-not-notify-collapse'))
        /* jshint ignore:end */
      }

      // Expands some collapse elements by default
      /* jshint ignore:start */
      document.querySelector('.one-time-collapse') && bootstrap.Collapse.getOrCreateInstance(document.querySelector('.one-time-collapse')).show()
      /* jshint ignore:end */
      showCollapsibles('.ecard-collapse')
      showCollapsibles('.do-not-notify-collapse')
    }

    const ecardMessaging = () => {
      const ecardIframe = document.getElementById('ecardIframe')

      const sendMessage = (messageType, targetSelector, value) => {
        ecardIframe.contentWindow.postMessage({
          messageType: messageType,
          targetSelector: targetSelector,
          value: value
        }, location.origin)
      }

      const handleEcardFieldInput = () => {
        // Inform name maps to en__ecardrecipients__name on the ecard form
        document.querySelectorAll('#en__field_transaction_infname, #en__field_transaction_othamt3, #en__field_transaction_infemail').forEach(el => {
          el.addEventListener('change', e => sendMessage('add recipient'))
        })
      }

      if (ecardIframe) {
        handleEcardFieldInput()
      }
    }

    const showTribute = () => {
      const ecardIframe = document.getElementById('ecardIframe')

      const initEcardIframe = new Promise((resolve, reject) => {
        iFrameResize({
          log: false,
          checkOrigin: false,
          onMessage: ({ iframe, message }) => {
            switch (message.type || message) {
              case 'ready':
                ecardIframe.iFrameResizer.resize()
                resolve()
                break
              case 'submitted':
                showThankyou()
                break
            }
          },
        }, '#ecardIframe')
      })

      window.addEventListener('resize', () => {
        ecardIframe.iFrameResizer.resize()
        // mailLetterIframe.iFrameResizer.resize()
      })

      if (sessionStorage.getItem('en__field_transaction_inmem') === 'true' && ecardIframe) {
        initEcardIframe.then(() => {
          document.body.classList.add('tribute')
        })
      }
    }

    const setTimestamp = () => {
      // Adds a timestamp to ecard form URL in the timestamp field.
      // Timestamp field is used to determine if donor is eligible to send a standalone ecard.
      const timestampInput = document.getElementById('en__field_supporter_NOT_TAGGED_70')

      if (timestampInput) {
        const url = new URL(timestampInput.value)
        const params = new URLSearchParams(url.search)
        const timestamp = new Date(new Date().toLocaleString('en-US', {
          timeZone: 'America/Los_Angeles',
        })).getTime()

        params.append('ts', timestamp)
        timestampInput.value = url.origin + url.pathname + '?' + params.toString()

        // For testing expiration in minutes
        const useDays = document.getElementById('useDays')
        const numberOfDays = document.getElementById('numberOfDays')
        const useMinutes = document.getElementById('useMinutes')
        const numberOfMinutes = document.getElementById('numberOfMinutes')

        if (useDays && numberOfDays) {
          useDays.addEventListener('click', e => {
            params.delete('ts_minutes')
            if (e.target.checked) {
              params.append('ts_days', numberOfMinutes.value)
            } else {
              params.delete('ts_days')
            }
            timestampInput.value = url.origin + url.pathname + '?' + params.toString()
          })
          numberOfDays.addEventListener('change', () => {
            if (useDays.checked) {
              params.set('ts_days', numberOfDays.value)
              timestampInput.value = url.origin + url.pathname + '?' + params.toString()
            }
          })
        }

        if (useMinutes && numberOfMinutes) {
          useMinutes.addEventListener('click', e => {
            params.delete('ts_days')
            if (e.target.checked) {
              params.append('ts_minutes', numberOfMinutes.value)
            } else {
              params.delete('ts_minutes')
            }
            timestampInput.value = url.origin + url.pathname + '?' + params.toString()
          })
          numberOfMinutes.addEventListener('change', () => {
            if (useMinutes.checked) {
              params.set('ts_minutes', numberOfMinutes.value)
              timestampInput.value = url.origin + url.pathname + '?' + params.toString()
            }
          })
        }
      }
    }

    const showThankyou = () => {
      const isTributeGift = sessionStorage.getItem('en__field_transaction_inmem')
      const notificationOption = sessionStorage.getItem('en__field--select-notification-option')

      // Adds classes to the to control conditional content display
      /* jshint ignore:start */
      isTributeGift && isTributeGift === 'true' && document.body.classList.add('tribute')
      notificationOption && document.body.classList.add(notificationOption)
      /* jshint ignore:end */
      // Clear storage
      sessionStorage.removeItem('en__field_transaction_inmem')
      sessionStorage.removeItem('en__field--select-notification-option')
    }

    if (pageJson.pageNumber === 1 && document.querySelector('.ihmo-tribute') && document.getElementById('ecardIframe')) {
      addDefaultSourceCode()
      insertEcard()
      insertHeadings()
      createTributeBlock()
      toggleHonoreeAddressHeading()
      toggleHonoreeLabelText()
      toggleHonoreeFieldPlacement()
      toggleHonoreeFieldVisibility()
      handleTributeCheckboxClick()
      handleNotificationOptionsClick()
      initCollapsibles()
      ecardMessaging()
      showTribute()
      setTimestamp()
    } else if (sessionStorage.getItem('en__field_transaction_inmem') === 'true' && pageJson.pageNumber < pageJson.pageCount && document.getElementById('ecardIframe')) {
      const isTributeGift = document.getElementById('en__field_supporter_NOT_TAGGED_71')

      if (isTributeGift) {
        isTributeGift.closest('.en__field').classList.add('visually-hidden')
        isTributeGift.click()
      }
      handleNotificationOptionsClick()
      initCollapsibles()
      ecardMessaging()
      showTribute()
      setTimestamp()
    } else if (pageJson.pageNumber === pageJson.pageCount && document.getElementById('ecardIframe')) {
      showThankyou()
    }
  }

  const ihmoEcard = () => {
    const parentPageNumberOfPages = window.parent.pageJson.pageCount
    const parentPageNumber = window.parent.pageJson.pageNumber
    const form = document.querySelector('.en__component--page[action$="/action/2"]')
    form.id = 'form'

    const isExcluded = (el) => {
      // Excludes fields from formPersistence
      const blacklist = [
        'hidden',
        'sessionId',
        'supporter.firstName',
        'supporter.lastName',
        'supporter.emailAddress',
      ]

      return blacklist.includes(el.name)
    }

    const displayEcard = () => {
      const makeAccessible = () => {
        // Makes the ecard images accessible by transforming them to behave like radio buttons
        class RadioGroup {
          constructor(groupNode) {
            this.groupNode = groupNode

            this.radioButtons = []

            this.firstRadioButton = null
            this.lastRadioButton = null

            var rbs = this.groupNode.querySelectorAll('[role=radio]')

            for (var i = 0; i < rbs.length; i++) {
              var rb = rbs[i]

              rb.tabIndex = -1
              rb.setAttribute('aria-checked', 'false')

              rb.addEventListener('keydown', this.handleKeydown.bind(this))
              rb.addEventListener('click', this.handleClick.bind(this))
              rb.addEventListener('focus', this.handleFocus.bind(this))
              rb.addEventListener('blur', this.handleBlur.bind(this))

              this.radioButtons.push(rb)

              if (!this.firstRadioButton) {
                this.firstRadioButton = rb
              }
              this.lastRadioButton = rb
            }
            this.firstRadioButton.tabIndex = 0
          }

          setChecked(currentItem) {
            for (var i = 0; i < this.radioButtons.length; i++) {
              var rb = this.radioButtons[i]
              rb.setAttribute('aria-checked', 'false')
              rb.tabIndex = -1
            }
            currentItem.setAttribute('aria-checked', 'true')
            currentItem.tabIndex = 0
            currentItem.focus()
          }

          setCheckedToPreviousItem(currentItem) {
            var index

            if (currentItem === this.firstRadioButton) {
              this.setChecked(this.lastRadioButton)
            } else {
              index = this.radioButtons.indexOf(currentItem)
              this.setChecked(this.radioButtons[index - 1])
            }
          }

          setCheckedToNextItem(currentItem) {
            var index

            if (currentItem === this.lastRadioButton) {
              this.setChecked(this.firstRadioButton)
            } else {
              index = this.radioButtons.indexOf(currentItem)
              this.setChecked(this.radioButtons[index + 1])
            }
          }

          /* EVENT HANDLERS */
          handleKeydown(event) {
            var tgt = event.currentTarget,
              flag = false

            switch (event.key) {
              case ' ':
              case 'Enter':
                this.setChecked(tgt)
                flag = true
                break

              case 'Up':
              case 'ArrowUp':
              case 'Left':
              case 'ArrowLeft':
                this.setCheckedToPreviousItem(tgt)
                flag = true
                break

              case 'Down':
              case 'ArrowDown':
              case 'Right':
              case 'ArrowRight':
                this.setCheckedToNextItem(tgt)
                flag = true
                break

              default:
                break
            }

            if (flag) {
              event.stopPropagation()
              event.preventDefault()
            }
          }

          handleClick(event) {
            this.setChecked(event.currentTarget)
          }

          handleFocus(event) {
            event.currentTarget.classList.add('focus')
          }

          handleBlur(event) {
            event.currentTarget.classList.remove('focus')
          }
        }

        const ecardItems = document.querySelector('.en__ecarditems')
        if (ecardItems) {
          const ecardItemsList = ecardItems.querySelector('.en__ecarditems__list')

          ecardItems.querySelector('h2').id = 'ecardItemsHeading'
          ecardItemsList.setAttribute('role', 'radiogroup')
          ecardItemsList.setAttribute('aria-labelledby', 'ecardItemsHeading')
          ecardItemsList.querySelectorAll('.en__ecarditems__thumb').forEach(el => {
            el.setAttribute('role', 'radio')
            el.setAttribute('tabindex', '-1')
          })
          new RadioGroup(ecardItemsList)
          ecardItemsList.querySelector('.thumb--active').ariaChecked = true
        }

        // Ecard message is labelled by an h2
        const ecardMessage = document.querySelector('.en__ecardmessage')
        if (ecardMessage) {
          const ecardMessageLabel = document.createElement('label')
          ecardMessageLabel.setAttribute('for', 'ecardMessage')
          ecardMessageLabel.classList.add('en__field_label')
          ecardMessageLabel.textContent = ecardMessage.querySelector('h2').textContent
          ecardMessage.querySelector('h2').replaceWith(ecardMessageLabel)
          ecardMessage.querySelector('textarea').id = 'ecardMessage'
        }

        // Future Delivery label and input are not connected
        const futureDelivery = document.querySelector('.en__ecardrecipients__futureDelivery')
        if (futureDelivery) {
          futureDelivery.querySelector('input').id = 'futureDelivery'
          futureDelivery.querySelector('label').setAttribute('for', 'futureDelivery')
        }

        // Recipient name label and input are not connected
        const recipientName = document.querySelector('.en__ecardrecipients__name input[type=text]')
        if (recipientName) {
          recipientName.id = 'recipientName'
          recipientName.previousElementSibling?.setAttribute('for', 'recipientName')
        }

        // Recipient email label and input are not connected
        const recipientEmail = document.querySelector('.en__ecardrecipients__email input[type=text]')
        if (recipientEmail) {
          recipientEmail.id = 'recipientEmail'
          recipientEmail.previousElementSibling?.setAttribute('for', 'recipientEmail')
          // Exposes mobile email keyboard
          recipientEmail.setAttribute('inputmode', 'email')
        }
      }

      const initDatePicker = () => {
        // Attaches the Datepicker library for the Send Ecard on Date field
        // Restricts date selection range from current date to 30 days out
        const sendDate = document.querySelector('input[name="ecard.schedule"]')
        const today = new Date()
        const maxDate = new Date(today)

        // Restrict date selection to 30 days out
        maxDate.setDate(maxDate.getDate() + 30)
        // sendDate.readOnly = true
        sendDate.setAttribute('inputmode', 'none')

        new Datepicker(sendDate, {
          autohide: true,
          buttonClass: 'btn btn-link',
          format: 'yyyy-mm-dd',
          maxDate: maxDate,
          minDate: today,
          nextArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="7.121" height="11.414" viewBox="0 0 7.121 11.414"><path id="Stroke_1_Copy_2" data-name="Stroke 1 Copy 2" d="M10,0,5,5,0,0" transform="translate(0.707 10.707) rotate(-90)" fill="none" stroke-miterlimit="10" stroke-width="2"/></svg>',
          prevArrow: '<svg xmlns="http://www.w3.org/2000/svg" width="7.121" height="11.414" viewBox="0 0 7.121 11.414"><path id="Stroke_1_Copy_2" data-name="Stroke 1 Copy 2" d="M10,0,5,5,0,0" transform="translate(6.414 0.707) rotate(90)" fill="none" stroke-miterlimit="10" stroke-width="2"/></svg>',
        })
      }

      const addClasses = () => {
        document.querySelector('.en__ecardrecipients')?.classList.add('form-heading')
        document.querySelector('.en__ecardrecipients h2')?.classList.add('h3')
        document.querySelectorAll('.en__ecardrecipients__email input, .en__ecardrecipients__name input').forEach(el => {
          el.classList.add('form-control')
        })
        document.querySelectorAll('#ecardItemsHeading, label').forEach(el => {
          el.classList.add('en__field__label')
        })
      }

      const saveForm = () => {
        // Saves form data to sessionStorage for use on the thank you page
        const recipient = {
          name: document.querySelector('.en__ecardrecipients__name input').value,
          email: document.querySelector('.en__ecardrecipients__email input').value
        }
        localStorage.setItem('recipient', JSON.stringify(recipient))

        FormPersistence.save(form, {
          excludeFilter: element => isExcluded(element)
        })
      }

      const handleMessages = () => {
        // Handles messages sent from the host page
        const maybeAddRecipient = () => {
          // Adds a recipient to the recipients list. Any current recipient is replaced by the new recipient
          const recipientName = document.querySelector('.en__ecardrecipients__name input')
          const recipientEmail = document.querySelector('.en__ecardrecipients__email input')
          const currentRecipientName = recipientName?.value
          const currentRecipientEmail = recipientEmail?.value
          const newRecipientName = `${window.parent.document.getElementById('en__field_transaction_infname').value} ${window.parent.document.getElementById('en__field_transaction_othamt3').value}`
          const newRecipientEmail = window.parent.document.getElementById('en__field_transaction_infemail').value

          const clearRecipient = () => {
            // Clears any existing recipients since there is only one
            document.querySelectorAll('.ecardrecipient__remove button').forEach(el => {
              el.click()
            })
          }

          const addRecipient = () => {
            if (newRecipientName !== '' && newRecipientEmail !== '') {
              recipientName.value = newRecipientName
              recipientEmail.value = newRecipientEmail
              document.querySelector('.en__ecarditems__addrecipient').click()
              setTimeout(() => {
                saveForm()
              }, 100)
            }
          }

          // Only add recipient if needed
          if ((newRecipientName.value !== currentRecipientName || newRecipientEmail.value !== currentRecipientEmail)) {
            clearRecipient()
            setTimeout(() => {
              addRecipient()
            }, 100)
          }
        }

        const updateField = (selector, value) => {
          // Updates a field value
          document.querySelector(selector)?.setAttribute('value', value)
          saveForm()
        }

        window.addEventListener('message', message => {
          const messageData = message.data

          if (message.origin !== location.origin && typeof messageData !== 'undefined') {
            return
          }

          switch (messageData.messageType) {
            case 'add recipient':
              maybeAddRecipient()
              break
            case 'field update':
              updateField(messageData.targetSelector, messageData.value)
              break
          }
        }, false)
      }

      const initFormPersistence = () => {
        let savedRecipient = localStorage.getItem('recipient')

        // Initializes formPersistence
        FormPersistence.persist(form, {
          excludeFilter: element => isExcluded(element)
        })

        // Adds saved recipient if it exists
        if (savedRecipient) {
          savedRecipient = JSON.parse(savedRecipient)
          document.querySelector('.en__ecardrecipients__name input').value = savedRecipient.name
          document.querySelector('.en__ecardrecipients__email input').value = savedRecipient.email
          document.querySelector('.en__ecarditems__addrecipient').click()
        }

        // Loads any saved form data
        FormPersistence.load(form, {
          excludeFilter: element => isExcluded(element)
        })
      }

      const checkEcardLinkExpiration = () => {
        // Displays ecard form if link is less than or equal to expiration
        const expirationInDays = 30
        const params = new URLSearchParams(location.search)
        const timeStamp = params.get('ts')
        const today = new Date(new Date().toLocaleString('en-US', {
          timeZone: 'America/Los_Angeles',
        })).getTime()
        let differenceInDays

        if (timeStamp) {
          differenceInDays = (today - timeStamp) / (1000 * 3600 * 24)

          // Checks for a testing parameter in the URL
          if (params.get('ts_days')) {
            if (differenceInDays <= parseInt(params.get('ts_days'))) {
              differenceInDays = 0
            } else {
              differenceInDays = expirationInDays + 1
            }
          } else if (params.get('ts_minutes')) {
            if ((today - timeStamp) / 60000 <= parseInt(params.get('ts_minutes'))) {
              differenceInDays = 0
            } else {
              differenceInDays = expirationInDays + 1
            }
          }

          if (differenceInDays <= expirationInDays) {
            document.body.classList.add('not-expired')
          } else {
            document.body.classList.add('expired')
          }
        }
      }

      const initStandaloneEcard = () => {
        const addRecipientButton = document.querySelector('.en__ecarditems__addrecipient')
        const recipientName = document.querySelector('.en__ecardrecipients__name input[type=text]')
        const recipientEmail = document.querySelector('.en__ecardrecipients__email input[type=text]')
        const recipientNameUntagged = document.getElementById('en__field_supporter_NOT_TAGGED_85')
        const recipientEmailUntagged = document.getElementById('en__field_supporter_NOT_TAGGED_3')

        const updateRecipientList = () => {
          const removeRecipientButton = document.querySelector('.ecardrecipient__remove button')

          if (recipientName.value !== '' && recipientEmail.value !== '') {
            /* jshint ignore:start */
            removeRecipientButton && removeRecipientButton.click()
            /* jshint ignore:end */
            setTimeout(() => {
              addRecipientButton.click()
              addRecipientButton.disabled = false
              recipientName.disabled = false
              recipientEmail.disabled = false
            }, 100)
          }
        }

        const copyRecipientValues = () => {
          recipientName.value = recipientNameUntagged.value
          recipientEmail.value = recipientEmailUntagged.value
          updateRecipientList()
        }

        if (addRecipientButton && recipientName && recipientEmail && recipientNameUntagged && recipientEmailUntagged) {
          recipientNameUntagged.addEventListener('input', copyRecipientValues)
          recipientEmailUntagged.addEventListener('input', copyRecipientValues)
        }
      }

      document.body.classList.add('ihmo-ecard')
      makeAccessible()
      initDatePicker()
      addClasses()
      if (window.self !== window.top) {
        document.body.classList.add('ihmo-ecard-embedded')
        handleMessages()
        if (FormPersistence) {
          initFormPersistence()
        } else {
          console.error('FormPersistence not available')
        }
      } else {
        checkEcardLinkExpiration()
        initStandaloneEcard()
      }
    }

    const submitEcard = () => {
      let savedRecipient = localStorage.getItem('recipient')
      // Adds saved recipient if it exists
      if (savedRecipient) {
        savedRecipient = JSON.parse(savedRecipient)
        document.querySelector('.en__ecardrecipients__name input').value = savedRecipient.name
        document.querySelector('.en__ecardrecipients__email input').value = savedRecipient.email
        document.querySelector('.en__ecarditems__addrecipient').click()

        // Sets active ecard using data from formPersistence
        document.querySelector(`[data-id="${JSON.parse(localStorage.getItem('form#form'))['friend.ecard'][0]}"]`).click()

        // Loads other form data from formPersistence
        FormPersistence.load(form, {
          excludeFilter: element => isExcluded(element)
        })

        // Removes saved data
        FormPersistence.clearStorage(form)
        localStorage.removeItem('form#form')
        localStorage.removeItem('category')
        localStorage.removeItem('recipient')
        sessionStorage.removeItem('en__field_transaction_inmem')

        // Adds the ecard recipient. Wait a second to insure addRecipient field is interactive
        setTimeout(() => {
          document.querySelector('.en__ecarditems__button.en__ecarditems__addrecipient').click()
        }, 1000)

        // Submits the ecard. Wait a bit more to submit after setting recipient. Safari does not like a submit() in a setTimeout() so use setInterval()
        let timeLeft = 2
        let sendTimer = setInterval(function() {
          if (timeLeft <= 0) {
            clearInterval(sendTimer)
            document.querySelector('.en__component--page').submit()
          }
          timeLeft -= 1
        }, 1000)

      }
    }

    if (parentPageNumber < parentPageNumberOfPages) {
      displayEcard()
    } else if (parentPageNumber === parentPageNumberOfPages) {
      submitEcard()
    }
  }
})()
