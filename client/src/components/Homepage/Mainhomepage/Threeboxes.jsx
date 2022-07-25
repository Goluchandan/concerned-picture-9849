import React from "react";
import { Text } from "@chakra-ui/react";
import "./starttrack.css";

function Threeboxes() {
  return (
    <>
      <div className="threeboxcontainer">
        <div className="startboxessthree">
          <div >
            <Text className="starttrackhead">PROJECT BUDGETING</Text>
            <Text className="threetext"  >
              No more anxiety over late deadlines and unprofitable projects.
              Plan and set budgets with confidence!
            </Text>
            <a href=""style={{
               marginLeft:"-30px",
               fontFamily: "'GT Haptik Medium',sansSerif",
               fontSize: "1.2rem",
               textDecoration:"none",
               fontWeight:"bold"
          }}
            >Learn more</a>
          </div>
          <div>
            <Text className="starttrackhead">REPORTING</Text>
            <Text className="threetext">
              Quickly spot trends and get a big picture view in one intuitive
              dashboard. Share key insights for transparency.
            </Text>
            <a href="" style={{
               marginLeft:"-30px",
               fontFamily: "'GT Haptik Medium',sansSerif",
               fontSize: "1.2rem",
               textDecoration:"none",
               fontWeight:"bold"
          }}
            >Learn more</a>
          </div>{" "}
          <div>
            <Text className="starttrackhead">Pay Roll</Text>
            <Text className="threetext" >
              Pay employees accurately and on time. Calculating salaries has
              never been so easy.
            </Text>
            <a href="" style={{
               marginLeft:"-30px",
               fontFamily: "'GT Haptik Medium',sansSerif",
               fontSize: "1.2rem",
               textDecoration:"none",
               fontWeight:"bold"
          }}>Learn more</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Threeboxes;
