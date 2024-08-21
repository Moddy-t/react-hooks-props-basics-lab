import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

import user from "../data/user";
console.log(user);

function App() {
  return (
    <>
      <NavBar />
      <Home name={user.name} city={user.city} color={user.color} />
      <About
        bio={user.bio}
        github={user.links.github}
        linkedin={user.links.linkedin}
      />
    </>
  );
}

export default App;
