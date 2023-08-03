CDN Links:
1st link: core react
2nd link: It is a react library useful for DOM operations. 
It is like a bridge between React core and Browsers.
--------------------------
Why two CDN links --> React core and ReactDOM (Can we merge both the files in one):
No, they should be kept separately.
React not only works in Browsers but also in mobiles etc (React Native, React3D).
ReactDOM is bridge between ReactCore and Browsers. Browsers does not understand React
and cannot update DOM so we need ReactDOM 
ReactCore: children, hooks,Suspense, Fragment, Profiler
ReactDOM: render method 
----------------------------

Note: Browsers does not understand React.
-----------------------------------
createElement comes from React
createRoot comes from ReactDOM
-------------------------------------
React.createElement is an object. Render method will take this object and convert it 
into html tag and then put in inside id="root" .
-------------------------------------------
React.createElement is tedious to write and is not readable,so we use JSX;
--------------------------------------------
NOTE: 
Ex: <div id="root> LAXMI WAGHMORE </div>
root.render(heading)
------------O/p> LAXMI WAGHMORE will be replaced by heading

Ex: <div>I am on top of root</div>
<div id="root> LAXMI WAGHMORE </div>
root.render(heading)
-------------O/p> div(top of root) will be appended but LAXMI WAGHMORE will be replaced
---------------------------------------------------------------

From above examples we can say that react can we used in Header/FOOTER/SideBar.
In existing applications as well we can use React by creating a root and put our 
code insode root.
-------------------------------------------------------------------------

React is Javascript library and not full fledged framework we can use React in small
portion of the application unlike framework which comes with whole bagage.
In framework whole application is made with that particular framework.
----------------------------------
What is CDN?Why do we use it?
link:https://gtmetrix.com/why-use-a-cdn.html#what-is-a-cdn
CDN:A CDN is essentially a network of geographically dispersed servers. Each CDN node (also called Edge Server) caches the static content of a site like the images, CSS/JS files and other structural components. The majority of an end-user’s page load time is spent on retrieving this content.
When a user requests your site, the node closest in proximity to user will deliver the static content, ensuring the shortest distance for the data to travel (reduced latency), therefore providing the fastest site experience.


CDN working: To minimize the distance between the visitors and your website’s server, a CDN stores a cached version of its content in multiple geographical locations (a.k.a., points of presence, or PoPs). Each PoP contains a number of caching servers responsible for content delivery to visitors within its proximity.

Example:With a CDN, users from a European point of origin will be able to download your site’s static content faster from a closer server node.

CDN Use:CDNs not only ensure a faster experience to your users, but they also help to prevent site crashes in the event of traffic surges – CDNs help to distribute bandwidth across multiple servers, instead of allowing one server to handle all traffic.

-------------------------------
Why do we write crossorigin in script tags? 
The crossorigin attribute sets the mode of the request to an HTTP CORS Request.

Web pages often make requests to load resources on other servers. Here is where CORS comes in.

A cross-origin request is a request for a resource (e.g. style sheets, iframes, images, fonts, or scripts) from another domain.

CORS is used to manage cross-origin requests.

CORS: It stands for cross-origin resource sharing. It is a mechanism by which one webpage requests to another domain(servers) for fetching out the resource like audio, video, script, etc. from the third party server without leaking their credentials information.

CORS stands for Cross-Origin Resource Sharing, and is a mechanism that allows resources on a web page to be requested from another domain outside their own domain. It defines a way of how a browser and server can interact to determine whether it is safe to allow the cross-origin request. CORS allows servers to specify who can access the assets on the server, among many other things.
-------------------------------------------
Difference btw React and ReactDOM
React is a JavaScript library for building User Interfaces and ReactDOM is the JavaScript library that allows React to interact with the browser DOM.
ReactDOM is the glue between React and the DOM

--------------------------------------------
Difference btw library and framework
A library is a collection of pre-written code that can be used to perform common tasks or add specific functionality to a program. Libraries are often written in a specific programming language and are designed to be easily reusable and modular. So developers don’t have to write code to perform a specific function because the library already contains the code for the specific function. Standard libraries are available for most programming languages, but programmers can also create their own custom libraries.

A framework is a set of pre-written code that provides a structure for developing software applications. A library, on the other hand, is a collection of pre-written code that can be used to perform specific tasks.  

A framework as a collection of libraries, but completely different. Use libraries to control program flow. Access your library anytime, anywhere. On the other hand, with a framework, the application flow is controlled by the framework. 

Frameworks tend to be more tightly coupled to the application, meaning that the framework’s code is closely interwoven with the application’s code. Libraries are typically more loosely coupled, meaning that the library’s code can be used independently of the application’s code.
Example: In an application if header is writtern in jquery we can use React.js Library to build SideBar/Footer.

Frameworks are usually larger in size and may include many more files and classes than libraries, which are usually smaller and more focused.


--------------------------------------------------------
What is difference  between react.development.js and react.production.js files via 
CDN links?
The production version will be optimized in a few ways--smaller file size by minimizing variable names and removing white space, etc--whereas the development version will remain readable, might include source maps, etc., making it better for debugging and development usage. Functionally they're the same.

In development mode, we can enable and utilize React developer tools, devtools profiler, debugging environment attached with source code. We can utilize various functionalities such as Hot Module Replacement, diagnostics so that development environment will help to debug code.

In production mode, compression and minification of Javascript and other resources happens to reduce size of the code which is not the case when it comes to development mode. Performance will be much faster in production mode when compared to development mode.

------------------------------------------
Async and Defer(Youtube video(watch))
-----------------------------------------




