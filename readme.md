# Vue Modal 🖼

[![npm](https://img.shields.io/npm/dw/@melmacaluso/vue-modal.svg?label=Downloads)](https://www.npmjs.com/package/@melmacaluso/vue-modal)

![Animated, dismissable from overlay . close button and...you get to do your own styling/html! ](https://media.giphy.com/media/LY8Ly5UrNYcuWvoOEY/giphy.gif)

## Intro

Reusable Modal component, supports own custom HTML, text and classes and/or passing a component. Featuring multiple modal content / buttons.

## Demo

- Code editor - [codesandobx](https://codesandbox.io/s/rmj2y345xo)
- Preview - [codesandbox](https://rmj2y345xo.codesandbox.io/)

## Installation

```shell
npm i @melmacaluso/vue-modal
```

## Usage

Simply import it in your desired vue component as follows:

```javascript
import Modal from "@melmacaluso/vue-modal";
```

## Props

| **Prop**           | **Type** | **Comment**                                                                                              |
| ------------------ | -------- | -------------------------------------------------------------------------------------------------------- |
| `btnText`          | String   | Text label for modal button                                                                              |
| `modalContent`     | String   | Pass here your html for the modal main modal                                                             |
| `closeBtn`         | Boolean  | Conditionally add a close button                                                                         |
| `closeBtn-content` | String   | Pass here your html for the close button                                                                 |
| `inception`        | Boolean  | Allow multiple buttons/content within the modal                                                          |
| `modals`           | Array    | Pass here an array of objects, they retain the same props within the array's scope ie. `<scope>.btnText` |
| `showNav`          | Boolean  | Conditionally show a navigation within the Modal's contents                                              |

## Example (inline HTML):

```vue
<Modal
  btnText="Press me, senpai 😊"
  modalContent="
        <div>
          <h2> Hello I am a modal</h2>
          <p>I like stating the obvious: <b>the obvious</b></p>
          <p>Now, try this trick: <code>Ctrl + Shift + W </code> 😉</p>
        </div>
        "
  :closeBtn="true"
  closeBtn-content="
        <span>X</span>
        "
/>
```

## Example (Passing component):

```vue
<Modal
  btnText="Press me, senpai 😊"
  :closeBtn="true"
  closeBtnHTML="<span>X</span>"
>
  <ExampleComponent/>
</Modal>
```

## Example (multiple buttons & modal content):

```vue
<Modal
  :inception="true"
  :modals="[
    {
      btnText: 'Press me 1',
      modalContent: 'This is <strong>the</strong> content 1'
    },
    {
      btnText: 'Press me 2',
      modalContent:
        '<img src=\'https://media.giphy.com/media/5exwXWg9u7yow/giphy.gif\'>'
    },
    {
      btnText: 'Press me 3',
      modalContent: 'This is the <h3>content 3</h3>'
    }
  ]"
  :showNav="true"
/>
```
