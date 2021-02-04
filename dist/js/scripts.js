"use strict";

(function () {
  var root = document.documentElement;
  var activeClass = 'is-active';
  var enFieldItemSelector = '.en__field__item';
  /**
   * Returns x raised to the n-th power.
   *
   * @param {number} x The number to raise.
   * @param {number} n The power, must be a natural number.
   * @return {number} x raised to the n-th power.
   */

  var ui = function ui() {
    var el = void 0; // Initiate choices.js

    getAll('select').forEach(function (el) {
      choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: ''
      });
    }); // Placeholders for some inputs

    getAll('.en__field__input--other').forEach(function (el) {
      var fieldItem = getClosestEl(el, enFieldItemSelector);

      if (fieldItem) {
        el.setAttribute('placeholder', fieldItem.previousElementSibling.querySelector('label').textContent);
      }
    }); // Display minimum donation amount

    el = document.querySelector('.en__field__item--other');

    if (el) {
      var minAmountValidator = EngagingNetworks.validators.filter(function (obj) {
        return obj.format.indexOf('~') > -1;
      });

      if (minAmountValidator[0]) {
        addEl(el, 'p', '$' + minAmountValidator[0].format.split('~')[0] + ' minumum');
      }
    } // Active state for field containers    


    getAll('.en__field__input').forEach(function (el) {
      el.addEventListener('focus', activateField);
      el.addEventListener('blur', deactivateField);
    });
  }; // On load


  document.addEventListener('DOMContentLoaded', function () {
    ui();
  }); // Functions

  var getAll = function getAll(selector) {
    var root = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
    return Array.prototype.slice.call(root.querySelectorAll(selector), 0);
  };

  var getClosestEl = function getClosestEl(el, selector) {
    if (el) {
      var closestNode = el.closest(selector);
      return closestNode ? closestNode : null;
    }
  };

  var hasClass = function hasClass(el, cls) {
    return el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  };

  var clearClass = function clearClass(el) {
    return el.className = '';
  };

  var addClass = function addClass(el, cls) {
    if (!hasClass(el, cls)) el.className += ' ' + cls;
  };

  var removeClass = function removeClass(el, cls) {
    if (hasClass(el, cls)) {
      var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
      el.className = el.className.replace(reg, ' ');
    }
  };

  var activateField = function activateField(el) {
    addClass((el.target || el).parentElement, activeClass);
  };

  var deactivateField = function deactivateField(el) {
    removeClass((el.target || el).parentElement, activeClass);
  };

  var addEl = function addEl(parentEl, elType, textContent) {
    var el = document.createElement(elType);
    el.textContent = textContent;
    parentEl.append(el);
  };
})();
