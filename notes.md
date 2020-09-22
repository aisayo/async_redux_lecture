# Async Redux

- Goal: Making asynchronous calls with actions
- Problem: Action creators are expected to return an object

## Thunk

- Thunk is a concept in programming where a function is used to delay the evaluation/calculation of an operation
- Handles asynchronous calls with Redux
- A middleware that allows to slightly alter behavior of actions
- To install: `npm install --save redux-thunk`
- Inside of `index.js` file, need to use Redux `applyMiddlware` method to add Thunk to store

  ```javaScript 
  const store = createStore(rootReducer, applyMiddleware(thunk));
  ```

- Thunk allows actions creators to return a function when it typically expects an object(the action)
- Gives the function access to `dispatch` function which allows dispatching of actions inside of returned function

## Fetch Review

```javaScript
fetch(endpoint url)
.then(resp => resp.json())
.then(date => do something with data)
```