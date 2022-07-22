import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));
export default class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <p>What a beautiful day!</p>
      </div>
    );
  }
}

root.render(<Hello />);
