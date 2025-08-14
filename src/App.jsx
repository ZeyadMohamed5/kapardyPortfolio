import { useEffect, useRef } from "react";
import AppRoutes from "./routes/AppRoutes";
import { ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "framer-motion";

const App = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    function update(data) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }
    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);
  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <AppRoutes />
    </>
  );
};
export default App;
