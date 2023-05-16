import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Logo from "../components/template/Logo";
import Nav from "../components/template/Nav";
import Home from "../home/Home";
import Footer from "../components/template/Footer";
import { Router } from "react-router";
import { BrowserRouter } from "react-router-dom";

const App = (props) => {
  return (
    <div className="app">
      <BrowserRouter>
        <Logo />
        <Nav />
        <Home />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
