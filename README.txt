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



-------------------------------
Why do we write crossorigin in script tags? 


-------------------------------------------
Difference btw React and ReactDOM

--------------------------------------------
Difference btw library and framework



--------------------------------------------------------
What is difference  between react.development.js and react.production.js files via 
CDN links?




------------------------------------------
Async and Defer
-----------------------------------------




