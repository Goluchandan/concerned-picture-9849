import { Route, Routes } from "react-router-dom";

import "./App.css";
import React from "react"
import BillingInvoicing from "./components/Products_Page/Billing&Invoicing/BillingInvoicing";
import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";
import HomeSameSignUp from "./components/Products_Page/HomePage_sign_up/HomeSameSignUp";


function App() {
  return (
    <div>
      {/* <PricingPlan /> */}
      {/* Pages Come here */}

      {/* <Signup /> */}

      {/* <Login /> */}
      <HomeSameSignUp />
      
      {/* <BillingInvoicing /> */}
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes> */}
    </div>

  );
}

export default App;
