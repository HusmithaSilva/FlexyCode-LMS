import React,{useState} from "react";
import { Table } from "./Table";
import { Modal } from "./Model";
import AddIcon from '@mui/icons-material/Add';
export default function Main() {

    const [modalOpen, setModalOpen] = useState(false);

    // Hard-coded table data
    const initialRows = [
      {
        page: "Home",
        description: "chamidi",
        status: "live",
        admissionDate: "12/09/2023",
        Mobile: "",
      },
      {
        page: "About Us",
        description: "This page has details about the company",
        status: "draft",
        Mobile: "",
      },
      {
        page: "Pricing",
        description: "Prices for different subscriptions",
        status: "error",
        Mobile: "",
        education: "",
        admissionDate: "",
        email: "abc@test.com",
      },
      {
        page: "Pricing",
        description: "Prices for different subscriptions",
        status: "error",
        Mobile: "",
        education: "",
        admissionDate: "",
        email: "abc@test.com",
      },
    ];
  
    const [rows, setRows] = useState(initialRows);
  
    const [rowToEdit, setRowToEdit] = useState(null);
  
    const handleDeleteRow = (targetIndex) => {
      setRows(rows.filter((_, idx) => idx !== targetIndex));
    };
  
    const handleEditRow = (idx) => {
      setRowToEdit(idx);
  
      setModalOpen(true);
    };
  
    const handleSubmit = (newRow) => {
      rowToEdit === null
        ? setRows([...rows, newRow])
        : setRows(
            rows.map((currRow, idx) => {
              if (idx !== rowToEdit) return currRow;
  
              return newRow;
            })
          );
    };


  return (
    // Add new button start here
    <div>
      {/* add icon and button goes here */}
      <div class="d-flex justify-content-between mb-2 me-2">
        <span class="ms-3"></span> 
        {/* when button onclick open the popup menu */}
        <button class="btn btn-primary  ms-2" onClick={() => setModalOpen(true)} type="submit">
          <AddIcon/>
          Add New
        </button>
      </div>

      
    {/* show number of entries shows in a colomn display here */}
    {/* and also search feature */}
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
           <li> <a class="dropdown-item" href="#">20</a></li>
           <li> <a class="dropdown-item" href="#">30</a></li>
           <li> <a class="dropdown-item" href="#">nulle</a></li>
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

      <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null && rows[rowToEdit]}
        />
      )}
    </div>
  );
}
