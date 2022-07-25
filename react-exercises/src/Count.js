import React from "react";
import ReactDOM from "react-dom";
import CounterDisplay from "./CounterDisplay";

const root = ReactDOM.createRoot(document.querySelector("#root"));
export default class Counter extends React.Component {
  state = {
    count: this.props.initialValue,
  };

  componentDidMount() {
    setInterval(() => {
      this.setState((state) => {
        return {
          count: state.count + this.props.incrementBy,
        };
      });
    }, this.props.timeout);
  }

  render() {
    return (
      <div>
        <CounterDisplay count={this.state.count} />
      </div>
    );
  }
}

root.render(<CounterDisplay />);
