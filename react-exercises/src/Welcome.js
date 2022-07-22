import React from "react";
import ReactDOM from "react-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p> Welcome, <strong>{this.props.name}</strong> !</p>
      </div>
    );
  }

  static defaultProps = {
    name: "Valerio",
  };
}

root.render(<Welcome />);
