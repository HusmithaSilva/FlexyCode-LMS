import React, {useState} from 'react'
// import Main from "../Component/Main";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import '../Component/Table.css'
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Human from '../Assets/human.jpg'
import std1 from '../Assets/student1.jpg'
import std2 from '../Assets/student2.jpg'
import std3 from '../Assets/student3.jpg'
import AddIcon from '@mui/icons-material/Add';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'


// student.jsx has intructor details
// this is instructor page
export default function Student() {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
        class=" d-flex justify-content-between mb-4 mt-4"
        style={{ backgroundColor: "#035B96" }}
      >
        <span class=" fw-bold text-light ms-2">All Instructors</span>
        <span class="fw-bold text-light me-3">
          {" "}
          Home {">"} Instructors {">"} All Instructors
        </span>
      </div>

      {/* add icon and button goes here */}
      {/* import from main.js in component */}
      <div class="d-flex justify-content-between mb-2 me-2">
        <span class="ms-3"></span> 
        {/* when button onclick open the popup menu */}
        <button class="btn btn-primary  ms-2" onClick={handleShow} type="submit">
          <AddIcon/>
          Add New
        </button>
      </div>

        {/* popup menu for instructors add new button */}
        {/* instead of using modal.jsx hardcode modal shows here */}
        {/* same as intructor.jsx modal */}
    {/* react-bootstrap modules used */}
      <div class="justify-content-center">

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new Instructor</Modal.Title>
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
      {/* end of popup menu */}

      {/* agow entries dropdown and search */}
      {/* imported from main.js in component */}

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


      {/* hard code table used instead of main.js */}
      {/* table and add new button show */}
      {/* edit delete functions execute */}
      {/* whole table.jsx here */}


      <div class="table-wrapper">
      <table class="table">
        <thead class="table-primary">
          <tr>
            <th scope="col">
              <ArrowDropUpIcon />
            </th>
            <th scope="col">Name</th>
            <th scope="col">Department</th>
            <th scope="col">Gender</th>
            <th scope="col">Education</th>
            <th scope="col">Mobile</th>
            <th scope="col">Email</th>
            <th scope="col">Join Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
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
            <td>Madhawa Arawinda Perera</td>
            <td> Architect</td>
            <td> male</td>
            <td>M.Com, B.Com</td>
            <td>0774125236</td>
            <td>Madhawa.p197@hotmail.com</td>
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
                  src={std1}
                  class="rounded"
                  alt="Cinque Terre"
                  height={30}
                  width={40}
                />
            </th>
            <td>Nisal buddika silva</td>
            <td>Engineering</td>
            <td>Male</td>            
            <td>BSC in IT, MSc in IT</td>
            <td>0714525632</td>
            <td>nisal.perera1977@gmail.com</td>
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
                  src={std2}
                  class="rounded"
                  alt="Cinque Terre"
                  height={30}
                  width={40}
                />
            </th>
            <td>praba malshan kodithuwaku</td>
            <td>Developer</td>
            <td>Male</td>
            <td>BSC(IT), MSc in IT, PHd</td>
            <td>0714575632</td>
            
            <td>malshan.kodi12@hotmail.com</td>
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
                  src={std3}
                  class="rounded"
                  alt="Cinque Terre"
                  height={30}
                  width={40}
                />
            </th>
            <td>chathura imalka wijesingha </td>
            <td>Management</td>
            <td>Male</td>
            <td>BSC in IT, MSc in IT</td>
            <td>0704518523</td>
            <td>chathura.j@yahoo.com</td>
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
    
  )
}
