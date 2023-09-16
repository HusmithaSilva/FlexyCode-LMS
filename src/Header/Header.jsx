import React from "react";
import Notification from "../Assets/Alarm.png";
import Speech from "../Assets/Speech Bubble.png";
import Human from "../Assets/human.jpg";
import ListIcon from "@mui/icons-material/List";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// header function starts here
export default function Header() {
  return (
    <div>
      <nav class="navbar">
        <div class="container-fluid shadow-sm ">
          {/* toggle button hamberger */}
          <button
            class="navbar-toggler ms-2"
          >
            {/* <span class="navbar-toggler-icon"></span> */}
            {/* icon image shows here */}
            <ListIcon sx={{ fontSize: 40 }} />
          </button>

          {/* heading top right corner */}
          {/* notification chat msg */}
          {/* profile image show here */}
          {/* drop down feature */}
          <div class="container ms-1">
            <div class="row col-md-3 offset-md-8 p-0">
             {/* chat msg icon */}
              <div class="col">
                <img
                  src={Speech}
                  class="rounded"
                  alt="Cinque Terre"
                  height={30}
                  width={30}
                />
              </div>
              {/* notification icon */}
              <div class="col">
                <img
                  src={Notification}
                  class="rounded"
                  alt="Cinque Terre"
                  height={30}
                  width={30}
                />
              </div>
              {/* profile image shows here */}
              <div class="col">
                <img
                  src={Human}
                  class="rounded-circle"
                  alt="Cinque Terre"
                  height={50}
                  width={60}
                />
              </div>
              {/* usernames shows here*/}
              <div class="col">
                <div class="row ">
                  <div class="col ">Sadun_P</div>
                  <div class="col">Admin</div>
                </div>
              </div>
              {/* drop down icon */}
              <div class="col">
                <ArrowDropDownIcon />
              </div>
            </div>
          </div>

          
        </div>
      </nav>
    </div>
  );
}
