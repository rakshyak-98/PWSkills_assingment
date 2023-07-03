import mongoose from "mongoose";
import { Schema } from "mongoose";
export const UserModel = mongoose.model(
	"User",
	new mongoose.Schema({
		name: { type: String, max: 40 },
		email: {
			max: 64,
			type: String,
			required: true,
			unique: [true, "User already exist with provided email id!!"],
			validate: {
				validator: (value) => {
					if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
						return true;
					else return false;
				},
				message: "email field validation failed",
			},
		},
		password: { type: String, required: true, max: 64 },
	})
);
