# Handlers

## input-word

### inputWordHandler

- Entry point for users adding a word to the list. It is called each time the user clicks the "add word" button.
- It import from:
  - data
  - logic
  - components
- It export to
  - listeners

### getInputWithEnterHandler

- Entry point for users add word to list. It is called each time the user press the "Enter" key.
- It import from:
  - data
  - logic
  - components
- It export to
  - listeners

## remove-word

### removeWordHandler

- Entry point for users remove a word from the list. It is called each time the user clicks the "trash can" button.
- It import from:
  - data
  - components
- It export to
  - listeners

## move-word

### moveItemHandler

- Entry point for users move words between the lists. It is called each time the user clicks the "to remembered" or "to new" button.
- It import from:
  - data
  - components
- It export to
  - listeners

## sort-word

### sortWordsHandler

- Entry point for users sorting the list of words in this app. It is called each time the input selection changes.
- It import from:
  - data
  - logic
  - components
- It export to
  - listeners

## edit-word

### editItemHandlerNew

- Utility function of the handler of below event. The user clicks the "pen" button.
- It is called by `editItemHandler`.

### editItemHandlerRem

- Utility function of the handler of below event. The user clicks the "pen" button.
- It is called by `editItemHandler`.

### editItemHandler

- Entry point for users edit a word on the list. It is called each time the user clicks the "pen" button.
- It import from:
  - data
  - logic
  - components
  - /handlers/update-components-status.js
- It export to
  - listeners

### confirmEditWithEnterHandlerNew

- Utility function of the handler of event: the user press Enter key on input element. It is called by `confirmEditWithEnterHandler`.

### confirmEditWithEnterHandlerRem

- Utility function of the handler of event: the user press Enter key on input element. It is called by `confirmEditWithEnterHandler`.

### confirmEditWithEnterHandler

- Entry point for users confirm edits on the list.
- It is called each time the user press Enter key on label element.
- It import from:
  - data
  - /logic/target-logic.js
  - /components/render-list.js
  - /handlers/update-components-status.js
- It export to
  - listeners

## update-components-status

### updateComponentsState

- Disable/enable some components based on editing status.
- Update the state of buttons and select on the UI.
- It is called by `editItemHandler` and `confirmEditWithEnterHandler`.
- It export to
  - /handlers/edit-word.js
