import React, { useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import AdminRoute from "../AdminRoute/AdminRoute";
import Addproduct from "./Admin/Addproduct/Addproduct";
import Allorders from "./Admin/Allorders/Allorders";
import Makeadmin from "./Admin/Makeadmin/Makeadmin";
import Manageproducts from "./Admin/Manageproducts/Manageproducts";
import Dashboardhome from "./Dashboardhome";
import MyOrders from "./NormalUser/MyOrders/MyOrders";
import Payment from "./NormalUser/Payment/Payment";
import Review from "./NormalUser/Review/Review";

const Dashboard = () => {
  const { admin, logOut } = useAuth();
  const { url, path } = useRouteMatch();
  return (
    <div class="row">
      <div class="col-2 bg-dark" style={{ height: "720px" }}>
        <nav class="navbar d-flex justify-content-center">
          <ul class="nav navbar-nav">
            <li class="nav-item my-5">
              <h3 class="text-white"> Nikon_cam </h3>
            </li>
            <li class="nav-item py-2">
              <Link to="/dashboard" class="text-warning text-decoration-none">
                {" "}
                Dashboard{" "}
              </Link>
            </li>
            <li class="nav-item py-2">
              <Link to="/home" class="text-warning text-decoration-none">
                {" "}
                Home{" "}
              </Link>
            </li>
            {!admin ? (
              <>
                <li class="nav-item py-2">
                  <Link to={`${url}/pay`} class="text-warning text-decoration-none">
                    {" "}
                    Payment{" "}
                  </Link>
                </li>
                <li class="nav-item py-2">
                  <Link to={`${url}/myOrders`} class="text-warning text-decoration-none">
                    {" "}
                    My Orders{" "}
                  </Link>
                </li>
                <li class="nav-item py-2">
                  <Link to={`${url}/review`} class="text-warning text-decoration-none">
                    {" "}
                    Review{" "}
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li class="nav-item py-2">
                  <Link to={`${url}/allOrders`} class="text-warning text-decoration-none">
                    {" "}
                    Manage All Orders{" "}
                  </Link>
                </li>
                <li class="nav-item py-2">
                  <Link to={`${url}/makeAdmin`} class="text-warning text-decoration-none">
                    {" "}
                    Make Admin{" "}
                  </Link>
                </li>
                <li class="nav-item py-2">
                  <Link to={`${url}/add`} class="text-warning text-decoration-none">
                    {" "}
                    Add Product{" "}
                  </Link>
                </li>
                <li class="nav-item py-2">
                  <Link to={`${url}/managePd`} class="text-warning text-decoration-none">
                    {" "}
                    Manage Products{" "}
                  </Link>
                </li>
              </>
            )}
            <li>
              <button onClick={logOut} class="btn btn-danger">
                {" "}
                Log out{" "}
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div class="col-10 p-4">
        <Switch>
          <Route exact path={path}>
            <Dashboardhome></Dashboardhome>
          </Route>
          <Route path={`${path}/pay`}>
            <Payment></Payment>
          </Route>
          <Route path={`${path}/myOrders`}>
            <MyOrders></MyOrders>
          </Route>
          <Route path={`${path}/review`}>
            <Review></Review>
          </Route>
          <AdminRoute path={`${path}/allorders`}>
            <Allorders></Allorders>
          </AdminRoute>
          <AdminRoute path={`${path}/add`}>
            <Addproduct></Addproduct>
          </AdminRoute>
          <AdminRoute path={`${path}/makeAdmin`}>
            <Makeadmin></Makeadmin>
          </AdminRoute>
          <AdminRoute path={`${path}/managePd`}>
            <Manageproducts></Manageproducts>
          </AdminRoute>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
