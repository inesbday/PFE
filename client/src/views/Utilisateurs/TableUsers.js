import React, { useState } from "react";

import { DataGrid } from "@mui/x-data-grid";

import styles from "./table.module.css";
import ViewMore from "./ViewMore";
import { useSelector } from "react-redux";

let rowID;

function Table() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const users = useSelector((state) => state.users);

  const columns = [
    { field: "id", headerName: "ID", width: 10 },
    { field: "nom", headerName: "Nom", width: 80 },
    { field: "prenom", headerName: "Prenom", width: 120 },
    { field: "email", headerName: "Email", width: 180 },
    {
      field: "numtel",
      headerName: "N telephone",
      //type: "number",
      width: 130,
    },
    {
      field: "role",
      headerName: "Role",
      width: 140,
    },
    {
      field: "datecreation",
      headerName: "Date de creation",
      width: 120,
    },

    {
      field: "viewMore",
      headerName: "Details",
      width: 70,
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
        rows={users}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onSelectionModelChange={(id) => {
          rowID = id;
        }}
      />
      {show && (
        <ViewMore show={show} handleClose={toggleShow} rowID={rowID[0]} />
      )}
    </div>
  );
}

export default Table;
