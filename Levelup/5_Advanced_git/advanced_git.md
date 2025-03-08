**log**
  * modifier : git log --online  
  * git status : 
  * git diff :

## undoing things

### remove from staging area : 
  * for a particular file`git restore --staged filepath`
  * for a all the  files `git restore --staged .`
### update in last commit 
  * message update : `git commit --amend -m "New commit message"`
  * change update :
```bash
 git add <file>
git commit --amend --no-edit  # Keeps the existing message
```
**Note** : it replaces the last commit with new commmit id so should used only when the last commit is not pushed to remote

### Deletion of a **commit**
* Delete commits while keeping the content : `git reset HEAD~<noofcommits> --soft`
* Delete commits without keeping the content : `git reset HEAD~<noofcommits> --hard` 
**Note** : Possible ways to recover changes
* you take the changes from another branch : by taking a pull
* you can use `reflog` to access changes made by recent commands 
## Branching 
* create and switch to a branch  : `git checkout -b <branch-name>`
* push your local commit from your branch to the  remote branch : `git push origin <branch-name>`
* rename a the current branch : `git branch -m <new-name>`
### listing of branches
* list of local branches :  `git branch`
* list of all the  branches :  `git branch -a`
* list of all the  branches remote :  `git branch`

### creating pull request
* you get the link when you push the code to remote 
* you can go to remote repo and then create  a pull request

#### Squash a commit  for a PR
0. push you code to remote of the current branch
1. soft reset till the last commit  of the barnch where you want to merge your code
2. stash your changes
3. take pull from the branch where you want to merge you changes
4. git stash pop 
5. create a new commit with all the changes
6. push the commit forcefully: `git push origin <branch-name> -f` 
  
## Stash 
* it used to store code in a completely seperate area that is not affected by nay changes 
  to any branch 
* `git stash` : store your  change into temp area
* `git stash pop` : remove the latest stash and add to staging area of your branch
* `git stash apply ` : keep the copy in stash and also add to the staging area of that branch

 

### how to rollback a commit from a branch
1. if your current branch has some  changes : `git stash` 
2. switch to that branch  form where release happend : `git checkout <branch-name>` 
3. take a pull from remote of that  branch : `git pull origin <release-branch-name>`
4. git reset soft last commit assuming you are sqaushing all the PRS changes 
5. push that change forcefully







