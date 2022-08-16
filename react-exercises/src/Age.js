import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));
export default class Age extends React.Component {
  render() {
    return (
      <div>
        <p>Your age is {this.props.age >= 18 && this.props.age <= 65 && <p>{this.props.age}</p> }</p>
      </div>
    );
  }

  static defaultProps = {
    age: "27",
  };
}

root.render(<Age />);
