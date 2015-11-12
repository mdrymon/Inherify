var Inherify = (function () {
var Inherify = (function () {
  return {
    factory : function (options) {
      if (typeof options !== 'object') throw new Error('Options must be an object');
      if (options.element && typeof options.element !== 'object') throw new Error('Options.element must be an object');
      if (options.prototypes && typeof options.prototypes !== 'object') throw new Error('Options.prototypes must be an object');
      if (options.construct && typeof options.construct !== 'string') throw new Error('Options.construct must be a string or null');
      if (options.extend && typeof options.extend !== 'string') throw new Error('Options.construct must be a string or null');

      options.construct = options.construct || 'Inherify_BClass';
      window[options.construct] = function () {
        if (options.element) {
          (typeof options.params === 'array') && (options.params = []);
          for (var prop in options.element) (prop !== 'init') && (this[prop] = options.element[prop]);
          (typeof options.element.init === 'function') && options.element.init.apply(this, options.params);
        }
      }
      options.extend && (typeof window[options.extend] === 'function') && (window[options.construct].prototype = new window[options.extend]());
      for (var proto in options.prototypes) window[options.construct].prototype[proto] = options.prototypes[proto];
      window[options.construct].prototype.constructor = window[options.construct];
      var instance = new window[options.construct]();
      return instance;
    }
  }
})();
