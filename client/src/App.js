import "./App.css";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import EmployeeTime from "./components/Products_Page/Employee_time/EmployeeTime";
import SameSignUp from "./components/Products_Page/Same_Sign_up/Same_Sign-up";
import SameSignUp2 from "./components/Products_Page/Same_Sign_up2/Same_Sign_up2";

function App() {
  return (
    <div> 
        <EmployeeTime />
        <SameSignUp />
        <SameSignUp2 />
        {/* Pages Come here */}
        {/* <Signup /> */}
          <Login />   
    </div>
  );
}

export default App;
