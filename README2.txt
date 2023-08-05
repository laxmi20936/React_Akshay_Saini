Only React is not making our app fast there are other package also 
which makes our app fast
--------------------------------------------
NPM: Everthing but not stands for node package manager.
npm manages the packages.Standard repo for all packages
-----------------------------------------------------
what is npm: package manager.It will manage all the packages (dependency) that we will 
install in our system.

npm init
package.json ==> package.json is a configuration for npm.
why do we need PJ: It will tell the version of our package/dependency.
----------------------------------------------------------
Most important package in our project: Bundlers
Bundler: webpack, parcel, vite these are Bundlers.
create-react-app uses Webpack and Babel behind the scenes.
Job of bundler: bundles our app so that it can be shipped to production.
---------------------------------------------------------
Parcel= Parcel will give muscles/strength to our app.

npm install -D parcel
Two types of dependency/package:
dev dependency: It is generally required in development phase
normal dependency: Used in production also.

Parcel will install(node_modules and package-lock.json)
-----------------------------------------------------------
In package.json we will see devDependency as Parcel.
parcel:^2.8.2  ==> latest version.
The ^caret sign means if tomorrow some minor update is released(2.8.3) then parcel 
will automatic install the new minor release. Not major(3.0.0)

NOTE: ~2.8.2 tilde will take the major updates.
------------------------------------------------------------
package-lock.json : Keeps the track of exact version of package/dependency.
package.json: Can have caret or tilde (approx version)
----------------------------------------------------------
In package-lock.json we keep track of exact version and also there is integrity which
has a hash .This hash will take care that the same version of local is deployed in prod.
-------------------------------------------------------------------------------
wWhat is there in node modules.
Node modules contains all the code that we fetched from npm.
npm install -D parcel
All the code of parcel was fetched from npm and is put inside node_modules.
node_modules is like dataBase/collection for our package.
--------------------------------------------------------------------------------
In node_modules we should have only parcel but why are other dependency installed?
We have installed parcel as devDependency in our project but parcel also depends on
other dependency and this dependency depends on other package/dependency.This is known 
as transitive dependency.
So all the transitive dependency in present in node_modules, so node_modules is huge.

Example: In our project in package.json we see parcel as devDependency and parcel as 
a dependency depends on other dependency called chalk and chalk depends on other dependency
-----------------------------------------------------------------------------
How many package.json and package-lock.json do we have?
In package.json we have parcel. Then in node_modules we see parcel as dependency and 
we also have parcel -->package.json in node_modules which depends on some other dependency
which we find in package.json

So we have one package-lock.json and many package.json
-----------------------------------------------------------------------
Should we put node_modules in production/gitHub?
No, put node_modules in .gitignore
-----------------------------------------------------------------------
Should we put package.json and package-lock.json in production/gitHub?
Yes, to keep the track of what all dependency and version we have in our project.
With package.json and package-lock.json we can regenerate node_modules.
Meaning if we delete node_modules we can regenerate it because in package-lock.json we
keep the track of exact version of all the dependencies.
----------------------------------------------------------------------------
NPX: executing package npx parcel index.html
npm : install package
---------------------------------------------------
What are the ways to get react into our application
1st: CDN --> React is hosted onto these cdn links (Not a preferred way to bring React 
into our application because fetching from cdn is a costly operation.We are making 
network call to unpkg.com and getting react)

2nd: other way to get react into our app is via npm.
At the end , react is normal javascript package which is hosted on npm
----------------------------------------------------------
Through npm: npm install react (version :18.2.0)
npm i react-dom
-----------------------------------------------------------------
Parcel:(parceljs.org)
1: Dev Builds
2: Local Server -Host your app to the Server
3:HMR- Hot module replacement - automatically saves our file if we do any changes.
Parcel makes our development experience easy.
4: File Watching Algorithm: Parcel uses fwa(written in C++).This algo is keeping track
on each and every file.As soon as we change anything in our file, parcel keeps a track
of every save and quickly gives a build
4: Caching-Faster builds: Parcel is caching things for you. Again and again if we give 
builds, time is reduced.
Where is parcel caching things up?
When we do npx parcel index.html , parcel-cache folder came in which is caching things 
up.It is supporting HMR and file watching Algo so tht next builds are faster.
5: Image optimization
6: MInification : During production builds, parcel will minify our files
7: Bundling
8: Compress- Parcel will compress all our files,removes all the white spaces, 
minify files and ship it on to prod
9: Consistent Hashing
10:Code splitting: Pracel splits our file
11: Differential Bundling- supports older browsers.
When we use <script type="module">,Parcel will automatically generate a momodule 
fallback for older browsers
12: Diagnostic: Beautiful error display view
13: Error Handling- Good Errors
14: HTTPs mode ---> loads server with https:localhost:1234
15: Tree Shaking- remove extra code(Unused random code will be removed)
16: Different dev and production bundles- prod builds take more time than dev builds 
because some  more optimization is needed in prod builds
------------------------------------------------------------------------
When we execute a package npx parcel index.html --> parcel-cache and dist folder came.
We can regenerate parcel-cache and dist folder so don't push these files to production.
These folder should be there in .gitignore
-----------------------------------------------------------------------------

Production build command:
1: Remove main in App.js /index.js
npx parcel build index.html --> takes more time
---------------------------------------------------------------------------------

when we do npx parcel index.html -> Parcel will generate the dev build and the code is 
put inside dist folder and is hosted on server localhost:1234.
When we save and refresh our page parcel-cache and dist folder is using HRM,
file watching algo. And the code we see on localhost:1234 is coming from dist folder.
--------------------------------------------------------------------------------
App to be compatible for old browers:https://browersList.dev
BrowersList: what all browers should your app be supported 





