import React from "react";
import "zone.js";
import Module from "../components/module";
import { System } from "../utils/module-federation";

const Home = () => {
  return (
    <>
      <h1>Root Home</h1>
      <Module />
      <System
        system={{
          url: "http://localhost:3005/remoteEntry.js",
          scope: "mfeangular",
          module: "./module",
          isMenuOption: false,
          component: "mfe-angular",
        }}
      />
    </>
  );
};

export default Home;
