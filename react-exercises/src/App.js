import React from "react";
import ClickCounter from "./ClickCounter";
import ClickTracker from "./ClickTracker";
import Container from "./Container";
import InteractiveWelcome from "./InteractiveWelcome";
import { LenguageContext } from "./LanguageContext";
import Login from "./Login";
import TodoList from "./ToDoList";
import UncontrolledLogin from "./UncontrolledLogin";

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
      <select value={this.state.language} onChange={this.handleLenguageChange}>
        <option value='en'>English</option>
        <option value='it'>Italiano</option>
      </select>
      <LenguageContext.Provider value={this.state.language}>

     
        <Container title="TITOLO">
          <ClickCounter initialValue={50} incrementBy={2} />
          <ClickTracker />
          <InteractiveWelcome />
          <UncontrolledLogin />
          <TodoList
            render = 
            {(items, newState, deleteState) => {
              const Copy = [...items.items];
              return (
                <ul className="list">
                  {Copy.map((el, i) => (
                    <div key={i}>
                      <li>
                        {el}
                        <button
                          onClick={() => {
                            deleteState(Copy, i);
                            newState(Copy);
                          }}
                        >
                          Delete
                        </button>
                      </li>
                    </div>
                  ))}
                </ul>
              );
            }}
            setState=""
          />
          <Login />
        </Container>
        </LenguageContext.Provider>
      </>
    );
  }
}
