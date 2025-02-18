## Shadcn (ui-libarary)

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
  