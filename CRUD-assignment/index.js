import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import {
	encryptPassword,
	validateCreateUserBody,
	validateLoginBody,
} from "./middleware.js";
import { createUser, loginUser } from "./controller.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
	res.setHeader("Access-Control-Access-Origin", "*");
	next();
});

app.post("/login", validateLoginBody, loginUser);

app.post("/register", validateCreateUserBody, encryptPassword, createUser);

mongoose
	.connect(process.env.MONGODB_URL)
	.catch((error) => console.log(error.msg));

app.listen(8000);

export default app; // INFO: for testing purpose!!
