import React from "react";
import people from "./Images/people.jpg";
import { Button, Text } from "@chakra-ui/react";
import { ArrowUpIcon } from "@chakra-ui/icons";

import "./Toggletrack.css";
import Company from "./Company";
import booking from "./Images/Booking.jpg";
function TogglTrack() {
  return (
    <div className="peopletogglecontainer">
      <div className="peopletoggle">
        <div>
          <Text className="textcustomers">
            70,000+ customers use Toggl Track to hit their productivity and
            business goals
          </Text>
        </div>
        <div>
          <img src={people} alt="" />
        </div>
      </div>
      <div className="discountboxes">
        <div className="threeboxesofdiscount">
          <Text className="Arrowicons">
            <span>
              <ArrowUpIcon />
            </span>
            20%
          </Text>
          <Text className="toggleboxtext">
            Toggl Track increased PR Agency Sweat+Co’s profitability by at least
            20% with accurate billable hours tracking.
          </Text>
          <Text className="Readcase">Read Case study</Text>
        </div>
        <div className="threeboxesofdiscount">
          <Text className="Arrowicons">
            <span>
              <ArrowUpIcon />
            </span>
            100%
          </Text>
          <Text className="toggleboxtext">
            Toggl Track increased PR Agency Sweat+Co’s profitability by at least
            20% with accurate billable hours tracking.
          </Text>
          <Text className="Readcase">Read Case study</Text>
        </div>
        <div className="threeboxesofdiscount">
          <Text className="Arrowicons">
            <span>
              <ArrowUpIcon />
            </span>
            45%
          </Text>
          <Text className="toggleboxtext">
            Toggl Track increased PR Agency Sweat+Co’s profitability by at least
            20% with accurate billable hours tracking.
          </Text>
          <Text className="Readcase">Read Case study</Text>
        </div>
      </div>
      <div>
        <div className="companylogos">
          <img src={booking} alt="" />
          <div className="starttrackingmain">
            <Button className="starttracking" bg={""}>
              Start tracking for free
            </Button>
            <Text className="bookdemo">Or book a demo</Text>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TogglTrack;
