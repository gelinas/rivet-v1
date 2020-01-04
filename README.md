# Rivet Employee Directory Front End

A single page web application for viewing, adding, and updating employee information in the Rivet Employee Directory.

## Architecture Overview

The frontend codebase is built with React using Redux and the reducer pattern for state management. Development builds give you access to Redux logging and development tools for tracking the dispatching and resolution of actions.

The frontend is styled with the [Bulma](https://bulma.io/) CSS framework and animated with [React-Spring](https://www.react-spring.io/) animation library to minimize bundle size and maximize developer options for future styling decisions.

Form state for adding and editing profiles is managed by the [Formik](https://formik.com/) library and validated with [Yup](https://github.com/jquense/yup).


## Available Scripts

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses their utilities for building development and production deployments. In the project directory, you can run:

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

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).