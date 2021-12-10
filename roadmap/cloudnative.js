// Use this sample to create your own voice commands
intent('(hello|hi|hey there|hey|hey sky)', p => {
    p.play('(Hi, this is Sky, your LearnScape voice assistant!)');
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
