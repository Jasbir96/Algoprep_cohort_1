

## Common Components
### Shadcn (ui-libarary) 

### components
**Carousel** : is a component that  rotates on a button click
**Swiper** : a way to swipr thtough element vericaly or horizonatlly 
**Sheet**: a dialog that appear over all the content  usually used in bottom bar or profile section
    * npx shadcn@latest add sheet
 **card**: 
* npx shadcn@latest add card
* card
		* cardHeader
			* cardTitle
			* cardDescription
		* cardContent
		* cardFooter
* Dialog
  
## Variants
* You can have pre-defined styling to promote resuability 
* steps
  * use a  library  : import { cva } from "class-variance-authority";
  * call cva and pass three things
    * default syling for all the variants
    * variants : 
    *  default Varaiants
 *  usage : use the component pass varaiant with it's value

## Modifying styling 
* you can modify styling by accepting className use a this utility -> pro
```js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function Input(className){
  const existingStyling ="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    return <input type="text" className={cn(stylingStyling,className)}/>
}
```


## How to make an api request
* loading -> request is send data is still not recieved
* error -> reqyest is failed
* data -> you get the data 
  

## Redux flow in nextjs 
### Installation
* npm install @reduxjs/toolkit
* npm install react-redux


### slice
* object
   * user -> null
   * isLoggedin -> false
* reducer 
  * login
  * logout

## store
```js
export const makeStore = () => {
    return configureStore({
        reducer: {
            user: userReducer
        }
    })
}
```
### store Provider
```jsx
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "../redux/store";

export default function StoreProvider({ children }) {
    const storeRef = useRef();
    if (!storeRef.current) {
        storeRef.current = makeStore();
    }
    return <Provider store={storeRef.current}>{children}</Provider>;
}
```


### now pass the store to outermost layout