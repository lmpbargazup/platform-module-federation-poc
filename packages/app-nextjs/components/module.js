import { useAppContext } from "../context/state";
import { System } from "../utils/module-federation";

const Module = () => {
  const { state } = useAppContext();

  return (
    <>
      <System system={state.currentPlugin} />
    </>
  );
};

export default Module;
