"use strict";

(function () {
  var root = document.documentElement;
  var activeClass = 'is-active';
  var enFieldItemSelector = '.en__field__item';
  var theForm = document.querySelector('.en__component--page');
  /**
   * Initiate
   *
   * @param {number} x The number to raise.
   * @param {number} n The power, must be a natural number.
   * @return {number} x raised to the n-th power.
   */

  var ui = function ui() {
    var el = null;
    var els = null; // Initiate choices.js

    getAll('select').forEach(function (el) {
      choices = new Choices(el, {
        searchEnabled: false,
        itemSelectText: ''
      });
    }); // Is there a full bleed hero?

    addClass(theForm, maybeHasHero()); // Is there a processing error?

    els = getAll('.en__errorHeader, .en__errorList');

    if (els.length > 0 && !isEmpty(document.querySelector('.en__errorList'))) {
      wrapAll(els, 'div', 'error-box');
    } // Placeholders for some inputs


    getAll('.en__field__input--other').forEach(function (el) {
      var fieldItem = getClosestEl(el, enFieldItemSelector);

      if (fieldItem) {
        addPlaceholder(el, fieldItem.previousElementSibling.querySelector('label').textContent);
      }
    }); // Display minimum donation amount

    el = document.querySelector('.en__field__item--other');

    if (el) {
      var minAmountValidator = EngagingNetworks.validators.filter(function (obj) {
        if (obj.format) {
          return obj.format.indexOf('~') > -1;
        }

        return false;
      });

      if (minAmountValidator[0]) {
        // Add paragraph with min amount underneath Other Amount field
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
    return document.querySelector('.hero-full-bleed') ? 'has-hero' : 'not-has-hero';
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
  /**
   * Adds placeholder attribute
   *
   * @param {Node} field The field to add placeholder to
   * @param {string} textContent Placeholder value
   */


  var addPlaceholder = function addPlaceholder(field, textContent) {};
  /**
   * Adds active class to element
   *
   * @param {Node} el The element to add class to
   */


  var activateField = function activateField(el) {
    addClass((el.target || el).parentElement, activeClass);
  };
  /**
   * Removes active class to element
   *
   * @param {Node} el The element to remove class from
   */


  var deactivateField = function deactivateField(el) {
    removeClass((el.target || el).parentElement, activeClass);
  };

  var addEl = function addEl(parentEl, elType, textContent) {
    var el = document.createElement(elType);
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
})();
