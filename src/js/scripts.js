(function() {
  let root = document.documentElement;
  
  const activeClass = 'is-active';
  
  const enFieldItemSelector = '.en__field__item';

  /**
   * Returns x raised to the n-th power.
   *
   * @param {number} x The number to raise.
   * @param {number} n The power, must be a natural number.
   * @return {number} x raised to the n-th power.
   */
  const ui = () => {
    let el;
    
    // Initiate choices.js
    getAll('select').forEach(el => {
      choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: ''
      });
    });

    // Placeholders for some inputs
    getAll('.en__field__input--other').forEach(el => {
      const fieldItem = getClosestEl(el, enFieldItemSelector);

      if (fieldItem) {
        el.setAttribute('placeholder', fieldItem.previousElementSibling.querySelector('label').textContent);
      }
    });
    
    // Display minimum donation amount
    el = document.querySelector('.en__field__item--other');
    if (el) {
      const minAmountValidator = EngagingNetworks.validators.filter(obj => {
        return obj.format.indexOf('~') > -1;
      });    
      if (minAmountValidator[0]) {
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
  const getAll = (selector, root = document) => {
    return Array.prototype.slice.call(root.querySelectorAll(selector), 0);
  };

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

  const activateField = el => {    
    addClass((el.target || el).parentElement, activeClass);    
  };
  
  const deactivateField = el => {
    removeClass((el.target || el).parentElement, activeClass);    
  };
  
  const addEl = (parentEl, elType, textContent) => {
    let el = document.createElement(elType);    
    el.textContent = textContent;
    parentEl.append(el);
  };
})();