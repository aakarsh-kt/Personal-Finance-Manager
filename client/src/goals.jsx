import React from "react";
import Navbar from "./navbar";
export default function () {
  return (
  
  <div>
    <Navbar/>
    <h3>What are your financial goals for this month</h3>
    <div className="goal--cont">
      <div className="goal--card">
        <h4>Goal 1</h4>
        <p>Enter the amount you want to save</p>
        <input type="number" />
        <button>Save</button>
      </div>
      <div className="goal--card">
        <h4>Goal 2</h4>
        <p>Enter the amount you want to save</p>
        <input type="number" />
        <button>Save</button>
      </div>
      <div className="goal--card">
        <h4>Goal 3</h4>
        <p>Enter the amount you want to save</p>
        <input type="number" />
        <button>Save</button>
      </div>

    </div>
    </div>
    )
}
