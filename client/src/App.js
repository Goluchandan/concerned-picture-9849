import "./App.css";
import React from "react"
import BillingInvoicing from "./components/Products_Page/Billing&Invoicing/BillingInvoicing";
import Payroll from "./components/Products_Page/Payroll/Payroll";
import Reporting from "./components/Products_Page/Reporting&Transp/Reporting";
import ProjectBudget from "./components/Products_Page/Project_Budget/ProjectsBudget";


function App() {
  return (
    <div >
     {/* <BillingInvoicing /> */}
     <Payroll />
     <Reporting />
     <ProjectBudget />

    </div>
  );
}

export default App;
