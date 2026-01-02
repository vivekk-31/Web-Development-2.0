git init: The moment this command is used, it initialises an empty git repository with that name in that folder. And how does it do that? It does by creating .git folder in that folder. Now, this folder is a hidden folder and only because of that, it is not visible to you. Now, this folder stores everything in your repo.

Now, after this, the first step is adding the file/files or folder/folders to the staging area. 
This will be done using:

git add: Adding the files or folders to the staging area. 
git add "file_name": You can either do this with each individual file. 
git add . : You can add all the files or folders present in this folder in one go.
After the files have been added, you use 
git commit -m "" : To add the message in the double quotes and push the files to GitHub and these files start getting tracked. 
git status: It will show the status of the files in this repository. The changes made in the files, the files staged and any other changes in the code. 
git log: It will show all the history of the addition and commits. 
git log --oneline: It will show all the commits in one line without the author and date and other information. Just the commit message. 