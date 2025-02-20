# Quickfire NFL Quiz website

Having understood that JavaScript was going to be all about introducing interactivity to my site, I very quickly had the idea to make a quiz, and to have it based around something I love. I've got an interest in multiple different sports and as I was watching the end of the NFL regular season and playoffs around the time of doing my lessons, I thought it would be cool to create a quiz based on that.

## Bugs

 Fixed bugs | What happened? | Solution 
-- | -- | -- |
No. 1 | The question number on the quiz was not increasing in increments of 1, i.e, when you finished question number one, the counter would not change to question number two and so on. Image 'Bug 1.1' shows the quiz having finished but the question counter still at 1 of 33. Note at this stage of the project that there was going to be 33 questions, but it was later changed to 17. | Image 'Bug 1.2' shows the console in Dev Tools throwing an undefined error as the function showQuestion wasn't running. The null error occurred as it was trying to find 'progress'. I had updated the id in the html to 'quiz-progress' earlier so 'progress' didn't exist. I updated the JS accordingly.  
No.2 | The initial 10-second timer implemented into the site was not working on the quiz beginning, or when the question moved from one to the other. | Image 'Bug 2.1' shows the timer function being created and 'Bug 2.2' shows it being called within the function. However on image 'Bug 2.3' you can see the console throwing an initialisation error. At this stage the timeLeft declaration was moved up the JS file and this fixed the initialisation error, but the timer would still not run. startTimer and showQuestion would all log to the console but setInterval and nextQuestion would not, and the console would remain empty when clicking an answer. Declaring the timer globally (image 'Bug 2.4') fixed the issue. 

