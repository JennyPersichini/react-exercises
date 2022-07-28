import React from "react";
import Welcome from "./Welcome";
import Age from './Age';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Welcome name={this.props.name} />
        <Age />
      </div>
    );
  }
}
