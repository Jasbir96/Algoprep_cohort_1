
import { useSelector } from "react-redux";
// 
import { useDispatch } from "react-redux";
import counterSlice from "../redux/slice/CounterSlice";

const actions = counterSlice.actions;

function ReduxCounter() {
    const count = 
    useSelector((store) => store.counterSection.count)
    
    const dispatch = useDispatch();
    
    const increment = () => {
        dispatch(actions.increment());
    }

    const decrement = () => {
        dispatch(actions.decrement());
    }


    return <div style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw"

    }}>
        <button onClick={increment}>+</button>
        <p>Count :{count}</p>
        <button onClick={decrement}>-</button>
    </div>
}
export default ReduxCounter;


