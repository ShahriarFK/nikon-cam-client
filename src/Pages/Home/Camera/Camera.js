import React from "react";
import { useHistory } from "react-router";

const Camera = (props) => {
  const history = useHistory();
  const { name, description, img, price, _id } = props.camera;
  return (
    <div className="col-4 px-5 d-flex justify-content-center">
      <div style={{ width: "30rem" }}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{name}</h5>
          <h6 class="text-warning fw-bold">$ {price}</h6>
          <p class="card-text">{description.slice(0, 200)}</p>
          <button
            onClick={() => {
              history.push(`/placeOrder/${_id}`);
            }}
            class="btn btn-warning"
          >
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Camera;
