# Buttons

### How to create a button

You have three ways to create a button:

- Using the `button` HTML element
- Using the `div` HTML element with the class `button`
- Using the `a` HTML element with the class `button`

```html
<button>
  Button
</button>
```

```html
<div class="button">
  Button
</div>
```

```html
<a class="button">
  Button
</a>
```

#### Outlined buttons

To make an outlined button just add the class `outlined` to the element.

```html
<button class="outlined">
  Button
</button>
```

```html
<div class="button outlined">
  Button
</div>
```

```html
<a class="button outlined">
  Button
</a>
```

#### Text buttons

To make a text button just add the class `text` to the element.

```html
<button class="text">
  Button
</button>
```

```html
<div class="button text">
  Button
</div>
```

```html
<a class="button text">
  Button
</a>
```

#### Buttons with icons

To make a button with an icon just add the icon code before the button text.

```html
<button class="text">
  <i class="material-icons">add</i>
  Button
</button>
```

### #Todo
- [ ] Fix icon color in the button
- [ ] Create styles for buttons states (hover, pressed, focused...)
