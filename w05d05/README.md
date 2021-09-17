# W05D05 - Mid-term Project Kickoff

### Outcomes
* use all the things we learned
* real time experience
* work in a team environment

### Pick a project

### User Stories
* outlines how a user will interact with our app
* As a ______, I can _____, because _______

* As a logged in user, I can favourite a blog post, because I want to review it later AND the heart icon turns red

* As a non-logged in user, I cannot edit the pins on a map, because they don't belong to me

### Create a planning directory
* user-stories.md

### Pick out the nouns
* nouns === entities === tables
* create the ERD

### Clients can interact with the data
* Routes

B GET   /dinosaurs
R GET   /dinosaurs/:id
E POST  /dinosaurs/:id
A POST  /dinosaurs
D POST  /dinosaurs/:id/delete

B GET     /dinosaurs
R GET     /dinosaurs/:id
E PATCH   /dinosaurs/:id
A POST    /dinosaurs
D DELETE  /dinosaurs/:id

### MVP
* Minimum viable product
* minimum amount of features that a user will find useful
* @KV Minimum Viable Demo (MVD)
* minimum amount of features that we can demo in 5 minutes
* If you're not going to demo it, DON'T BUILD IT

### Client/Wireframes or Mockups
* Figma, Balsamiq, Moqups, pen and paper


requirements => user stories => ERD => routes => wireframes

### User Login
* don't do it

```js
// GET /login/:user_id
// localhost:3000/login/2
app.get('/login/:user_id', (req, res) => {
  // cookie-session
  req.session.user_id = req.params.user_id;

  // cookie-parser
  res.cookie('user_id', req.params.user_id);

  // send the user somewhere
  res.redirect('/');
});
```

### Tech Choices
* Back end - Node, Express, Postgres
* Front end - HTML, CSS, JS, jQuery, bootstrap, SCSS

### SPA vs Multi-page
* these are not mutually exclusive

### Git
* where to merge? cloud? locally?

Local Merge
1. create a branch
2. code and commit on the branch

3. checkout master
4. pull the latest master
5. merge master into your branch (optional)

5. merge your local branch into master
6. push to github
7. notify the rest of the team

Cloud Merge
1. create a branch
2. code and commit
3. push the branch to github

4. go to github
5. open a pull request (PR)
6. merge the pull request

7. notify the team
8. checkout master
9. pull the latest master

### I WILL NOT CODE ON MASTER
* this is how projects break

### Splitting up the work
* Vertically - everyone is working on a diff piece of the stack
* Horizontally - everyone working on the same layer
* Pair Programming

### Communication
* just do it










