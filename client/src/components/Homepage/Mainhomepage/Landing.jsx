import { useState } from "react";

import WithSubnavigation from "../Navbar/Navbar";

// import LargeWithLogoCentered from "../Footer/Footer";
import WithAction from "../Navbar/Navbartop";
import Bodyabove from "./Bodyabove";
import Starttrack from "./Starttrack";
import Threeboxes from "./Threeboxes";
import TogglTrack from "./Toggltrack";
import Timetracking from "./Timetracking";
import Footertop from "../Footer/Footer";

function Landing() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <WithAction />

      <Bodyabove />

      <Starttrack />
      <Threeboxes />

      <TogglTrack />
      <Timetracking />
      <Footertop />
    </div>
  );
}

export default Landing;
