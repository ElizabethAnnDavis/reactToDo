# React + Vite - ToDo List App

A simple ToDo List application built with React using the `useReducer` hook for state management. This app allows users to add tasks, mark them as completed, edit tasks in the list, and delete tasks.

## Features

- **Add Tasks:** Create new list items by typing in the text field and then clicking add. Blank text field cannot be added to the list. A list item consists of a checkbox, text, edit button and delete button.
- **Edit Tasks:** List buttons can be edited by clicking the edit button. The list item's text is replaced by a text field and the edit and delete buttons are replaced with a save button. Once saved, the new list item is displayed in place of the old one. 
- **Delete Tasks:** Delete unwanted or completed tasks by pressing the delete button.
- **Toggle Completion:** List items can be marked completed by checking the box next to each on. the item is then crossed out. The edit button is disabled for completed tasks.


## Files

- **App.jsx:** Uses `useState` and `useReducer` capture user input to create list items/ and array of list item objects. Displays text field/add button and a mapped through list of all existing items.
- **App.css:** Does some basic formatting on the buttons and ul. Removes bullet point from li.
- **ListItem.jsx:** Handles to creation of each list item. Uses `useState` to enable editing functionality.
- **ListItem.css:** Does some basic formatting on the buttons and li. Handles disabling the edit button of completed items.
- **listReducer.mjs:** Consists of an ACTIONS object that defined each action type and a switch statement which handles each type of action.