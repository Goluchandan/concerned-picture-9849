import React from "react";
import "./webapp.css";
import pay from "./Images/payroll.jpg";
import key from "./Images/key.jpg";
import billing from "./Images/billing.jpg";
import report from "./Images/report.jpg";
import employ from "./Images/employee.jpg";
import pro from "./Images/pbuilding.jpg";
import mobile from "./Images/mobile.jpg";
import expo from "./Images/expo.jpg";
import desktop from "./Images/desktop.jpg";
//import
function Webapp() {
  return (
    <>
      <p>FOR EVERY NEED</p>
      <div className="everyneedbox">
        <div className="everyneeddouble">
          <div className="everyneedsingle">
            <img src={key} alt="" />
            <div>
              <h1>Key features</h1>
              <p>
                View features by need, from time tracking to project and team
                management
              </p>
            </div>
          </div>

          <div className="everyneedsingle">
            <img src={employ} alt="" />
            <div>
              <h1>Employee time tracking</h1>
              <p>
                Loved by teams and team leads. Error-free timesheet data and
                ease of use
              </p>
            </div>
          </div>
          <div className="everyneedsingle">
            <img src={billing} alt="" />
            <div>
              <h1>Billing and invoicing</h1>
              <p>
                Capture every billable minute so you can invoice with ease and
                precision
              </p>
            </div>
          </div>

          <div className="everyneedsingle">
            <img src={pay} alt="" />
            <div>
              <h1>Payroll</h1>
              <p>
                Calculate payroll for contractors and employees based on
                accurate data
              </p>
            </div>
          </div>
          <div className="everyneedsingle">
            <img src={report} alt="" />
            <div>
              <h1>Reporting and transparency</h1>
              <p>
                Get a big picture overview or dig into details with insightful
                reports
              </p>
            </div>
          </div>
          <div className="everyneedsingle">
            <img src={pro} alt="" />
            <div>
              <h1>Project budgeting </h1>
              <p>
                Stay on track with budgets and deadlines. Eliminate scope creep
                and overwork
              </p>
            </div>
          </div>
          <div className="standagainst">
            <p>
              <a href="#">
                Toggl Track stands against employee surveillance. Read our
                statement here.
              </a>
            </p>
          </div>
        </div>
        <div>
          <div className="mobileapps">
            <img src={desktop} alt="" />
            <div>
              <h1>Web app</h1>
              <p>Full-suite app for time, project and team management</p>
            </div>
          </div>
          <div className="mobileapps">
            {" "}
            <img src={mobile} alt="" />
            <div>
              <h1>Web app</h1>
              <p>Full-suite app for time, project and team management</p>
            </div>
          </div>
          <div className="mobileapps">
            <img src={desktop} alt="" />
            <div>
              <h1>Web app</h1>
              <p>Full-suite app for time, project and team management</p>
            </div>
          </div>
          <div className="mobileapps">
            {" "}
            <img src={expo} alt="" />
            <div>
              <h1>Web app</h1>
              <p>Full-suite app for time, project and team management</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Webapp;
