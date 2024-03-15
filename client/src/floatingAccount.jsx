import React from "react";

export default function(props){  
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
    return(
        <div className="floating--account">
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
            {/* <br /> */}

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
            {/* <br /> */}
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
             <button type="Submit" className="form--field">
              Add
            </button>
          </form>
        </div>
    )
}