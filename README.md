# florwibisono.github.io


Learning github
git add -A    to add all files to be committed
git commit    to commit
git push      to sync with online server
git status    check status - which files have been changed /to commit
git diff      show what has been changed from last commit, excl. new files


C:\Users\utter>d:

D:\>cd Desktop\PERSONAL\Website

To restore a version
git log
find the log number to restore to
D:\Desktop\PERSONAL\Website>git reset --hard ed91a57eb85522864bda2bee90432f1bb96b224f

Alt: to find an abbreviated log number
git reflog --date=iso

Overall log summary
git log --oneline