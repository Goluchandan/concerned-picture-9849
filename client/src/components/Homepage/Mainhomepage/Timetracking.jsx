import React from "react";
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import "./Timetrack.css";
import { Button, ButtonGroup } from "@chakra-ui/react";
import watch from "../Images/watch1.jpg";
import Designed from "../Images/Designed.jpg";
import work from "../Images/workwhere.jpg";
import int from "../Images/100+int.jpg";

function Timetracking() {
  return (
    <>
      <div className="timetrackcontainer">
        <div>
          <h1 className="timetrackingheading">
            A time tracking tool <span>anyone</span> can use
          </h1>
          <p className="timetrackingtext">
            Whether you are a team of one or a thousand, we understand that
            being productive is different for everyone. This is why Toggl Track
            is built into any workflow.
          </p>
        </div>
        <div>
          <img src={watch} alt="" />
          <button className="buttonsIcons">Watch 1 minute video</button>
        </div>
      </div>
      <div className="iconswithtext">
        <div>
          <div>
            <img src={int} alt="" />
          </div>
          <div>
            <div className="headIcons">100+ integrations</div>
            <div>
              Use Toggl Track with the tools you already use. Track time in 100+
              popular tools with the Toggl Track browser extension.
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={work} alt="" />
          </div>

          <div>
            <div className="headIcons"> Works where you work</div>
            <div>
              Track time on our web app, desktop, and mobile apps. You can even
              start the timer from your stopwatch!
            </div>
          </div>
        </div>
        <div>
          <div>
            <img src={Designed} alt="" />
          </div>
          <div>
            <div className="headIcons">Designed to be easy</div>
            <div>
              Designed to be easy No instruction manual needed. But if you ever
              need help, our support team has a track record of responding
              within 3 hours!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timetracking;
