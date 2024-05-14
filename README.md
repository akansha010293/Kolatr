# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### My Approach

In this project you will find 3 components
-Layout - the main container is within the layout
-Input - A component to fetch the input
-Message Bubble - This will have a basic Incoming and Outgoing Message component

I started by creating my draft modal with mockData as per the API, and did the mapping to fetch the data. 
I was implementing some test, and I ran out of the number of tries and end up getting LIMIT EXCEEDED.

Due to which to have the chat like interaction, i created a state with initial mock data and then as you submit something in the input it will create a response and give you the look and feel of the chat.

I have commented the `fetchChat` function in App.tsx and its call in Layout, if you are keen to see its implementation.

### HOW ITS IMPLEMENTED

I have a layout component, which shows the basic UI for for the chat box. This 
Which has two component as it's child, wrapped in a WRAPPER that is scrollable and allows scroll to be always at the bottom of the page, showing the user the current messages.

MESSAGE BUBBLE - this allows user to send a recieve the message with the name and timestamp.
INPUT - This allows user to type in a text, and get a response wrt to it.

The response I am generating is coming from a randomMessage function, that returns a random message as soon as your enters a data.

### HOW IT SHOULD BE DONE
I would have send the user input to the API to get a response from the SmallTalk. 




