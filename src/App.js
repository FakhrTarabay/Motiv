// eslint-disable-next-line
import LoginSignUp from "./components/loginSignUp/LoginSignUp";
import Assets from "./components/assets/Assets";
import SideMenu from "./components/sideMenu/SideMenu";
import css from "./App.module.css";
import Top from "./components/top/Top";
// eslint-disable-next-line
import DashBoard from "./components/dashboard/DashBoard";
function App() {
  return (
    <div className={css.App}>
      {/* <LoginSignUp/> */}
      <SideMenu />
      <div className={css.rest}>
        <Top />
        <Assets />
        {/* <DashBoard/> */}
      </div>
    </div>
  );
}

export default App;
