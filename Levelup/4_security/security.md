## Agenda 
* Golden priciples of security
* Backend security
  * How to store Password
  * How to limit access to users(Rate limiting)
  * DB attacks
  * revealing least amount of info
* Frontend security
  * cross side scripting 
* Common Problem : saving sensitive info leak

### Principles
* `Zero Trust Model` :  
  * assume that no one (neither inside nor outside the network) is trustworthy. This means always verifying the authenticity of users, services, and systems before granting access to resources. 
    Example : 
      * santaize input
       *  authentication : protectRoute Middleware 
       *  make cookies secure
       *  hide sensistive data 
       *  password hashing,
    
* `Principle of Least Privilege`: "Minimal Access for Maximum Security”
Ex : `authorization`(Role based access control)
* `Reduce Attack Surface`: 
  * rate limiting  : regulate amount of acces by user/ ip address 
  * network limit  : DB 

Ex : setting headers to minimize amount of info about your server to be leaked

## Backend
* Your own service> data compromise
* protectroute :like middleware for perevnting unauthorized access
* sanatize your incoming request that may contain -> malicious queries : `mongo sanatize`
* Hiding all the senstive info
  * tokens should now be revealed  -> env
  * hiding the info about your server -> `helmet`
## common  
###  do not reveal the token like any api key  : firebase, open ai key 
  * How it could hidden : create .env and access you variables from there and make sure the env is added to gitignore
  * How it get's revealed : directly plugged that into you code , you added that env in a commit 
###  How to  remove that from git 
* if it's first commit ->  recreate the repo
* if it is a recent commit : revert your commit  redo the commit after adding it gitginore
* remove a file from git history if there are lot of commit  : 
 * `git filter-branch --index-filter 'git rm -rf --cached --ignore-unmatch path_to_file' HEAD` 
`Best Practice` : https://www.smashingmagazine.com/2023/05/safest-way-hide-api-keys-react/


### How to store the password 
* **secure your DB** : by restricting acces 
  * from only alowed ip addresses : server hi access
  * create different user with diffrent previlages 
* **Storing of password**
**Option**
1.  encrypt the pasword : 
  * convert a passowrd text into -> a absurd non understandble string 
  but there is an issue

**How to break encryption** : dictionary of common password : hash them and compare those hash with the store password 

2. creating a random `hash` for a given input everytime  and make it time taking  : `bcrypt`   

bcrypt : https://blog.logrocket.com/password-hashing-node-js-bcrypt/

### top 10 vulnerabilities  : https://www.cloudflare.com/en-gb/learning/security/threats/owasp-top-10/


### DDOs attack 
* **Denial of service** : is a type of cyber attack where the attacker aims to make a website or online service unavailable to its users
* **Distributed Denial of service attack** : is a atype a cyber where a lot of device hit on a website or online service and make it available  : you need to buy a service : cloud flare , aws : application firewall

