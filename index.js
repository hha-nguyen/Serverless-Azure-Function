const express = require("express");
const { connectToDatabase } = require("./database")

const app = express();

app.use(express.json());

connectToDatabase()

app.use("/auth", require("./routes/auth"));
app.use("/posts", require("./routes/posts"));

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
