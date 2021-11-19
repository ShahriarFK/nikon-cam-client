import React, { useEffect, useState } from "react";
import Singleorder from "./Singleorder";

const Allorders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/allorders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  const handleDeleteBtn = (id) => {
    const confirmLog = window.confirm(
      "Are you sure, you want to delete this order?"
    );
    if (confirmLog) {
      fetch(`http://localhost:5000/orders?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted successfully !");
            const filtered = orders.filter((service) => service._id != id);
            setOrders(filtered);
          }
        });
    }
  };
  const handleShipBtn = (id) => {
    fetch(`http://localhost:5000/orders?id=${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.modifiedCount > 0) {
          const found = orders.find((item) => item._id == id);
          found.status = "shipped";
          const updatedBooking = [...orders];
          setOrders(updatedBooking);
        }
      });
  };
  return (
    <table class="table my-5">
      <thead>
        <tr>
          <th scope="col">ordererd by</th>
          <th scope="col">Product name & price</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <Singleorder
            key={order._id}
            order={order}
            handleShipBtn={handleShipBtn}
            handleDeleteBtn={handleDeleteBtn}
          ></Singleorder>
        ))}
      </tbody>
    </table>
  );
};

export default Allorders;
