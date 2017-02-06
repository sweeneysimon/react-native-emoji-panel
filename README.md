react-native-emoji-panel
===

Customized emoji panel.

## Installation

        npm install react-native-emoji-panel

## Properties

#### `bgColor`

* Optional
* Type: String
* Default: `'#E2E2E2'`

The backgroundColor for your emoji panel.

#### `showSwitchMenu`

* Optional
* Type: Boolean
* Default: `true`

Control whether show the switch menu of your panel.

#### `onDelete`

* Optional
* Type: Function

If you set an event handler for this property, a delete btn would appear on your every emoji page of the panel, and would call the function when press the delete btn.

#### `onPick`

* Optional
* Type: Function

When you press the emoji btn, call this event handler. It has one param - emoji (the emoji code you pick).
