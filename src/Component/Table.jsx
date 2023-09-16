import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
    <div className="table-wrapper">
      <table className="table">
        <thead className="">
          <tr>
            <th>#</th>
            <th>Roll No</th>
            <th>Name</th>
            <th>Education</th>
            <th>Mobile</th>
            <th>Email</th>
            <th>Admission Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => {
            const statusText =
              row.status.charAt(0).toUpperCase() + row.status.slice(1);

              return (
                <tr key={idx}>
                  <td>
                    <img
                      src={row.imageUrl}
                      alt={`Photo of ${row.page}`}
                      style={{ width: "50px", height: "auto" }}
                    />
                  </td>
                  <td>{row.page}</td>
                  <td className="expand">{row.description}</td>
                  <td>
                    gcyfvjbgj
                  </td>
                  
                  <td>
                   htfgjjbkj
                  </td>
                  
                  <td>jnjnzjjknajnzjn</td>
                  <td>fyguiuhuikik</td>
                  
                  <td className="fit">
                    <span className="actions">
                      <BsFillTrashFill
                        className="delete-btn"
                        onClick={() => deleteRow(idx)}
                      />
                      <BsFillPencilFill
                        className="edit-btn"
                        onClick={() => editRow(idx)}
                      />
                    </span>
                  </td>
                </tr>
              );
          })}
        </tbody>
      </table>
    </div>
  );
};
