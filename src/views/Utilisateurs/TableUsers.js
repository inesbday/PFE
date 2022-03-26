import React, { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";

import styles from "./table.module.css";
import ViewMoreCars from "../../components/Modals/ViewMoreCars/ViewMoreCars";
const rows = [
  {
    id: 1,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    role: "mecancien",
  },
  {
    id: 2,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    role: "chauffeur",

  },
  {
    id: 3,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    role: "mecancien",

  },
  {
    id: 4,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    role: "chauffeur",

  },
  {
    id: 5,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    role: "mecancien",

  },
  {
    id: 6,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    role: "chauffeur",

  },
  {
    id: 7,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    role: "mecancien",

  },
  {
    id: 8,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    role: "chauffeur",

  },
  {
    id: 9,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    role: "mecancien",

  },
  {
    id: 10,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    role: "chauffeur",

  },
];

function Table() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const columns = [
    { field: "id", headerName: "ID", width: 70, flex: 1 },
    { field: "nom", headerName: "Nom", width: 130, flex: 1 },
    { field: "prenom", headerName: "Prenom", width: 130, flex: 1 },
    {
      field: "numtel",
      headerName: "numtel",
      type: "number",
      width: 90,
      flex: 1,
    },
    {
      field: "role",
      headerName: "role",
      width: 90,
      flex: 1,
    },

    {
      field: "viewMore",
      headerName: "Details",
      flex: 1,
      width: 160,
      renderCell: () => (
        <button
          className="btn btn-warning"
          onClick={toggleShow}
          title="Voir plus"
        >
          <i className="fa-solid fa-eye"></i>
        </button>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
      <ViewMoreCars show={show} handleClose={toggleShow} />
    </div>
  );
}

export default Table;
