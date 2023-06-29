import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/random", (req, res) => {
  const random = Math.round(Math.random() * 100);
  res.status(200).json({ random });
});

app.listen(3004, () => console.log("listning on port 3004"))
