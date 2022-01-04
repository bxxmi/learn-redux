import { useContext } from "react";
import ReduxContent from "../contexts/ReduxContext";

export default function useReduxDispatch() {
  const store = useContext(ReduxContent);

  return store.dispatch;
}
