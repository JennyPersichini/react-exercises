import { React } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import { ClickCounter } from "./ClickCounter";
import { ShowGithubUser } from "./ShowGithubUser";
import { GithubUserList } from "./GithubUserList";

export function App() {
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
          <Route index element={<h3>Add a user and select it</h3>} />
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
