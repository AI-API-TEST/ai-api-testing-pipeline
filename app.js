const express = require("express");
const app = express();

app.use(express.json());

app.get("/posts", (req, res) => {
  res.json([]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
