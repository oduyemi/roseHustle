import { Outlet } from "react-router";
import "../App.css";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import ScrollToTop from "../utils/ScrollToTop";

function App() {
  return (
    <div className={`w-full`}>
      <Navigation />
      <div>
        <ScrollToTop />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;

//
