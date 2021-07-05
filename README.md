# NutritiGuide

![NutritiGuide Logo](https://github.com/TZ-fn/NutritiGuide/blob/main/src/assets/images/readme/logo.jpg)

## About

NutritiGuide is an app using the [Edamam](https://developer.edamam.com/) nutrition analysis API.

Users can pass an ingredients list to the API and in result will receive a customisable nutritions table.

Besides the default ingredients rows users can add additional rows of ingredients using the checkboxes under the textarea element.

## Usage

1. Enter the food you want to analyse.

2. Click the "Analyse!" button

   ![Ingredients Input](https://github.com/TZ-fn/NutritiGuide/blob/main/src/assets/images/readme/input.jpg)

3. Customise the results by toggling the optional table rows.

   ![Options Checkboxes](https://github.com/TZ-fn/NutritiGuide/blob/main/src/assets/images/readme/options.jpg)

4. Results will be displayed in a table.

   ![Results Table](https://github.com/TZ-fn/NutritiGuide/blob/main/src/assets/images/readme/results.jpg)

## Technologies used

React

React Hooks

Styled Components

Jest

React Testing Library

## What problems I had encountered

When I tried to mock the API calls in my test, I encountered a problem when the mocked `fetch()` function was always returning `undefined` instead of the mocked values. The culprit turned out to be `resetMocks:true` added in the `react-scripts`. Inspirited by this [github issue](https://github.com/facebook/jest/issues/9131),
I used `beforeEach()` to mock the `fetch()` function which solved the `undefined` errors.

## Live version

Live version can be found [here]().
