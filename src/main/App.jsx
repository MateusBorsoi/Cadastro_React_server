import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Footer from "../components/template/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "../Routes";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Routing />
        <Logo />
        <Nav />
        <Routing />
        <Footer />
      </Router>
    </div>
  );
};

export default App;
