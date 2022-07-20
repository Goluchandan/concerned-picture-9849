import { useState } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Navbar from "./Components/Navbar";
import WithSubnavigation from "./Components/Navbar";
import WithAction from "./Components/Navbartop";
import LargeWithLogoCentered from "./Components/Footer";
// import BasicUsage from "./Components/Bodyabove";
import Bodyabove from "./Components/Bodyabove";
import Product from "./Components/Product";

function Landing() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <WithAction />
      <WithSubnavigation />
      <Bodyabove />
      <Product />
      <LargeWithLogoCentered />
    </div>
  );
}

export default Landing;
