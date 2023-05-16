import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Home from "../home/Home";
import Footer from "../components/template/Footer";
import { Router } from "react-router";

const App = (props) => {
  return (
    <div className="app">
      <Logo />
      <Router>
        <Nav />
        <Home />
      </Router>
      <Footer />
    </div>
  );
};

export default App;
