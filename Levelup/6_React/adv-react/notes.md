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
**Perf**
* useMemo
* useCallback
* React.memo










