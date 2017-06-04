# Seattle Tech Forum

#### Web app using JavaScript and Ember.js, May 26, 2017

### By Bryan Lin

## Description

Seattle Tech Forum is a Seattle-based web forum where users can ask and/or answer tech-related questions. The application is built with JavaScript and Ember.js.

## Setup/Installation Requirements

* You will need the following things properly installed on your computer:
  * [Git](https://git-scm.com/)
  * [Node.js](https://nodejs.org/) (with NPM)
  * [Ember CLI](https://ember-cli.com/)
* Clone the repository: "git clone https://github.com/bryanlin39/seattle-tech-forum.git"
* Navigate to the project directory: "cd seattle-tech-forum"
* Run "npm install" in the terminal to install all Node packages
* Run "ember serve" in the terminal to launch the server
* Visit "http://localhost:4200" to access the app

## Planning

1. Configuration/dependencies
* Ember
* Bootstrap for front-end styling: "ember install ember-bootstrap"

2. Specs
* Spec 1: Post a new question with a date, title, author, and additional notes
* Spec 2: Click on individual questions to navigate to that question's page with additional details
* Spec 3: Add an answer to an existing question with a date, author, and answer content
* Spec 4: Edit answers
* Spec 5: Delete answers
* Spec 6: Edit questions
* Spec 7: Delete questions and all related answers

3. Integration
* Initial router and index pages with all dependencies
* Route handler and template for index page with all questions listed
* Component and template for form to add new questions
* Component and template for listing all questions on the index page
* Route handler and template for individual question pages
* Component and template for form to add new answers
* Component and template for listing all answers for a particular question
* Component and template for updating/deleting answers
* Component and template for updating/deleting questions

4. UX/UI
* Install and use bootstrap
* Develop custom styling

## Known Bugs

None

## Support and Contact Information

For any comments or concerns, please email Bryan at bryanlin39@gmail.com.

## Technologies Used

* JavaScript
* Ember.js
* Node.js
  * Node package manager (npm)
* HTML
* CSS
* Bootstrap

### License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Copyright (c) 2017 Bryan Lin
