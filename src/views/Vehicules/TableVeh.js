import React, { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";

import styles from "./table.module.css";

import ViewMoreCars from "../../components/Modals/ViewMoreCars/ViewMoreCars";
const rows = [
  { id: 1, cartegrise: "Snow", matricule: "Jon", date: 35, etat: "mission" },
  {
    id: 2,
    cartegrise: "Lannister",
    matricule: "Cersei",
    date: 42,
    etat: "panne",
  },
  {
    id: 3,
    cartegrise: "Lannister",
    matricule: "Jaime",
    date: 45,
    etat: "mission",
  },
  { id: 4, cartegrise: "Stark", matricule: "Arya", date: 16, etat: "bonne" },
  {
    id: 5,
    cartegrise: "Targaryen",
    matricule: "Daenerys",
    date: null,
    etat: "panne",
  },
  {
    id: 6,
    cartegrise: "Melisandre",
    matricule: null,
    date: 150,
    etat: "bonne",
  },
  {
    id: 7,
    cartegrise: "Clifford",
    matricule: "Ferrara",
    date: 44,
    etat: "entretien",
  },
  {
    id: 8,
    cartegrise: "Frances",
    matricule: "Rossini",
    date: 36,
    etat: "mission",
  },
  {
    id: 9,
    cartegrise: "Roxie",
    matricule: "Harvey",
    date: 65,
    etat: "panne",
  },
  { id: 10, cartegrise: "Ines", matricule: "Bday", date: 25, etat: "bonne" },
];

function Table() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "matricule", headerName: "Matricule", width: 130 },
    { field: "cartegrise", headerName: "Carte grise", width: 130 },
    {
      field: "date",
      headerName: "date",
      type: "number",
      width: 90,
    },
    {
      field: "etat",
      headerName: "etat",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      renderCell: ({ value }) => {
        let customClassName;

        switch (value) {
          case "mission":
            customClassName = styles.mission;
            break;
          case "panne":
            customClassName = styles.panne;
            break;

          case "bonne":
            customClassName = styles.bonne;
            break;
          case "entretien":
            customClassName = styles.entretien;
            break;
          default:
            break;
        }

        return (
          <div className={`${styles.icon} ${customClassName}`}>{value}</div>
        );
      },
    },

    {
      field: "viewMore",
      headerName: "",
      width: 160,
      renderCell: () => (
        <button className="btn btn-info" onClick={toggleShow}>
          View more
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
