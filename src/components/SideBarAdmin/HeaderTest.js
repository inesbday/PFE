import React, { useState } from "react";

function HeaderTest() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prevState) => !prevState);
  };
  return (
    <div className="main-panel">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="navbar-wrapper">
            <div className="navbar-minimize">
              <button
                id="minimizeSidebar"
                className="btn btn-warning btn-fill btn-round btn-icon d-none d-lg-block"
                onClick={handleToggle}
              >
                <i className="fa fa-ellipsis-v visible-on-sidebar-regular"></i>

                <i className="fa fa-navicon visible-on-sidebar-mini"></i>
              </button>

              <button
                className="navbar-toggler navbar-toggler-right"
                type="button"
                data-toggle="collapse"
                aria-controls="navigation-index"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-bar burger-lines"></span>
                <span className="navbar-toggler-bar burger-lines"></span>
                <span className="navbar-toggler-bar burger-lines"></span>
              </button>
            </div>
          </div>

          <div className="collapse navbar-collapse justify-content-end">
            <ul className="nav navbar-nav mr-auto">
              <form
                className="navbar-form navbar-left navbar-search-form"
                role="search"
              >
                <div className="input-group">
                  <i className="nc-icon nc-zoom-split"></i>
                  <input
                    type="text"
                    value=""
                    className="form-control"
                    placeholder="Search..."
                  />
                </div>
              </form>
            </ul>
            <ul className="navbar-nav">
              <li className="dropdown nav-item">
                <a
                  href="#"
                  className="dropdown-toggle nav-link"
                  data-toggle="dropdown"
                >
                  <i className="nc-icon nc-bell-55"></i>
                  <span className="notification">5</span>
                  <span className="d-lg-none">Notification</span>
                </a>
                <ul className="dropdown-menu">
                  <a className="dropdown-item" href="#">
                    Notification 1
                  </a>
                  <a className="dropdown-item" href="#">
                    Notification 2
                  </a>
                  <a className="dropdown-item" href="#">
                    Notification 3
                  </a>
                  <a className="dropdown-item" href="#">
                    Notification 4
                  </a>
                  <a className="dropdown-item" href="#">
                    Notification 5
                  </a>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="https://example.com/"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="nc-icon nc-bullet-list-67"></i>
                  <span className="d-lg-none">Autres</span>
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    <i className="nc-icon nc-settings-90"></i> Settings
                  </a>
                  <div className="divider"></div>

                  <a href="#" className="dropdown-item text-danger">
                    <i className="nc-icon nc-button-power"></i> Log out
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HeaderTest;
