# React-Treemap

## Available Scripts

In the project directory, you can run:

### `yarn`

To install dependencies.

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Assumptions

The application will always try to fit the item in minimum number of row

## Potential improvements

- Use css flex / grid layout for the tree map.
- Better test coverage and make base test case more reusable.
- Add debounce for user input when interacting with state.
- Get more familiar with `@testing-library` and testing `@reduxjs/toolkit` connected components

## Edge cases for discussion

```
data: [
  { name: "A", weight: 1, value: -0.02 },
  { name: "B", weight: 1, value: 0.05 },
  { name: "C", weight: 1, value: 0.015 },
  { name: "D", weight: 1, value: -0.01 },
],
no_of_rows: 3
```

How can we fit it into 3 rows?
