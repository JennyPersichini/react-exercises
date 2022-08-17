import React from "react";
import { Welcome } from './Welcome';
import { Route, Routes } from 'react-router-dom';
import { ClickCounter } from "./ClickCounter";
import { ShowGithubUser } from "./ShowGithubUser";

export class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Welcome name='Jimmy'/>} />
          <Route path="/counter" element={<ClickCounter />} />
          <Route path="/:username" element={<ShowGithubUser />} />
        </Routes>
      </>
    );
  }
}