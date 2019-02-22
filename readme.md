# Vue Modal 🖼

## Intro

Reusable Modal component, supports own custom HTML, text and classes.

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

## Example:

```javascript
    <Modal btnText="Press me, senpai 😊"
           modalHTML="
               <div>
    	           <p>This is your fully functional html/css modal</p>
    		       <p>You can even pass a component, or can you 😏?</p>
               </div>
               "
           :closeBtn="true"
           closeBtnHTML="<span>X</span>"
    />
```
