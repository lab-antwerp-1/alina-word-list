# Word List - development strategy version 2

This is an individual project to practice working on a full HTML/CSS/JS website. The project is to build an app in which user can add word to a list or remove word from the list and sort word list.

## planning documents

> As a user/developer I can read a readme of the project and follow the development process.

- [ ] there is a readme file

- [ ] there is a constraints document

- [ ] there is a backlog file

- [ ] there is a development strategy

- [ ] there is a retrospective

- this will be developed on the branch `planning`.

> As a user/developer I can follow the design process.

- [ ] there is a mobile wireframe file

- [ ] there is a desktop wireframe file

- [ ] there is a figma document link

- this will be developed on the branch `design`.

## Must-Haves

### 1. instruction

> a user can read instruction of this word list app.

#### HTML 
- [ ] a title tag "word list maker"
- [ ] a h1 tag "word list maker"
- [ ] a p tag of some instruction

#### CSS  

- [ ] styling to position the instruction section correctly and readably on the screen.

- this will be developed on the branch `1-feature-intro`.

### 2. add a word

> a user can add a new item to the list.  
> a user can see the added word list.


#### HTML 
- [ ] a form input field
- [ ] a add button
- [ ] a div with id `list-container` to display the word list

#### CSS  

- [ ] styling to position the new field and button correctly in the form

#### Listeners

- [ ] a listener connected to the "add" button, I'll try a "click" event first

#### Handlers 

- [ ] one handler that takes the user input from the form and:
  - [ ] validates it
  - [ ] if it's valid:
    - [ ] add it to the list in memory
    - [ ] re-render the list in the UI
  - [ ] if it's not valid:
warns the user what is wrong with their input

#### Utils  

- [ ] a pure function that validates new list entries and returns either true or a message describing what is wrong

#### Components 

- [ ] none. I can reuse the list & item components from rendering the initial list

- this will be developed on the branch `2-feature-add`.


### 3. remove a word

> a user can remove a word from the list.  
> the list will be re-rendered.

#### HTML  

- [ ] an i tag for bin icon aside each word in the list
- [ ] a "remove all" button aside add button

#### CSS  

- [ ] styling to position the bin icon and "remove all" button correctly in the form

#### Listeners 

- [ ] a listener connected to the "bin" icon, I'll try a "click" event first
- [ ] a listener connected to the "remove all" button, I'll try a "click" event first

#### Handlers 

- [ ] one handler that remove a word from the list and re-render the list in the UI
- [ ] one handler that remove the entire list and re-render the list in the UI

#### Utils  

- [ ] none.

#### Components  

- [ ] none. I can reuse the list & item components from rendering the initial list

- this will be developed on the branch `3-feature-remove`.

### 4. sort words with options 

> a user can sort words with 6 options.  
> select 'oldest' then will sort words from oldest to newest.  
> select 'newest' then will sort words from newest to oldest.  
> select 'shortest' then will sort words from shortest to longest.  
> select 'longest' then will sort words from longest to shortest.  
> select 'a' then will sort alphabetical order.  
> select 'z' then will reverse alphabetical order.  

#### HTML  

- [ ] a `select` element with the name attribute "sort" to create a drop-down list.
- [ ] 6 `option` tags inside the `select` element define the available options in the drop-down list.

#### CSS  

- [ ] styling to position the drop-down list correctly on the screen

#### Listeners 

- [ ] a listener connected to the `select`, I'll try a "click" event first

#### Handlers 

- [ ] one handler that sort the word list and re-render the list in the UI

#### Utils  

- [ ] none.

#### Components 

- [ ] none. I can reuse the list & item components from rendering the initial list

- this will be developed on the branch `4-feature-sort`.

## Should-Haves

> these will complete the user experience, but are not necessary

### 5. edit a word

> a user can edit a word from the list.

#### HTML  

- [ ] an i tag for pen icon aside each word in the list

#### CSS  

- [ ] styling to position the pen icon correctly in the list

#### Listeners 

- [ ] a listener connected to the pen icon, I'll try a "click" event first

#### Handlers 

- [ ] one handler that print the specific word to input. (User can edit it and then add to word list. Finally click bin icon to remove the original word.)

#### Utils  

- [ ] none. 

#### Components 

- [ ] none. 

- this will be developed on the branch `5-feature-edit`.

### 6. colorful button
> a user can easily identify add or remove button by color.
> set the 'add' button to green.
> set the 'remove all' button to red.

#### HTML 

- [ ] none. 

#### CSS  

- [ ] styling the 'add' and 'remove all' button

#### Listeners 

- [ ] none.

#### Handlers 

- [ ] none.

#### Utils  

- [ ] none.

#### Components 

- [ ] none.

- this will be developed on the branch `6-feature-button-color`.

### 7. use Enter key add
> a user can add a word by press Enter key.

#### HTML  

- [ ] none.

#### CSS  

- [ ] none.

#### Listeners 

- [ ] a listener connected to the `input`, I'll try a `keydown` event first.

#### Handlers 

- [ ] a handler that add word to list and re-render the list in the UI

#### Utils  

- [ ] none.

#### Components   

- [ ] none. I can reuse the list & item components from rendering the initial list.

- this will be developed on the branch `7-feature-enter-key`.

### 8. change font

> a user can change word list font with option.

#### HTML  

- [ ] a `select` element with the name attribute "font" and id "font" to create a drop-down list.
- [ ] 3 `option` tags inside the `select` element define the available options in the drop-down list.

#### CSS  

- [ ] a listener connected to the `select` with id "font", I'll try a "click" event first

#### Handlers 

- [ ] one handler that change the font of the word list and re-render the list in the UI

#### Utils  

- [ ] none.

#### Components 

- [ ] none.

- this will be developed on the branch `8-feature-change-font`.

## Could-Haves

> would be really cool ... if there's

### 9. share word list 
> a user can share the word list on facebook, email.

### 10. export word list
> a user can export word list to a file.
