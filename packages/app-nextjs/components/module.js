import { useAppContext } from "../context/state";
import { System } from "../utils/module-federation";

const Module = () => {
  const { state } = useAppContext();

  console.log(state.currentPlugin);

  return (
    <>
      <System system={state.currentPlugin} />;
    </>
  );
};

export default Module;
