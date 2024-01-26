import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <HomePage />
          <Footer />
          {/*<Route path="/about" component={About} /> */}
        </div>
      </Router>
    </>
  );
}

export default App;
