# LearnScape API

## Routes Available

`/api/v1/projects` - Gets all the projects in the database
`/api/v1/projects/<project id>` - Gets specific project from large project data
`/api/v1/projects?page=1&limit=<no-of projects>` - Will give you no-of project provided in *limit* field and you can progress in page. Eg: if there are 20 project you set limit to *10* so for *page=1* will give first 10 results and *page=2* will give you next 10 results
`api/v1/projects?fields=name` - Will give all *names* of the projects.