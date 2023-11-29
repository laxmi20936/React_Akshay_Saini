Monolith and Microservice architecture
World is moving towards Microservice architecture.

Monolith - In the whole big app (Java) we have everything written.
Both frontend and backend written.
We have API code written.
UI code written Jsp pages.
Authentication code written.
DB connectivity.
SMS code(notification)

if we have to make single change (lets says changing color of the button) then we to
build the whole project. We have to compile the whole project and then deploy.
Here the whole big app is written in Java 
======================================================
Microservice- Here we have different services.These are small services(micro services)/app
and all are combined to form a big app.All these micro services/app talk to each other
depending on the use cases. We will have separate BE project , separate frontend project
separate notification project. For each and everything we have separate projects.
This is known as separation of concern. It follows a single responsibility principle
where each n every service has its own job and nobody will interfere will each other.
Here React comes in UI service and each service can have its own language unlike 
monthic architecture where everything is written is Java.

BE service - Java
notification - Golang

backend services
ui services
database services
auth services

Each service has its own port. UI(port :1234) and backend(port: 1000)
On diff ports we can deploy diff services and all these ports are mapped to the 
same domain name(same URL)

 http://namastedev/ ==> FE
 http://namastedev/api  ==> BE
 http://namastedev/sms  ==> SMS

==========================================================================================
2 approach to make an API call

1st: loads page => API call => Render page
                wait 500ms

This is not a good approach because as soon as the pg loads we are making API call 
which is taking some time and then Rendering the page
===========================================================
2nd: loads pg => Render => API call => Re-render the page

This is a good approach and gives better UX because when the page loads we are 
rendering with whatever data we have and then we are making an API call.
When we get the data from API  then we re-render the page.
Here we are re-rendering twice.
React have fast render cycle( 2 renders => not an issue)
================================================================================================
CORS: calling swiggy's API from local host has blocked by cors policy.
who is blocking us: Browsers blocks us to call api from one origin to 
different origin.Chrome is blocking because chrome is not allowing us to call swiggy API
from local host due to origin mismatch.
Youtube video - CORS policy.

BYPASS CoRS policy -> ALLOW cors extension in chrome (cors chrom extension)
================================================================================
Fetch API, Shimmer UI, conditional rendering
=======================================================
login and logout
===========================
search functionality
====================================
Whenever a state variable changes , React triggers a reconciliation cycle(re-render)
the whole component.
(React is fast not just because it has Virtual DOM but beacuse of
React fibre (new reconciliation algo which finds the diffence btw the previous and the 
new Virtual DOM and updates the DOM only when required and only that portion is 
updated) which make efficent dom manipulations)

=======================================================================
6.1
make an api call 

6.2
corsproxy.io(When we dont want to enable the extension OR the user doesn't have
 CORS policy).
copy and paste it front of api call .
Now we are not calling swiggy's API directly it will first go to corsproxy.io and cors 
internally making an API call to swiggy and getting you the data.

cors proxy is now acting as a proxy calling the Api for u and getting the data.


