import React from "react";
import ReactDOM from "react-dom";
import Message from "./Message";

const root = ReactDOM.createRoot(document.querySelector("#root"));
export default class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
        <Message />
      </div>
    );
  }
}

root.render(<Hello />);
