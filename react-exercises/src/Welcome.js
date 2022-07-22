import React from "react";
import ReactDOM from "react-dom";
import Age from './Age';

const root = ReactDOM.createRoot(document.getElementById("root"));
const { name } = this.props;
export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        {name === "John" ? <p>Welcome {name}!</p> : undefined}
        <Age />
      </div>
    );
  }

  static defaultProps = {
    name: "John",
 }
}

root.render(<Welcome />);
