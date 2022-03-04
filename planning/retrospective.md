# Retrospective

## Stop Doing

- Function refactor.
- Write user story.

## Continue Doing

- Document functions and README.md.

## Start Doing

- Rewrite functions.
- Try to using `template`. It is handy when render component using js.
- Try to using `attribute`. I am curious about `className` , `id` vs. `attribute` at this stage.

## Lessons Learned

- function roles: 
  -Learned how to use them in a program. You can split your projects into smaller, more specific tasks making it easier to collaborate.
  -Components are functions that return a _component_ of the user interface. In this project a component is just a function that returns a DOM element.
- Create a functional design before writing code.
- Create a HTML skeleton for each feature, especially when using js to render component.
- When render component, give component a class name or id, if there is event listener going to add.
- Write small and simple functions.  Prefer to make a group of function to handle an event. Instead of using big complex function.

---

## Strategy vs. Board

### What parts of your plan went as expected?

- Development strategy.

### What parts of your plan did not work out?

- Event handler. I wrote one handler to handle edit, it works, but I can't pass the lint CI. Because of "Cognitive Complexity 17 not allowed (15 allowed)". I had to rewrote the handler and split it into several small ones. That takes a lot of time.

### Did you need to add things that weren't in your strategy?

- No. Because I re-wrote this app. I wrote a handy development strategy version 2. It works very well.

### Or remove extra steps?