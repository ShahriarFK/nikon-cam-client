import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Header from "../../Shared/Header/Header";
import Banner from "../Banner/Banner";
import Camera from "../Camera/Camera";
import Feature from "../Feature/Feature";
import Review from "../Review/Review";
import Stat from "../Stat/Stat";

const Home = () => {
  const [cameras, setCameras] = useState([]);
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cameras")
      .then((res) => res.json())
      .then((data) => setCameras(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <Header />
      <Banner></Banner>
      <section className="mb-16">
        <div>
          <h2 className="text-secondary">
            Our <span className="text-warning">Cameras</span> for you
          </h2>
        </div>
      </section>
      <section className="d-flex justify-content-center my-5">
        <div className="row mx-5">
          {cameras
            .map((camera) => <Camera key={camera._id} camera={camera}></Camera>)
            .slice(0, 6)}
        </div>
      </section>
      <Feature></Feature>
      <Stat></Stat>
      <div>
        <h2 className="text-secondary">
          What Our <span className="text-warning">Customer</span> says
        </h2>
      </div>
      <section className="d-flex justify-content-center">
        <section
          className="d-flex justify-content-center my-5"
          style={{ width: "720px" }}
        >
          <div className="row" style={{ width: "620px" }}>
            {reviews.map((review) => (
              <Review key={review._id} review={review}></Review>
            ))}
          </div>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
