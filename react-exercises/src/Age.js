import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));
export default class Age extends React.Component {
  render() {
    return (
      <div>
        {this.props.age >= 18 && this.props.age <= 65 ? (
          <p>Your age is {this.props.age}</p>
        ) : undefined}
      </div>
    );
  }

  static defaultProps = {
    age: "27",
  };
}

root.render(<Age />);
