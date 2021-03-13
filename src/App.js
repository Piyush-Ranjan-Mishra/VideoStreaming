import "./App.css";
import React, { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./page/homepage"));

function App() {
  return <GuardLazyComponentToSSR />;
}

export const GuardLazyComponentToSSR = () => {
  const [isFront, setIsFront] = React.useState(false);

  React.useEffect(() => {
    process.nextTick(() => {
      // eslint-disable-next-line no-undef
      if (globalThis.window ?? false) {
        setIsFront(true);
      }
    });
  }, []);

  if (!isFront) return null;

  return (
    <Suspense
      fallback={
        <div
          style={{
            display: "flex",
            height: "300px",
            color: "white",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          Loading..
        </div>
      }
    >
      <HomePage />;
    </Suspense>
  );
};
export default App;
