import "./App.css";
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./page/homepage"));

function App() {
  return (
    <Suspense
      fallback={
        <div style={{  height: "300px", color: 'white', textAlign: 'center', justifyContent: 'center' }}>
          Loading..
        </div>
      }
    >
      <HomePage />;
    </Suspense>
  );
}

export default App;
