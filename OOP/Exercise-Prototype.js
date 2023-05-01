function extend(Parent, Child) {
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;
}

function HtmlElement() {
  this.click = function () {
    console.log('clicked');
  };
}

HtmlElement.prototype.focus = function () {
  console.log('focused');
};

function HtmlSelectElement(...items) {
  this.items = items;

  this.addItem = function (element) {
    items.push(element);
  };

  this.removeItem = function (element) {
    if (items.indexOf(element) !== -1) items.splice(items.indexOf(element), 1);
  };
}

extend(HtmlElement, HtmlSelectElement);
