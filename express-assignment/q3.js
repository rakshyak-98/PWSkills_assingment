import express from "express";

const app = express();
const route = express.Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

route.get("/", (req, res) => {
  res.status(200).json({ msg: "I am homepage" });
});

route.get("/about", (req, res) => {
  res.status(200).json({ msg: "I am about page" });
});

route.get("/contact", (req, res) => {
  res.status(200).json({ email: "support@pwskills.com" });
});
app.use(route);
app.listen(3003, () => console.log("listning of port 3003"));
