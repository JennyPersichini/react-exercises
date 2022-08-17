import React from "react";
import { Welcome } from "./Welcome";
import { Route, Routes } from "react-router-dom";
import { ClickCounter } from "./ClickCounter";
import { ShowGithubUser } from "./ShowGithubUser";
import { Link } from "react-router-dom";
import { GithubUserList } from "./GithubUserList";

export class App extends React.Component {
  render() {
    return (
      <>
        <div>
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
          <Link to="/">Back</Link>
        </div>
        <Routes>
          <Route path="/" element={<Welcome name="Jimmy" />} />
          <Route path="/counter" element={<ClickCounter />} />
          <Route path="/users" element={<GithubUserList />}>
            <Route path="/:username" element={<ShowGithubUser />} />
          </Route>
          <Route
            path="*"
            element={
              <div>
                <p>Not Found!</p>
              </div>
            }
          />
        </Routes>
      </>
    );
  }
}
