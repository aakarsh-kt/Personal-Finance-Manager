const express = require("express");
const cors = require("cors");
const { PythonShell } = require("python-shell");

const app = express();

app.use(cors());

app.get("/getData", (req, res) => {
  // Execute Python script
  PythonShell.run("script.py", null, (err, result) => {
    if (err) {
      console.error("Error executing Python script:", err);
      return res.status(500).send("An error occurred while processing the request.");
    }
    // Send Python script output to client
    res.send(result.join("\n"));
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
