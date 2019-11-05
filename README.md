# REM stack template app

A basic, example React / Electron / Material-UI app that can be used as a
template. It also includes some simple IPC between the main and the
renderer processes.


## Getting started

Jump in to `package.json` and fix the names to reflect your project.

We're using `yarn` so install that. Do a `yarn install` to get everything
ready.

To launch the app, run `yarn electron-dev`.


## Files

`public/electron.js` is the entry point for the *main* (Node.JS) process.

`src/App.js` is the entry point for the *renderer* (Chrome) process.


## TODO

- `serviceWorker`
- Gracefully quit on MacOS
- Icons
- icon screen

