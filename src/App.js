import { Outlet } from "react-router-dom";
import Nav from "./components/Base/Nav";
import Footer from "./components/Base/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
