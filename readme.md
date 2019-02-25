# Vue Modal 🖼

[![npm](https://img.shields.io/npm/dw/@melmacaluso/vue-modal.svg?label=Downloads)](https://www.npmjs.com/package/@melmacaluso/vue-modal)

![Animated, dismissable from overlay . close button and...you get to do your own styling/html! ](https://media.giphy.com/media/YlJxxw27aslBityNYX/giphy.gif)

## Intro

Reusable Modal component, supports own custom HTML, text and classes and/or passing a component.

## Demo

- Code editor - [codesandobx](https://codesandbox.io/s/k9p4zqlr25)
- Preview - [codesandbox](https://k9p4zqlr25.codesandbox.io/)

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
| `doppelMode`       | Boolean  | Allow multiple buttons/content within the modal                                                          |
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
  :doppelMode="true"
  :modals="[
    {
      btnText: 'Press me 1',
      modalContent: 'This is the content 1'
    },
    {
      btnText: 'Press me 2',
      modalContent: 'This is the content 2'
    },
    {
      btnText: 'Press me 3',
      modalContent: 'This is the content 3'
    }
  ]"
  :showNav="true"
/>
```
