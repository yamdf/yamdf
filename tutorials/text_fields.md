# Text Field

### How to create a text field

First of all you must add a "container" div with the class `textfield`.
Inside it you have to puth both the elements `input` and `label`

```html
<div class="textfield">
  <input type="text" id="name">
  <label for="name">Name</label>
</div>
```

Of course you can set a default value for your input using the `value` attribute.

### #Todo
- [ ] Create outlined text fields
- [ ] Create styles for text fields states (hover, pressed, focused...)
- [ ] Add the possibility to add icons before or after the text
- [ ] Add the possibility to add a helper text
- [ ] Create style for the error state
