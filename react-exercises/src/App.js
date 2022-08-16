import React from "react";
import { Welcome } from './Welcome';
import { Sum } from './Sum';
import { ClickCounter } from "./ClickCounter";

export default class App extends React.Component {
  
state = {
  language: 'en'
}

handleLenguageChange = (event) => {
  this.setState({
      language: event.target.value
  })
}
  render() {
    return (
      <>
        <Welcome />
        <Sum />
        <ClickCounter />
      </>
    );
  }
}
