# Quickfire NFL Quiz testing 

![The Quickfire Divisional NFL quiz](/assets/images/validation/amiresponsive-nfl.png)

# Testing Contents Menu 

* [Automated Testing](#automated-testing)

* [Validators](#validators)

* [Lighthouse](#lighthouse)

* [Manual Testing](#manual-testing)

* [User Stories](#user-stories)

* [New Visitors](#new-visitors-to-the-site)

* [Returning Visitors](#returning-visitors)

* [Bugs](#bugs)

## Automated Testing 

### Validators 

[W3C](https://validator.w3.org/) was used to validate the two HTML files and the CSS file. 

* Both index.html & register.html passed with no errors found. 

* CSS file style.css passed with no errors found. 

[JSHint](https://jshint.com/) was used to validate the JavaScript file. 

* JS file main.js passed with no errors found. 

### Lighthouse 

I used Lighthouse in Chrome developer tools to test Performance, Accessibility, Best Practices, and the SEO of the website on both mobile and desktop. The first image below is the desktop score, with the second being the mobile. 

![PC Lighthouse score](/assets/images/validation/lighthouse-pc-report.png)
![Mobile Lighthouse score](/assets/images/validation/lighthouse-mobile-report.png)

## Manual Testing

### User Stories 

### New visitors to the site 

| Goal | How is it achieved? | Pass or Fail | 
| --- | :---: | ---: |
| As a new user, I want to read a clear introduction to the quiz that I understand what the topic is before starting | The user is welcomed to the quiz with a title explaining that the quiz is centered around divisions in the NFL | Pass 
| As a new user I want to easily find and read the quiz rules so that I know how to play | The user is clearly highlighted to the rules immmediately upon entering the site which are available in a dropdown menu for easy access and clean design | Pass
| As a new user I want to choose my difficulty level so that I can play at a pace that suits me | The user has two clear options on the buttons that allow them to set their preferred time limit per question | Pass 
| As a new user I want to answer multiple-choice questions to test my knowledge | The user has the same amount of options on each question for uniformity in experience and design. There are progress trackers (timer and question numnber), and interactive buttons that provide instant feedback | Pass 
| As a new user I want to see my final score so that I know how well I performed | A results screen at the end of the quiz displaying the final score and a short comical message based on NFL culture/folklore shows the player performance level | Pass 

### Returning visitors 

| Goal | How is it achieved? | Pass or Fail | 
| --- | :---: | ---: |
| As a returning user I want to restart the quiz easily so that I can try again and improve my score | A 'retry' button clearly marked is available at the end of each quiz difficulty which brings you back to the difficulty selection again (as rules have already been read) | Pass #
| As a returning user I want to be able to quickly access the quiz so that I don't have to go through all the rules again | The rules section is collapsable, and also on 'Retry' you are taken to the second screen - skipping the rules. All to save the user time in being able to do the quiz again | Pass 
| As a returning user I want to be able to sign up for updates from the site for future quizzes or updates | Having enjoyed the quiz and possibly sharing it, users entering the "upcoming" section are welcomed with a form to sign up for site updates and the form works correctly | Pass 
| As a returning user I want to be able to share my results with friends and family | Having completed the quiz there is a share button allowing users to share their result with an accompanying link to the quiz | Pass 
| As a returning user I want to be able to know that I have chosen the correct difficulty for the quiz | Having commenced the quiz the timer shows and counts immediately so the user will know which one they have chosen. They always have the home button available to return if they have pressed the wrong option | Pass 

### New Visitor Testing 
| Story | Function | Footage | 
| --- | :---: | ---: | 
| User Story 1 | Opening the homepage and quiz title | ![gif of landing](/assets/images/features/intro-quiz.gif)
| User Story 2 | Using the rules dropdown | ![gif of rules dropdown](/assets/images/features/rules-drop.gif) 
| User Story 3 | Choosing difficulty | ![gif of difficulty selection](/assets/images/features/choose-diff.gif)
| User Story 4 | Multiple choice | ![gif of choices in quiz](/assets/images/features/quiz-choices.gif)
| User Story 5 | Message at end of quiz | ![gif of quiz message](/assets/images/features/message-share-retry.gif)

### Returning Visitor Testing
| Story | Function | Footage | 
| --- | :---: | ---: | 
| User Stories 6, 7 & 9 | Restarting the quiz, skipping rules, and sharing results | Please see gif above in User Story 5 as this shows the window with all these buttons available 
| User Story 8 | Registration for future updates or changes | ![Working registration form](/assets/images/features/reg-form-working.gif)
| User Story 10 | Ensuring you have chosen correctly | Please see gif above in User Story 4 as this shows the timer working along the bottom which would show the user if they have chosen the right one

### Bugs

 Fixed bugs | What happened? | Solution 
-- | -- | -- |
No. 1 | The question number on the quiz was not increasing in increments of 1 (img Bug 1.1), i.e, when you finished question number one, the counter would not change to question number two and so on.| Image 'Bug 1.2' shows the console in Dev Tools throwing an undefined error as the function showQuestion wasn't running. The null error occurred as it was trying to find 'progress'. I had updated the id in the html to 'quiz-progress' earlier so 'progress' didn't exist. I updated the JS accordingly. 
No.2 | The initial 10-second timer implemented into the site was not working on the quiz beginning, or when the question moved from one to the other. | Image 'Bug 2.1' shows the timer function being created and 'Bug 2.2' shows it being called within the function. However on image 'Bug 2.3' you can see the console throwing an initialisation error. At this stage the timeLeft declaration was moved up the JS file and this fixed the initialisation error, but the timer would still not run. startTimer and showQuestion would all log to the console but setInterval and nextQuestion would not, and the console would remain empty when clicking an answer. Declaring the timer globally (image 'Bug 2.4') fixed the issue. 