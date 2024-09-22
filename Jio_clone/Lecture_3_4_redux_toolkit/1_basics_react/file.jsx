/***
 * 1. UI wala part -> HTML
 * 2. Bussiness logic -> JS -> (custom Hook)
 * 3. event listeners -> JS
 * 
 * 
 * 
 * 4. State: 
 *      1. set 
 *      2. state ko update  
 * **/ 



function Counter() {

    const [count, setCount] = useState(0);
    // bussiness logic
    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }

    // ui 
    return <div>
        <button onClick={increment}>+</button>
        <p>Count :{count}</p>
        <button onClick={decrement}>-</button>
    </div>
}