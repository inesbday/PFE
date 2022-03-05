import Dashboard from "./views/Dashboard.js";
import UserProfile from "./views/UserProfile.js";
import TableList from "./views/TableList.js";
import Typography from "./views/Typography.js";
import Icons from "./views/Icons.js";
import Maps from "./views/Maps.js";
import Notifications from "./views/Notifications.js";
import Vehicules from "./views/Vehicules/Vehicules.js";

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "nc-icon nc-chart-pie-35",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/user",
    name: "Chauffeurs",
    icon: "nc-icon nc-circle-09",
    component: UserProfile,
    layout: "/admin",
  },

  {
    path: "/table",
    name: "Mecaniciens",
    icon: "nc-icon nc-notes",
    component: TableList,
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
    path: "/notifications",
    name: "Missions",
    icon: "nc-icon nc-bell-55",
    component: Notifications,
    layout: "/admin",
  },
];

export default dashboardRoutes;
