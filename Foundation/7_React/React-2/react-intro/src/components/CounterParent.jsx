import Counter from "./Counter";

function CounterParent() {
    return <div>
        <Counter intialValue={1}></Counter>
        <Counter intialValue={2}></Counter>
        <Counter intialValue={3}></Counter>
    </div>
}
export default CounterParent;
