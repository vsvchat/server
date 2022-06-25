import express from "express";

const PORT = process.env.PORT || 3001;
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hello!");
});

app.get("*", (req, res) => {
  res.status(404).send("Not found");
});

app.listen(PORT, () => {
  console.log("Listening on port", PORT);
});
