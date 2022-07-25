import React from 'react';
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));
export default class Counter extends React.Component {
    state = {
        count: this.props.initialValue 
    }

    constructor(props) {
        super(props)

        setInterval(() => {
            this.setState((state) => {
                return {
                    count: state.count + this.props.incrementBy ,
                }
            })
        },this.props.timeout)
    }


    render() {
        return <div>
            <h1>Count : {this.state.count}</h1>
        </div>
    }
}

root.render(<Counter />);