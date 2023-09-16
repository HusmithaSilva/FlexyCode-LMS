import React from "react";
import Human from "../Assets/human.jpg";
// import Plus from "../Assets/plus.jpg"
import AddIcon from "@mui/icons-material/Add";
import Main from "../Component/Main";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { colors } from "@mui/material";

// instructors starts here
export default function Instructors() {
  return (
    <div class=" col-9  ms-4 me-3 mt-3">
      {/* instructors heading tag */}
      <div>
        <h3 class="d-flex ms-2">Instructors</h3>
      </div>

    {/* blue div tag */}
    {/* instructors and show path */}
    {/* sperate span with justify content around*/}
      <div
        class="  justify-content-around mb-4 mt-4"
        style={{ backgroundColor: "#035B96" }}
      >
        <span class=" fw-bold text-light">All Instructors</span>
        <span class="fw-bold text-light">
          {" "}
          Home {">"} Instructors {">"} All Instructors
        </span>
      </div>

      {/* get it from component Main.js  */}
      {/* table and add new button show */}
      {/* edit delete functions execute */}
      <Main />


      {/* number of entries show in table per page */}
      <div class="row justify-content-between mt-4 me-5">
        <div class="col-3 mt-3 me-3">
          <span>Showing 1 to 10 of 30 Entries</span>
        </div>

        {/* pagination component */}
        {/* show current active page */}
        {/* shows as links */}
        <div class="col-2 mt-3 me-3">
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item disabled">
                <span class="page-link">Previous</span>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  1
                </a>
              </li>
              <li class="page-item active">
                <span class="page-link">
                  2<span class="sr-only"></span>
                </span>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* pagination ends here */}
      </div>
    </div>
  );
}
