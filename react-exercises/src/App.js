import React from "react";
import { Welcome } from './Welcome';
import { Sum } from './Sum';
import { ClickCounter } from "./ClickCounter";
import { LoginForm } from "./Login";
import { Count } from './Count';

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
        <Count /> 
        <LoginForm />
      </>
    );
  }
}
