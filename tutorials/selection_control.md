# Selection control components

### Checkboxes

To create a checkbox just write the HTML to make a checkbox

```html
<input type="checkbox" id="checkbox" />
```

The original checkbox will be hidden and a new Material Design checkbox will be generated.

> If you want to check if a checkbox is checked using JavaScript you can use the `checked` property. If you want to make a checkbox checked you can use the `checked` property **but the generated checkbox will not change (the checkbox will still change its `checked` state**. This is a problem that will be fixed soon.

### Switches

To create a checkbox just write the HTML to make a checkbox with the class `switch` in addition

```html
<input type="checkbox" class="switch" id="switch" />
```

The original checkbox will be hidden and a new Material Design switch will be generated.

> If you want to check if a checkbox is checked using JavaScript you can use the `checked` property. If you want to make a checkbox checked you can use the `checked` property **but the generated switch will not change (the checkbox will still change its `checked` state**. This is a problem that will be fixed soon.


### #Todo
- [ ] Fix graphical bug if the `checked` property of a checkbox is changed using JavaScript
- [ ] Create styles for checkboxes and switches states (hover, pressed, focused...)
- [ ] Create the Radio buttons component

