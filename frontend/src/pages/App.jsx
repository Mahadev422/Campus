import { Outlet } from "react-router-dom";

// local
import Header from "../components/home/Header";
import { useEffect } from "react";
import { useAuth } from "../store/useAuth";
import WebLoader from "../components/loaders/WebLoader";

function App() {
  const { loading, checkLogin, user} = useAuth();

  useEffect(() => {
    if (!user) checkLogin();
  }, [user]);
  
  if (loading) return <WebLoader />;
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
