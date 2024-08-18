## WA clone
**User discovery** :  whenever user logs in it will be shown in the left chat screen -> all the users will be visible 

### Routes
* Login -> `/login` 
* Protected Route  Home -> `/`  & if not loggedIN-> redirect to login 
* Chat  -> /uniqueId
* 404 -> if not the above url -> take the user to 404 page not found

### Views : these are the screens / views visible to user at a given point of time 
* login screen
* Home Page 
* 404 Page
* Profile
* Chat view

## Features
* Ui screens  
  - [] Login \-\> google login   
  - [] Home screen  
        - [] Left sidebar (top section)
              - [] Top left profile   
                    - [ ] Profile page 
                      - [ ] details ,
                      - [ ] status 
                      - [ ] logout button
                      - [ ] DP-> (image upload)  
              - [] Top Right section 
                    - [ ] 4 static icons only one is working with dark and light mode  
        - [] Search \-\> name search  
        - [] ChatList  
            - [] user cue on -> Hover  & Selected  
            - [] User chat  
               - [] Thumbnail  
               - [] Name          
        - [] Chat screen   
              - [] Top Bar \-\> user chat  
                    - [] Last seen
                    - [] Thumbnail  
                    - [] Name 
            -[] chat screen 
                - [] left right orientation of message
                - [] type the message and click to send 
 - [] **Chat features**  
    - [] Left right orientation depending upon sender receiver 
    - [] File storage-\> image upload for profile 
    - [] Dark theme ,white theme
    - [] Scroll to last message into view whenever chat opens
                   
## Future Scope
* File Sharing ->firebase
* Groups -> firebase
* Voice calling and video calling -> one-on-one 

## Day-1
* Walkthrough
* Product Requirements
* Routing is done
* Firebase

## Day-2

* Revise 
* Protected Routes -> React-router-dom
* useEffect
* Firebase 
  * auth -> authentication[google login]

  * db -> firestore db(textual information)
  * storage -> files 
  * hosting -> application host
 




## Firebase deployemnt 
* Enable hosting by going to your firebase console's project
* go to the place where you run the react file
```bash
npm install -g firebase-tools
npm run build
```

* if deploying for first time

```bash
firebase login
```
* always
```bash
firebase init 
```
from the options 
- hosting ->
        -  optional github action : no
        - public dir : dist
        - rewrites -> no ,
        - overwrite -> no
        - single page aplication : yes

```bash
firebase deploy
```
