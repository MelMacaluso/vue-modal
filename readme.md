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

| **Prop**       | **Type** | **Comment**                                  |
| -------------- | -------- | -------------------------------------------- |
| `btnText`      | String   | Text label for modal button                  |
| `modalHTML`    | String   | Pass here your html for the modal main modal |
| `closeBtn`     | Boolean  | Conditionally add a close button             |
| `closeBtnHTML` | String   | Pass here your html for the close button     |

## Example (inline HTML):

```vue
<Modal
  btnText="Press me, senpai 😊"
  modalHTML="
        <div>
          <h2> Hello I am a modal</h2>
          <p>I like stating the obvious: <b>the obvious</b></p>
          <p>Now, try this trick: <code>Ctrl + Shift + W </code> 😉</p>
        </div>
      "
  :closeBtn="true"
  closeBtnHTML="
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
