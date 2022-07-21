import "./App.css";
import LargeWithLogoCentered from "./components/Homepage/Footer/Footer";
import WithSubnavigation from "./components/Homepage/Navbar/Navbar";
import Landing from "./components/Homepage/Mainhomepage/Landing";

function App() {
  return (
    <div>
      <WithSubnavigation />
      <Landing />
      <LargeWithLogoCentered />
    </div>
  );
}

export default App;
