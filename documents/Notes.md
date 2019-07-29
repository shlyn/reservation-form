## Instructions to run app

### To run locally:

1. Fork and clone this repo.
2. Cd into the directory.
3. Run "yarn" in the terminal to install dependencies.
4. Run "yarn dev" in the terminal to start running locally.

### Explanations

- For this project, I chose to use redux for state management in order to set a pattern, assuming the app would grow in the future.
  I only used redux in the top level component because of the current size of the app.
- I chose use a hook instead of a class component in Main.js because I think it's cleaner.
- The data for the rooms is in data.js in the utils folder, but would be realistically moved to an api folder if I was getting it from the back end.
- In addition, I created a global style file in order to create consistency throughout the app.
