import React from "react";
import { BsFillTrashFill, BsFillPencilFill } from "react-icons/bs";
import "./Table.css";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import Human from "../Assets/human.jpg"

export const Table = ({ rows, deleteRow, editRow }) => {
  return (
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
                  src={Human}
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
              <button class="btn btn-success btn-sm">
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
              <button class="btn btn-success btn-sm">
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
              <button class="btn btn-success btn-sm">
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
              <button class="btn btn-success btn-sm">
                <BsFillPencilFill class="" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  //  notepad new 10 chamidi original table with map functioning data
  );
};
