import React, { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";

import styles from "./table.module.css";

import ViewMoreCars from "../../components/Modals/ViewMoreCars/ViewMoreCars";
const rows = [
  {
    id: 1,
    cartegrise: "111-888-8888",
    matricule: "2590-120",
    date: 35,
    etat: "mission",
  },
  {
    id: 2,
    cartegrise: "111-888-8888",
    matricule: "2590-120",
    date: 42,
    etat: "panne",
  },
  {
    id: 3,
    cartegrise: "111-888-8888",
    matricule: "2590-120",
    date: 45,
    etat: "mission",
  },
  {
    id: 4,
    cartegrise: "111-888-8888",
    matricule: "Arya",
    date: 16,
    etat: "bonne",
  },
  {
    id: 5,
    cartegrise: "111-888-8888",
    matricule: "Daenerys",
    date: 23,
    etat: "panne",
  },
  {
    id: 6,
    cartegrise: "111-888-8888",
    matricule: null,
    date: 150,
    etat: "bonne",
  },
  {
    id: 7,
    cartegrise: "111-888-8888",
    matricule: "Ferrara",
    date: 44,
    etat: "entretien",
  },
  {
    id: 8,
    cartegrise: "111-888-8888",
    matricule: "Rossini",
    date: 36,
    etat: "mission",
  },
  {
    id: 9,
    cartegrise: "111-888-8888",
    matricule: "22-88-888",
    date: 65,
    etat: "panne",
  },
  {
    id: 10,
    cartegrise: "222-777",
    matricule: "2-222-222",
    date: 25,
    etat: "bonne",
  },
];

function Table() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const columns = [
    { field: "id", headerName: "ID", width: 100},
    { field: "matricule", headerName: "Matricule", width: 90 },
    { field: "cartegrise", headerName: "Carte grise", width: 110 },
    { field: "date", headerName: "date", type: "number", width: 90 },
    {
      field: "etat",
      headerName: "etat",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 100,
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
      headerName: "Fiche technique",
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
