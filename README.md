<h1 align="center"> 📈 LearnScape 📈 </h1>

### Check it out :- http://too-hungry-to.study/

<img src="https://raw.githubusercontent.com/starlightknown/LearnScape/main/learnscape.gif?token=ARZODXPL47CVB33WWK76F6LBXXH32">

<a href="https://github.com/starlightknown/LearnScape"><img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103"></a>
<a href="https://github.com/starlightknown/LearnScape"><img src="https://img.shields.io/badge/Built%20by-developers%20%3C%2F%3E-0059b3"></a>
<a href="https://github.com/starlightknown/LearnScape"><img src="https://img.shields.io/static/v1.svg?label=Contributions&message=Welcome&color=yellow"></a>
<a href="https://github.com/starlightknown/"><img src="https://img.shields.io/badge/Maintained%3F-yes-brightgreen.svg?v=103"></a>
## Cloud Native Hackathon Winner
![badge](https://user-images.githubusercontent.com/74637789/158756247-2bfcf77a-e600-4e24-920a-24181fd05ed6.png)
<!-- 
Table of Contents
=================

  * [Installation](#installation)
  * [Inspiration](#Inspiration)
  * [Use Case](#usecase)
  * [Contribute](#project-setup--contribution-steps)
  * [License](#license) -->

### Installation

In the project directory, you can run:

### `npm install`
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### View the [Backend API Documentation](https://github.com/starlightknown/LearnScape/tree/main/api#-1-apiv1projects) 

### Watch the Demo Video [Here](https://youtu.be/qnANd96XYH4)

## Inspiration
Going through the CNCF landscape and getting started with contributions gets overwhelming. We wanted to simplify the existing landscape for beginners and added a roadmap too for folks who want to learn more in the field of DevOps. 

This platform is developed such that it can guide new folks and learn concepts such as Docker and Kubernetes even if they contribute to this project because of the tools used in this project such as Docker, Datree, Alan AI, Firebase, getstream.io and Twilio. 

<div id="#usecase">

## ⚙ What it does - 
- Simplified CNCF LandScape where you can filter, search projects to contribute according to your tech stack
- Get your questions answered about DevOps by Alan AI
- Get your own personalised roadmap to reach your goal of DevOps
- Twilio will alert the project admins if there occurs any error in the server and server is about to shut down
- Get your brains working and join, network with other contributors of CNCF in the chat channel powered by getstream.io
</div>

## 🔧 How we built it-
1. Developed an API to get all the projects in the database and specific project from large project data. The project id is given by the database. This API will also give you number of project provided in limit field and you can increment the page no to get the next limit frame data along all names of the projects. Check out the documentation of API [here](https://github.com/starlightknown/LearnScape/tree/main/api)
2. The fronted/client consumes this api in order to fetch the details of the several cncf projects and their information which can be needed by the beginner.
3. We used **Alan AI** to develop a DevOps FAQ and roadmap section which could guide beginners on how to get started. Check out the Alan assistant implemented [here](https://github.com/starlightknown/LearnScape/tree/main/client/public/roadmap)
4. For folks to get more involved and carry the conversations on the platform itself we used **getstream.io** to created a [messaging channel](https://github.com/starlightknown/LearnScape/tree/main/client/public/stream-cncfchat) where you could ask anything related to CNCF. 
5. Want to escape the chaos caused by server failure? Yes we can! by the use of **Twilio**. We used it to get notifications before a server goes down.
```js function serverDownAlerts() {
	//Twillio function here

    client.messages
      .create({
         body: 'App crashing!!',
         from: '+15017122661',
         to: process.env.DEST_NUMBER
       })
      .then(message => console.log(message.sid));
}
```
7. Used **Datree** While starting the configuration it's essential to make sure that there is name specified for the deployment.Not having this might not raise errors by the native development kits (kubectl etc) but naming the deployment configurations while working with several clusters in a team is essential and cosidered a good practice.
8. Used **Google Dev Library's Firebase** to host the react app. 

## 💪 Challenges we ran into -
We could not properly implement the API to frontend because of time constrictions and we tried to make use of each and every tool in a creative and unique way possible. This project has still lot of potential and improvements to make. 

## 📌 Accomplishments that we're proud of -
<img src="/screenshots/cli.png?raw=true">
Although we were not familiar with most of the tools and tech we used to build it, we tried and learned on the go to make it possible.

## 📚 What we learned -
We learnt about react and how to make use of all the tools according to the use case of our project even if they were different and sometimes caused a lot of trouble.

## ⏭ What's next for -
Proper implementation of frontend to get all the projects from the API. 


## 🙌 Want to contribute?
If you would like to contribute to this api please go ahead and read [COC](/CODE_OF_CONDUCT.md) and [Contributing Guideline](/CONTRIBUTING.md). Once you read through them agree to policies of this project go ahead with **Project setup & Contribution** steps below

### Pre-requisites

1. NodeJs installed in local environment.
2. Git installed in local environment.
3. GitHub account.

### Project setup & Contribution steps

1. Fork the project
![forking the project](https://i.imgur.com/qbVouuV.png)

2. Once you are in your fork the url should look something like
`https://github.com/<YOUR-USERNAME>/LearnScape/`

3. Go to preferred folder in your computer and paste the following command (Only one of it if you don't have ssh setup then go with HTTP command)
   - HTTP
   `git clone https://github.com/<YOUR-USERNAME>/LearnScape.git`
   - SSH
   `git clone git@github.com:<YOUR-USERNAME>/LearnScape.git`

4. Now enter the folder by running the following command
`cd LearnScape/api`

5. Now you are in the `/api` folder

6. Now do ahead and create a new branch and move to the branch
`git checkout -b fix-issue-<ISSUE-NUMBER>`

7. Now run `npm i` and once it's done do your fixes and changes.

8. After done you can now push this changes. for doing that follow the following command chain
   - `git status` (Shows the changed files)
   - `git add .` (Will add all the files to staging area)
   - `git commit -m "feat/docs/fix: :emoji-name: <EXPLAIN-YOUR_CHANGES>"`
   - `git push origin fix-issue-<ISSUE-NUMBER>`

9. After this go to your forked GitHub repository and go to `Pull Request` section. Now you might be able to see a pop up saying **Pull Request**. Click on the popup and you will be redirected to pull request page

10. Now fill in the form template of the pull request

11. Click on **Submit**

12. Hurrey! You just did your contribution to this project 🎉

