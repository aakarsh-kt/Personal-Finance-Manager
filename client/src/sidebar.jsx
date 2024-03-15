import React from "react";
import { Outlet, Link } from "react-router-dom";
import FloatingAcc from "./floatingAccount.jsx";
export default function (props) {
  // function addCash() {
  //   const info={purpose:"",date:"",category:"Others",cash:0}
  //   info.purpose=prompt("Enter the purpose");
  //   info.category=prompt("Enter the category");
  //   info.cash = prompt("Enter the amount to be added");
  //   info.date=prompt("Enter the date");
  //   if (info) {
  //     props.adjustBalance(info);
  //     // setBalance(balance + parseInt(cash));
  //   }
  // }

  const [val, setVal] = React.useState(false);
  function alter() {
    setVal(!val);
  }
  function handleSubmit(formData) {
    // event.preventDefault();
    props.adjustBalance(formData);

    console.log(formData);
  }
  return (
    <div className="side--cont">
      <img src="src\assets\download.jpeg" className="profile--pic" />
      <h5>Akarsh Katiyar</h5>
      <h6>Administrator </h6>

      <ul>
        <li>Dashboard</li>
        <li onClick={alter}>Add Cash</li>
        {val && <FloatingAcc addExpenditure={handleSubmit} />}
        <li>Settings</li>
        <li>
          <Link to="/goals" style={{ textDecoration: "none" }}>
            Goals
          </Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
