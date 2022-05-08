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
import AmendesAdmin from "./views/AmendesAdmin/AmendesAdmin";
import Pannes from "./views/Pannes/Pannes";
import Checklist from "./components/Checklist/Checklist";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/Utilisateurs",
    name: "Utilisateurs",
    icon: "fa-solid fa-user-graduate",
    component: Utilisateurs,
    layout: "/admin",
  },
  {
    path: "/vehicules",
    name: "Vehicules",
    icon: "nc-icon nc-atom",
    component: Vehicules,
    layout: "/admin",
  },
  {
    path: "/Chauffeurs",
    name: "Chauffeurs",
    icon: "nc-icon nc-circle-09",
    component: Chauffeurs,
    layout: "/admin",
  },

  {
    path: "/Mecaniciens",
    name: "Mecaniciens",
    icon: "nc-icon nc-notes",
    component: Mecaniciens,
    layout: "/admin",
  },

  {
    path: "/Missions",
    name: "Missions",
    icon: "nc-icon nc-notes",
    component: Missions,
    layout: "/admin",
  },
  {
    path: "/Pannes",
    name: "Pannes",
    icon: "nc-icon nc-settings-tool-66",
    component: Pannes,
    layout: "/admin",
  },

  {
    path: "/Amendes",
    name: "Amendes",
    icon: "nc-icon nc-bell-55",
    component: Amendes,
    layout: "/admin",
  },

  {
    path: "/MissionChauffeur",
    name: "MissionChauffeur",
    icon: "nc-icon nc-bell-55",
    component: MissionChauffeur,
    layout: "/chauffeur",
  },
  {
    path: "/MissionMecanicien",
    name: "MissionMecanicien",
    icon: "nc-icon nc-bell-55",
    component: MissionMecanicien,
    layout: "/mecanicien",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/mecanicien",
  },
  {
    path: "/AmendesAdmin",
    name: "AmendesAdmin",
    icon: "nc-icon nc-bell-55",
    component: AmendesAdmin,
    layout: "/admin",
  },
  {
    path: "/checklist",
    name: "Checklist",
    icon: "nc-icon nc-check-2",
    component: Checklist,
    layout: "/chef-de-parc",
  },
];

export default dashboardRoutes;
