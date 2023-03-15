import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import Layout from "./Components/Layout/Layout";
import Booking from "./Components/Booking/Booking";
import CalendarS from "./Components/Calendar/Calendar";
import Messages from "./Components/Messages/Messages";
import SellCars from "./Components/SellCars/SellCars";
import Services from "./Components/Services/Services";
import Settings from "./Components/Settings/Settings";
import Assets from "./Components/Assets/Assets";
import DashBoard from "./Components/Dashboard/Dashboard";

const RoutesX = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact={true} path={"/"} element={<SignUp />} />
        <Route
          exact={true}
          path={"/Assets"}
          element={
            <Layout>
              <Assets />
            </Layout>
          }
        />
        <Route
          exact={true}
          path={"/Dashboard"}
          element={
            <Layout>
              <DashBoard />
            </Layout>
          }
        />
        <Route
          exact={true}
          path={"/Booking"}
          element={
            <Layout>
              <Booking />
            </Layout>
          }
        />
        <Route exact={true} path={"/Login"} element={<SignIn />} />
        <Route
          exact={true}
          path={"/Selling"}
          element={
            <Layout>
              <SellCars />
            </Layout>
          }
        />
        <Route
          exact={true}
          path={"/Calendar"}
          element={
            <Layout>
              <CalendarS />
            </Layout>
          }
        />
        <Route
          exact={true}
          path={"/Settings"}
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
        <Route
          exact={true}
          path={"/Messages"}
          element={
            <Layout>
              <Messages />
            </Layout>
          }
        />
        <Route
          exact={true}
          path={"/Services"}
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesX;
