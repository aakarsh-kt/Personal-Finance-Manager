import { useState } from "react";
import React from "react";
import Navbar from "./navbar.jsx";
import MainScreen from "./mainScreen.jsx";
import Sidebar from "./sidebar.jsx";
import { Outlet, Link } from "react-router-dom";
export default function App() {
  const [balance, setBalance] = useState(0);
  const [data, setData] = useState("");
  const getData = async () => {
    const response = await fetch("http://localhost:3000/getData");
    const dat = await response.text();
    setData(dat);
    console.log(dat);
  };
  React.useEffect(() => {
    getData();
  }, []);
  const [cost, setCost] = useState({
    shopping: 0,
    bills: 0,
    food: 0,
    others: 0,
  });

  const [transactions, setTransactions] = useState([
    { date: "15 Mar 2024", category: "Revenue", title: "Salary", amount: 5000 },
    {
    
      category: "Bills and Utilities",
      title: "Electricity",
      amount: -1000,
    },
    {
      date: "17 Mar 2024",
      category: "Bills and Utilities",
      title: "Rent",
      amount: -2000,
    },
    {
      date: "18 Mar 2024",
      category: "Shopping",
      title: "Grocery",
      amount: -500,
    },
  ]);
  function adjustBalance(info) {
    if (info.amount >= 0 && info.purpose !== "" && info.date !== "") {
      setBalance(balance + parseInt(info.amount));
      setTransactions([
        ...transactions,
        {
          category: "Revenue",
          date: info.date,
          title: info.purpose,
          amount: parseInt(info.amount),
        },
      ]);
      console.log(balance);
    }
  }
  function addExpenditure(info) {
    setBalance(balance - parseInt(info.amount));
    setCost((prev) => {
      return {
        ...prev,
        [info.category]: prev[info.category] + parseInt(info.amount),
      };
    });
    setTransactions([
      ...transactions,
      {
        category: info.purpose,
        date: info.date,
        title: info.category,
        amount: parseInt(info.amount),
      },
    ]);
  }
  return (
    <div className="ConT">
      <Navbar />

      <div className="main--cont">
        <Sidebar
          adjustBalance={adjustBalance}
          // addExpenditure={addExpenditure}
        />
        <MainScreen
          balance={balance}
          transactions={transactions}
          addExpenditure={addExpenditure}
          cost={cost}
        />
      </div>
    </div>
  );
}
