import { Route, Routes } from "react-router-dom";

import "./App.css";
import PricingPlan from "./components/PricingPage/MainPricingPage/PricingPlan";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <div className="App">
      {/* <PricingPlan /> */}
      {/* Pages Come here */}

      {/* <Signup /> */}

      {/* <Login /> */}

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
