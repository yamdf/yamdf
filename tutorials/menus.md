# Menus

> This component is still not completely developed

### How to create a menu

You have two ways to create a menu:

- Using some `div` elements with `menu` and `menu-element` classes
- Using the `ul` element with the `menu` class and some `li` elements inside it

Remember to set an id to the menu

```html
<div class="menu" id="menu">
  <div class="menu-element">
    Option 1
  </div>
  <div class="menu-element">
    Option 2
  </div>
  <div class="menu-element">
    Option 2
  </div>
</div>
```

```html
<ul class="menu" id="menu">
  <li>
    Option 1
  </li>
  <li>
    Option 2
  </li>
  <li>
    Option 3
  </li>
</ul>
```

- You have then to trigger the menu using JavaScript.

```javascript
// Create a new Menu
let menu = new Menu()

// Trigger the menu
menu.trigger({
  menu: 'menu',
  trigger: 'button',
  triggerEvent: 'click',
  from: 'top left'
})
```

Here are some explanations for every option in the object parameter of the `trigger()` method

### Options

All options are always required. In the next version the syntax will change and some options will be optional.

Option | Description | Value | Type
------ | ----------- | ----- | ----
`menu` | The reference to the menu we want to show | The `id` of the menu. Example: `'menu'` | `String`
`trigger` | The reference to the element that trigger the menu | The `id` of the element that trigger the menu. Example: `'click-here'` | `String`
`triggerEvent` | The type of event on the trigger element | `'click'` or `'mouseover'` | `String`
`from` | The position where the menu reveal animation will start | `top`, `bottom`, `left`, `right`, or a combination of two of them. Example: `top left` or `right bottom`. **Not** `top bottom` or `left right` | `String`

### #Todo
- [ ] Better syntax
- [ ] More and better options
- [ ] Menu integration for `select` HTML element
