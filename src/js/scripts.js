(function() {
  let root = document.documentElement;
  
  const activeClass = 'is-active';
  
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
    
    // Active state for field containers    
    getAll('.en__field__input').forEach(el => {
      el.addEventListener('focus', activateField);      
      el.addEventListener('blur', deactivateField);      
    });
  };

  // On load
  document.addEventListener('DOMContentLoaded', () => {
    ui();
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
   * Returns Class for form element.
   *
   * @returns {string} Class for form element
   */
  const maybeHasHero = () => {
    return document.querySelector('.hero-full-bleed') ? 'has-hero' : 'not-has-hero';
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
   * @param {Node} field The field to add placeholder to
   * @param {string} textContent Placeholder value
   */
  const addPlaceholder = (field, textContent) => {
    
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