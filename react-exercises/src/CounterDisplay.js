import React from 'react' ;
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));
export default class CounterDisplay extends React.Component {
    render() {
        return <h1>Count : {this.props.count}</h1>
    }
}

root.render(<CounterDisplay />);