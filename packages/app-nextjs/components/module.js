import { useAppContext } from "../context/state";
import { System } from "../utils/module-federation";

const Module = () => {
  const { state } = useAppContext();

  return <>{state.currentPlugin && <System system={state.currentPlugin} />}</>;
};

export default Module;
