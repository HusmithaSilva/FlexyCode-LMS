import React from "react";
import Controlp from "../Assets/Control Panel.png";
import Students from "../Assets/Students.png";
import Elearning from "../Assets/E-Learning.png";
import onlinegStudy from "../Assets/Online Group Studying.png";
import Commercial from "../Assets/Commercial.png";
import Users from "../Assets/Users.png";
import Diploma from "../Assets/Diploma.png";
import Logo from "../Assets/123456-removebg-preview 2.png";
// import Instructors from "../Body/Instructors";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
import Student from "../Pages/Student";
import Instructor from "../Pages/Instructor";
import { Sidebar, Menu, MenuItem, ProSidebarProvider  } from "react-pro-sidebar";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";

// side menu starts here
export default function SideMenu() {
  return (
    <div style={{ height: "100vh", display: "flex" }} class=" col col-2">
      
       <ProSidebarProvider>
          <BrowserRouter>
          {/* side bar */}
            <Sidebar
               
            >
              {/* menu */}
              <Menu
              
                menuItemStyles={{
                 
                  button: {
                    // the active class will be added automatically by react router
                    // so we can use it to style the active menu item

                    "&:hover": {
                      backgroundColor: "lightblue",
                    },
                    "&:active": {
                      backgroundColor: "blue",
                    },
                  },
                }}
              >
                <img
                  src={Logo}
                  class="rounded"
                  alt="Cinque Terre"
                  height={90}
                  width={200}
                />

                <hr class="ms-4 me-4"></hr>
                {/* <div class="text-center border border-primary "> */}
                  {/* <div class="container"> */}

                  <div class="row  ">
                    {/* menu items starts here */}
                    {/* Dashboard start here */}
                    <MenuItem component={<Link to="/std" className="link" />}>
                      <div class="col col-lg-3 fw-bold text-primary ms-4">
                        {/* icon for dashboard */}
                        <img
                          src={Controlp}
                          class="rounded me-2"
                          alt="Cinque Terre"
                          height={30}
                          width={30}
                        />
                        DashBoard
                      </div>
                    </MenuItem>
                  </div>
                  <div class="row ">
                    <MenuItem component={<Link to="/Student" />}>
                      {/* syudents start here */}
                      <div class="col col-lg-3  ms-4 fw-bold text-primary">
                        {/* icon for students */}
                        <img
                          src={Students}
                          class="rounded me-2"
                          alt="Cinque Terre"
                          height={30}
                          width={30}
                        />
                        Student
                      </div>
                    </MenuItem>
                  </div>
                  <div class="row ">
                    <MenuItem component={<Link to="/courses" />}>
                       {/* Courses start here */}
                      <div class="col col-lg-2  ms-4 fw-bold text-primary">
                        {/* icon for Courses */}
                        <img
                          src={Elearning}
                          class="rounded me-2"
                          alt="Cinque Terre"
                          height={30}
                          width={30}
                        />
                        Courses
                      </div>
                    </MenuItem>
                  </div>
                  <div class="row ">
                    <MenuItem component={<Link to="/instructor" />}>
                       {/* Instructor start here */}
                      <div class="col col-lg-2  ms-4 fw-bold text-primary">
                         {/* icon for instructor */}
                        <img
                          src={onlinegStudy}
                          class="rounded me-2"
                          alt="Cinque Terre"
                          height={30}
                          width={30}
                        />
                        Instructors
                      </div>
                    </MenuItem>
                  </div>
                  <div class="row ">
                    <MenuItem component={<Link to="/announcements" />}>
                      {/* Announcement start here */}
                      <div class="col col-lg-2  ms-4 fw-bold text-primary">
                        {/* icon for Announcements */}
                        <img
                          src={Commercial}
                          class="rounded me-2"
                          alt="Cinque Terre"
                          height={30}
                          width={30}
                        />
                        Announcements
                      </div>
                    </MenuItem>
                  </div>
                  <div class="row ">
                    <MenuItem component={<Link to="/users" />}>
                      {/* Users start here */}
                      <div class="col col-lg-2 ms-4 fw-bold text-primary">
                         {/* icon for users */}
                        <img
                          src={Users}
                          class="rounded me-2"
                          alt="Cinque Terre"
                          height={30}
                          width={30}
                        />
                        Users
                      </div>
                    </MenuItem>
                  </div>
                  <div class="row ">
                    <MenuItem component={<Link to="/permission" />}>
                       {/* Permission start here */}
                      <div class="col col-lg-2  ms-4 fw-bold text-primary">
                         {/* icon for Permission role */}
                        <img
                          src={Diploma}
                          class="rounded me-2"
                          alt="Cinque Terre"
                          height={30}
                          width={30}
                        />
                        Permission Role
                      </div>
                    </MenuItem>
                  </div>
                  {/* </div> */}
                {/* </div> */}
              </Menu>
            </Sidebar>
            {/* sidebar ends here */}

            {/* below codes for routes */}
            {/* in above student menu item it says link */}
            {/* that links definition shows below */}
          <section>
            <Routes>
              {/* when /Students routes hits it shows the Students page */}
              <Route path="/Student" element={<Student/>}/>
              {/* when /Instructors routes hits it shows the Students page */}
              <Route path="/instructor" element={<Instructor/>}/>
            </Routes>
          </section>
          </BrowserRouter>
          </ProSidebarProvider>

    </div>
  );
}
