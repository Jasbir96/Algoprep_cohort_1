## **What is DevOps?**
DevOps is a set of practices that combines 
* software development (**Dev**)  -> write the code
* IT operations (**Ops**)  -> who deliver
* shorten the development lifecycle while delivering high-quality software.
* It focuses on automation, collaboration, and continuous integration/continuous delivery (CI/CD).





## How real software development is done (High level)
0. Requirement Gathering : 
   1. Edtech : algoprep : 
      1. Landing page , course landing pages 
      2. community, 
      3. course listing,
      4.  course editing, 
      5.  course view 
   2. Product : requirement , Designer : figma file , funtionlaity description
   3. One product : is build using multiple people/teams

1. **Feature request/bug fix** : Requirement is provided features :`Jira ticket` : development tracking  (politics tool)
2. `Development` : 
   1. you write the code , 
   2. you also write test cases , 
   3. push your code to your repository
3. `Build`: Create builds of the application. your code become production ready . You are also 
able to check if there are not run-time .
4. `Test` : unit test cases -> execute
5. `Release` : deploy your code in a particular enviornment 
   1. env: 
      1. local/dev : local machine
      2. `stage` : server that is accessible to developer for checking how things will look upon deployment
      3. `test/QA` : manual tester, 
         1. automation tester : end to end test : to mirror actual user behaviour 
      4. `pre-prod`:  that has all the thing mirroring actual condition end user
6. **Deploy:** Deploy the application on the prod : deploy on the server, prod the url thorugh which the end user can access the code
7.  **Monitor** : Monitor and manage the application.
    1.  error logging : error is encoutered (Sentry)
    2.  performance : perf(auditzy)
    3.  user tracking : GTM 
    4.  user hotmap : where user intercats the the most
    5.   api errors 
**8** . Feature request / Feature update / bug fixes


## Detailed view of each step
2. **Develop**: Accordian
   1. how to make sure a multiple features can be developed parallely ??
      **ans** :  you create feature / bug branch and develop your feature there 
   2. how to make sure the  `husky` : **pre** commit validator  : all the commands you it will execute
      1. code you wrote is running will it also run if released : `npm run build`
       3. readable : format `npm run format`
      3. follow code standards,  `npm run lint`
         1. you are not writing any potenitially buggy code : 
            1. eval, var, unused variables X
         2. some rules : styling
   3. you have completed all the feature requirement : `npm run test` 
      1. Jest , react testing library
3. **Build** :  Create builds of the application. `github action` (continous integration)
   1. code push -> deploy apne code
   2. PR : approve allow to merge  to development 
4. **Test:** Run automated tests. : unit test  that you wrote are  there during the build process
5. **Release:** Developer can push the build to a `staging , test , pre-prod ,  production 
   1. These environments information can easily be mirrored using `docker`
   2. `AWS` , GCP : cloud provie -> server me docker container







    
   







