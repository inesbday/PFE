import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import styles from "./table.module.css";
import ViewMore from "./ViewMore";
const rows = [
  {
    id: 1,
    client: "Simsoft",
    vehicule: "Peugot",
    chauffeur: "Ines Bday",
    lieuDepart: "Sousse",
    lieuArrive: "Tunis",
    produit: "Blé",
    etat: "attente",
  },
  {
    id: 2,
    client: "Simsoft",
    vehicule: "Peugot",
    chauffeur: "Ines Bday",
    lieuDepart: "Sousse",
    lieuArrive: "Tunis",
    produit: "Blé",
    etat: "en_cours",
  },
  {
    id: 3,
    client: "Simsoft",
    vehicule: "Peugot",
    chauffeur: "Ines Bday",
    lieuDepart: "Sousse",
    lieuArrive: "Tunis",
    produit: "Blé",
    etat: "annulée",
  },
  {
    id: 4,
    client: "Simsoft",
    vehicule: "Peugot",
    chauffeur: "Ines Bday",
    lieuDepart: "Sousse",
    lieuArrive: "Tunis",
    produit: "Blé",
    etat: "en_cours",
  },
  {
    id: 5,
    client: "Simsoft",
    vehicule: "Peugot",
    chauffeur: "Ines Bday",
    lieuDepart: "Sousse",
    lieuArrive: "Tunis",
    produit: "Blé",
    etat: "effectuée",
  },
  {
    id: 6,
    client: "Simsoft",
    vehicule: "Peugot",
    chauffeur: "Ines Bday",
    lieuDepart: "Sousse",
    lieuArrive: "Tunis",
    produit: "Blé",
    etat: "effectuée",
  },
  {
    id: 7,
    client: "Simsoft",
    vehicule: "Peugot",
    chauffeur: "Ines Bday",
    lieuDepart: "Sousse",
    lieuArrive: "Tunis",
    produit: "Blé",
    etat: "effectuée",
  },
];

function Table() {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);

  const columns = [
    { field: "id", headerName: "ID", width: 60 },
    { field: "client", headerName: "Client", width: 100 },
    {
      field: "vehicule",
      headerName: "Véhicule",
      width: 100,
    },
    {
      field: "chauffeur",
      headerName: "Chauffeur",
      width: 130,
    },
    {
      field: "lieuDepart",
      headerName: "Lieu départ",
      width: 130,
    },
    {
      field: "lieuArrive",
      headerName: "Lieu arrivé",
      width: 130,
    },
    {
      field: "produit",
      headerName: "Produit",
      width: 100,
    },
    {
      field: "etat",
      headerName: "Etat",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 140,
      renderCell: ({ value }) => {
        let customClassName;

        switch (value) {
          case "attente":
            customClassName = styles.attente;
            break;
          case "annulée":
            customClassName = styles.annulée;
            break;

          case "effectuée":
            customClassName = styles.effectuée;
            break;
          case "en_cours":
            customClassName = styles.en_cours;
            break;
          default:
            break;
        }

        return (
          <div className={`${styles.icon} ${customClassName} text-uppercase`}>
            {value}
          </div>
        );
      },
    },

    {
      field: "Actions",
      headerName: "Actions",
      width: 220,
      renderCell: () => (
        <div className="d-flex justify-content-between align-items-center w-100">
          <button className="btn btn-secondary" title="Modifier">
            <i class="fa-solid fa-pen"></i>
          </button>
          <button
            className="btn btn-warning"
            onClick={toggleShow}
            title="Voir plus"
          >
            <i class="fa-solid fa-eye"></i>
          </button>

          <button className="btn btn-primary" title="Télécharger">
            <i class="fa-solid fa-circle-down"></i>
          </button>
          <button className="btn btn-danger" title="Supprimer">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
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
      <ViewMore show={show} handleClose={toggleShow} />
    </div>
  );
}

export default Table;
