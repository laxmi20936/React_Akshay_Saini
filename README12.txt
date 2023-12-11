Redux is a JS library for state management 
Redux works in the data layer of our application.

Redux is not mandatory.
Redux can be used where we have many componennts and the data is used heavily -> for 
large size application.

for small or mid size app do need of redux.

React and Redux are different library

State management: Zustand

==============
Redux adv:
1: Manages state in our app becomes easy
2: Debugging app becomes easy -> Redux dev tool

Redux Team offers
1: React redux -> Bridge btw React and Redux
2: React Toolkit -> Standard way to write Redux logic

Vanilla Redux drawback:
1: Redux requires too much of boilerplates
2: Configuring a Redux store is too complicated
3: Need to add too much of packages to get Redux to do anything useful

REdux is a big  JS object which stores alot of data and is kept in a 
global central place.

Redux store is kept in a central space and any comp can access this central space and
can read and write data from this central store.
In store we will have slice.
Slice-> logical separation of our code. Caed slice, login slice , theme slice etc

When I click on add btn it will not directly modify the redux store.
On click of add btn it will dispatch an action which will call a func and this func
will modify the store(cart slice).

Dispatch an action will call a function is the reducer fn

When I click on add btn it will dispatch an action which will call the reducer fn which
will update the slice of the store.

To read data from the store we have selector which will update the header comp of app.
Now header is subscriv=bed to the store.

Before = Redux (vanilla redux) and react-redux
After = Redux toolkit and react-redux

Installation
Install @reduxjs/toolkit and react-redux 
   npm i @reduxjs/toolkit
   npm i react-redux
Build our store 
Connect store to app
create cart slice 
dispatch action
read data using selector


When using useSelector to subscribe to a our comp to the store , always select the 
portion of the store.

In slice , inside reducer
-- In vanilla Redux - DONT MUTATE STATE , make newState and then return it
-- const newState = [...state]
   newState.items.push(action.payload)
   return newState

-- In redux toolkit - we have to mutate the original state , no need of newState
                      and no need of returning.
[But we can do in RTK - either Mutate the existing state or return a new State.
return {items: []}
 ]            
But redux toolkit behind the scene is doing all the things same as Vanilla redux.
How? -> Using Immer . RTK uses Immer that will allow to work with immutable state
in a more convinent way.

inside reducer: cant do console.log(state)
cant do console.log(current(state))=> {current} from RTK.

