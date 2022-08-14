const express = require("express");
const app = express();
const port = 3000;

app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/public/css"));

app.get("/", (req, res) => {
  res.render();
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
