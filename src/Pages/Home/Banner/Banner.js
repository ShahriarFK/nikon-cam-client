import React from "react";

const Banner = () => {
  return (
    <section class="pt-5 d-flex justify-content-center my-5">
      <div class="container position-relative text-center row">
        <div class="col-7">
          <div class="col-12 col-lg-8 mx-auto">
            <span class="text-muted">Hello good people</span>
            <h3 class="mt-2 display-6 fw-bold">
              Unlock the future with the power of light
            </h3>
            <p class="text-muted">
              Nikon_cam helps to enrich people's lives with a range of products
              in the field of precision and optics
            </p>
            <button className="btn btn-outline-warning">Explore More</button>
          </div>
        </div>
        <div class="col-5">
          <img
            class="mx-auto img-fluid"
            src="https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
