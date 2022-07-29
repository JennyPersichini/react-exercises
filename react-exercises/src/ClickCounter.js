import React from 'react';
import CounterDisplay from "./CounterDisplay";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));
export default class ClickCounter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  handleCounterIncrement = () => {
    this.setState((state) => {
        return {
            count: state.count + this.props.incrementBy
        }
    })
}

  render() {
    return (
        <div> 
        <CounterDisplay count = {this.state.count}/> 
        <button onClick={this.handleCounterIncrement}>Increment</button>
    </div>
    );
  }
}

root.render(<ClickCounter />);
