import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const Orders = () => {

  const {
    productData,
    cartItems,
    getCartAmount
  } = useContext(ShopContext);

  const generateInvoice = () => {

    const doc = new jsPDF();

    // Order ID
    const orderId = "SAM-" + Date.now();

    // Date
    const orderDate = new Date().toLocaleDateString();

    // Title
    doc.setFontSize(24);
    doc.text("SAMSHOP", 105, 20, {
      align: "center"
    });

    doc.setFontSize(18);
    doc.text("ORDER INVOICE", 105, 32, {
      align: "center"
    });

    // Order information
    doc.setFontSize(11);

    doc.text(`Order ID: ${orderId}`, 20, 45);
    doc.text(`Date: ${orderDate}`, 20, 52);

    // Product table
    const tableData = [];

    productData.forEach((item) => {

      if (cartItems[item.id]) {

        const quantity = cartItems[item.id];

        const total = item.price * quantity;

        tableData.push([
          item.name,
          quantity,
          `Rs. ${item.price}`,
          `Rs. ${total}`
        ]);
      }

    });

    autoTable(doc, {
      startY: 65,

      head: [
        [
          "Product",
          "Quantity",
          "Price",
          "Total"
        ]
      ],

      body: tableData
    });

    // Table ending position
    const finalY = doc.lastAutoTable.finalY;

    // Amount
    const subtotal = getCartAmount();

    const shipping = 50;

    const grandTotal = subtotal + shipping;

    doc.setFontSize(12);

    doc.text(
      `Subtotal: Rs. ${subtotal}`,
      140,
      finalY + 15
    );

    doc.text(
      `Shipping: Rs. ${shipping}`,
      140,
      finalY + 23
    );

    doc.setFontSize(14);

    doc.text(
      `Grand Total: Rs. ${grandTotal}`,
      140,
      finalY + 34
    );

    // Thank you
    doc.setFontSize(12);

    doc.text(
      "Thank you for shopping with SamShop!",
      105,
      finalY + 55,
      {
        align: "center"
      }
    );

    // Download PDF
    doc.save(`SamShop-Invoice-${orderId}.pdf`);
  };

  return (

    <div className="container my-5">

      <div className="card shadow p-5">

        <h2 className="text-center text-success">
          Your Order Has Been Placed Successfully! 🎉
        </h2>

        <p className="text-center mt-3">
          Thank you for shopping with SamShop.
        </p>

        <div className="text-center mt-4">

          <button
            className="btn btn-dark px-5"
            onClick={generateInvoice}
          >
            Download Invoice PDF
          </button>

        </div>

      </div>

    </div>
  );
};

export default Orders;