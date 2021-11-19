import React, { useEffect, useState } from "react";
import Manageproduct from "./Manageproduct";

const Manageproducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/cameras")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const handleDeleteBtn = (id) => {
    const confirmLog = window.confirm(
      "Are you sure, you want to delete this product?"
    );
    if (confirmLog) {
      fetch(`http://localhost:5000/cameras?id=${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("deleted product successfully!");
            const filtered = products.filter((service) => service._id != id);
            setProducts(filtered);
          }
        });
    }
  };
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Product</th>
            <th scope="col">Product Details</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <Manageproduct
              key={product._id}
              product={product}
              handleDeleteBtn={handleDeleteBtn}
            ></Manageproduct>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Manageproducts;
