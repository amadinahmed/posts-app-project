# Posts App Project
This is an intermediate project which will allow for learning the basics of React by creating an app that resembles the basic functions of a social media website like [reddit.com](reddit.com). This repo contains a basic template with the proper packages, file structure, and components nescessary to add functionality to your app. However, feel free to change components, JSX, etc. as you see fit or not use this template whatsoever. Additionally, you can find an example final product I created for inspiration or check the completed branch of this repo to see how I implented certain features [(View it here)](https://glittering-youtiao-d1213c.netlify.app). To setup your workspace, simply clone this repo to your computer and run the command `npm install` to install all nescessary node modules. The command to run a dev local server is `npm run start`.

### Features in the final product
- Add a title in the very top of your app by adding an h1 element
- The user should be able to create a post via the `PostForm` component which then adds a new post to the `Posts` state
- Set the submit button's `disabled` property to `true` whenever the input is _invalid_ meaning only whitespace or entirely empty
- A post should store their writer's name, a title, text content (when working with input elements, its helpful to use a concept called [controlled components](https://reactjs.org/docs/forms.html#controlled-components))
- All posts should be able to be commented on with the `CommentForm` component, thereby adding a new comment object to the `Comments` component's state
- A comment should store the commenter's name and comment
- The whole app should only use functional components

_⚠️ Quick Tip! When working with lists of identical components being mapped from a list such as multiple `Comment` components from the `Comments` component, remember to add a unique key property for each component or else React will throw an error_

### Additional features that are encouraged
- Try to limit the ability to create infinite comment recursion
- Try adding a `Voter` component to be able to rate both posts/comments
- Try to sort the posts by votes (consider using `array.sort()`)
- Try adding the ability to edit previously made posts/comments (consider reusing the respective form components to reveal themself when the user is in "edit mode")
- Try adding the ability to insert images via url (consider creating a new component called something like `Image`)

### What is *__not__* required
- Database work; This is a single user application and therefore nothing must be saved or authenticated
- CSS is optional however default styling can sometimes be hard to look at
- External state managment tools like Redux; props passing and hooks should be enough to do the basic functions of the app

## Submiting your project
When you are finished go through the steps to host your app on Netlify. For the build command, if it is not already filled in type: `npm run build`. This will create a production build of your project for serving. Post your link when finished in the Slack channel when ready.
