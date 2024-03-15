import React from "react";

export default function (props) {
  const [formData, setFormData] = React.useState({
    purpose: "",
    category: "",
    date: "",
    amount: "",
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.addExpenditure(formData);

    console.log(formData);
  }

  const id = React.useId();
  return (
    <div className="finance">
      <div className="category">
        <ul>
          <li>
            <div className="list balance--card list--1">
              <h3>Balance</h3>
              <h2>{props.balance}</h2>
            </div>
          </li>
          <li>
            <div className="list list--2">
              <h3>Shopping</h3>
              <h3>{props.cost.shopping}</h3>
            </div>
          </li>
          <li>
            <div className="list list--3">
              <h3>Food and Drinks</h3>
              <h3>{props.cost.food}</h3>
            </div>
          </li>
          <li>
            <div className="list list--4">
              <h3>Bills and Utilities</h3>

              <h3>{props.cost.bills}</h3>
            </div>
          </li>
          <li>
            <div className="list list--5">
              <h3>Others</h3>
              <h3>{props.cost.others}</h3>
            </div>
          </li>
        </ul>
      </div>
      <div className="trans--cont">
        <div className="trans--list">
          <h3 className="trans--heading">Recent Transactions</h3>
          <div className="transaction">
            <div className="col--1">
              <h3>Purpose</h3>
            </div>
            <div className="col--2">
              <h3>Category</h3>
            </div>
            <div className="col--1">
              <h3>Amount</h3>
            </div>
            <div className="col--2">
              <h3>Date</h3>
            </div>
          </div>
          <div className="trans--handler">
            {props.transactions.map((transaction, index) => {
              return (
                <div key={index} className="transaction">
                  <div className="col--1">
                    <h3>{transaction.title}</h3>
                  </div>
                  <div className="col--2">
                    <h3>{transaction.category}</h3>
                  </div>
                  <div className="col--1">
                    <h3>{transaction.amount}</h3>
                  </div>
                  <div className="col--2">
                    <h3>{transaction.date}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="trans--form">
          Form
          <div className="form--cont"></div>
          <h1>Add Expenditure</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor={id + "-purpose"} className="form--field">
              Purpose
            </label>

            <input
              type="text"
              placeholder="Purpose"
              onChange={handleChange}
              name="purpose"
              value={formData.purpose}
              id={id + "-purpose"}
            />
            <br />

            <label htmlFor={id + "-amount"} className="form--field">
              Amount
            </label>

            <input
              type="number"
              placeholder="Amount"
              onChange={handleChange}
              name="amount"
              value={formData.amount}
              id={id + "-amount"}
            />
            <br />
            <label htmlFor={id + "-date"} className="form--field">
              Date
            </label>

            <input
              type="date"
              placeholder="Date"
              onChange={handleChange}
              name="date"
              value={formData.date}
              id={id + "-date"}
            />
            <br />
            {/* <label htmlFor={id + "-category"} className="form--field">
              Category
            </label> */}
            <fieldset>
              <legend>Category</legend>
              <input
                type="radio"
                id={id + "-shopping"}
                name="category"
                value="shopping"
                checked={formData.category === "shopping"}
                onChange={handleChange}
              />
              <label htmlFor={id + "-food"}>Shopping</label>
              <br />

              <input
                type="radio"
                id={id + "-food"}
                name="category"
                value="food"
                checked={formData.category === "food"}
                onChange={handleChange}
              />
              <label htmlFor={id + "-food"}>Food and Drinks</label>
              <br />

              <input
                type="radio"
                id={id + "-bills"}
                name="category"
                value="bills"
                checked={formData.category === "bills"}
                onChange={handleChange}
              />
              <label htmlFor={id + "-bills"}>Bills and Utilities</label>
              <br />
              <input
                type="radio"
                id={id + "-others"}
                name="category"
                value="others"
                checked={formData.category === "others"}
                onChange={handleChange}
              />
              <label htmlFor={id + "-others"}>Others</label>
              <br />
            </fieldset>

            {/* <input
              type="text"
              placeholder="Category"
              onChange={handleChange}
              name="category"
              value={formData.category}
              id={id + "-category"}
            /> */}
            <br />
            <button type="Submit" className="form--field">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
