# Word List

This is an individual project to practice working on a full HTML/CSS/JS website. Most of the code is already written, just some parts are missing. You can see how the website _should_ behave by running [./demo.html](./demo.html) in your browser. Your goal is not just to fill in the missing bits of code but to practice using the code review and quality checks - both locally and on GitHub with CI checks on each PR to `main`/`master`.

There are 3 files that need to be completed:

- [./src/logic/sort-strings.js](./src/logic/sort-strings.js)
- [./src/handlers/input-word.js](./src/handlers/input-word.js)
- [./src/handlers/sort-words.js](./src/handlers/sort-words.js)

Enjoy!

---

## Planning

Planning websites that use JavaScript will follow the same process as planning projects with only HTML and CSS. The only difference is that each user story can have more types of tasks. For example, if a user wants to enter their name into a form you will probably need to write some code in more than one file:

- **HTML**: the structure of the form
- **CSS**: the style of the form
- **Handlers**: a handler function to add the user's name to the program's saved data
- **Listeners**: a `"submit"` event listener connecting the form and the handler

That means a PR to add the form will have one _for_ label and several _type_ labels:

- `for: name form`
- `type: html`, `type: css`, `type: handlers`, `type: listeners`

---

## Code Review

Writing your code is only half of the project, reviewing each other's code is the other half. You've already had some experience with reviewing JavaScript so you should be familiar with review checklists, linting, testing and formatting.

### Branches and PRs

Develop your solutions on a separate branch then push your branch to GitHub when you're ready for a review. You'll know you're ready for review when you've:

1. used your code in the browser and it works
1. Formatted your code
1. Passed your linting checks
1. Passed all your tests
1. reviewed your own code with the code review checklist

When you open your PR be sure to use the [Pull Request Template for code review](./.github/PULL_REQUEST_TEMPLATE/code-review.md). After you've opened your PR it's time to:

1. link your PR to your user story issue on the project board
2. request a review from 1 or two classmates
3. get started on a new issue

### The Checklist

No code review is complete without a checklist. This repository has a [Pull Request Template for code review](./.github/PULL_REQUEST_TEMPLATE/code-review.md) with all the things to check in your code review. The checklist has a section for all types of code.

When you are creating your PR be sure to delete the checklists that are not needed for your PR. This will save your reviewer some extra work figuring out what to review.

---

## Repo Setup

- Turn on GitHub Pages and put a link to your website in the repo's description
- in the _Branches_ section of your repo's settings make sure:
  - The repository [requires a review](https://github.blog/2018-03-23-require-multiple-reviewers/) before pull requests can be merged.
  - check _Dismiss stale pull request approvals when new commits are pushed_
  - The `master`/`main` branch must "_Require status checks to pass before merging_"
  - The `master`/`main` branch must "_Require require branches to be up to date before merging_"
- In enable the _Actions_ section of your repository so the automated checks will run each time you send a PR to `master`/`main`

---

## Local Setup

So you're ready to start coding? If you haven't cloned this repository already you should, and then ...

1. Clone this repository:
   - `$ git clone git@github.com:HackYourFutureBelgium/word-list.git`
2. Navigate to this repository in your local computer
   - `$ cd word-list`
3. Install the project's development dependencies - you will need these for the code quality automation:
   - `$ npm install`

---

## Running the Site

This is a static website that only uses HTML, CSS and JavaScript, so you can run it using any static server - `liveServer`, `http-server`, `study-lenses`, ...

Navigating to `demo.html` will run the example website for reverse-engineering.

---

## Developing your Code

This project is a full website so you will need to run it by opening `index.html` in the browser.

It's recommended that you use VSCode to write your HTML, CSS and JavaScript. Each time you make a change in VSCode you will need to go to the browser and refresh to see if it worked. Everything you have learned about the debugger will come in handy! You can use breakpoints and `debugger` statements to step through while your website is running.

The only code in this project that you can develop and test separately from the rest is functions in the `/src/logic` folder, these are _pure functions_ that will need to test. You can develop these either in VSCode or Study Lenses.

---

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
