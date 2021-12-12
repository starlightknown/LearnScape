const { getAllProjects } = require("./api/controllers/projectsController")

var request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'api/controllers/projectsController,js', true)

request.onload = function () {
  // Begin accessing JSON data here
}

// Send request
request.send()
var data = JSON.parse(this.response)

data.forEach(getAllProjects => {
  // Log each movie's title
  console.log(getAllProjects)
})