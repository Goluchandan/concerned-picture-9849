import { useState } from "react";

import WithSubnavigation from "../Navbar/Navbar";

// import LargeWithLogoCentered from "../Footer/Footer";
import WithAction from "../Navbar/Navbartop";
import Bodyabove from "./Bodyabove";
import Starttrack from "./Starttrack";
import Threeboxes from "./Threeboxes";
import TogglTrack from "./Toggltrack";
import Timetracking from "./Timetracking";
import Footertop from "../../Homepage/Footer/Footer";

import HomeNavbar from "../../Products_Page/Home_Navbar/HomeNavbar"


function Landing() {
  const [count, setCount] = useState(0);

  return (
    <>

      <div className="App">

        <WithAction />
        <HomeNavbar />


        <Bodyabove />

        <Starttrack />
        <Threeboxes />
        <TogglTrack />
        <Timetracking />
        <div style={{ backgroundColor: "#2d1738" }}>
          <div style={{ width: "80%", margin: "0 auto" }}>
            <Footertop />

          </div>
        </div>

      </div>
    </>

  );
}

export default Landing;
