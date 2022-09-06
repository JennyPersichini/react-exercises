import React from "react";
import ReactDOM from "react-dom";
import Age from './Age';

const root = ReactDOM.createRoot(document.getElementById("root"));
const { name } = this.props;
export default class Welcome extends React.Component {
  render() {
    return (
      <div>
        <p>Welcome {name}!</p>
        {this.props.age > 18 && this.props.age < 65 && name === "John" && <Age age="19" />}
      </div>
    );
  }

  static defaultProps = {
    name: "John",
 }
}

root.render(<Welcome />);
