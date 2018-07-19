# Buttons: FAB

### How to create a FAB button

You have three ways to create a FAB:

- Using the `button` HTML element with the class `fab`
- Using the `div` HTML element with the classes `button` and `fab`
- Using the `a` HTML element with the classes `button` and `fab`

```html
<button class="fab">
  <i class="material-icons">add</i>
</button>
```

```html
<div class="button fab">
  <i class="material-icons">add</i>
</div>
```

```html
<a class="button fab">
  <i class="material-icons">add</i>
</a>
```

#### Mini FABs

To make a mini FAB just add the class `mini` to the element.

```html
<button class="fab mini">
  <i class="material-icons">add</i>
</button>
```

```html
<div class="button fab mini">
  <i class="material-icons">add</i>
</div>
```

```html
<a class="button fab mini">
  <i class="material-icons">add</i>
</a>
```

#### Extended FABs

To make an extended FAB just add the class `extended` to the element.

```html
<button class="fab extended">
  <i class="material-icons">add</i>
  Extended
</button>
```

```html
<div class="button fab extended">
  <i class="material-icons">add</i>
  Extended
</div>
```

```html
<a class="button fab extended">
  <i class="material-icons">add</i>
  Extended
</a>
```

And extended FAB can be also without icon

```html
<button class="fab extended">
  Extended
</button>
```

### #Todo
- [ ] Fix icon color in the button
- [ ] Create styles for FABs states (hover, pressed, focused...)
- [ ] Create some FAB tranform animations (for example: FAB to toolbar, FAB to menu)
