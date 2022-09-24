import LoginSignUp from "./components/loginSignUp/LoginSignUp";
import SideMenu from "./components/sideMenu/SideMenu";
import css from "./App.module.css";
import Top from "./components/top/Top";
import DashBoard from "./components/dashboard/DashBoard";
function App() {
  return (
    <div className={css.App}>
      {/* <LoginSignUp/> */}
      <SideMenu />
      <div className={css.rest}>
        <Top />
        <DashBoard />
      </div>
    </div>
  );
}

export default App;
