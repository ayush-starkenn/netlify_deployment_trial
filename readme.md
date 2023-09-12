Purpose of this project:-
To understand the basics of the CI/CD pipeline using the github actions.
In this project we created a basic notes app where you can add the notes only. Also in this project we didn't focused on the detailing of the UI.

---

What You will learn in this project:-

1. clone the basic App
2. App contains React, Node, Express and MongoDb.
3. You will have to create a docker hub account
4. Then You will have to install the docker desktop.
5. Now write the seperate files for the frontend and backend Dockerfile.
6. Kindly provide the appropriate directory.
7. Now build the images with command
   cd mkdir....
   docker build -t image_name .
8. Once the build will be successfull then we will create a docker-compose file to bound the frontend and backend images together and host them on netlify.
9. Try to fix the issues you are getting in the docker-compose.yml
10. Next process is to create the .github/workflows/pipeline.yml
11. In this file we will write the code of our CI/CD pipeline.
12. Don't provide the wrong context of the directory at any point.
13. When calling the docker build don't forget to apply . in the end.
14. Don't forget to checkout after every steps.

---

Errors I got and their solutions:

1. Build and push backend Image to Docker hub ?

   Solution:- So the reason behind this is that you haven't loggedin to the docker hub and created a image over there of your backend. As we already discussed that you have to push you image to the docker hub

   cmd :- docker build -t link_of_dockerhub_repo:tag_any_different_name .

   this command will help you to resolve this error

---

2. You had provided the correct path of your docker-compose.yml but it's still not working correctly ?

error:- Run cd ..
.FileNotFoundError: [Errno 2] No such file or directory: './docker-compose.yml'
Error: Process completed with exit code 1.

solution:- So if you got this error means you haven't read the above stpes to do the code. As I already told to checkout@v2 at every step of the code. Cause this will take you back to the root of the repo. cd / won't work here. So just add this line after every step:

cmd:- - name: Checkout code
uses: actions/checkout@v2

---

Thank You.
