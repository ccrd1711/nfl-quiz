# Quickfire NFL Quiz testing 

![The Quickfire Divisional NFL quiz](/assets/images/validation/amiresponsive-nfl.png)

# Testing Contents Menu 

* [Automated Testing](#automated-testing)

* [Bugs](#bugs)

## Automated Testing 

### Validators 

[W3C](https://validator.w3.org/) was used to validate the two HTML files and the CSS file. 

* Both index.html & register.html passed with no errors found. 

* CSS file style.css passed with no errors found. 

[JSHint](https://jshint.com/) was used to validate the JavaScript file. 

* JS file main.js passed with no errors found. 

## Lighthouse 

I used Lighthouse in Chrome developer tools to test Performance, Accessibility, Best Practices, and the SEO of the website on both mobile and desktop. The first image below is the desktop score, with the second being the mobile. 

[PC Lighthouse score](/assets/images/features/lighthouse-pc-report.png)
[Mobile Lighthouse score](/assets/images/features/lighthouse-mobile-report.png)

## Bugs

 Fixed bugs | What happened? | Solution 
-- | -- | -- |
No. 1 | The question number on the quiz was not increasing in increments of 1 (img Bug 1.1), i.e, when you finished question number one, the counter would not change to question number two and so on.| Image 'Bug 1.2' shows the console in Dev Tools throwing an undefined error as the function showQuestion wasn't running. The null error occurred as it was trying to find 'progress'. I had updated the id in the html to 'quiz-progress' earlier so 'progress' didn't exist. I updated the JS accordingly. 
No.2 | The initial 10-second timer implemented into the site was not working on the quiz beginning, or when the question moved from one to the other. | Image 'Bug 2.1' shows the timer function being created and 'Bug 2.2' shows it being called within the function. However on image 'Bug 2.3' you can see the console throwing an initialisation error. At this stage the timeLeft declaration was moved up the JS file and this fixed the initialisation error, but the timer would still not run. startTimer and showQuestion would all log to the console but setInterval and nextQuestion would not, and the console would remain empty when clicking an answer. Declaring the timer globally (image 'Bug 2.4') fixed the issue. 