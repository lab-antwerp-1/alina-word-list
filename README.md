# Word Mnemonic Device

# Word Mnemonic Device  

This is an individual project to practice working on a full HTML/CSS/JS website. 

"Word Mnemonic Device" app helps user remembering words. You can add word, remove word, edit word, sort word... Check the words from `New Words` list and click `remembered` button, you can move the words to remembered list. check the words from `Remembered Words` list and click `overlooked` button, you will move the words back to new words list.

## Code Quality Automation

Writing code is hard. To write even just 10 lines there are 100 things you need to think about, and 1000 mistakes you can make. Developers are clever and lazy people. They have built tools to help with all of this.

This repository comes with features to help you and your group write good code. Some features are for checking your code manually before pushing it, and others are for checking your code automatically when you open a PR to the `main`/`master` branch.

### Continuous Integration (CI)

> checks on GitHub

When you open a PR to `main`/`master` in your repository, GitHub will run the workflows in [./.github/workflows](./.github/workflows). You can try the same scripts locally to make sure they will pass before pushing:

- **`npm run lint:js -- ./client`**: Lints all the .js files in your `/src` folder, if there are any warnings or errors the check will fail.
- **`npm run lint:css -- ./client/styles`**: lints all the .css files in your `/styles` folder, if there are any warnings or errors the check will fail.
- **`npm run test -- ./client`**: runs all the `.spec.js` fils in your `/src` folder. If any tests fail, this check will fail.
- **`npm run document`**: re-renders the `DOCS.md` file in the root of your repository, making sure that the documentation is always up to date. If the documentation script has any trouble the check will fail.

You will not be able to merge your branch until all the checks pass. These checks will be run again each time you push changes to your branch, so no worries if you don't pass the checks on your first try.

### Local Checks

> checks on your own computer

You can run the same checks locally to make sure you have no errors before pushing, this will make everything easier for you and your reviewer. If the checks pass locally then they should pass when you push.

- **Linting JavaScript**
  - `npm run lint:js -- ./path/to/file.js`: lint one file at a time by passing the path to that file
  - `npm run lint:js:ci`: lint all of the JavaScript in `/src`. This is the same command that is run in GitHub so if it works locally it should pass the checks when you push.
- **Linting CSS**
  - `npm run lint:css -- ./path/to/file.css`: lint one file at a time by passing the path to that file
  - `npm run lint:css:ci`: lint all of the CSS in `/public`. This is the same command that is run in GitHub so if it works locally it should pass the checks when you push.
- **Testing**
  - `npm run test -- ./path/to/file.spec.js`: test one `.spec.js` file at a time
  - `npm run test:ci`: test all `.spec.js` files at once. This is the same command that is run in GitHub so if it works locally it should pass the checks when you push.
- **Formatting**
  - `npm run format -- ./path/to/file`: you can format any file type with this command (.js, .css, .html, .md)
  - if you install the Prettier extension for VSCode and have it format on save, then you don't need to use this command
  - there is no extra CI check for formatting, but the linter will check some formatting. The rest is up to your code reviewer
- **Documenting**
  - `npm run document`: render the documentation before pushing to make sure there are no errors.
