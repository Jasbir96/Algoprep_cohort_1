import React, { Component } from "react";


export default class ClassCounter extends Component {
    // 1. state declare in an object -> initial value
    constructor(props) {
        console.log("1. constructor called");
        // parent ke constructor call
        super(props);
        this.state = {
            count: 0
        }
    }

    incCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    // 3. run once just after render
    componentDidMount(){
        console.log("3. component did mount ")
    }
    // 4. run after every re-render
    componentDidUpdate(){
        console.log("4. component did update")
    }
    // 4. component will unmount
    componentWillUnmount(){
        console.log("When component is remove then it will be called");
    }

    // 2. render 
    render() {
        console.log("2. render called");
        return (<><h1>Class Counter</h1>
            <h2>{this.state.count}</h2>
            <div>
                <button onClick={this.incCount}  >+</button>
                <button onClick={this.decCount}>-</button>
            </div>
        </>)

    }

}


// useEffect(function(),[])-> data fetching 
// useEffect(function()) -> first render + all the re-render 