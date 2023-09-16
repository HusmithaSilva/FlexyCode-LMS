import React from 'react'
import { Table } from './Table';
import { Modal } from './Model';
export default function Main() {

    const [modalOpen, setModalOpen] = useState(false);
    const [rows, setRows] = useState([
      {
        page: "Home",
        description: "This is the main page of the website",
        education: "hbasdhjbz",
        mobile: "4545454321432463",
        email: "mchamidi888@gmail.com",
        admissionDate: "01/11/2023",
      },
      {
        page: "About Us",
        description: "This page has details about the company",
        status: "draft",
        admissionDate: "12/09/2023",
      },
      {
        page: "Pricing",
        description: "Prices for different subscriptions",
        status: "error",
        admissionDate: "12/09/2023",
      },
    ]);
    const [rowToEdit, setRowToEdit] = useState(null);
  
    const handleDeleteRow = (targetIndex) => {
      setRows(rows.filter((_, idx) => idx !== targetIndex));
    };
  
    const handleEditRow = (idx) => {
      setRowToEdit(idx);
      setModalOpen(true);
    };
  
    const handleSubmit = (newRow) => {
      setRows((prevRows) => {
        if (rowToEdit === null) {
          return [...prevRows, newRow];
        } else {
          return prevRows.map((currRow, idx) =>
            idx === rowToEdit ? newRow : currRow
          );
        }
      });
      setModalOpen(false);
      setRowToEdit(null);
    };

  return (
    <div>
         <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
      {/* <button onClick={() => setModalOpen(true)} className="btn">
        Add
      </button> */}
      {modalOpen && (
        <Modal
          closeModal={() => {
            setModalOpen(false);
            setRowToEdit(null);
          }}
          onSubmit={handleSubmit}
          defaultValue={rowToEdit !== null ? rows[rowToEdit] : null}
        />
      )}
    </div>
  )
}
