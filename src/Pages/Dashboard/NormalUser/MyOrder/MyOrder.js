import React from "react";

const MyOrder = (props) => {
  const { pdName, pdImg, pdPrice, status, _id, address } = props.order;
  const { handleDeleteBtn } = props;
  return (
    <div className="py-2 shadow-3 d-flex">
      <div className="mb-6 d-flex">
        <img src={pdImg} alt="" className="w-75 img-fluid" />
      </div>
      <div>
        <div className="mb-2">
          <small
            className={
              status == "pending"
                ? "px-2 rounded-3 bg-danger text-white"
                : "px-2 rounded-3 bg-warning text-white"
            }
          >
            {status}
          </small>{" "}
          <br />
          <h3>{pdName}</h3>
        </div>
        <div className="text-primary d-inline-flex align-items-center mt-4">
          Delivery address : {address}
        </div>
        <br />
        <div className="d-inline-flex align-items-center mt-4">
          Price : $ {pdPrice}
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center mx-5">
        <div>
          <button
            onClick={() => handleDeleteBtn(_id)}
            className="d-flex align-items-center btn btn-outline-danger"
          >
            Cancel order
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyOrder;
