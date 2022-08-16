import React from "react";
import { Welcome } from './Welcome';
import { Sum } from './Sum';

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
        <Sum numbers = {[1,2,3,4,5]}/>
      </>
    );
  }
}
