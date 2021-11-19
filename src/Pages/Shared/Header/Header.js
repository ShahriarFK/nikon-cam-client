import React from "react";
import { NavLink, useHistory } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Header = () => {
  const { user, logOut } = useAuth();
  const history = useHistory();
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-warning px-5">
      <div class="container-fluid">
        <NavLink to="/home" class="navbar-brand text-black">
          Nikon - Cam
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <NavLink to="/home" class="nav-link active" aria-current="page">
                Home
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink to="/cameras" class="nav-link active">
                Cameras
              </NavLink>
            </li>
            {user?.email && (
              <li class="nav-item">
                <NavLink to="/dashboard" class="nav-link active">
                  Dashboard
                </NavLink>
              </li>
            )}
            <li class="nav-item">
              <NavLink to="/about" class="nav-link active">
                About Us
              </NavLink>
            </li>
          </ul>
          <div class="d-flex">
            {!user.email ? (
              <button
                onClick={() => history.push("/login")}
                class="btn btn-outline-dark"
                type="submit"
              >
                Log in
              </button>
            ) : (
              <div className="d-flex gap-2 align-items-center">
                <p className="text-black mt-3">{user.displayName}</p>
                <button
                  onClick={logOut}
                  class="btn btn-outline-dark"
                  type="submit"
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
