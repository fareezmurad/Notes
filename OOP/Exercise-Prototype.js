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

HtmlElement.prototype.render = function () {
  const output = this.items
    .map((item) => `  <option>${item}</option>\n`)
    .join('');
  return `<select>\n${output}</select>`;
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

function HtmlImageElement(src) {
  this.src = src;

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
