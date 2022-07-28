import React from "react";
import Welcome from "./Welcome";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name={this.props.name} age={this.props.age}/>
      </div>
    );
  }
}