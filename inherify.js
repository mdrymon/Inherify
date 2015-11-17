//     Inherify.js
//     @author: Mickael Drymon
//
//     Copyright (c) 2015 mdrymon.
//     The MIT License (MIT)
(function (global) {
  var _global = global;
  var Inherify = {
    factory : function (options) {
      if (typeof options !== 'object') throw new Error('Options must be an object');

      var prop;
      var _construct = options.construct || 'Inherify_BClass';
      var element = options.element;
      var params = options.params;
      var prototypes = options.prototypes;
      var extend = _global[options.extend];

      if (element && typeof element !== 'object') throw new Error('Options.element must be an object');
      if (prototypes && typeof prototypes !== 'object') throw new Error('Options.prototypes must be an object');
      if (_construct && typeof _construct !== 'string') throw new Error('Options.construct must be a string or null');
      if (extend && typeof extend !== 'function') throw new Error('Options.construct must be a string or null');

      var _constructor = _global[_construct] = function (element, params) {
        if (element) {
          (Object.prototype.toString.call(params) === '[object Array]') && (params = []);
          for (prop in element) element.hasOwnProperty(prop) && (prop !== 'init') && (this[prop] = element[prop]);
          (typeof element.init === 'function') && element.init.apply(this, params);
        }
      }
      extend && (_constructor.prototype = new extend(element, params));
      for (prop in prototypes) 
        (prop !== 'constructor') && prototypes.hasOwnProperty(prop) &&
        (_constructor.prototype[prop] = prototypes[prop]);
      _constructor.prototype.constructor = _constructor;
      return new _constructor(element, params);
    },
    base : function (extend) {
      return _global[extend].prototype;
    }
  };
  global.Inherify = Inherify;
})(this);
