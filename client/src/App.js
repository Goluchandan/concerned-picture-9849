import { Route, Routes } from "react-router-dom";

import "./App.css";
import React from "react";
import BillingInvoicing from "./components/Products_Page/Billing&Invoicing/BillingInvoicing";

function App() {
  return (
    <div className="App">
      {/* <PricingPlan /> */}
      {/* Pages Come here */}

      {/* <Signup /> */}

      {/* <Login /> */}

      {/* <BillingInvoicing /> */}

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
