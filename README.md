### PROJECT COMPLETED
![Recording 2022-02-26 at 17 18 40](https://user-images.githubusercontent.com/90358616/155864284-9f458e57-67db-45a6-8596-1ac724012184.gif)








# Module Project: Advanced Form Management - User Onboarding

## Project Description

We've seen many different styles of form management by now -- simple to complex. Today we are going to unleash your inner form-wizard! 🧙

## Instructions

### Task 1: Set Up The Project

- [ ] Start off by installing a blank React app by running `npx create-react-app <app-name> --use-npm`.
- [ ] Run `cd <app-name>` to cd into the `<app-name>` directory.
- [ ] Using `npm`, add the following as dependencies inside your React app:
  - `yup`
  - `axios`
- [ ] Create a component file called `Form.js`, import it into your `App.js` file, and place the component in your JSX there.

### Task 2: MVP

#### Create Your Advanced Form

We want to create a form to onboard a new user to our system. We need _at least_ the following pieces of information about our new user:

- [ x] Name
- [ x] Email
- [ x] Password
- [ x] Terms of Service (checkbox)
- [x ] A Submit button to send our form data to the server.

#### Implement Form Validation and Error Messaging

Form validation is one of the facets of an application that makes it feel polished and controlled from a user perspective. With that in mind, implement the following:

- [ x] Using Yup, set up _at least_ two different validations along with custom error messages that will display on screen when validation fails.

#### Make a POST Request

Being able to `POST` data is a key skill of any developer, no matter your skill level.

- [x ] Craft a `POST` request using `axios` that sends your form data to the following endpoint: _`https://reqres.in/api/users`_
- [ x] Verify using a `console.log()` that you are receiving a successful response back

(Note: For those that are curious, we're using [reqres.in](https://reqres.in/) for this assignment's API. It's a free API that allows us to simulate a `POST` request for any data that we send it. Pretty awesome!)

#### Display Returned Data to Screen

When you get your data back, you will want to do something with it, right? Let's display a list of users in our app.

- [x ] Set up a state property called `users` that is initialized with an empty array
- [x ] Every time you make a `POST` request, and get that new user data back, update your `users` state with the new user added to the array
- [ x] Render `users` in your app. You can use the html pre tag and JSON.stringify() method to display your post request.



