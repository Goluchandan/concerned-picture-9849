import "./App.css";
import PricingPlan from "./components/PricingPage/MainPricingPage/PricingPlan";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <PricingPlan />
      {/* Pages Come here */}

      <Signup />

      {/* <Login /> */}
    </div>
  );
}

export default App;
