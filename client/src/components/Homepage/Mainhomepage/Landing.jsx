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
<<<<<<< HEAD
=======
// import LargeWithLogoCentered from "../Footer/Footer"
>>>>>>> beb1f46c1e40a7b945bcf4a0216540157ea39f84

function Landing() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">

      <WithAction />

      <Bodyabove />

      <Starttrack />
      <Threeboxes />
<<<<<<< HEAD

=======
>>>>>>> beb1f46c1e40a7b945bcf4a0216540157ea39f84
      <TogglTrack />
      <Timetracking />
      <Footertop />
    </div>
  );
}

export default Landing;
