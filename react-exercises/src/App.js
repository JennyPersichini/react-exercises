import React from "react";
import { Welcome } from './Welcome';
import { Route, Routes } from 'react-router-dom';

export class App extends React.Component {
  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Welcome name='Jimmy'/>} />
        </Routes>
      </>
    );
  }
}