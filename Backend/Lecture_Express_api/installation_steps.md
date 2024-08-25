## Steps
* Open terminal in the folder where you have your server


```bash
npm init -y 
npm i express
npm i --save-dev nodemon
````
* to use nodemon -> go to package.json and inside the scripts add
 this line  

 ```json
 "scripts": {
    "start":"npx nodemon index.js"
  }
 ```

