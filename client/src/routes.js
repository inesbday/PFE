import Dashboard from "./views/Dashboard/Dashboard";
import Vehicules from "./views/Vehicules/Vehicules.js";
import Chauffeurs from "./views/Chauffeurs/Chauffeurs.js";
import Mecaniciens from "./views/Mecaniciens/Mecaniciens.js";
import Missions from "./views/Missions/Missions";
import Amendes from "./views/Amendes/Amendes";
import MissionChauffeur from "./views/MissionChauffeur/MissionChauffeur";
import Utilisateurs from "./views/Utilisateurs/Utilisateurs";
import Notifications from "./views/Notifications/Notifications";
import MissionMecanicien from "./views/MissionMecanicien/MissionMecanicien";
import Pannes from "./views/Pannes/Pannes";
import Checklist from "./components/Checklist/Checklist";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Tableau de bord",
    icon: "fa-solid fa-house",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/Utilisateurs",
    name: "Utilisateurs",
    icon: "fa-solid fa-users-gear",
    component: Utilisateurs,
    layout: "/admin",
  },
  {
    path: "/vehicules",
    name: "Vehicules",
    icon: "fa-solid fa-car",
    component: Vehicules,
    layout: "/admin",
  },
  {
    path: "/Chauffeurs",
    name: "Chauffeurs",
    icon: "fa-solid fa-user-tie",
    component: Chauffeurs,
    layout: "/admin",
  },

  {
    path: "/Mecaniciens",
    name: "Mecaniciens",
    icon: " fa-solid fa-user-gear",
    component: Mecaniciens,
    layout: "/admin",
  },

  {
    path: "/Missions",
    name: "Missions",
    icon: " fa-solid fa-pen-to-square",
    component: Missions,
    layout: "/admin",
  },
  {
    path: "/Pannes",
    name: "Pannes",
    icon: "fa-solid fa-screwdriver-wrench",
    component: Pannes,
    layout: "/admin",
  },

  {
    path: "/Amendes",
    name: "Amendes",
    icon: "fa-solid fa-file-invoice-dollar",
    component: Amendes,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "fa-solid fa-bell",
    component: Notifications,
    layout: "/admin",
  },

  {
    path: "/MissionChauffeur",
    name: "Mes Missions",
    icon: "fa-solid fa-pen-to-square",
    component: MissionChauffeur,
    layout: "/chauffeur",
  },
  {
    path: "/Amendes",
    name: "Amendes",
    icon: "fa-solid fa-file-invoice-dollar",
    component: Amendes,
    layout: "/chauffeur",
  },
  {
    path: "/Pannes",
    name: "Pannes",
    icon: "fa-solid fa-screwdriver-wrench",
    component: Pannes,
    layout: "/chauffeur",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "fa-solid fa-bell",
    component: Notifications,
    layout: "/chauffeur",
  },
  {
    path: "/MissionMecanicien",
    name: "Mes Missions",
    icon: "fa-solid fa-pen-to-square",
    component: MissionMecanicien,
    layout: "/mecanicien",
  },
  {
    path: "/vehicules",
    name: "Vehicules",
    icon: "fa-solid fa-car",
    component: Vehicules,
    layout: "/mecanicien",
  },

  {
    path: "/notifications",
    name: "Notifications",
    icon: "fa-solid fa-bell",
    component: Notifications,
    layout: "/mecanicien",
  },
  {
    path: "/dashboard",
    name: "Tableau de bord",
    icon: "fa-solid fa-house",
    component: Dashboard,
    layout: "/chef-de-parc",
  },
  {
    path: "/vehicules",
    name: "Vehicules",
    icon: "fa-solid fa-car",
    component: Vehicules,
    layout: "/chef-de-parc",
  },
  {
    path: "/Chauffeurs",
    name: "Chauffeurs",
    icon: "fa-solid fa-user-tie",
    component: Chauffeurs,
    layout: "/chef-de-parc",
  },

  {
    path: "/Mecaniciens",
    name: "Mecaniciens",
    icon: " fa-solid fa-user-gear",
    component: Mecaniciens,
    layout: "/chef-de-parc",
  },

  {
    path: "/checklist",
    name: "Liste de controle",
    icon: "fa-solid fa-list-check",
    component: Checklist,
    layout: "/chef-de-parc",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "fa-solid fa-bell",
    component: Notifications,
    layout: "/chef-de-parc",
  },
];

export default dashboardRoutes;
