import React from "react";
import ReactDOM from "react-dom";
import Age from './Age';

const root = ReactDOM.createRoot(document.getElementById("root"));
export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p> Welcome, <strong>{this.props.name}</strong> !</p>
        <Age />
      </div>
    );
  }

  static defaultProps = {
    name: "Valerio",
  };
}

root.render(<Welcome />);
