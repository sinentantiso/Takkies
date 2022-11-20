import React, { useState } from "react";
import takkies from "./../takkiesData";
import Modal from "react-bootstrap/Modal";

export default function Takkies({ takkies }) {
  const [quantity, setquantity] = useState(1);
  const [varient, setvarient] = useState("small");
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div
      style={{ margin: "70px" }}
      className="shadow-lg p-3 mb-5 bg-white rounded"
    >
      <div onClick={handleShow}>
        <h1>{takkies.name}</h1>
        <img
          src={takkies.image}
          className="img-fluid"
          style={{ height: "200px", width: "200px" }}
        />
      </div>

      <div className="flex-container">
        <div className="w-100 m-1">
          <p>Varients</p>
          <select
            value={varient}
            onChange={(e) => {
              setvarient(e.target.value);
            }}
          >
            {takkies.varients.map((varient) => {
              return <option value={varient}>{varient}</option>;
            })}
          </select>
        </div>
        <div className="w-100 m-1">
          <p>Quantity</p>
          <select
            value={quantity}
            onChange={(e) => {
              setquantity(e.target.value);
            }}
          >
            {[...Array(10).keys()].map((x, i) => {
              return <option value={i + 1}>{i + 1}</option>;
            })}
          </select>
        </div>
      </div>

      <div className="flex-container">
        <div>
          <h1 className="mt-1">Price : R{takkies[0][varients] * quantity}</h1>
        </div>

        <div className="m-1 w-100">
          <button className="btn">ADD TO CART</button>
        </div>
      </div>

      <Modal>
        <Modal.Header closeButton>
          <Modal.Title>{takkies.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={takkies.image}/>
        </Modal.Body>

        <Modal.Footer>
          <button className="btn" onClick={handleClose}>
            CLOSE
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
