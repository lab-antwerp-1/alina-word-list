<!--

  There will be different types of tasks for each user story:
    `type: init`
    `type: listeners`
    `type: handlers`
    `type: logic`
    `type: components`
    `type: data`
    `type: css`
    
   
    ...

-->
# Word List
This is an individual project to practice working on a full HTML/CSS/JS website.

## Setup

<!-- what code do you need just to open the project? this might include:
  - boilerplate code (https://brandlitic.com/what-is-boilerplate-code/)
  - loading program data
  - rendering the initial user interface
-->

-[]`type: init`: 

  -[]Import `data` and `components`.

  -[]Import all listener files so they can attach to the DOM. 

  -[]Import any other code that executes when the document or window are ready.

  -[]Render the initial list by calling function `renderList(data.words)`.

-[]`type: data`:

  -[]Create an object named `data`.

  -[]@property {string[]} words - An array of words that the user has provided.

  -[]@property {string} sort - A string indicating the order string should be displayed in the UI.

  -[]`export` object `data`.

-[]`type: listeners`: Add listener `addEventListener('click', inputWord)` to `form` element with the id `input-form` in /listeners.

-[]`type: listeners`: Add listener `addEventListener('change', sortWords)` to `select` element with the id `sort-type` in /listeners.

## Word list

> "As a user I want a word list so that I can see the words I've added."
  > - There is a list to show every word the user has added. By default the word list is blank.

### Logic: Word list

-[]`type: components`: Write a function `renderList(toRender = [])` in /components. Convert each word element from an array to text in each `li`tag , and an `ul`tag wrap around all the `li`. `export` function.






### Interface: Word list

-[]`type html`: A `div` with the id `list-container` to store rendered word list.

### Interaction: Word list
-[]When the app just loaded, the word list is blank.



## Add word

> "As a user I want a input field and a add button so that I can input and add a word to the list."
  > - Given the input contains only letters it will be added to the words list, and the list will be re-rendered.

### Logic: Add word

-[]`type: handlers`: Write a function `inputWord(event)` in/handlers. It's an entry point for adding or removing a word. It is called each time the user clicks the "add word" or the "remove word" button. It gathers user input from DOM and then render new words by calling function `sortStrings(data.words, data.sort)` and `renderList(sorted)` to a `div` with the id `listContainer`. `export` function.

-[]`type: logic`: Write a function `sortStrings(toSort = [], sortType = 'oldest')` in /logic. It will sort words depend on sort type option. `export` function.

-[]`type: logic`: Write a function `isWord(text = '')` in /logic to check if the user input is a word. `export` function.

-[]`type: components`: Write a function `renderList(toRender = [])` in render-list.js. Convert each word element from an array to text in each `li`tag , and an `ul`tag wrap around all the `li`. `export` function.

### Interface: Add word

-[]`type html`: A `form` tag with the id `input-form`.

-[]`type html`: A `input` tag with `name="text" placeholder="new word"` as a form element.

-[]`type html`: A `input` tag with `type="button" value="add"` as a form element.


### Interaction: Add word

-[]Given the input contains only letters it will be added to the words list, and the list will be re-rendered.


## Remove word

> "As a user I want a remove button so that I can remove the word I don't like or want from the list."
  > - Give a word and click remove button then the word removes from the list.

### Logic: Remove word
<!-- same as Add word -->
-[]`type: handlers`: Write a function `inputWord(event)` in/handlers. It's an entry point for adding or removing a word. It is called each time the user clicks the "add word" or the "remove word" button. It gathers user input from DOM and then render new words by calling function `sortStrings(data.words, data.sort)` and `renderList(sorted)` to a `div` with the id `listContainer`. `export` function.

-[]`type: logic`: Write a function `sortStrings(toSort = [], sortType = 'oldest')` in /logic. It will sort words depend on sort type option. `export` function.

-[]`type: logic`: Write a function `isWord(text = '')` in /logic to check if the user input is a word. `export` function.

-[]`type: components`: Write a function `renderList(toRender = [])` in render-list.js. Convert each word element from an array to text in each `li`tag , and an `ul`tag wrap around all the `li`. `export` function.

### Interface: Remove word

-[]`type html`: A `form` tag with the id `input-form`.

-[]`type html`: A `input` tag with `name="text" placeholder="new word"` as a form element.

-[]`type html`: A `input` tag with `type="button" value="remove"` as a form element.

### Interaction: Remove word

-[]Given the input is in the list it is removed and the list is re-rendered.


## Get warnings

> "As a user I want to get warnings so that I know I did something wrong."
  > - Give '123' and click add button then will get the warning: "123" is not a word.
  > - If 'abc' has not added yet. Give 'abc' and click remove button then will get the warning: "abc" is not in the list.

### Logic: Get warnings

-[]`type: logic`: Write a function `isWord(text = '')` in /logic to check if the user input is a word. `export` function.

-[]`type: handlers`: 
  -[]Write a function `inputWord(event)` in/handlers. It's an entry point for adding or removing a word. It is called each time the user clicks the "add word" or the "remove word" button. It gathers user input from DOM and then render new words by calling function `sortStrings(data.words, data.sort)` and `renderList(sorted)` to a `div` with the id `listContainer`. 

  -[]Add a guard to check if user input is a word by calling function `isWord(text = '')`, if it isn't, post a warning `"${userInput}" is not a word`.

  -[]Add a guard to check text, use `data.words.includes(text)`, if not, post a warning `"${text}" is not in the list`

  -[]`export` function. 

### Interface: Get warnings

-[]`type:html`: a `code` tag with the id `warnings`, then assign the warning message to it's `innerText`.

### Interaction: Get warnings

-[] Given the input contains non-letters, it will not be added a warning is displayed.

-[] Given the input is not in the list a warning is posted.


## Sort words with options

> "As a user I want to sort words with options."
  > - Select 'oldest' then will sort words from oldest to newest.
  > - Select 'newest' then will sort words from newest to oldest.
  > - Select 'shortest' then will sort words from shortest to longest.
  > - Select 'longest' then will sort words from longest to shortest.
  > - Select 'a' then will sort alphabetical order.
  > - Select 'z' then will reverse alphabetical order.

### Logic: Sort words with options

-[]`type: handlers`: Write a function `sortWords(event)` in /handlers. Entry point for users sorting the list of words in this app. It is called each time the input selection changes. It will read and process user input and render new words. Make a newly sorted list named `sorted` by calling function `sortStrings(data.words, data.sort)` and then pass it in `renderList(sorted)`, then use `.appendChild()` append the `ul` element to a `div` with the id `listContainer`. `export` function.

-[]`type: logic`: Write a function `sortStrings(toSort = [], sortType = 'oldest')` in /logic. It will sort words depend on sort type option. `export` function.

-[]`type: components`: Write a function `renderList(toRender = [])` in render-list.js. Convert each word element from an array to text in each `li`tag , and an `ul`tag wrap around all the `li`. `export` function.

### Interface: Sort words with options

-[]`type html`: A `div` tag with the id `root`, and with content `sort:`.

-[]`type html`: A `select` tag with drop down list with options 'oldest', 'newest'...

-[]`type html`: 6 `option` tags. Each tag have `value` from each option.

  
### Interaction: Sort words with options

-[]If a user selects a sort type, the list will re-render. 

