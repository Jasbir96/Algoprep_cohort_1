# React-1
## Agenda
* useState : correct way of setting the state 
  * https://react.dev/reference/react/useState
* useEffect: all the edge cases
	* strict mode 
	* Rules for hooks 
	* customHook 

* In react  when you run timers , make request, add listeners ->  if you do not remove them properly : there could be memory leak or unintended issues : You should cleanup 

 ### UseEffect :
 ### Reference : https://react.dev/reference/react/useEffect
 **You have three version:**
a.) `empty dependency array` : that run only once   after render
            cleanup function : on unmount 
b.) `with no dependency array`    : that will run every time after render and re-render
        before next exceution of useEffect
c.) `with some dependency`  that will run on render and when dependecy re-renders
        before next exceution of useEffect


**Hooks** : they are the function that are available inside functional Components and let you acces a react feature


### rules of hook 
* hook are pure js function 
* hooks start with the use
* should only be used inside `functional Components`
* call hooks on the top level i.e it should outisde any conditional block, loops or any handler function 

**Extra insight**: a hook can only be called inside another hook 


## foundational knowledge 
* components : reusable UI
* custom hook : reusable logic 


# React-2 
* useReducer : useState for complex state mangment
* useRef :
* How react ->
        *  renders a webpage
        * react efficently renders a webpage 
**Perf**
* useMemo
* useCallback
* React.memo


## Lifecycle of react component
* Mounting -> creation
* updation -> re-renders
* unmount -> deletion 

## steps to render a react application 
1. JSX transpilation  : Before React code can run in the browser, JSX (JavaScript XML) needs to be converted into plain JavaScript. This process is called JSX transpilation and is handled by a tool called `Babel`.
`inputs`:
```jsx
function HELLO() {
            let age=30;
            let name = "Jasbir";
            return <h1>Hello {name} Thanks Babel and you are {age<18 ?"underage":"eligble"} </h1>;
        }

```

`Output`
```jsx
function HELLO() {
  let age = 30;
  let name = "Jasbir";
  return /*#__PURE__*/React.createElement("h1", null, "Hello ", name, " Thanks Babel and you are ", age < 18 ? "underage" : "eligble", " ");
}
```

2. `Virtual DOM Creation`: react creates a virtual representation of the actual Document Object Model (DOM) in memory. This virtual DOM is a lightweight copy of the real DOM. React uses the **React.createElement** function to create elements, which are then used to construct the virtual DOM.


```js
const vdom ={
    type: 'div',
    props: {
        class: "container",
        children: [
            {
                type: 'h1', 
                props: {
                    children: ' this is '
                }
            },
            {
                type: 'p', props: {
                    class: 'paragraph',
                    children: [
                        ' I am ',
                        {
                            type: function Button(props) ({
                                type: "button", props:
                                    { children: props.counter + "Clicks" }
                            }),
                            props: { counter: 1 }
                        }
                        ,
                        ' from'
                    ]
                }
            }
        ]
    }
}
```


3. `Component Mounting`: When React elements represent components, React initializes these components by instantiating their `classes` or `functional components`. 
This initialization process sets up the component's state, props, and other internal data in preparation for rendering.

```js
const vdom ={
    type: 'div',
    props: {
        class: "container",
        children: [
            {
                type: 'h1', props: {
                    children: ' this is '
                }
            },
            {
                type: 'p', props: {
                    class: 'paragraph',
                    children: [
                        ' I am ',
                        {
                            type: "button",
                            children : "1 Clicks"
                        }
                        ,
                        ' from'
                    ]
                }
            }
        ]
    }
}
```

4. `render`:  in this step react  traverses the virtual element tree(VDOM) and generates corresponding DOM nodes, thereby creating the visual representation of the user interface on the webpage.

5. `hydration` : React sets up event listeners on the relevant DOM elements to handle user interactions, such as clicks or input changes. This ensures that the specified event handlers are executed when triggered, allowing for interactivity within the UI.

## How react effciently update the UI (re-rendering)
1. To rerender : you need to update the state
2. whenever a state change happens -> it constructs a new virtual DOM  that represents all the changes done from state update
3. React employs a clever `diffing algorithm`. This algorithm compares the old virtual DOM (before the state change) with the new virtual DOM (after the change). It meticulously analyzes each element, attribute, and text node to `identify the minimal set of changes` needed to bring the real DOM in sync with the updated state
4.  ***Batching**: React doesn't perform DOM updates one by one. Instead, it batches multiple changes together. This is like grouping edits into a single transaction before applying them. Batching avoids unnecessary DOM reflows and repainting, which can be expensive and slow down the browser.
5. `Reconciliation` : React performs the actual reconciliation. It takes the minimal changes identified in the diffing step and applies them to the real DOM in the browser. This involves updating text content, adding or removing elements, and modifying attributes, but only for the affected parts. 


**React provide different : caching mechanisms**
* component level caching -> `React.memo` you can prevent re-render of a component if the props are not changed.
* cache a reference  to a function-> `usecallback` to cache a function that can be used to prevent a fn to  be recreated on every re-render
* cache some solution -> `useMemo` : you can prevent cacluclation / execution of a function if the dependency has not changes
**Disadvantage of over-using it** : you will be using extra memory to store these cached thing and extra processing willl be required
## React-3
### Agenda
* redux and context api (revision) part -> `alreay done in foundation`
* class based component : discuss this part  -> 
* Performance improve : build level -> code splitting and lazy loading -> `build tools class`
### class based component 
**lifecycle methods**: 
1.  `constructor` : 
    * usecase : to define the state ,
    *  execution :  it will run only once in the lifecycle of the component at the time of mount
2. `render` : 
    * usecase : it is used to render the component
    * exceution : first render+ re-render
3. `componentdidMount`:
    * usecase : it is used to do some action after the render : fetching data 
    * execution :  only once after first re-render
4. `componentDidUpdate`;
    * usecase ; it used to trun logic on re-render
    * excution : after every render
5. `componentwillUnmount`
    * usecase ; if you want to do any cleanup  when component is removed
    * execution : after elemnt is unmounted 
**lifecycle methods parellels**
* `useEffect(fn,[])` -> componentDidmount
* `useEffect(fn)` -> componentDidmount+componentDidUpdate
* `useEffect(()=>{  -> component willUnmount
return ()=>{

}
},[])`
 


