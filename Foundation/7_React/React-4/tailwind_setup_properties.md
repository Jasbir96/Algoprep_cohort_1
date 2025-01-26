## steps 
1. In your react app  go to terminal and type two command
* npm install -D tailwindcss postcss autoprefixer
* npx tailwindcss init -p
  
2. A new file Tailwind.config.js will be created . Replace this content
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

3. go to `index.css` and on tope add these three lines 
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```


## Resources 
* Tailwind Installation Guide : https://tailwindcss.com/docs/guides/vite
* Tailwind Official Website :https://tailwindcss.com/docs/utility-first
* Tailwind cheat sheet : https://nerdcave.com/tailwind-cheat-sheet

## Properties
height -> h-[unit]
background-colour -> bg-[#customcolor]
justify-content:-> items-center 
width -> w-[60%] 
color-> text-color-name/text-[#customcolor]
border-> border
padding -> p with x for left and right , y -> top , bottom


## Extension 
* Tailwind intellisense
* inline fold-> hide your tailwind classes
* ES7+ React/Redux/React-Native snippet