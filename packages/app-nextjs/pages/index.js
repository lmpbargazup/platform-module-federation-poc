import React from "react";
import { constants } from "../constants/constants";
import { useAppContext } from "../context/state";

const { API_PLUGINS } = constants;

const Home = () => {
  const { state, actions } = useAppContext();

  return <div>test: {state.test}</div>;
};

export default Home;
