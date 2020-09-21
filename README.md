# User App

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Prerequisites
You need to have nodejs installed on your machine. If you don’t, please go to [here](https://nodejs.org) and download the latest version. We need this because we use npm (node package manager) to manage all the dependencies and packages we use in our project.

## How to run the App
Simply go to the directory name userlist on your local machine.
#### `cd userlist-new1`

In the project directory, you need to first install npm and then json-server on one terminal:
#### `npm install`
#### `npm i json-server`

In the project directory, you need to first watch for MockAPI server in one terminal:
#### `json-server --watch ./src/testJSON.json --port 8000`

Open another terminal and go to directory name userlist on your local machine.
#### `cd userlist`

In the project directory of second terminal, you can run:
#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
The page will reload if you make edits.
