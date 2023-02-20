import React, { useCallback, useContext, useState } from "react";

import {
  BrowserRouter as Router,
  Route,
  Navigate,
  Routes,
  json,
} from "react-router-dom";

import Users from "./Users";
import Profile from "./pages/profile/Profile";
import PostsPage from "./pages/posts/Posts";
import People from "./pages/people/People";
import MainHeader from "./components/MainHeader/MainHeader";

import { AuthContext } from "./pages/context/auth-context";

import "./App.css";

const DUMMY_USERS = [
  {
    name: "Jack Macy",
    quote: "Don't cry because it's over, smile because it happened.",
    picture: "https://i.ytimg.com/vi/pyQcMNhn9lk/maxresdefault.jpg",
  },
  {
    name: "Jack Van Hooser",
    quote: "I am Jack Macy's Friend!",
    picture:
      "https://media.licdn.com/dms/image/C5603AQH94NurqXZLjA/profile-displayphoto-shrink_800_800/0/1637550541740?e=2147483647&v=beta&t=acU15fhzqx3Ws_dBskkJ8PDzp5tj3QYDPGuTj9to814",
  },
  {
    name: "Will Balkan",
    quote: "I am also Jack Macy's Friend!",
    picture:
      "https://media.licdn.com/dms/image/D4E03AQFnSH0VWVYUOw/profile-displayphoto-shrink_800_800/0/1666745245748?e=2147483647&v=beta&t=l0HchiXsbHmUah69UpJKF1mlVBHfowTlk5NA1Qf_DK0",
  },
  {
    name: "Nate",
    quote: "I am Jack Macy's Friend as well!",
    picture:
      "https://media.licdn.com/dms/image/C5603AQH3PCAl0TOtAA/profile-displayphoto-shrink_800_800/0/1636519665964?e=2147483647&v=beta&t=3X1jWQ_D7ZxPJfs1HvO-plFG3rUsQzI8vXJ8skVieZo",
  },
];

const jsonFile = require("./Users.json");
console.log(jsonFile);

function App() {
  const uid = useContext(AuthContext);

  return (
    <Router>
      <MainHeader />
      <main>
        <Routes>
          <Route
            path="/profile/:uid"
            exact
            element={<Profile users={jsonFile} dummyUsers={DUMMY_USERS} />}
          ></Route>
          <Route path="/posts/:uid" exact element={<PostsPage />}></Route>
          <Route
            path="/people"
            exact
            element={<People users={jsonFile} dummyUsers={DUMMY_USERS} />}
          ></Route>
          <Route
            path="*"
            element={<Navigate to={`/profile/${uid}`} replace />}
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
