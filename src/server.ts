import express from "express";
import path from "path";

const app = express();

const PORT = process.env.PORT || 4000;

// app.get is a request to the server that gives a response
// in this case, as long as the client is on "localhost:4000/",
// they get greeted with the index.html-file
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(PORT, () =>
  console.log(`⚡Server is running here 👉 https://localhost:${PORT}`)
);
