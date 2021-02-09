(function() {
  let root = document.documentElement;

  const activeClass = 'is-active';
  const validClass = 'is-active';
  const validationFailedClass = 'en__field--validationFailed';

  const enFieldItemSelector = '.en__field__item';

  const theForm = document.querySelector('.en__component--page');

  /**
   * Initiate
   *
   * @param {number} x The number to raise.
   * @param {number} n The power, must be a natural number.
   * @return {number} x raised to the n-th power.
   */
  const ui = () => {
    let el = null;
    let els = null;
    
    /**
     * Returns Class for form element.
     *
     * @returns {string} Class for form element
     */
    const maybeHasHero = () => {
      return document.querySelector('.hero-full-bleed') ? 'has-hero' : 'not-has-hero';
    };

    /**
     * @param {string} amt Total donation amount
     */
    const updateTotalGift = (amt) => {
      getAll('.js-total-gift').forEach(el => {
        el.textContent = ' $' + amt;                
      });
    };

    // Initiate choices.js
    getAll('select').forEach(el => {
      choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: ''
      });
    });

    // Is there a full bleed hero?
    addClass(theForm, maybeHasHero());

    // Is there a processing error?
    els = getAll('.en__errorHeader, .en__errorList');
    if (els.length > 0 && !isEmpty(document.querySelector('.en__errorList'))) {
      wrapAll(els, 'div', 'error-box');
    }

    // Placeholders for some inputs
    getAll('.en__field__input--other').forEach(el => {
      const fieldItem = getClosestEl(el, enFieldItemSelector);

      if (fieldItem) {
        addPlaceholder(el, fieldItem.previousElementSibling.querySelector('label').textContent);
      }
    });

    // Display minimum donation amount
    el = document.querySelector('.en__field__item--other');
    if (el) {
      const minAmountValidator = EngagingNetworks.validators.filter(obj => {
        if (obj.format) {
          return obj.format.indexOf('~') > -1;
        }
        return false;
      });
      if (minAmountValidator[0]) {
        // Add paragraph with min amount underneath Other Amount field
        addEl(el, 'p', '$' + minAmountValidator[0].format.split('~')[0] + ' minumum');
      }
    }
    
    // Other amount field is always visible, so the corresponding radio need to be button clicked here even though hidden
    el = document.querySelector('.en__field__input--other');
    if (el) {
      el.addEventListener('focus', e => {
        const otherRadio = e.target.closest('.en__field__item').previousElementSibling.querySelector('.en__field__input--radio');
        
        if (otherRadio) {
          otherRadio.click();
        }        
      });      
    }
    
    // The upsell amount is in a hidden untaggged field that updates according to form dependencies
    el = document.getElementById('en__field_supporter_NOT_TAGGED_9');
    if (el) {
      updateTotalGift(el.value);
      el.addEventListener('change', e => {
        updateTotalGift(e.target.value);
      });
    }
    
    // Active state for field containers
    getAll('.en__field__input').forEach(el => {
      el.addEventListener('focus', activateField);
      el.addEventListener('blur', deactivateField);
    });
  };

  const validation = () => {    
    const handleInput = e => {
      const el = e.target;
      const field = el.closest('.en__field');
      
      e.preventDefault();

      // Hide/display error formatting
      if (e.target.validity.valid) {
        addClass(e.target, validClass);
        removeClass(field, validationFailedClass);
      } else {
        removeClass(e.target, validClass);        
        addClass(field, validationFailedClass);
      }
    };
        
    const handleChange = e => {
      const el = e.target;
      const field = el.closest('.en__field');
      
      e.preventDefault();

      // Hide/display error formatting
      if (e.target.validity.valid) {
        addClass(e.target, validClass);
        removeClass(field, validationFailedClass);
      } else {
        removeClass(e.target, validClass);        
        addClass(field, validationFailedClass);
      }
    };
        
    // Set validation patterns
    getAll('.en__mandatory .en__field__input').forEach(el => {
      el.required = true;
      switch (el.type) {
        case 'email':
          el.setAttribute('pattern', '[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$');
          el.addEventListener('input', handleInput);
          break;
        case 'select-one':
          el.addEventListener('change', handleChange);
          break;
        default:
          // Not empty pattern
          el.setAttribute('pattern', '.*\\S.*');
          el.addEventListener('input', handleInput);
      }
      
      // No browser form validation
      theForm.setAttribute('novalidate', true);      
      // Allow form submit with invalid fields
      theForm.addEventListener('submit', e => {
        e.preventDefault();
      });
      // Don't display browser error messages
      el.addEventListener('oninvalid', e => {
        e.preventDefault();
      });
    });
  };

  // On load
  document.addEventListener('DOMContentLoaded', () => {
    ui();
    validation();
  });

  // Functions

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
   * Returns True if element is empty or has only whitespace.
   *
   * @param {node} el Element to check if empty.
   * @returns {boolean} If element is empty or has only whitespace
   */
  const isEmpty = el => {
    return el.innerHTML.replace(/^\s*/, '').replace(/\s*$/, '') === '';
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

  const hasClass = (el, cls) => {
    return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  };

  const clearClass = el => el.className = '';

  const addClass = (el, cls) => {
    if (!hasClass(el, cls)) el.className += ' ' + cls;
  };

  const removeClass = (el, cls) => {
    if (hasClass(el, cls)) {
      let reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    }
  };

  /**
   * Adds placeholder attribute
   *
   * @param {Node} el The field to add placeholder to
   * @param {string} textContent Placeholder value
   */
  const addPlaceholder = (el, textContent) => {
    el.setAttribute('placeholder', textContent);
  };

  /**
   * Adds active class to element
   *
   * @param {Node} el The element to add class to
   */
  const activateField = el => {
    addClass((el.target || el).parentElement, activeClass);
  };

  /**
   * Removes active class to element
   *
   * @param {Node} el The element to remove class from
   */
  const deactivateField = el => {
    removeClass((el.target || el).parentElement, activeClass);
  };

  const addEl = (parentEl, elType, textContent) => {
    let el = document.createElement(elType);
    el.textContent = textContent;
    parentEl.append(el);
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
})();