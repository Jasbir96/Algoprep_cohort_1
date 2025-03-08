**log**
  * modifier : git log --online  

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

### Deletion of a commit
* Delete commits while keeping the content : `git reset HEAD~<noofcommits> --soft`
* Delete commits without keeping the content : `git reset HEAD~<noofcommits> --hard` 
**Note** : Possible ways to recover changes
* you take the changes from another branch : by taking a pull
* you can use `reflog` to access changes made by recent commands 
## Branching 
* create and switch to a branch  : `git checkout -b <branch-name>`
* push a code  to a branch
