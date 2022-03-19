import Dashboard from "./views/Dashboard/Dashboard";
import Vehicules from "./views/Vehicules/Vehicules.js";
import Chauffeurs from "./views/Chauffeurs/Chauffeurs.js";
import Mecaniciens from "./views/Mecaniciens/Mecaniciens.js";
import Missions from "./views/Missions/Missions";
import Amendes from "./views/Amendes/Amendes";
import Pannes from "./views/Amendes/Amendes";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
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
    icon: "nc-icon nc-bell-55",
    component: Missions,
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
    path: "/Pannes",
    name: "Pannes",
    icon: "nc-icon nc-bell-55",
    component: Pannes,
    layout: "/admin",
  },
  
];

export default dashboardRoutes;
