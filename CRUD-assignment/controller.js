import { UserModel } from "./model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const loginUser = async (req, res, next) => {
	const user = await UserModel.findOne(
		{ email: req.body["email"] },
		{ email: 1, password: 1 }
	);
	if (user) {
		try {
			if (bcrypt.compareSync(req.body["password"], user.get("password"))) {
				res.status(200).json({ msg: "User login successfully" });
			} else throw new Error("Password is wrong!!");
		} catch (error) {
			res.status(400).json({ msg: error.message });
		}
	} else if (!user) {
		res.status(404).json({ msg: "No account associated with this email." });
	} else {
		next();
	}
};

export const createUser = async (req, res) => {
	try {
		const user = await UserModel.create(req.body);
		const token = jwt.sign(JSON.stringify(user), process.env.JWT_SECRET_KEY);
		res.setHeader("authorization", `Bearer ${token}`);
		res.status(201).json({ msg: "User registered successfully" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};
