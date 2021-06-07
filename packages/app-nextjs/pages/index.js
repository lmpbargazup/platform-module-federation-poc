import React from "react";
import Module from "../components/module";
import { System } from "../utils/module-federation";

const Home = () => {
  return (
    <>
      <h1>Root Home</h1>
      <Module />
      <System
        system={{
          url: "http://localhost:4200/remoteEntry.js",
          scope: "pipes",
          module: "./Component",
          id: 1,
          component: "app-angular",
        }}
      />
    </>
  );
};

export default Home;
