const path = require("path");
const express = require("express");
const app = express();
let port = process.env.PORT;
if (port == null || port === "") {
  port = 8000;
}

app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => console.log(`Bookstore app listening on port ${port}!`));
