You can track and manage the changes in your GitHub files.
Some commands:
git diff: It will show the actual changes made in the github files.
git restore file: It will restore the changes which were made in that file. Be careful while using this command.
git restore --staged file: It will restore the changes which were made in the files that has now been staged. This will unstage the staged file. Just that. It will not revert the actual changes made in that file. You will have to use git restore file again to revert the actual changes in those files. 