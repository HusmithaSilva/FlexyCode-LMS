import React, {useState} from "react";
import Human from "../Assets/human.jpg";
import Human1 from "../Assets/pic1 human.jpg";
import Human2 from "../Assets/pic2human.jpg";
import Human3 from "../Assets/pic3human.jpg";
// import Plus from "../Assets/plus.jpg"
import AddIcon from "@mui/icons-material/Add";
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
// import Main from "../Component/Main";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
// import CreateIcon from "@mui/icons-material/Create";
// import DeleteIcon from "@mui/icons-material/Delete";
// import { colors } from "@mui/material";

// instructors starts here
export default function Instructors() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div class=" col-9  ms-4 me-3 mt-3">
      {/* instructors heading tag */}
      <div>
        <h3 class="d-flex ms-2">Students</h3>
      </div>

    {/* blue div tag */}
    {/* instructors and show path */}
    {/* sperate span with justify content around*/}
      <div
        class=" d-flex justify-content-between mb-4 mt-4"
        style={{ backgroundColor: "#035B96" }}
      >
        <span class=" fw-bold text-light ms-2">All Students</span>
        <span class="fw-bold text-light me-3">
          {" "}
          Home {">"} Students {">"} All Students
        </span>
      </div>

      {/* get it from component Main.js  */}
      {/* table and add new button show */}
      {/* edit delete functions execute */}

      {/* add button */}
      {/* shows modal by clicking button */}
      <div class="d-flex justify-content-between mb-2 me-2">
        <span class="ms-3"></span> 
        {/* when button onclick open the popup menu */}
        <button class="btn btn-primary  ms-2" onClick={handleShow} type="submit">
          <AddIcon/>
          Add New
        </button>
      </div>

    {/* show modal */}
    {/* instead of using modal.jsx hardcode modal shows here */}
    {/* react-bootstrap modules used */}
    {/* handleclose function used here which is declared and completed in current page above section */}
    {/* it is just for on off modal */}
    <div class="justify-content-center">

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Student</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Name" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Department</Form.Label>
        <Form.Control type="text" placeholder="Enter Department" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Education</Form.Label>
        <Form.Control type="text" placeholder="Enter Education" />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      
      <Button  type="submit" class="btn btn-primary">
        Submit
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      </div>

        {/* drop down button for show entries */}
        {/* search function */}


        <nav class="d-flex justify-content-between mb-4 mt-4 me-4">
      <div class="row d-flex justify-content-center">

      <span class="col">Show</span>
      
      {/* dropdown start here */}
      {/* links not working but clickable */}
      {/* shows 10 initially but number wont change */}
      <div class="dropdown col">
        <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          10
        </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
           <li> <a class="dropdown-item" >20</a></li>
           <li> <a class="dropdown-item" >30</a></li>
           <li> <a class="dropdown-item" >10</a></li>
          </ul>
      </div>
      
      <span class="col">Entries</span>

      {/* search feature starts here */}
      {/* does not function  */}
      </div>
        <form class="form-inline row">
          <input class="form-control col" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success col-3 ms-2" type="submit">Search</button>
        </form>
    </nav>


    {/* table for student */}
    {/* instead of using component folder main.js */}
    {/* hard-code table shows here */}

    <div class="table-wrapper">
      <table class="table">
        <thead class="table-primary">
          <tr>
            <th scope="col">
              <ArrowDropUpIcon />
            </th>
            <th scope="col">Roll No</th>
            <th scope="col">Name</th>
            <th scope="col">Education</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Admission Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">
            <img
                  src={Human1}
                  class="rounded"
                  alt="Cinque Terre"
                  height={30}
                  width={40}
                />
            </th>
            <td>1</td>
            <td> cheshanya Anuradhini Chandrasekara</td>
            <td>M.Com, B.Com</td>
            <td>0774125236</td>
            <td>chamidi@test.com</td>
            <td>12/09/2023</td>
            <td>
              <button class="btn btn-danger btn-sm me-1">
                <BsFillTrashFill />
              </button>
              <button class="btn btn-success btn-sm" onClick={handleShow}>
                <BsFillPencilFill class="" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">
            <img
                  src={Human}
                  class="rounded"
                  alt="Cinque Terre"
                  height={30}
                  width={40}
                />
            </th>
            <td>2</td>
            <td>Suriyawanshage Nisal Karunarathna</td>
            
            <td>BSC in IT, MSc in IT</td>
            <td>0714525632</td>
            <td>nisal.perera1999@gmail.com</td>
            <td>11/10/2022</td>
            <td>
            <button class="btn btn-danger btn-sm me-1">
                <BsFillTrashFill />
              </button>
              <button class="btn btn-success btn-sm" onClick={handleShow}>
                <BsFillPencilFill class="" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">
            <img
                  src={Human2}
                  class="rounded"
                  alt="Cinque Terre"
                  height={30}
                  width={40}
                />
            </th>
            <td>3</td>
            <td>Madura lakmal subasinghe</td>
            <td>BSC in IT, MSc in IT, PHd</td>
            <td>0714575632</td>
            
            <td>madura.suba123@hotmail.com</td>
            <td>04/09/2021</td>
            <td>
            <button class="btn btn-danger btn-sm me-1">
                <BsFillTrashFill />
              </button>
              <button class="btn btn-success btn-sm" onClick={handleShow}>
                <BsFillPencilFill class="" />
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">
            <img
                  src={Human3}
                  class="rounded"
                  alt="Cinque Terre"
                  height={30}
                  width={40}
                />
            </th>
            <td>4</td>
            <td>Achintha imal Jayawardhana</td>
            <td>BSC in IT</td>
            <td>0704518523</td>
            <td>imal.j@yahoo.com</td>
            <td>12/02/2022</td>
            <td>
            <button class="btn btn-danger btn-sm me-1">
                <BsFillTrashFill />
              </button>
              <button class="btn btn-success btn-sm" onClick={handleShow}>
                <BsFillPencilFill class="" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>


        {/* didnt use the main.js file anywhere in the project */}
        {/* it is just declared not us in anywhere */}
        {/* but dont delete yet */}

      {/* <Main /> */}


      {/* number of entries show in table per page */}
      <div class="row justify-content-between mt-4 me-5">
        <div class="col-3 mt-3 me-3">
          <span>Showing 1 to 4 of 12 Entries</span>
        </div>

        {/* pagination component */}
        {/* show current active page */}
        {/* shows as links */}
        <div class="col-2 mt-3 me-3">
          <nav aria-label="...">
            <ul class="pagination">
              <li class="page-item ">
                <span class="page-link">Previous</span>
              </li>
              <li class="page-item">
                <a class="page-link" >
                  1
                </a>
              </li>
              <li class="page-item active">
                <span class="page-link">
                  2<span class="sr-only"></span>
                </span>
              </li>
              <li class="page-item">
                <a class="page-link" >
                  3
                </a>
              </li>
              <li class="page-item">
                <a class="page-link" >
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
