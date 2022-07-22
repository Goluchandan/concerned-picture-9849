import "./App.css";

import EmployeeTime from "./components/Products_Page/Employee_time/EmployeeTime";
import PricingPlan from "./components/PricingPage/MainPricingPage/PricingPlan";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";

function App() {
  return (
    <div >
       <EmployeeTime />
      {/* <PricingPlan /> */}
      {/* Pages Come here */}
      <Signup />
      {/* <Login /> */}
    </div>
  );
}

export default App;
