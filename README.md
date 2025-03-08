# Quickfire NFL Quiz website

![The Quickfire Divisional NFL quiz](/assets/images/validation/amiresponsive-nfl.png)

Having understood that JavaScript was going to be all about introducing interactivity to my site, I very quickly had the idea to make a quiz, and to have it based around something I love. I've got an interest in multiple different sports and as I was watching the end of the NFL regular season and playoffs around the time of doing my lessons, I thought it would be cool to create a quiz based on that.

Visit the [NFL Quickfire Divisional quiz here](https://ccrd1711.github.io/nfl-quiz/)

# Contents 

* [Introduction](#introduction)

* [Deployment](#deployment-and-accessing-code-workspace)
      
* [My Own Deployment](#my-own-deployment)

* [Design](#design)

* [Wireframes](#wireframes)

* [Design Development](#design-development)

* [Background Image](#the-background-image)

* [Features](#features)

* [Ideas going forward](ideas-going-forward)

* [Technologies Used](#technologies-used)

* [Languages Used](#languages-used)

* [External programs and libraries](#external-programs-or-libraries-used)

* [Credits](#credits)

* [Code Inspiration](#code-inspiration)

* [Content](#content)

* [Media](#media) 

* [Acknowledgements](#acknowledgements)

# Introduction 

## A Brief Summary 

- This quiz is designed for those who follow the National Football League (NFL) and want to test their divisional knowledge, or perhaps enhance their knowledge. 

- The NFL consists of 8 divisions across 2 conferences. The AFC and NFC are the different conferences, and the divisions in each are named North, South, East and West (e.g. AFC South, NFC East). Each division has 4 teams, which makes up the total 32 teams across the current league. 

- 'Analytical' quizzes/games such as these ones are commonplace for NFL fans, and can be a source of pride for a fan when competing with friends etc. Here in Wales I have a group of friends who follow it along with me, and we have had similar games/quizzes in person before. Once we did a speed game to see who could name every team in the NFL the fastest from memory. Moments like that have helped inspire me during this project, as well as knowing I had a dedicated and trustworthy fan base to test the website close to completion. 

## Deployment and Accessing Code Workspace 

* This website was deployed using GitHub Pages - [The Quickfire NFL Divisional Quiz](https://github.com/ccrd1711/nfl-quiz)

* [Go to the GitHub repository](https://github.com/ccrd1711/nfl-quiz) and click on 'Deployments' on the right hand side, then click the site URL which is placed under the last deployment timestamp.

* To fork the repository, go to the [GitHub repository](https://github.com/ccrd1711/nfl-quiz) and click the Fork button in the top right corner. 

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

## Design 

### Wireframes 

#### Landing Page Wireframe (PC)
![Landing page PC Wireframe](/assets/images/wireframes/landing-page-1.jpg) 
#### Quiz window Wireframe (PC)
![Quiz window Wireframe](/assets/images/wireframes/landing-page-quiz.jpg) 
#### Reg page Wireframe (PC)
![PC Registration wireframe](/assets/images/wireframes/reg-page-1.jpg) 
#### Mobile landing page 
![Mobile Landing Wireframe](/assets/images/wireframes/mobile-landing-page.jpg)
#### Mobile Quiz window
![Mobile Quiz wireframe](/assets/images/wireframes/mobile-quiz-window.jpg)
#### Mobile reg page 
![Mobile Reg wireframe](/assets/images/wireframes/mobile-reg-page.jpg)

### Design development 

### The background image 

- The background image of this project has changed multiple times. First it started with a gradient leading from a black nav bar to a blue footer. It looked great but it didn't really hit home the theme of the quiz for me. I then found a similarly styled background (in terms of colour) that had the NFL logo in it in the middle surrounded by floodlights. This looked brilliant however due to copyright worries I decided against continuing with that backdrop. (This is also similar to the issue I had with the home button - now just a football - which was also the logo in black and white). Instead I found the image you see now of a California football stadium on Unsplash, which has free to use images. 

# Features 

## Landing & Quiz page 

![A screenshot of the welcoming message upon entering the site](/assets/images/features/welcome-shot.png)

- Above is a screenshot of the 3 key components a user will be able to see upon entering the site. Namely the title, the rules dropdown (underlined), and the button to commence the quiz. 
- The rules dropdown is also retractable so the user can hide this again if they wish in order to get the quiz started. The rules advise the user of the format of the quiz and what to expect. 
- I used an all caps font here and a bright orange that is common throughout the site to provide colour and contrast. 

![A screenshot of the nav options to get around the site](/assets/images/features/nav-options.png)

- This is a screenshot of the 3 options a user has to navigate the site, albeit only containing the two pages. As you can see, and what was mentioned earlier in the Design section, there is an American football that will bring the user home but also provides some context visually due to the nature of the site.
- There is a sharp contrast here with the black and white making it easy to see what to press. 
- As will be shown in a later screenshot, each word will be highlighted to tell you which page you are on. 

![A screenshot of the rules](/assets/images/features/rules-shot.png)

- This is a screenshot of the clickable and retractable rules menu giving the user clear instructions and what to expect within the quiz. This is a quiz that is definitely aimed at those with at least some knowledge of the sport as the layout of divisions can be bewildering to a newcomer, however as mentioned in Future Implementations, there is definitely scope her to expand this to explain the NFL system. 

![A screenshot of the next screen to choose difficulty](/assets/images/features/difficulty-choice.png)
![Screenshot of the same section but with hover](/assets/images/features/difficulty-hover.png)

- Once the user reads the rules and presses the orange "Choose difficulty" button you see in screenshot 1, they are taken to this screen. There are two screenshots above, to show it with and without the hover. 
- The orange theme as mentioned before is retained throughout, giving the user a clear visual as to which one they will be going for. This also clearly states the difference between the two types of quizzes, with one being alot more rapid than the other. This also provides a greater challenge to the user if they wish to commence with it.

![Screenshot of the quiz window with timer and progress](/assets/images/features/quiz-with-timer-and-question-no.png)

- The user will begin the quiz immediately, with the numbers in the top left incrementing with each passing question, and the timer continuously going at the bottom. The timer resets with every question. 
- As noted in the bugs section, there is no longer an ability to spam the questions as was the case pre-bug. So once you press an answer, it will also move on to the next question and you are locked in. Again the orange hover is in effect here. 

![Screenshot of the quiz saying you were wrong](/assets/images/features/quiz-wrong.png)
![Screenshot of the quiz saying you were right](/assets/images/features/quiz-correct.png)

- The two screenshots above highlight the quiz' ability to tell you whether you have selected correctly or not. The quiz does not offer a summary at the end of the quiz to tell you which was right and wrong as per design. 
- There are 16 questions for the user to answer as each question has two teams in it, and currently the NFL has 32 teams in it. 

![Screenshot of the quiz message received depending on score](/assets/images/features/results-message.png)

- This screenshot is an example of the message you get when you 100% the quiz, however there are multiple messages you can receive depending on how well you have done.
- All options come with a retry button that will take you back to the **Choose difficulty** screen by design, not back to the rules screen. This is because the user will have already looked at those and saves time should they want to have another go. 
- Most of the messages under 100% have some humour in them and have cultural references to special moments in NFL history.

![Screenshot of the registration form to sign up](/assets/images/features/active-upcoming-reg.png)

- This screenshot shows the 'active-ness' on the "Upcoming" button in the top left, as it turns white when clicked, and the form the user is faced with upon entering this page. 
- Again the contrast is sharp, with an American football style background in the form of a football field, backdropping a black form box which retains the sharp orange to entice the user to register. 
- The design here leaves room open to enhancing the site with quizzes from different parts of the NFL, or perhaps expanding into other sports. This form would give the user an opportunity to keep informed about those. 

![Screenshot of form alerting user of empty field](/assets/images/features/reg-alert.png)

-This final screenshot shows that the form will alert the user should they forget to fill in any of the fields. Although it is only two fields, however it is still user friendly to alert the user when this happens. 

# Ideas going forward 

- In the future I think this website definitely has the scope to branch out. The NFL is the premier league for the American football sport itself, however it is now truly a global sport, and has layers domestically under and around the NFL in the US. Countries all around the world now participate in this and have their own leagues, with the UK and Germany in particular being evermore popular. Furthermore, the NFL is the endgame for players who have played this sport from when they were young. Prior to reaching the NFL, they have to go through the school and college system and play football there, too. College football is unbelievably massive in the US, some would even go as far as to say it is bigger. Some College teams have full time fans that don't necessarily have a team in the NFL - particularly popular in states that don't have an NFL team. So there is definitely room to grow.

- Furthermore it could evolve in to a multi-faceted quiz in that it covers more sports. The NBA is a very similar system and it itself has 30 teams split into East and West, although the divisions are a bit trickier. Still, I think there's a possbility there perhaps just formatted slightly different. 

- Lastly, as mentioned before, there is scope to perhaps include a pop out box of information for those who need a bit more information on the NFL divisional system. As I said previously it is definitely a quiz for those who follow the sport with at least a decent interest, however it could be a fun addition for users who just want to guess and have a bit of fun with friends on a new topic.

# Technologies used 

## Languages used 

* HTML5
* CSS3
* JavaScript 

## External Programs or Libraries Used 

* [GitHub](https://github.com)
* VS Code (new for project 2)
* [Bootstrap v5.3](https://getbootstrap.com/)
* [Font Awesome](https://fontawesome.com)
* [Google Fonts](https://fonts.google.com/)
* [Google Developer Tools](https://developer.chrome.com/docs/)
* [Am I Responsive?](https://ui.dev/amiresponsive)
* Microsoft Paint (For Wireframe mockups)
* [Google](https://google.com)
* [ChatGPT](https://chatgpt.com)

# Credits 

## Code Inspiration 

* When I decided to build a quiz I went to [YouTube](https.//youtube.com) and found [this series](https://www.youtube.com/watch?v=x9AaCfk0qh8&t=0s) of videos by [Live Blogger](https://www.youtube.com/@LiveBlogger) which really gave me some good foundational tips in how to begin this website. No code was taken directly from this video series but I watched a few of them numerous times because his approach and style to creating the site made it look so easy and stylish. 

## Content 

* This quiz is an original creation and all questions are based on my personal knowledge of the NFL. No copyrighted or external sources were used to complile the quiz content.

* All NFL team names, logo, and division names are the property of the **National Football League (NFL)** and their respective owners. This project is an **unofficial fan-made quiz** and is not affiliated with, endorsed by, or sponsored by the NFL or any of its teams. 

## Media 

* [This](https://ar.inspiredpencil.com/pictures-2023/black-and-white-american-football) is the site where I sourced the image used for the home button in the top left of the quiz and registration pages. [Direct link here](https://artpictures.club/autumn-2023.html) to just that image.

* [Here](https://unsplash.com) is the site where I sourced the image used for the background on the landing/quiz page. [Direct link here](https://unsplash.com/photos/football-field-GB9XKDZWwp0) to just that image uploaded by user [Patrick Ogilvie](https://unsplash.com/@patrickogilvie). 

* [Here](https://throwdeeppublishing.com/blogs/football-glossary/how-big-is-a-football-field-all-about-football-field-dimensions) is the source site for the NFL field picture used on the registration page. 

## Acknowledgements 

* I would like to thank my mentor Rory Patrick Sheridan for his guidance during the middle and end of this project, in particular highlighting an error thrown by my JavaScript that I wouldn't have found without him spamming the quiz answers! 

* I would like to thank my fiancee, friends and family who tested this site for me on a few different devices. Particularly the group of friends here in Aberystwyth, one of whom mentioned that one of my teams had an old name tagged to them (The Washington Commanders, once the Washington Football Team). 