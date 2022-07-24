import { Route, Routes } from "react-router-dom";

import "./App.css";
import React from "react";
import BillingInvoicing from "./components/Products_Page/Billing&Invoicing/BillingInvoicing";

import { Signup } from "./pages/Signup";
import { Login } from "./pages/Login";

import { DummyHome } from "./pages/DummyHome";

import PricingPlan from "./components/PricingPage/MainPricingPage/PricingPlan";

import EmployeeTime from "./components/Products_Page/Employee_time/EmployeeTime";

import Payroll from "./components/Products_Page/Payroll/Payroll";
import ProjectBudget from "./components/Products_Page/Project_Budget/ProjectsBudget";

import Reporting from "./components/Products_Page/Reporting&Transp/Reporting";
import Landing from "./components/Homepage/Mainhomepage/Landing";

function App() {
  return (

    <div>

   

    

      <Routes>
        {/* <Route path="/landing" element={<Landing />} /> */}
        {/* <Route path="/:token" element={<DummyHome />} /> */}

        <Route path="/" element={<DummyHome />} />

        <Route path="/pricing" element={<PricingPlan />} />
        <Route path="/billing-invoicing" element={<BillingInvoicing />} />
        <Route path="/employee-time" element={<EmployeeTime />} />
        <Route path="/payroll" element={<Payroll />} />
        <Route path="/project-budget" element={<ProjectBudget />} />
        <Route path="/reporting" element={<Reporting />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
