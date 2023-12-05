Custom hook
Single Responsibility principle: Function/class should have single Responsibility.
Ex: ResMenu should only display the menu of the restaurant.This helps to  maintain 
our code in a modular fashion.

Modularity : Breaking dowm your code into small small different modules so that 
our code becomes more maintainable and more testable.
Testing becomes easy because we have small small component which is having a single
responsibility and while testing the each component caughting  bug becomes easy.
Always distribute yours code into smaller pieces and keeping it modular makes ur code 
maintainable , testable and reuseable.
If u write in code modular way We can reuseable the component

Custom Hook:
Now we will extract some responsibility from a component and then extract it inside
a hook so that our hook and component becomes more modular and readable.

===============================
keep the fetch  api and display logic separate

======================================
Online offine state using custom hook
================================================
always for custom hook use "useCustomHoook()"  recommended way
This will let the other developers know that some React logic is written is this
custom hook.
================================================
Parcel = Basic job of the bundler is to bundle our app and put it in dist folder.
All the components is bundled and we have one single Js file.

Go to network tab : Filter : JS => index11324.js (bundled JS file).
We have 1000s of component bundled in one js file -> What is the problem here?
The size of js file is 2MB (in dev build) but in prod build is will be less compared 
to dev build but it will be significiantly high.

Js file size increases by how many comp it hold.
This Js will be so huge that it will take alot of time to load(app becomes slow).

Should we bundle our app? Yes  ===> How?
Break into small pieces... We will make smaller bundles of these files/component.
breaking dowm our app into smaller logical chunks
This process is known as chunking, code splitting, dynamic bundling, lazy loading,
on demand loading, dynamic import

How  to optimise our app?
chunking, code splitting, dynamic bundling, lazy loading,
on demand loading, dynamic import

Intially when we load our app,  that time our code not will load code for grocery,
but when we navigate to grocery that time it will load code for grocery

Lazy and suspense can make your large scale app very fast,very performant,
more optimised, light weight

We can use lazy loading when my app grows

To reduce the bundle size we do code splitting/lazy loading.

