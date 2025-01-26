
import { useSelector } from "react-redux";
// 
import { useDispatch } from "react-redux";
import  { counterActions } from "../redux/slice/CounterSlice";



function ReduxCounter() {
    const count =  useSelector((store) => store.counterSection.count)
    
    const dispatch = useDispatch();
    
    const increment = () => {
        dispatch(counterActions.increment());
    }

    const decrement = () => {
        dispatch(counterActions.decrement());
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


