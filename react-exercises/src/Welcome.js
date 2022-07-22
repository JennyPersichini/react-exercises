import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p> Welcome, <strong>{this.props.name}</strong> !</p>
        <p>Your age is {this.props.age}</p>
      </div>
    );
  }

  static defaultProps = {
    name: "Valerio",
    age: "27",
  };
}

root.render(<Welcome />);
