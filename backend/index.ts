import express from "express";

const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hell");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
