npx parcel index.html
This command means we are executing(npx) a npm package parcel and giving a source file 
as index.html
----------------------------------
ShortCut
package.json:
scripts:{
    "start": "parcel index.html" ,
    "build": "parcel build index.html",
}

NOTE:
1:npm run start/ npm start (development build). npm start behind the scenes executes the
package parcel taking the source file as index.html
2: npm run build (production build)
-----------------------------------------------
React.createElement is an object  and root.render() method will take this object and
convert it into html tag and push it to the DOM.
-----------------------------------------------------------------
React.createElement was not developer friendly , so JSX came in.

JSX is Javascript syntax which is easier to create React element .
JSX is not a part of React.

JSX Example:
const jsx = <h1>Laxmi</h1>
This is Jsx (html+Js)

NOTE: JSX is not HTML inside Javascript. Jxs is not HTML, but JSX is html-like 
syxtax or XML-like syntax.
------------------------------------------------------------------

const jsx = <h1>Laxmi</h1>   ---> console.log(jsx)--> React.createElement(Object)
Is this a valid Javascript?
No,because JS code goes in Js engine.JS engine does not understant JSX, it 
only understands pure Javascript(string,number etc)/ECMAScript.
-----------------------------------------------------------
If the above code is not valid Javascript then how browser shows the output?
Before our code reaches Javascript engine , jsx is transpiled/converted into the code
which React/Browser understands.

Who is transpiling the code?
Before our code goes to the Js engine ,code is transpiled by Parcel.
Parcel is like manager , handovers work to other package/dependency.
Parcel uses Babel to transpile the code.
-----------------------------------------------------------------------
Babel - BaBel is the Javascript compiler/transpiler.
Babel's job is to convert or transpile JSX to React code.
Also some old browers which doesn't understands ES6, Babel converts that code into 
the code which browers understands

From where did Babel come?
From Parcel
-----------------------------------------------------------
JSX (transpiled before it reaches the JS engine) by => Parcel - Babel
JSx => React.createElement => ReactElement(JS object) => HTMLElement(render)
------------------------------------------------
React Components
1: Class based Components -OLD-uses Javascript classes
2: Functional Components _NEW-uses Javascript function

Fuctional Component: Functional component is a normal Javascript function 
which returns some piece of JSX.
               or
Functional component is a normal Javascript function which returns react Element.

JSX at the end is React element. Ex: <h1> JSX here </h1>
--------------------------------------------------------------------------------
ReactElement
const head = <h1>I am React element(object)</h1>
--------------------------------------------------------------------------------
React Component(should start with capital letter)
const Head = () => {
    return <h1>I am React Component</h1>
}

const Title = () => (
    <div id="title">
      <Head/>
    </div>
)                   or

const Title = () => {
    return (
        <div id="title>
          <Head/>
        </div>
    )
}

One component inside other is called Component Composition.
--------------------------------------------------------------------------
                         Super Power of JSX
1: Inside JSX we can write any piece of Javascript expression inside curly brackets {}
2:  const data = api.getData()

const Title = ()=>{
    return(
        <div>
            {data}
        </div>
    )
}

Assume that the api is sending some malicious data and that data(javascript code)
we are injecting inside jsx.If api in sending  data and that is getting executed
in JSX. Suppose attackers gets some access to run some piece of Javascript in your 
browsers.APi is such that it is stealing our local storage, cookies, session storage
PC data etc.These attack is known as cross site scripting.


JSX takes care of the injection attack. Even if the api sends some malicious data
JSX will escape it(cross site scripting attack).
Assume that JSX sanitise the data wrapped in {}.
JSx prevents cross site sripting attacks.
Feel free to write any piece of code in Jsx bcoz JSX is such powerful.
Nobody can do malicious attack i.e execute JavaScript with malicious data inside {}.
----------------

-------------------------------------------------------------
What are the ways to call any component?
<Title/>  OR  <Title></Title>  OR   {Title()}
------------------------------------------------------------------
What is making your React code readable?
JSX is making our code readable and not React. JSX is not a part of React.
If we would have used React core which is React.createElement then it is difficult 
to read and maintain our code
================================================================
                               Assignment 3:
1:What is JSX?
JSX is HTML-like or XML like syntax.Jsx allows us to write HTML-like code directly
within your Javascript code, making it easier to describe the structure and 
appearance of UI component.
-------------------------------------------------
2: Superpower of JSX?
(a) JSX makes our code more readable.
(b) JSX allows component composition.JSX enables you to compose complex UIs by
nesting components within each other. This promotes a modular and reusable 
approach to building user interfaces, making it easier to manage and maintain 
your codebase.
(c) JSX support embedding Javascript expressions within curly braces `{}`.This allows 
you to dynamically generate content and include variables, calculations, and 
function calls directly within your JSX code.
(d) JSX  takes care of injection attack.Hence preventing cross site scripting attacks.
---------------------------------------------------------
3: Role of type attribute in script tag? What options can I use there?
The type attribute in the <script> tag specifies the scripting language used 
in the embedded code block. It helps browsers understand how to interpret and 
execute the code within the <script> element.

(a)The most common value for the type attribute is text/javascript, 
which indicates that the content of the <script> tag contains JavaScript code.
<script type="text/javascript">
  // JavaScript code here
</script> 


(b)Module: This value indicates that the script is a JavaScript module. 
Modules have a separate scope and allow you to use import and export statements 
for better organization and code reuse.

<script type="module">
  import { myFunction } from './my-module.js';
  myFunction();
</script>
---------------------------------------------------------------
4:{TitleComponent()} vs {titleComponent}
{<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX

{titleComponent} ---> variable call
{TitleComponent()} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>}-We 
can call component  using any of these.

