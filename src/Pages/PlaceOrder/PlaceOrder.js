import React, { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router";
import useAuth from "../../Hooks/useAuth";
import Footer from "../Shared/Footer/Footer";
import Header from "../Shared/Header/Header";

const PlaceOrder = () => {
  const history = useHistory();
  const { user } = useAuth();
  const addressRef = useRef();
  const phoneRef = useRef();
  const { _id } = useParams();
  const [camera, setCamera] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/cameras")
      .then((res) => res.json())
      .then((data) => {
        setCamera(data.find((pd) => pd._id == _id));
      });
  }, [_id]);

  const handleSubmitBtn = (e) => {
    const order = {
      pdName: camera.name,
      pdPrice: camera.price,
      pdImg: camera.img,
      userName: user?.displayName,
      userEmail: user?.email,
      address: addressRef.current.value,
      phone: phoneRef.current.value,
      status: "pending",
    };
    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Your order has been received");
          if (alert) {
            history.push("/dashboard/myorders");
          }
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <Header />
      <section class="py-5 bg-light overflow-hidden">
        <div className="position-relative container">
          <div class="card mb-3">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src={camera.img}
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8 d-flex align-items-center">
                <div class="card-body">
                  <h5 class="card-title text-warning">{camera.name}</h5>
                  <p class="card-text">{camera.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="position-relative container">
          <div class="position-relative mw-4xl mx-auto">
            <div class="position-absolute top-50 start-0 end-0 translate-middle-y bg-info-light ms-n6 me-n6"></div>
            <div class="position-relative py-16 pt-md-32 pb-md-20 px-4 px-sm-8 bg-white">
              <div class="mw-lg mx-auto text-center">
                <a class="d-inline-block h6 mb-14" href="/">
                  <img
                    class="img-fluid"
                    src="yofte-assets/logos/yofte-logo.svg"
                    alt=""
                  />
                </a>
                <h2 class="mb-8">Fill up the form to order your Camera</h2>
                <p class="mb-10 fw-bold">Please, do not hesitate</p>
                <form onSubmit={handleSubmitBtn} action="">
                  <input
                    value={user.displayName}
                    class="form-control form-control-lg mb-4"
                    type="text"
                    placeholder="john@example.com"
                  />
                  <input
                    value={user.email}
                    class="form-control form-control-lg mb-4"
                    type="email"
                    placeholder="john@example.com"
                  />
                  <input
                    ref={addressRef}
                    class="form-control form-control-lg mb-4"
                    type="text"
                    placeholder="Your Address"
                  />
                  <input
                    ref={phoneRef}
                    class="form-control form-control-lg mb-4"
                    type="number"
                    placeholder="Your Phone number"
                  />
                  <button type="submit" class="mt-12 mt-md-16 btn btn-dark">
                    Order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PlaceOrder;
