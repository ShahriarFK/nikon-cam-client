import React, { useRef } from "react";
import { useHistory } from "react-router";
import useAuth from "../../../../Hooks/useAuth";

const Review = () => {
  const history = useHistory();
  const { user } = useAuth();
  const msgRef = useRef();
  const rateRef = useRef();

  const handleSubmitBtn = (e) => {
    const review = {
      name: user?.displayName,
      message: msgRef.current.value,
      rate: parseInt(rateRef.current.value),
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Your review was added");
          if (alert) {
            history.push("/home");
          }
        }
      });
    e.preventDefault();
  };
  return (
    <section class="py-20 bg-light overflow-hidden">
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
              <h2 class="mb-8">Fill up the form to add your review</h2>
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
                <textarea
                  ref={msgRef}
                  class="form-control form-control-lg mb-4"
                  type="text"
                  placeholder="Your Message"
                />
                <input
                  ref={rateRef}
                  class="form-control form-control-lg mb-4"
                  type="number"
                  placeholder="Your Rating"
                />
                <button type="submit" class="mt-12 mt-md-16 btn btn-dark">
                  send review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
