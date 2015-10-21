# Reui
A collection of themeable components.

### WARNING
**The library is in early stage of development**

## Getting started

### Install via NPM
```
npm install --save reui
```

### Usage
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import Reui from 'reui';
import defaultTheme from 'reui/themes/css';

Reui.setGlobalTheme(defaultTheme);

ReactDOM.render(
  <Reui.Panel>
    <Reui.Button title="Hello World" />
  </Reui.Panel>,
  document.body
);

```

## Create and apply themes
Reui uses react-themeable under the hood so you can use jss, Radium, React Style, css-modules or plain classes to describe your theme.

### Create
Theme is just an object that associates components with its themes
```javascript
{
  ComponentClass: {
    componentElement: {theme}
  }
}
```

**Exapmle:**
```javascript
var theme = {
  Button: {
    button: 'button',
    buttonDisabled: 'disabled',
    buttonActive: 'active'
  },
  ...
}
```
Then the ```Button``` component would be rendered as
```html
<button class="button"></button>
```
or
```html
<button class="button disabled" disabled></button>
```
or
```html
<button class="button active"></button>
```
See more in `themes/`

### Apply
You can apply a theme globally:
```javascript
Reui.setGlobalTheme(theme)
```

or directly to a component:
```javascript
<Button theme={theme.Button} />
```

A theme passed as a `theme` prop will be merged with the global theme.