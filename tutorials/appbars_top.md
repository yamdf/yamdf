# Appbars: Top

### How to create an appbar

```html
<div class="appbar">
</div>
```

An appbar usually have a title

```html
<div class="appbar">
  Appbar Title
</div>
```

An appbar can have a menu icon on the left

```html
<div class="appbar">
  <i class="material-icons">menu</i>
  Appbar Title
</div>
```

An appbar can also have some icons on the right

```html
<div class="appbar">
  <i class="material-icons">menu</i>
  Appbar Title
  <div class="icons">
    <i class="material-icons">add</i>
    <i class="material-icons">favorite</i>
  </div>
</div>
```

> Please note that both icons on left and on right are just icons and not icon buttons. Icons buttons are not developed yet.

### #Todo
- [ ] Fix icons color
- [ ] Create class to make the appbar stuck at top
- [ ] Truncate text when space for it is missing
- [ ] Create:
  - Contextual appbar
  - Prominent appbar
  - Dense appbar
  - Transparent appbar
