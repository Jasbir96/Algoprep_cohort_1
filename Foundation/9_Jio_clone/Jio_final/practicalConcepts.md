

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
  
### Variants
* You can have pre-defined styling to promote resuability 
* steps
  * use a  library  : import { cva } from "class-variance-authority";
  * call cva and pass three things
    * default syling for all the variants
    * variants : 
    *  default Varaiants
 *  usage : use the component pass varaiant with it's value

### Modifying styling 
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






## Testing 

**test Driven Development**  : before doing dev -> you write testcase and then you write the component making sure it passes
all the testcases. 



**Unit Testing** 
**Common libs**
* test Runner : `jest`
* to compiler of these test : `babel` 
* depending upon w certain action  you want to peform in isolation : ``

### frontend
* list of requirement  -> tescase (test runner) : `jest`
* test-file unrestand :  `babel` 
* rendering , events , element select in isolation : `react-testing-lib`

**Installation**

1. install these libs
```bash
npm install --save-dev jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
npm install --save-dev @babel/preset-env @babel/preset-react babel-jest
```
2. create babel.config.js and ad the below code 
  
```js
  module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-react',
  ],
}; 
```

3. create jest.config.js
   
  ```js
  module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1',
    },
    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },
    testMatch: ['**/*.test.js', '**/*.test.jsx'],
    moduleDirectories: ['node_modules', '<rootDir>'],
}; 
```
4.  create jest.setup.js
  
   ```js
   // Import Jest DOM matchers
import '@testing-library/jest-dom';

// Import React Testing Library's custom matchers
import '@testing-library/jest-dom';
   ```

5. inside package.json script object append these two commands
   ```js
   "test": "jest",
    "test:watch": "jest --watch"

   ```

**Steps to write a unit testcase in react**
* write 
  * a test suite : describe
  * write all the possible **testecases** : using it
  * mock all the dependecies 
  * at the start clear all the mocks 
* inside a testcase there could two pattern
  * initial render check : render , select  , verify 
  * other cases : return mock values(if external dependecy) ,render, select , fireEvent , verify 

### backend  
* list of requirement  -> tescase (test runner) : `jest`
* feature to test route : `supertest`
 



#### commands

```bash
  npm install --save-dev jest supertest
```

**Steps to write a unit testcase in backend**
* write 
  * a test suite : describe
  * write all the possible testecases : using it
  * mock all the dependecies ****
  * at the start clear all the mocks 
* inside a testcase there could two pattern
  * initial render check : call method, select  , verify 
  * other cases : return mock values(if external dependecy) ,call method, select  , verify 