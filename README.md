# Quickfire NFL Quiz website

Having understood that JavaScript was going to be all about introducing interactivity to my site, I very quickly had the idea to make a quiz, and to have it based around something I love. I've got an interest in multiple different sports and as I was watching the end of the NFL regular season and playoffs around the time of doing my lessons, I thought it would be cool to create a quiz based on that.

# Introduction 

## A Brief Summary 

- This quiz is designed for those who follow the National Football League (NFL) and want to test their divisional knowledge, or perhaps enhance their knowledge. 

- The NFL consists of 8 divisions across 2 conferences. The AFC and NFC are the different conferences, and the divisions in each are named North, South, East and West (e.g. AFC South, NFC East). Each division has 4 teams, which makes up the total 32 teams across the current league. 

- 'Analytical' quizzes/games such as these ones are commonplace for NFL fans, and can be a source of pride for a fan when competing with friends etc. Here in Wales I have a group of friends who follow it along with me, and we have had similar games/quizzes in person before. Once we did a speed game to see who could name every team in the NFL the fastest from memory. Little moments like this helped inspire me during this project, as well as knowing I had a dedicated and trustworthy fan base to test the website close to completion. 

## Bugs

 Fixed bugs | What happened? | Solution 
-- | -- | -- |
No. 1 | The question number on the quiz was not increasing in increments of 1, i.e, when you finished question number one, the counter would not change to question number two and so on. Image 'Bug 1.1' shows the quiz having finished but the question counter still at 1 of 33. Note at this stage of the project that there was going to be 33 questions, but it was later changed to 17. | Image 'Bug 1.2' shows the console in Dev Tools throwing an undefined error as the function showQuestion wasn't running. The null error occurred as it was trying to find 'progress'. I had updated the id in the html to 'quiz-progress' earlier so 'progress' didn't exist. I updated the JS accordingly.  
No.2 | The initial 10-second timer implemented into the site was not working on the quiz beginning, or when the question moved from one to the other. | Image 'Bug 2.1' shows the timer function being created and 'Bug 2.2' shows it being called within the function. However on image 'Bug 2.3' you can see the console throwing an initialisation error. At this stage the timeLeft declaration was moved up the JS file and this fixed the initialisation error, but the timer would still not run. startTimer and showQuestion would all log to the console but setInterval and nextQuestion would not, and the console would remain empty when clicking an answer. Declaring the timer globally (image 'Bug 2.4') fixed the issue. 

## Deployment and Accessing Code Workspace 

* [Go to the GitHub repository](https://github.com/ccrd1711/nfl-quiz) and click on the Github Logo with 'Open' to access the workspace. 

* [Go to the GitHub repository](https://github.com/ccrd1711/nfl-quiz) and click on 'Deployments' on the right hand side, then click the site URL which is placed under the last deployment timestamp.

## My Own Deployment

* I deployed my site early in the development process as I was aware from the course teaching that the preview site doesn't give a true reflection of the finished project, or at least it's liable to errors or displaying differently.

* Between project one and project two, we transitioned from Gitpod (a cloud-based development environment) to VS Code for local development. As part of this shift, I first ensured that my git commands were still logging correctly to the repository on GitHub, which they were. I tested this first on my first project, the Aberystwyth Beach Cleanup website. 

* To deploy my site initially, here were the steps taken:

   I went to [my repository homepage](https://github.com/ccrd1711/aber-cleanup).

   I clicked on 'Settings' along the top toolbar within the page, then I clicked on 'Pages'.

   In 'Branch', I clicked the dropdown and changed it from 'None' to 'Main'. In the new box that appeared I ensured that the folder was set to '/(root)', and then I pressed 'Save'.

   I then pressed '<> Code' in the top left to bring me back to the repo homepage and waited for 2-3 minutes while the site deployed.

   I refreshed the page. If the site has deployed properly, a section appears called 'Deployments' down the right hand side (referenced above under 'Deployment and Accessing Code Workspace'). Within this section I seen my deployed site's URL. 

   Note: It was in here I could obtain the link to the site to also share with friends and family for testing at various stages along the project. 