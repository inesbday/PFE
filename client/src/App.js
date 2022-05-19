import React, { useState, useEffect } from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";

import AdminNavbar from "./components/Navbars/AdminNavbar";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import routes from "./routes";

import { ToastContainer } from "react-toastify";

import sidebarImage from "./assets/img/sidebar.jpg";
import { useSelector } from "react-redux";

function App() {
  const [image, setImage] = useState(sidebarImage);
  const [color, setColor] = useState("black");
  const [hasImage, setHasImage] = useState(true);

  // Select auth state from the store (false or true)
  const { auth } = useSelector((state) => state.auth);

  // Select the current user from the store
  const { user } = useSelector((state) => state.auth);

  const location = useLocation();
  const mainPanel = React.useRef(null);

  const getRoutes = (routes) => {
    // if auth state is true then return routes
    if (auth) {
      return (
        routes
          // filter the routes depending on the user's role
          .filter(({ layout }) => layout.split("/")[1] === user.role)
          .map((prop, key) => {
            return (
              <Route
                path={prop.layout + prop.path}
                render={(props) => <prop.component {...props} />}
                key={key}
              />
            );
          })
      );
    } else {
      // if auth state is false, redirect to login page
      return <Redirect to="/login" />;
    }
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainPanel.current.scrollTop = 0;
    if (
      window.innerWidth < 993 &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      var element = document.getElementById("bodyClick");
      element.parentNode.removeChild(element);
    }
  }, [location]);

  const getSubmenuRoutes = () => {
    let subMenus = [];
    if (auth) {
      routes.forEach((prop, index) => {
        if (prop.subMenus && prop.subMenus.length) {
          subMenus.push(
            ...prop.subMenus.map((subMenu, subMenuIndex) => (
              <Route
                path={subMenu.layout + subMenu.path}
                render={(props) => <subMenu.component {...props} />}
                key={subMenuIndex}
              />
            ))
          );
        }
      });
    }
    return subMenus;
  };

  return (
    <div className="wrapper">
      <ToastContainer pauseOnHover={false} autoClose={2000} />
      <Sidebar color={color} image={hasImage ? image : ""} routes={routes} />
      <div className="main-panel" ref={mainPanel}>
        <AdminNavbar />
        <div className="content">
          <Switch>
            {getRoutes(routes)}
            {getSubmenuRoutes()}
          </Switch>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
