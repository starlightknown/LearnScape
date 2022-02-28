<h1 align="center"> 📈 LearnScape API 📈 </h1>

<img src="https://raw.githubusercontent.com/starlightknown/LearnScape/main/learnscape.gif?token=ARZODXPL47CVB33WWK76F6LBXXH32">

<a href="https://github.com/starlightknown/LearnScape"><img src="https://badges.frapsoft.com/os/v1/open-source.svg?v=103"></a>
<a href="https://github.com/starlightknown/LearnScape"><img src="https://img.shields.io/badge/Built%20by-developers%20%3C%2F%3E-0059b3"></a>
<a href="https://github.com/starlightknown/LearnScape"><img src="https://img.shields.io/static/v1.svg?label=Contributions&message=Welcome&color=yellow"></a>
<a href="https://github.com/starlightknown/"><img src="https://img.shields.io/badge/Maintained%3F-yes-brightgreen.svg?v=103"></a>

## 💡 Inspiration -
Going through the CNCF landscape and getting started with contributions gets overwhelming. We wanted to simplify the existing landscape for beginners and added a roadmap too for folks who want to learn more in the field of DevOps. 

This platform is developed such that it can guide new folks and learn concepts such as Docker and Kubernetes even if they contribute to this project because of the tools used in this project such as Docker, Datree, Alan AI, Firebase and Twilio. 

This section is the backend api of the project. The fronted/client consumes this api in order to fetch the details of the several cncf projects and their information which can be needed by the beginner.

## 🛤 Routes Available -

### 🚩 1. `/api/v1/projects` 
Gets all the projects in the database. The typical response looks like

**Example 1**
An ideal request will look like
`http://localhost:8080/api/v1/projects`

And ideal respons will look like
```json
{
    "status": "successs",
    "result": 13,
    "projects": [
        {
            "socials": {
                "website": "https://kyverno.io",
                "github": "https://github.com/kyverno/kyverno",
                "twitter": "https://twitter.com/kyverno"
            },
            "_id": "61b35a39074e61abf2b0f0d4",
            "name": "Kyverno",
            "tags": [
                "cncf-sandbox",
                "LF-project",
                "CII best practices 21%",
                "Open Source Software"
            ],
            "category": [
                "Provisioning",
                "Security and Compliance"
            ],
            "programmingLanguages": [
                "Go",
                "Shell"
            ],
            "programsInvolvement": [
                "lfx"
            ],
            "createdAt": "2021-12-10T13:46:32.929Z",
            "id": "61b35a39074e61abf2b0f0d4"
        },
        .
        .
        .
    ]
}

```

### 🚩 2. `/api/v1/projects/<project id>`
Gets specific project from large project data. The project id here is given by the database.

**Example 1**
An ideal request will look like
`http://localhost:8080/api/v1/projects/61b35a39074e61abf2b0f0d4`

And ideal respons will look like
```json
{
    "status": "success",
    "project": {
        "socials": {
            "website": "https://kyverno.io",
            "github": "https://github.com/kyverno/kyverno",
            "twitter": "https://twitter.com/kyverno"
        },
        "_id": "61b35a39074e61abf2b0f0d4",
        "name": "Kyverno",
        "tags": [
            "cncf-sandbox",
            "LF-project",
            "CII best practices 21%",
            "Open Source Software"
        ],
        "category": [
            "Provisioning",
            "Security and Compliance"
        ],
        "programmingLanguages": [
            "Go",
            "Shell"
        ],
        "programsInvolvement": [
            "lfx"
        ],
        "createdAt": "2021-12-10T13:46:32.929Z",
        "__v": 0,
        "id": "61b35a39074e61abf2b0f0d4"
    }
}
```

### 🚩 3. `/api/v1/projects?page=<page-no>&limit=<no-of projects>` 
This will give you no-of project provided in *limit* field and you can increment the page no to get the next *limit* frame data.

