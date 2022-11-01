import React from "react";
import Style from "./Profile.module.scss";
import { Divider } from "@mui/material";
import home from "../../svg/setHome.svg";
import setMail from "../../svg/setMail.svg";
import setCake from "../../svg/setCake.svg";
import Avatar from "@mui/material/Avatar";
const Profile = () => {
  function HandleClick() {
    return 0;
  }
  return (
    <>
      <span className={Style.text1}>Profile</span>
      <span className={Style.text2}>
        Update your photo and personal details here.
      </span>
      <Divider sx={{ background: "#323745" }} />
      <div className={Style.Row2}>
        <div className={Style.col}>
          <span className={Style.text}>Live in</span>
          <div className={Style.begin}>
            <img alt="ico" src={home} />
            <input
              className={Style.searchBar}
              type={"search"}
              placeholder="..."
            ></input>
          </div>
        </div>{" "}
        <div className={Style.col}>
          <span className={Style.text}>Street Address</span>
          <div className={Style.begin}>
            <img alt="ico" src={home} />
            <input
              className={Style.searchBar}
              type={"search"}
              placeholder="Wallaby street"
            ></input>
          </div>
        </div>
        <button onClick={HandleClick} className={Style.btn}>
          <span className={Style.text3}>Update</span>
        </button>
      </div>
      <div className={Style.Row2}>
        <div className={Style.col}>
          <span className={Style.text}>Username</span>
          <div className={Style.begin}>
            <img alt="ico" src={setMail} />
            <input
              className={Style.searchBar}
              type={"search"}
              placeholder="example@example.com"
            ></input>
          </div>
        </div>{" "}
        <button onClick={HandleClick} className={Style.btn}>
          <span className={Style.text3}>Update</span>
        </button>
      </div>
      <div className={Style.Row2}>
        <div className={Style.col}>
          <span className={Style.text}>Date Of Birth</span>
          <div className={Style.begin}>
            <img alt="ico" src={setCake} />
            <input
              className={Style.searchBar}
              type={"search"}
              placeholder="Happy birthday"
            ></input>
          </div>
        </div>{" "}
        <div className={Style.col}>
          <span className={Style.text}>Gender</span>
          <div className={Style.begin}>
            <input
              className={Style.searchBar}
              type={"search"}
              placeholder="..."
            ></input>
          </div>
        </div>
        <button onClick={HandleClick} className={Style.btn}>
          <span className={Style.text3}>Update</span>
        </button>
      </div>
      <Divider sx={{ background: "#323745" }} />
      <div className={Style.Row} style={{ justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div className={Style.col}>
            <span className={Style.text1}>Your Photo</span>
            <span className={Style.text2}>
              This will be displayed on your profile.
            </span>
          </div>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 48, height: 48 }}
          />
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <button onClick={HandleClick} className={Style.btn}>
            <span className={Style.text3}>Update</span>
          </button>
          <button onClick={HandleClick} className={Style.btn}>
            <span className={Style.text3}>Delete</span>
          </button>
        </div>
      </div>
      <Divider sx={{ background: "#323745" }} />
      <div className={Style.Row2} style={{ alignItems: "center" }}>
        <div className={Style.col}>
          <span className={Style.text1}>Social Profiles</span>
        </div>
        <div className={Style.col}>
          <div className={Style.begin}>
            {/* <img alt="ico" src={setCake} /> */}
            <input
              className={Style.searchBar}
              type={"search"}
              placeholder="twitter/..."
            ></input>
          </div>
          <div className={Style.begin}>
            {/* <img alt="ico" src={setCake} /> */}
            <input
              className={Style.searchBar}
              type={"search"}
              placeholder="facebook/..."
            ></input>
          </div>
        </div>
        <button onClick={HandleClick} className={Style.btn}>
          <span className={Style.text3}>Update</span>
        </button>
      </div>
    </>
  );
};

export default Profile;
