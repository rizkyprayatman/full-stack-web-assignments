# 02 Git Branch

Link Repository : https://github.com/rizkyprayatman/git-branch

Berikut langkah yang dilakukan

1. mkdir rizkyprayatman <br>
   cd rizkyprayatman
2. touch README.md <br>
   nano README.md
3. git init <br>
   git add README.md <br>
   git commit -m "Inisialisasi Git Repository" <br>
4. git branch "cv" <br>
5. git checkout cv <br>
   touch cv.txt <br>
   nano cv.txt <br>
   git add . <br>
6. git commit -m "Inisialisasi CV" <br>
7. nano cv.txt <br>
   git add . <br>
   git commit -m "add perusahaan <br>
   pertama" <br>
   nano cv.txt <br>
   git add . <br>
   git commit -m "add perusahaan <br>
   kedua" <br>
   nano cv.txt <br>
   git add . <br>
   git commit -m "add perusahaan <br>
   ketiga" <br>
8. git checkout master <br>
9. nano README.md <br>
   git add . <br>
   git commit -m "add perusahaan pertama" <br>
10. git merge cv <br>
11. git remote add origin https://github.com/rizkyprayatman/git-branch.git
    <br>
    git push -u origin master <br>

## Screenshoot Terminal

<br>
<img src="img-a.png" alt="image-git-branch">
