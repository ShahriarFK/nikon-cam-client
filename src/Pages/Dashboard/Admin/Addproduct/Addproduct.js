import React, { useRef } from "react";
import { useHistory } from "react-router";

const Addproduct = () => {
  const history = useHistory();
  const nameRef = useRef();
  const priceRef = useRef();
  const desRef = useRef();
  const imgRef = useRef();

  const handleSubmitBtn = (e) => {
    const review = {
      name: nameRef.current.value,
      img: imgRef.current.value,
      Description: desRef.current.value,
      price: priceRef.current.value,
    };
    fetch("http://localhost:5000/cameras", {
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
          alert("Your product was added");
          if (alert) {
            history.push("/home");
          }
        }
      });
    e.preventDefault();
  };
  return (
    <section class="py-5 bg-light overflow-hidden">
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
              <h2 class="mb-8">
                Fill up the form to add product to your website
              </h2>
              <form onSubmit={handleSubmitBtn} action="">
                <input
                  ref={nameRef}
                  class="form-control form-control-lg mb-4"
                  type="text"
                  placeholder="Product name"
                />
                <textarea
                  ref={desRef}
                  class="form-control form-control-lg mb-4"
                  type="text"
                  placeholder="Product description"
                />
                <input
                  ref={imgRef}
                  class="form-control form-control-lg mb-4"
                  type="text"
                  placeholder="Product image-url"
                />
                <input
                  ref={priceRef}
                  class="form-control form-control-lg mb-4"
                  type="number"
                  placeholder="Product Price"
                />
                <button type="submit" class="mt-12 mt-md-16 btn btn-dark">
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Addproduct;
