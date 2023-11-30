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
