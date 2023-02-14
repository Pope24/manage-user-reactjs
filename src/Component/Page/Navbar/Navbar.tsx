import React from "react";
import { Link, useParams } from "react-router-dom";
import Styles from "./Navbar.module.css";
type Props = {
  setIsLogin: Function;
};

const Navbar = (props: Props) => {
  const { idUser } = useParams();
  const { setIsLogin } = props;
  return (
    <div className={Styles.Navbar}>
      <nav
        className={`navbar navbar-expand-lg navbar-light`}
        style={{ background: "#0a4275", color: "#fff" }}
      >
        <div className="container-fluid">
          <a
            href="#"
            className="navbar-brand"
            style={{ color: "#fff", fontWeight: 700 }}
          >
            System manager
          </a>
          <button
            type="button"
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav">
              <Link
                className="nav-item nav-link"
                style={{ color: "#fff", fontWeight: 700 }}
                to={`/`}
              >
                Home
              </Link>
              <Link
                className="nav-item nav-link"
                style={{ color: "#fff", fontWeight: 700 }}
                to={`/add-user`}
              >
                Add more
              </Link>
              <a
                href="#"
                className="nav-item nav-link"
                style={{ color: "#fff" }}
              >
                Messages
              </a>
              <a
                href="#"
                className="nav-item nav-link disabled"
                style={{ color: "#fff" }}
              >
                Reports
              </a>
            </div>
            <div
              className={`navbar-nav ms-auto ${Styles.Hover__Cursor}`}
              onClick={() => {
                setIsLogin(false);
              }}
            >
              Log out
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
