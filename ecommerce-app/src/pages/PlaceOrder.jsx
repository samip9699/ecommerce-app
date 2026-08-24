import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useNavigate } from "react-router-dom";

const PlaceOrder = () => {

  const { getCartAmount } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <div className='container my-5'>
      <h2 className='text-center mb-5'> PLACE ORDER</h2>
      <div className='row'>
        <div className="col-lg-7">

          <h3 className="mb-4">
            Delivery Information
          </h3>

          <div className="row">

            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="First Name"
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Last Name"
              />
            </div>

          </div>

          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email Address"
          />

          <input
            type="text"
            className="form-control mb-3"
            placeholder="Street"
          />

          <div className="row">

            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="City"
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="State"
              />
            </div>

          </div>

          <div className="row">

            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Zip Code"
              />
            </div>

            <div className="col-md-6 mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Country"
              />
            </div>

          </div>

          <input
            type="text"
            className="form-control"
            placeholder="Phone Number"
          />

        </div>
        <div className="col-lg-5">

          <div className="card shadow p-4">

            <h3 className="mb-4">
              Cart Total
            </h3>

            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>₹{getCartAmount()}</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between">
              <span>Shipping Fee</span>
              <span>Free</span>
            </div>

            <hr />

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>₹{getCartAmount()}</span>
            </div>

            <h4 className="mt-5 mb-4">
              Payment Method
            </h4>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="cod"
              />
              <label className="form-check-label ms-2" htmlFor="cod">
                Cash On Delivery
              </label>
            </div>

            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="radio"
                name="payment"
                id="online"
              />
              <label className="form-check-label ms-2" htmlFor="online">
                Online Payment
              </label>
            </div>

            <button
              className="btn btn-dark w-100 mt-3"
              onClick={() => navigate("/orders")}>
              PLACE ORDER
            </button>

          </div>

        </div>
      </div>

    </div>

  );
}

export default PlaceOrder;
