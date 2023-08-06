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

--------------------------------------------------------------
                      Assignment-2
What is NPM?
Npm manages all the packages.All the packages are hosted on npm, its like a 
repo for packages.NPM is a package manager used to install, delete and update 
Javascript  packages on your machine.

What is parcel/Webpack? Why do we need it?
Parcel or Webpack is the most important package known as bundler.
These bundlers are used in modern web development to package and bundle Javascript
and CSS files.These bundlers helps to optimize, compress and bundle our files to 
make our application performant production ready application.

What is .parcel-cache
When we execute the command (npx parcel index.html) - .parcel-cache comes into 
picture. When we change any file in our local and save it Parcel automatically caches
the changes using File Watching Algo and HMR which makes our application fast.

What is npx?
NPX stands for node package eXecute.It allows the developer to execute the package 
even without installing it

What is difference between dependencies and devDependencies?
devDependency: npm install -D parcel
Dependency/normal dependency/production: npm install parcel

normal/production Dependency is more optimised,compressed, minified and 
variable names are also shortened and does not have development tools which 
devDependencies have. 
Production build also takes more time  as compared to development builds.
---------------------------------------------------------------
What is Tree Shaking?
Example: When tree shakes, dried leaves which are no longer needed falls.
Parcel also have this tree shaking algo where some random code or functions which are
no longer used are removed, which makes app faster/ performant.
In CSS, unused classes are also automatically removed.

What is Hot Module Replacement?
When we makes any changes in the file, Parcel automatically updates and refreshes the
code in the browser - no page releod necessary and gives fast user experience.

List down your favourite 5 superpower of Parcel and describe any 3 of them in your 
own words
Hot Module Replacement
Tree Shaking Algo
File Watching Algo
Differential Bundling
Diagnostic


File Watching Algo: Parcel keeps a track of every change that we do in our file and
when we save the changes Parcel builds the changes quickly.

Differential Bundling: Helps to open our application in older browers as well

Diagnostic: Parcel gives beautiful errors in the terminal and in browers 
which is highlighted and pointing to the exact location where the error occured.
Also gives the documentation link to read more about the error.
---------------------------------------------------------------------
What is .gitignore? What should we add and not add into it?
.gitignore file is a text file which tells what all files/folder to ignore in a 
project.Files mentioned in gitignore will be ignored by the git repo and 
will  not be pushed in production.

What is the difference between package.json aned package-lock.json
Package.json keeps the approximate version of the package installed in our project.
Can have tilde or caret in front of the version.
Package-lock.json keeps the exact version of the package installed and also 
keeps track of the version of transitive depndency.

Why should I not modify 'package-lock.json'?
It serves as a lockfile and is intended to keep track of the exact versions of the 
dependencies that are installed in our project.The purpose of package-lock.json is 
to ensure that the project's dependencies remain consistent across different
environment and installations.

What is node_modules? Is it a good idea to push node_modules on git?
node_modules is like a collection/database of the package/dependencies and also 
their transitive dependencies to build or run the project.
We should not push node_modules on git because node_modules can be regenerated 
on dev servers using package.json and package-lock.json.

What is dist folder?
When we execute the package --> dist folder comes into picture.The dist folder 
contains the minimized version of the source code.  
All the js,css file in the project is compressed , minified,bundled  and put 
inside the dist folder in single javascript and css file(minified version)

What is browersList?
BrowersList tells on what all browers our application is supported.
Code emitted will be compatible with the browers specified

What is ^caret and ~tilde?
Caret will install the minor update.
Tilda will install the major update.
























































                                                                                                                                     



