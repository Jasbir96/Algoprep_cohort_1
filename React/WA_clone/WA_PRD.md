## WA clone

**User discovery** :  whenever user logs in it will be shown in the left chat screen -> all the users will be visible 

## Routes
* Login -> `/login` 
* Protected Route  Home -> `/`  & if not loggedIN-> redirect to login 
* Chat  -> /uniqueId
* 404 -> if not the above url -> take the user to 404 page not found


## Views
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
* VOice calling and video calling -> one-on-one 





## Day-1
* Routing is done
* Pending : Protected Routes