import React from "react";

const Singleorder = (props) => {
  const { pdName, pdPrice, userName, userEmail, status, _id } = props.order;
  const { handleDeleteBtn, handleShipBtn } = props;
  return (
    <tr>
      <td className="py-4">
        <div>
          <div className="ml-4">
            <div>{userName}</div>
            <div className="text-secondary">{userEmail}</div>
          </div>
        </div>
      </td>
      <td className="py-4">
        <div>{pdName}</div>
        <div className="text-secondary">$ {pdPrice}</div>
      </td>
      <td className="py-4">
        <span
          className={
            status == "pending"
              ? "px-2 d-inline-flex rounded-3 bg-danger text-white"
              : "px-2 d-inline-flex rounded-3 bg-warning text-white"
          }
        >
          {status}
        </span>
      </td>
      <td className="d-flex justify-content-center gap-1 py-4">
        <button
          onClick={() => handleShipBtn(_id)}
          className="btn btn-outline-warning my-2"
        >
          Ship
        </button>
        <button
          onClick={() => handleDeleteBtn(_id)}
          className="btn btn-outline-danger my-2"
        >
          Delete
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-trash"
            viewBox="0 0 16 16"
          >
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
            <path
              fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
            />
          </svg>
        </button>
      </td>
    </tr>
  );
};

export default Singleorder;
