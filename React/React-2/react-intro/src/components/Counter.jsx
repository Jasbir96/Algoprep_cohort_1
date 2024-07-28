import {useState} from "react";
function Counter(props) {
    // create a state for that 
    const [value, setValue] = useState(props.intialValue);
    const handleIncrement = () => {
        if (value == 10) {
            return;
        }
        setValue(value + 1);
    }
    const handleDecrement = () => {
        if (value == 0)
            return
        setValue(value - 1);
    }
    return <div>
        <div>{value}</div>
        <button onClick={handleIncrement}>+ Plus</button>
        <button onClick={handleDecrement}>- Minus</button>
    </div>
}
export default Counter;
