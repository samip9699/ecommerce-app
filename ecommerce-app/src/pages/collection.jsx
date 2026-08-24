import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Collection = () => {

  const {
    productData,
    addToCart
  } = useContext(ShopContext);

  return (
    <div className="container my-5">

      <h1 className="text-center mb-5">
        All Collections
      </h1>

      <div className="row g-4">

        {productData.map((item) => (

          <div
            className="col-12 col-sm-6 col-md-4 col-lg-3"
            key={item.id}
          >

            <div className="card h-100 border-0 shadow-sm">

              <img
                src={item.image}
                className="img-fluid product-img"
                alt={item.name}
              />

              <div className="card-body">

                <h5 className="text-center">
                  {item.name}
                </h5>

                <p className="text-center fw-bold">
                  ₹{item.price}
                </p>

                <button
                  className="btn btn-dark w-100"
                  onClick={() => addToCart(item.id)}
                >
                  Add to Cart
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Collection;