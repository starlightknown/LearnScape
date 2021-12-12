<h1 align="center"> 📈 LearnScape API 📈 </h1>

<img src="https://raw.githubusercontent.com/starlightknown/LearnScape/main/learnscape.gif?token=ARZODXPL47CVB33WWK76F6LBXXH32">

<a href="https://github.com/starlightknown/LearnScape"><img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103"></a>
<a href="https://github.com/starlightknown/LearnScape"><img src="https://img.shields.io/badge/Built%20by-developers%20%3C%2F%3E-0059b3"></a>
<a href="https://github.com/starlightknown/LearnScape"><img src="https://img.shields.io/static/v1.svg?label=Contributions&message=Welcome&color=yellow"></a>
<a href="https://github.com/starlightknown/"><img src="https://img.shields.io/badge/Maintained%3F-yes-brightgreen.svg?v=103"></a>

## 💡 Inspiration -
Going through the CNCF landscape and getting started with contributions gets overwhelming. We wanted to simplify the existing landscape for beginners and added a roadmap too for folks who want to learn more in the field of DevOps. 

This platform is developed such that it can guide new folks and learn concepts such as Docker and Kubernetes even if they contribute to this project because of the tools used in this project such as Docker, Datree, Alan AI, Firebase and Twilio. 

This section is the backend/ api of the project. The fronted/client consumes this api in order to fetch the details of the several cncf projects and their information which can be needed by the beginner.

## Routes Available

- `/api/v1/projects` - Gets all the projects in the database
- `/api/v1/projects/<project id>` - Gets specific project from large project data
- `/api/v1/projects?page=1&limit=<no-of projects>` - Will give you no-of project provided in *limit* field and you can progress in page. Eg: if there are 20 project you set limit to *10* so for *page=1* will give first 10 results and *page=2* will give you next 10 results
- `api/v1/projects?fields=name` - Will give all *names* of the projects.