import { useContext, useEffect, useState } from "react";
import ReduxContent from "../contexts/ReduxContext";

// custom hook
export default function useReduxState() {
  const store = useContext(ReduxContent);
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });

    // clear
    return () => {
      unsubscribe();
    };
  }, [store]);

  return state;
}
