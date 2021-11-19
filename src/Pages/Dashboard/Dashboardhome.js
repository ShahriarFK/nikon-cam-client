import React from "react";
import useAuth from "../../Hooks/useAuth";

const Dashboardhome = () => {
  const { user } = useAuth();
  return (
    <div className="d-flex justify-content-center">
      <h2 className="text-dark">
        <span>WELCOME</span> <br />{" "}
        <span className="text-warning">{user?.displayName}</span>
      </h2>
    </div>
  );
};

export default Dashboardhome;
