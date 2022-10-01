### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
 It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.

- What is a single page application?
  SPA is a web app implementation that loads only a single web document, and then updates the body content of that single document via JavaScript APIs such as XMLHttpRequest and Fetch when different content is to be shown.

- What are some differences between client side and server side routing?
  The difference between this two routing have been stated above server sides needs to keep making requests to the server in order for the application to rerender, but client side does not need to keep make request to the server, it just does it once when the application is being loaded into the browser any other navigation or page change is just being rendered from the already saved application, so a client side application can still function without the internet as long as it has already being loaded in with the internet.

- What are two ways of handling redirects with React Router? When would you use each?
  Using the History API and Redirect Component.
  
When using history. push() method, the JSX in your return statement can still mount and run, whereas returning Redirect can block the rest of your code.


- What are two different ways to handle page-not-found user experiences using React Router? 
  Specify exact route for 404 page or use Switch component and when the User go to path which doesn't exist in the Switch component display 404 page.

- How do you grab URL parameters from within a component using React Router?
- using useParams() hook

- What is context in React? When would you use it?
 React Context is a method to pass props from parent to child component(s).

- Describe some differences between class-based components and function
  components in React.
  A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). A class component requires you to extend from React. Component and create a render function which returns a React element.
  Functional Components are a lot easier and more flexible then class based components.

- What are some of the problems that hooks were designed to solve?
  It revolutionizes the way you write components.
You can write concise and clearer code.
Hooks are simpler to work with and test. ...
A related logic could be tightly coupled inside a custom hook.
It simplifies how to make code more composable and reusable.