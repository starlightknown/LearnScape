// Use this sample to create your own voice commands
visualHints('Say "what is meant by devops?"',
           'Say "hey sky"');
intent('(hello|hi|hey there|hey|hey sky)', p => {
    p.play('(Hi, this is Sky, your LearnScape voice assistant!I will try my best to answer your questions about DevOps)');
});
intent('What is Meant by DevOps?', p => {
    p.play('(The term DevOps is simply dev from development + ops from operations. So it is about combining the development of an application or service with the operations tasks of supporting it.)');
});
intent('(Does DevOps Need Coding?|Is coding knowledge required?|How do you Get into DevOps?)', p => {
    p.play('(Yes. Usually. Applications deliver what the code tells them to. Without the code, there is no application.|You get and demonstrate the skills needed. DevOps is about a silo free and collaborative approach to designing, building, testing, delivering, supporting, and improving IT applications and IT services. )');
});
intent('(Is DevOps Hard?|Is DevOps Easy to Learn?|Is DevOps Technical?)', p => {
    p.play('(Yes, no, it depends. It is no harder and no easier than any other new way of workingmoving into a DevOps environment will feel different, and that can be hard.|DevOps is easy to learn, but not always quick to master.|DevOps is an IT approach – about creating and supporting applications to help the business. That inevitably means creating IT code)');
});
intent('What is DevOps AWS?', p => {
    p.play('(AWS – Amazon Web Services – is a cloud computing service provider. One of the biggest and most successful, delivering full function software as a service platform. It runs things for you, so you don’t have to.)');
});
intent('is there a roadmap?','how to get started?','what is the way?','any guidance to start?','where to start?', p => {
    p.play('(Would you like to see the roadmap or projects to contribute?)');
    p.then(showprojects);
});

let showprojects = context(() => {
    follow("(probably|)$(ANSWER yes|sure|no)", p => {
        let answer = p.ANSWER.value;
        if (['yes', 'sure'].indexOf(answer) >= 0) {
            p.play({command: 'show-projects'}); 
            p.play("let's get you started");
            p.play({command: 'highlightItem', data:{item: 'programminglang'}});
            p.play("choose your programming language such as python, go, rust, ruby, node js");
            p.play({command: 'highlightItem', data:{item: 'linuxconcepts'}});
            p.play("Understanding of Linux & OS Concepts");
            p.play({command: 'highlightItem', data:{item: 'deployment'}});
            p.play("Knowledge of Software Configuration & Deployment");
            p.play({command: 'highlightItem', data:{item: 'infrastructure'}});
            p.play(" Infrastructure as Code lets you manage your IT infrastructure using the configuration files such as Azure Resource Manager, Terraform, SaltStack");
            p.play({command: 'highlightItem', data:{item: 'ci'}});
            p.play("The understanding of Continuous Integration/Continuous Delivery (CI/CD) such as Jenkins, CircleCI, GitLab");
            p.play({command: 'highlightItem', data:{item: 'networking'}});
            p.play("have a knowledge of networking concepts to manage the IT workflow. ");
            p.play({command: 'highlightItem', data:{item: 'tools'}});
            p.play("you’re required to get yourself armed with various DevOps tools like Git, Docker, Chef, Puppet, Ansible, etc. Also, it is very crucial for the DevOps professional to collect the feedbacks and implement the changes at the earliest.");
            p.play({command: 'highlightItem', data:{item: 'cloud'}});
            p.play(" it becomes necessary for DevOps professionals to learn about Cloud Services and Providers");
        } else if (answer === 'no') {
            p.play("we look forward to help you next time!")
        }
    })
});