**Example 1**
An ideal request will look like (PAGE 1)
`http://localhost:8080/api/v1/projects?page=1&limit=5`
And ideal respons will look like
```json
{
    "status": "successs",
    "result": 5,
    "projects": [
        {
            "socials": {
                "website": "https://thanos.io/",
                "github": "https://github.com/thanos-io/thanos",
                "twitter": "https://twitter.com/ThanosMetrics"
            },
            "_id": "61b35a39074e61abf2b0f0d7",
            "name": "Prometheus",
            "tags": [
                "cncf-graduated",
                "LF-project",
                "CII best practices passing",
                "Open Source Software"
            ],
            "category": [
                "Observability and Analysis",
                "Monitoring"
            ],
            "programmingLanguages": [
                "Go",
                "TypeScript",
                "Jsonnet"
            ],
            "programsInvolvement": [
                "gsoc",
                "lfx"
            ],
            "createdAt": "2021-12-10T13:46:32.929Z",
            "id": "61b35a39074e61abf2b0f0d7"
        },
        .
        .
        .
    ]
}
```

**Example 2**
An ideal request will look like (PAGE 3)
`http://localhost:8080/api/v1/projects?page=3&limit=5`
And ideal respons will look like (As there are only 13 projects and we are showing 5 per page)
```json
{
    "status": "successs",
    "result": 3,
    "projects": [
        {
            "socials": {
                "website": "https://github.com/containernetworking",
                "github": "https://github.com/containernetworking/cni",
                "twitter": "https://twitter.com/CloudNativeFdn"
            },
            "_id": "61b35a39074e61abf2b0f0df",
            "name": "CNI",
            "tags": [
                "cncf-incubating",
                "LF-project",
                "Open Source Software",
                "CII best practices 72%"
            ],
            "category": [
                "Runtime",
                "Cloud Native Network"
            ],
            "programmingLanguages": [
                "Go",
                "Shell"
            ],
            "programsInvolvement": [],
            "createdAt": "2021-12-10T13:46:32.929Z",
            "id": "61b35a39074e61abf2b0f0df"
        },
        .
        .
        .
    ]
}
```

### 🚩 4. `api/v1/projects?fields=name` 
This will give all *names* of the projects. It will exclude all other fields in the object

**Example 1**
An ideal request will look like 
`http://localhost:8080/api/v1/projects?fields=name`
And ideal respons will look like 
```json
{
    "status": "successs",
    "result": 13,
    "projects": [
        {
            "_id": "61b35a39074e61abf2b0f0d4",
            "name": "Kyverno",
            "id": "61b35a39074e61abf2b0f0d4"
        },
        {
            "_id": "61b35a39074e61abf2b0f0d3",
            "name": "TiKV",
            "id": "61b35a39074e61abf2b0f0d3"
        },
        {
            "_id": "61b35a39074e61abf2b0f0d6",
            "name": "Thanos",
            "id": "61b35a39074e61abf2b0f0d6"
        },
        .
        .
        .
    ]
}
```

**Example 2**
An ideal request will look like 
`http://localhost:8080/api/v1/projects?fields=category`
And ideal respons will look like 
```json
{
    "status": "successs",
    "result": 13,
    "projects": [
        {
            "_id": "61b35a39074e61abf2b0f0d4",
            "category": [
                "Provisioning",
                "Security and Compliance"
            ],
            "id": "61b35a39074e61abf2b0f0d4"
        },
        {
            "_id": "61b35a39074e61abf2b0f0d3",
            "category": [
                "App Definition and Development",
                "Database"
            ],
            "id": "61b35a39074e61abf2b0f0d3"
        },
        {
            "_id": "61b35a39074e61abf2b0f0d6",
            "category": [
                "Observability and Analysis",
                "Monitoring"
            ],
            "id": "61b35a39074e61abf2b0f0d6"
        },
        .
        .
        .
    ]
}
```

## 🙌 Want to contribute?
If you would like to contribute to this api please go ahead and read [COC](../CODE_OF_CONDUCT.md) and [Contributing Guideline](../CONTRIBUTING.md). Once you read through them agree to policies of this project go ahead with **Project setup & Contribution** steps below

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

