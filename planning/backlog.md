# Backlog

## Must-Haves

> these are necessary for basic usability

- **word list**: As a user I want a word list so that I can see the words I've added.
  - There is a list to show every word the user has added. By default the word list is blank.

- **add word**: As a user I want a input field and a add button so that I can input and add a word to the list.
  - Input a word and click add button then the word adds on the list.
  - Given the input contains only letters it will be added to the words list the list will be re-rendered.
  
- **remove word**: As a user I want a remove button so that I can remove the word I don't like or want from the list.
  - Given the input is in the list it is removed the list is re-rendered.
  
- **get warnings**: As a user I want to get warnings so that I know I did something wrong.
  - Give '123' and click add button then will get the warning: "123" is not a word.
  - If 'abc' has not added yet. Give 'abc' and click remove button then will get the warning: "abc" is not in the list.
  - Given the input contains non-letters, it will not be added a warning is displayed.
  - Given the input is not in the list a warning is posted.
  
- **sort words with options**: As a user I want to sort words with options.
  - Select 'oldest' then will sort words from oldest to newest.
  - Select 'newest' then will sort words from newest to oldest.
  - Select 'shortest' then will sort words from shortest to longest.
  - Select 'longest' then will sort words from longest to shortest.
  - Select 'a' then will sort alphabetical order.
  - Select 'z' then will reverse alphabetical order.


## Should-Haves

> these will complete the user experience, but are not necessary

- **colorful button**: As a user I want colorful button so that I can easily identify add or remove button by color.
  - Set the 'add' button to green.
  - Set the 'remove' button to red.
  
## Could-Haves

> would be really cool ... if there's

- **hint music**: As a user I want to get hint music so that I know I added a word successfully or removed a word.
  - Input a word and click add button, then happy melody playing.
  - Input a word and click remove button, then sad melody playing. 
  - Input a number and click add button, then warning melody playing.
