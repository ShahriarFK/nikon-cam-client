import React, { useEffect, useState } from "react";
import Camera from "../Home/Camera/Camera";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const Cameras = () => {
  const [cameras, setCameras] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cameras")
      .then((res) => res.json())
      .then((data) => setCameras(data));
  }, []);
  return (
    <div>
      <Header />
      <section className="d-flex justify-content-center my-16">
        <h2 className="text-secondary my-5">
          Our <span className="text-warning">Cameras</span> for you
        </h2>
      </section>
      <section className="d-flex justify-content-center">
        <div className="row mx-5">
          {cameras.map((camera) => (
            <Camera key={camera._id} camera={camera}></Camera>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Cameras;
