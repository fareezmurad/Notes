// Intermediate function inheritance for cleaner and more readable code
function extend(Parent, Child) {
  Child.prototype = new Parent();
  Child.prototype.constructor = Child;
}

// Create `HtmlElement` Constructor function
function HtmlElement() {
  this.click = function () {
    console.log('clicked');
  };
}

// Add `focus()` method into HtmlElement prototype
HtmlElement.prototype.focus = function () {
  console.log('focused');
};

// Add `render()` method into HtmlElement prototype
HtmlElement.prototype.render = function () {
  // Using `map()` and `join()` method to create new array and join them together
  const output = this.items
    .map((item) => `  <option>${item}</option>\n`)
    .join('');
  return `<select>\n${output}</select>`;
};

// Create `HtmlSelectElement` Contructor function
function HtmlSelectElement(...items) {
  this.items = items;

  // Add element into an Array using `push()` method
  this.addItem = function (element) {
    items.push(element);
  };

  // Remove element based on its index using `splice()` method
  this.removeItem = function (element) {
    if (items.indexOf(element) !== -1) items.splice(items.indexOf(element), 1);
  };
}

extend(HtmlElement, HtmlSelectElement);

// Create new `HtmlImageElement` Constructor function
function HtmlImageElement(src) {
  this.src = src;

  // Overwrite `render()` specifically for `HtmlImageElement object`
  this.render = function () {
    return `<img src=${this.src}/>`;
  };
}

extend(HtmlElement, HtmlImageElement);

const elements = [
  new HtmlSelectElement(1, 2, 3),
  new HtmlImageElement('https://'),
];

for (let element of elements) console.log(element.render());
