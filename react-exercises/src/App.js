import React from "react";
import { Welcome } from './Welcome';
import { Sum } from './Sum';
import { ClickCounter } from "./ClickCounter";
import { Login } from "./Login";
import { Count } from './Count';
import { GithubUser } from "./GithubUser";
import { GithubUserList } from "./GithubUserList";
import { CarDetails } from "./CarDetails";
import { DisplayLanguage } from "./DisplayLanguage";
import { FilteredList } from "./FilteredList";

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
        <Login />
        <GithubUser />
        <GithubUserList />
        <CarDetails initialData={{ model: "Smart", year: 2006, color: "Blue" }} />
        <DisplayLanguage />
        <FilteredList />
      </>
    );
  }
}
