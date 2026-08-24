import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";


const Cart = () => {

  const {
    productData,
    cartItems,
    removeFromCart,
    getCartAmount,
  } = useContext(ShopContext);

  return (
    <div className="container my-5">

      <h2 className="text-center mb-5">
        Shopping Cart
      </h2>

      {
        Object.keys(cartItems).length === 0 ? (

          <h4 className="text-center">
            Your Cart is Empty
          </h4>

        ) : (

          <table className="table table-bordered align-middle">

            <thead className="table-dark">

              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>

            </thead>

            <tbody>

              {
                productData.map((item) => {

                  if (!cartItems[item.id]) return null;

                  const quantity = cartItems[item.id];

                  const total = quantity * item.price;

                  return (

                    <tr key={item.id}>

                      <td>

                        <img
                          src={item.image}
                          alt={item.name}
                          style={{
                            width: "80px",
                            height: "80px",
                            objectFit: "cover"
                          }}
                        />

                      </td>

                      <td>{item.name}</td>

                      <td>₹{item.price}</td>

                      <td>{quantity}</td>

                      <td>₹{total}</td>

                      <td>

                        <button
                          className="btn btn-danger"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>

                      </td>

                    </tr>

                  );

                })
              }

            </tbody>

          </table>

        )
      }

      <div className="text-end">

        <h3>

          Grand Total : ₹{getCartAmount()}

        </h3>

        
        <Link to="/place-order">
          <button className="btn btn-dark">
            Proceed To Checkout
          </button>
        </Link>

      </div>

    </div>
  );
};

export default Cart;