# Inherify
A simple alternative to the existing inheritance client side

### Usage

`[[Inherify]].factory( options )`

- options : (object)
  - element : A instance layer (object)
    - init : The constructor access (function)
    - [prop] ...
    - [methods] ...
  - params : The parameters for the instance built (array)
  - prototypes : Alter the base class prototype (object)
  - construct : The class name (string)
  - extend : The parent class name (string)

### Example

```javascript
// "Abstract" class pattern (note: no eleement has been defined)
Inherify.factory({
  prototypes : {
    name : null,
    setName : function(name) {
      name && (this.name = name);
    }
  },
  construct : 'People'
});

// Dérived class
var firstCustomer = Inherify.factory({
  element : {
    init : function (name, firstname) {
      this.firstname = firstname;
      this.setName(name);
      console.log('new customer');
    },
    setFirstname : function (firstname) {
      this.firstname && (this.firstname = firstname);
    }
  },
  params:["John", "Doe"],
  construct : 'Customer',
  extend : 'People'
});
```
### Benchmark

http://jsperf.com/inherify-bench/4
