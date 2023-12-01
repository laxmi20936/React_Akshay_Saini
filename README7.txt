useEffect has 2 arguments
1: callback function
2: dependency array

if useEffect has no dependency array:
useEffect(()=>{})   => If no dependency array, useEffect will be called on 
every render.

if useEffect has empty dependency array:
useEffect(()=>{}, [])   => If dependency array is empty, useEffect will be called only
after initial render(just once).

if dependency Array as sometime in it:
useEffect(()=>{}, [ip])  => useEffect will be called everytime when ip is updated

Rules of hooks:
hooks must be called inside the component.
useState gives us local state variables inside a component.
always try to keep hooks on the top.
dont try to use hooks(useState) inside a if-else/for loop condition or function

===================================================================================
createBrowserRouter => configuration for routing
RouterProvider (router)=> Provides router configuration to the app
errorElement (useRouteError)
Nested route(children)
In outlet all the children will go based on the route.
usrParams --> hook

IMP: Don't use anchor tag to navigate to the next page because it
will reload the whole page.

Link is a wrapper over anchor tag.React-router-dom keeps track of link component and 
will not reload the page.
We can navigate to a new page without loading the page(using react-router) (Link comp)
Link component is same as anchor tag only difference is we have to="/about" attribute
instead of href ="/about" 
Header component will not be reloaded (stay intact) only Outlet component 
will change
Anchor tag will reload the whole page while Link component will not reload the whole
page, but only refreshes/replace/interchange the component (outlet)
Here come SPA into picture.
 ===========================================================================
                          SPA
Earlier when we navigate to other page(about us page) then the whole page used to reload.
Now in react-routeer we are not reloading the whole page but interchanging the 
components.We are implementing CLient Side Routing.

 ================================Two types of routing in Web App==============
 
 Server Side Routing- When we click on About us then it reload the whole page 
 makes a network call to the server and  fetches (about Us.html )then render on the 
 web page. AboutUs, ContactUs page will come from server and reloads the page

Client Side Routing - In react we have client side routing. Here in CSR we are not
making any network call while navigation from one page to another. 
When we load the Home page all the components are already loaded into our app.
aboutUs and all other nav components are loaded.
While navigating to AboutUs it just loads aboutUs page , it will not make any network call

===========================Dynamic Routing ================================
useParams hook


============================================Assignment=====================================
1) What are the  various ways  to add images to our app? Explain with code examples
1st way: Importing Images:
Import the image at the top of your component file using import.
Use the imported variable as the src attribute in the img tag. (used to do in Titan).

import React from 'react';
import myImage from './path/to/image.jpg';

function MyComponent() {
  return <img src={myImage} alt="Description" />;
--------------------------------------------------------------------
2nd way: Using Public Folder:

Place your images in the public folder of your React app.
Reference the image using its relative path from the public folder.

function MyComponent() {
  return <img src="/images/image.jpg" alt="Description" />;
}
--------------------------------------------------------------------------
3rd way:Use require for dynamic imports.

function MyComponent() {
  const imagePath = './path/to/image.jpg';
  return <img src={require(imagePath)} alt="Description" />;
}

--------------------------------------------------------------------------------
4th way:Inline Images with Data URLs:

Convert the image to a data URL using tools like Data URL Maker.
Use the data URL directly in the src attribute.

function MyComponent() {
  const imageDataUrl = 'data:image/jpeg;base64,/9j/4AAQSk...'; // Your data URL here
  return <img src={imageDataUrl} alt="Description" />;
}

--------------------------------------------------------------------------------------
5th way: CSS Background Images:
Use CSS to set background images for elements.

import React from 'react';
import './MyComponent.css';

function MyComponent() {
  return <div className="image-container"></div>;
}

css code:

.image-container {
  background-image: url('./path/to/image.jpg');
  /* Additional styling */
}

-----------------------------------------------------------------------------------------------
2) What would happen if we do console.log(useState())?
Will returns an array with two elements: the current state value and a function to update that value.
useState() will return us an array where the first element is a local state variable and the second element is the function which will update the local state variable.
If we use normal variable to update our state then we wont see any change in the DOM.
useState() hook gives us powerful state variable which we use to upadte our DOM .
------------------------------------------------------------------------------------------------
3) How will useEffect behave if we dont add a dependency array?
The second argument of useEffect is an array of dependencies, and it determines when the effect should run. If you omit the dependency array, the effect will run after every render.
If we dont add a dependency array as a second argument in useEffect function then the callback fn in useEffect will be called whenever the state variable changes or after every render.
---------------------------------------------------------------------------------------
4) What is SPA?
SPA is when the page does not reload making a network call to a server to fetch "aboutUs" when we navigate from one pg to another.
In SPAs, the content is updated dynamically as the user interacts with the application, and only the necessary data is fetched from the server while navigating and the whole page is not reloaded.

Key characteristics of SPAs include:

Single Page Loading: The initial HTML, CSS, and JavaScript are loaded once when the user first visits the application. Afterward, only data is exchanged with the server, and the content is updated dynamically without a full page reload.

Dynamic Updates: SPAs use AJAX (Asynchronous JavaScript and XML) or other technologies to update the content dynamically. This results in a smoother and more responsive user experience.

Client-Side Routing: Navigation is handled on the client side without requiring a round-trip to the server for each new page. This is typically achieved using JavaScript frameworks or libraries that manage the application's state and routing.

Improved Performance: SPAs can provide a faster user experience because they only fetch and render the data that changes, reducing the amount of data transferred between the client and server.

Rich User Interfaces: SPAs often have complex and interactive user interfaces. They can leverage client-side frameworks like React, Angular, or Vue.js to efficiently manage the UI state and update the DOM as needed.

Back-End API: SPAs are often built to interact with a back-end API (Application Programming Interface) that provides the necessary data. The front-end and back-end are decoupled, allowing for greater flexibility and scalability.

5) What is difference between Client Side Routing and Server Side Routing?

2. Page Reloads:
Client-Side Routing:
Page reloads are minimized because the browser does not need to request entire HTML pages for each navigation.
Only the necessary data is fetched, and the view is updated dynamically.

Server-Side Routing:
Each navigation typically involves a full page reload. The server generates a new HTML page based on the requested URL.
==============================================
3. Initial Page Load:
Client-Side Routing:
The initial HTML, CSS, and JavaScript are loaded once.
Subsequent navigation and updates are handled dynamically.

Server-Side Routing:
Each navigation results in a new request to the server, which generates and sends a new HTML page.
============================================================
4. Responsiveness:
Client-Side Routing:
SPAs (Single Page Applications) often use client-side routing to provide a more responsive user experience.
Changes in the application state and UI are handled without requiring a round-trip to the server.

Server-Side Routing:
Traditional web applications may have a less dynamic feel as each navigation involves a full page reload.
