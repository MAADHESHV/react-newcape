

import React from "react";
import './PaymentForm.css';

export default function PaymentForm()
{
    const click=()=>{
        alert("room booked successfully")
    }
    return(
        <>
            <div className="creditCardForm">
  <div className="heading">
    <h1>Confirm Booking</h1>
  </div>
  <div className="payment">
    <fieldset>
    <form onSubmit={click}>
      <div className="form-group owner">
        <label htmlFor="owner">Card Owner Name</label>
        <input type="text" className="form-control" id="owner" />
      </div>
      <div className="form-group CVV">
        <label htmlFor="cvv">CVV</label>
        <input type="text" className="form-control" id="cvv" />
      </div>
      <div className="form-group" id="card-number-field">
        <label htmlFor="cardNumber">Card Number</label>
        <input type="text" className="form-control" id="cardNumber" />
      </div>
      <div className="form-group" id="expiration-date">
        <label>Expiration Date</label>
        <select>
          <option value={1}>January</option>
          <option value={2}>February </option>
          <option value={3}>March</option>
          <option value={4}>April</option>
          <option value={5}>May</option>
          <option value={6}>June</option>
          <option value={7}>July</option>
          <option value={8}>August</option>
          <option value={9}>September</option>
          <option value={10}>October</option>
          <option value={11}>November</option>
          <option value={12}>December</option>
        </select>
        <select>
          <option value={16}> 2023</option>
          <option value={17}> 2024</option>
          <option value={18}> 2025</option>
          <option value={19}> 2026</option>
          <option value={20}> 2027</option>
          <option value={21}> 2028</option>
        </select>
      </div>
      <div className="form-group" id="credit_cards">
        <img
          src="http://demo.tutorialzine.com/2016/11/simple-credit-card-validation-form/assets/images/visa.jpg"
          id="visa"
        />
        <img
          src="http://demo.tutorialzine.com/2016/11/simple-credit-card-validation-form/assets/images/mastercard.jpg"
          id="mastercard"
        />
        <img
          src="http://demo.tutorialzine.com/2016/11/simple-credit-card-validation-form/assets/images/amex.jpg"
          id="amex"
        />
      </div>
      <div className="form-group" id="pay-now">
        <button type="submit" className="btn btn-default" id="confirm-purchase">
          Confirm
        </button>
      </div>
    </form>
    </fieldset>
  </div>
</div>

        </>
    )
}


