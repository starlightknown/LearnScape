import React, {Component} from 'react'
import 'roadmap/style.css'

function Roadmap() {
      return (
        <div>
          <meta charSet="UTF-8" />
          <title>LearnScape</title>
          <link rel="stylesheet" href="./roadmap/style.css" />
          <div className="alan-btn" />
          {/* partial:index.partial.html */}
          <section className="intro">
            <div className="container">
              <h1>Roadmap to DevOps ↓</h1>
            </div>
          </section>
          <section className="timeline">
            <ul>
              <li>
                <div>
                  <time>Step 1</time> choose your programming language such as python, go, rust, ruby, node js
                </div>
              </li>
              <li>
                <div>
                  <time>Step 2</time> Understanding of Linux &amp; OS Concepts
                </div>
              </li>
              <li>
                <div>
                  <time>Step 3</time> Knowledge of Software Configuration &amp; Deployment
                </div>
              </li>
              <li>
                <div>
                  <time>Step 4</time> Infrastructure as Code lets you manage your IT infrastructure using the configuration files such as Azure Resource Manager, Terraform, SaltStack
                </div>
              </li>
              <li>
                <div>
                  <time>Step 5</time> The understanding of Continuous Integration/Continuous Delivery (CI/CD) such as Jenkins, CircleCI, GitLab
                </div>
              </li>
              <li>
                <div>
                  <time>Step 6</time> have a knowledge of networking concepts to manage the IT workflow.
                </div>
              </li>
              <li>
                <div>
                  <time>Step 7</time> you’re required to get yourself armed with various DevOps tools like Git, Docker, Chef, Puppet, Ansible, etc. Also, it is very crucial for the DevOps professional to collect the feedbacks and implement the changes at the earliest.
                </div>
              </li>
              <li>
                <div>
                  <time>Step 8</time> it becomes necessary for DevOps professionals to learn about Cloud Services and Providers
                </div>
              </li>
            </ul>
          </section>
          {/* partial */}
        </div>
      );
    }

  export default Roadmap;