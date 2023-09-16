import React from "react";
import Copyright from "../Assets/copyright.png";

// footer starts here
export default function Footer() {
  return (
    // footer function starts here
    <div style={{ backgroundColor: "#035B96" }} class="col-9 ms-4">
      <div class="container text-center justify-content-center ">
        {/* footer text goes here */}
        <div class="col">
          <span class="font-weight-bold text-light fw-bold">Copyright </span>
          {/* image for copyright */}
          <img
            src={Copyright}
            class="rounded"
            alt="Cinque Terre"
            height={30}
            width={30}
            color="white"
          />
          {/* text codes here */}
          <span class="fw-bold text-light">
            {" "}
            2023 EVIDIO | Powerd by Flexy Code
          </span>
        </div>
      </div>
    </div>
  );
}
