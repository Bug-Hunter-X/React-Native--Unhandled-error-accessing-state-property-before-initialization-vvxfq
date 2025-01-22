# React Native: Unhandled error accessing state property before initialization

This repository demonstrates a common error in React Native: attempting to access a property of a state variable before it has been initialized. This usually occurs when dealing with asynchronous operations like API calls or timers.  The example showcases the problematic code and its solution.

## Problem

The `bug.js` file contains code that fetches data from an API.  It attempts to render the fetched data's `name` property before the `setData` function has had a chance to update the state. This results in a runtime error because `data` is initially `null` or `undefined`.

## Solution

The `bugSolution.js` file provides the corrected code. It uses optional chaining (`?.`) and nullish coalescing (`??`) to safely access the `name` property, preventing the error.  If `data` is nullish, a default value is displayed instead.

## How to run

1. Clone the repository.
2. `npm install` or `yarn install`
3. Run the app on your emulator/device. (The solution will render correctly).