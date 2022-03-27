import React, { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";

import styles from "./table.module.css";
import ViewMoreUsers from "../../components/Modals/ViewMoreUsers/ViewMoreUsers";
const rows = [
  {
    id: 1,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    email: "AliAhmed@gmail.com",
    role: "mecancien",
    datecreation: "20-20-2022",
  },
  {
    id: 2,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    email: "AliAhmed@gmail.com",
    role: "chauffeur",
    datecreation: "20-20-2022",
  },
  {
    id: 3,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    email: "AliAhmed@gmail.com",

    role: "mecancien",
    datecreation: "20-20-2022",
  },
  {
    id: 4,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    email: "AliAhmed@gmail.com",
    role: "chauffeur",
    datecreation: "20-20-2022",
  },
  {
    id: 5,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    email: "AliAhmed@gmail.com",

    role: "mecancien",
    datecreation: "20-20-2022",
  },
  {
    id: 6,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    email: "AliAhmed@gmail.com",

    role: "chauffeur",
    datecreation: "20-20-2022",
  },
  {
    id: 7,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    role: "mecancien",
    datecreation: "20-20-2022",
  },
  {
    id: 8,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    email: "AliAhmed@gmail.com",

    role: "chauffeur",
    datecreation: "20-20-2022",
  },
  {
    id: 9,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    email: "AliAhmed@gmail.com",

    role: "mecancien",
    datecreation: "20-20-2022",
  },
  {
    id: 10,
    prenom: "Ahmed",
    nom: "Ali",
    numtel: "55 555 555",
    email: "AliAhmed@gmail.com",

    role: "chauffeur",
    datecreation: "20-20-2022",
  },
];

function Table() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const columns = [
    { field: "id", headerName: "ID", width: 70, flex: 0.3 },
    { field: "nom", headerName: "Nom", width: 130, flex: 0.5 },
    { field: "prenom", headerName: "Prenom", width: 130, flex: 0.5 },
    { field: "email", headerName: "Email", width: 130, flex: 1 },
    {
      field: "numtel",
      headerName: "N telephone",
      //type: "number",
      width: 90,
      flex: 0.5,
    },
    {
      field: "role",
      headerName: "Role",
      width: 90,
      flex: 1,
    },
    {
      field: "datecreation",
      headerName: "Date de creation",
      width: 130,
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
      <ViewMoreUsers show={show} handleClose={toggleShow} />
    </div>
  );
}

export default Table;
