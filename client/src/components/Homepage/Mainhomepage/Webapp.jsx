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
      {" "}
      <p>FOR EVERY NEED</p>
      <div className="everyneedbox">
        <div className="everyneeddouble">
          <div className="everyneedsingle">
            <img src={key} alt="" />
            <div>
              <h1>Key features</h1>
              <p>
                <a href="#">
                  {" "}
                  View features by need, from time tracking to project and team
                  management
                </a>
              </p>
            </div>
          </div>

          <div className="everyneedsingle">
            <img src={employ} alt="" />
            <div>
              <h1>Employee time tracking</h1>
              <p>
                <a href="#">
                  {" "}
                  Loved by teams and team leads. Error-free timesheet data and
                  ease of use
                </a>
              </p>
            </div>
          </div>
          <div className="everyneedsingle">
            <img src={billing} alt="" />
            <div>
              <h1>Billing and invoicing</h1>
              <p>
                <a href="#">
                  {" "}
                  Capture every billable minute so you can invoice with ease and
                  precision
                </a>
              </p>
            </div>
          </div>

          <div className="everyneedsingle">
            <img src={pay} alt="" />
            <div>
              <h1>Payroll</h1>
              <p>
                <a href="#">
                  {" "}
                  Calculate payroll for contractors and employees based on
                  accurate data
                </a>
              </p>
            </div>
          </div>
          <div className="everyneedsingle">
            <img src={report} alt="" />
            <div>
              <h1>Reporting and transparency</h1>
              <p>
                <a href="#">
                  {" "}
                  Get a big picture overview or dig into details with insightful
                  reports
                </a>
              </p>
            </div>
          </div>
          <div className="everyneedsingle">
            <img src={pro} alt="" />
            <div>
              <h1>Project budgeting </h1>
              <p>
                <a href="#">
                  {" "}
                  Stay on track with budgets and deadlines. Eliminate scope
                  creep and overwork
                </a>
              </p>
            </div>
          </div>
          <div className="standagainst">
            <p>
              <a href="">
                Toggl Track stands against employee surveillance. Read our
                statement here.
              </a>
            </p>
          </div>
        </div>
        <div>
          <h1 className="mobilehead">Track any where you like</h1>
          <div className="mobileapps">
            <img src={desktop} alt="" />
            <div>
              <h1>Web app</h1>
              <a href="#">
                {" "}
                <p className="mobiletext">
                  {" "}
                  Full-suite app for time, project and team management
                </p>
              </a>
            </div>
          </div>
          <div className="mobileapps">
            {" "}
            <img src={mobile} alt="" />
            <div>
              <h1>Mobile app</h1>
              <p className="mobiletext">
                <a href="#">
                  Time tracking on the go with our iOS and Android apps
                </a>
              </p>
            </div>
          </div>
          <div className="mobileapps">
            <img src={desktop} alt="" />
            <div>
              <h1>Desktop apps</h1>
              <p className="mobiletext">
                <a href="#">
                  Launch right from your Windows, Mac, or Linux machine
                </a>
              </p>
            </div>
          </div>
          <div className="mobileapps">
            {" "}
            <img src={expo} alt="" />
            <div>
              <h1>Web app</h1>
              <p className="mobiletext">
                <a href="#">
                  Explore our native integrations or track time via browser
                  extensions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Webapp;
