import React from "react";
import { System } from "../utils/module-federation";

const Home = () => {
  return (
    <>
      <h1>Root Home</h1>
      {/* <Module /> */}
      <System
        system={{
          url: "http://localhost:3002/remoteEntry.js",
          scope: "contact",
          module: "./module",
          id: 10,
          component: "app-contact",
        }}
      />
      {/* <System
        system={{
          url: "http://localhost:4200/remoteEntry.js",
          scope: "angular",
          module: "./module",
          id: 2,
          component: "app-angular",
        }}
      /> */}
    </>
  );
};

export default Home;
