import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.querySelector("#root"));
export default class Age extends React.Component {
  render() {
    return (
      <div>
        {this.props.age > 18 ? <p>Your age is {this.props.age}</p> : <p>You are very young!</p>}
      </div>
    );
  }

  static defaultProps = {
    age: "30",
  };
}

root.render(<Age />);
