import { Outlet } from "react-router-dom";

// local
import Header from "../components/home/Header";
import { useEffect } from "react";
import { useAuth } from "../store/useAuth";
import WebLoader from "../components/loaders/WebLoader";

function App() {
  const { userLoader, checkLogin, user} = useAuth();

  useEffect(() => {
    checkLogin();
  }, [0]);
  
  if (userLoader) return <WebLoader />;
  return (
    <>
      <div className="w-full sticky top-0 z-100">
        <Header />
      </div>
      <main className="no-scroll">
        <Outlet />
      </main>
    </>
  );
}

export default App;
