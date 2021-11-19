import React from "react";
import { useHistory } from "react-router";

const Notfound = () => {
  const history = useHistory();
  return (
    <div>
      <div className="px-5 py-5">
        <div className="d-flex justify-content-center align-items-center">
          <img
            className=""
            src="https://i.ibb.co/v30JLYr/Group-192-2.png"
            alt=""
          />
        </div>
        <div>
          <h3 className="text-secondary">
            Looks like you've found the doorway to the great nothing
          </h3>
          <p>
            The content you’re looking for doesn’t exist. Either it was removed,
            or you mistyped the link.
          </p>
          <p className="py-2">
            Sorry about that! Please visit our hompage to get where you need to
            go.
          </p>
          <button onClick={()=>history.push("/home")} className="btn btn-danger">
            Go back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
