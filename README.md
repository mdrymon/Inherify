# Inherify
A simple alternative to the existing inheritance client side

### Usage

`[[Inherify]].factory( options )`

#### Example

```javascript
// Base class
var People = Inherify.factory({
  prototypes : {
    name : null,
    setName : function(name) {
      name && (this.name = name);
    }
  },
  construct : 'People'
});

// Dérived class
var Customer = Inherify.factory({
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
