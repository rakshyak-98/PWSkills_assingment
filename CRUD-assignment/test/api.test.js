import chai from "chai";
import chaiHttp from "chai-http";
import app from "../index.js";
import mongoose from "mongoose";

chai.use(chaiHttp);
const expect = chai.expect;

const testData = {
	login: [
		{ email: "testUser@gmail.com" },
		{ email: "test@gmail.com", password: "password" },
		{ email: "test@gmail.com", password: "wrongPassword" },
		{ email: "test2@gmail.com", password: "password" },
	],
	register: [
		{ email: "testUser@gmail.com" },
		{ name: "Rakshyak", email: "test@gmail.com", password: "password" },
	],
};

describe("API Endpoints", () => {
	describe("POST /register", () => {
		it("Check mandatory fields", (done) => {
			chai
				.request(app)
				.post("/register")
				.send(testData.register[0])
				.end((err, res) => {
					console.log(res.text);
					expect(res).to.have.status(400);
					done();
				});
		});

		// it("User registered successfully", (done) => {
		// 	chai
		// 		.request(app)
		// 		.post("/register")
		// 		.send(testData.register[1])
		// 		.end((err, res) => {
		// 			console.log(res.text);
		// 			expect(res).to.have.status(201);
		// 			done();
		// 		});
		// });

		it("User account already exist", (done) => {
			chai
				.request(app)
				.post("/register")
				.send(testData.register[1])
				.end((err, res) => {
					console.log(res.text);
					expect(res).to.have.status(400);
					done();
				});
		});
	});
	describe("POST /login", () => {
		it("Check mandatory fields", (done) => {
			chai
				.request(app)
				.post("/login")
				.send(testData.login[0])
				.end((err, res) => {
					console.log(res.text);
					expect(res).to.have.status(400);
					done();
				});
		});

		it("User login successfully", (done) => {
			chai
				.request(app)
				.post("/login")
				.send(testData.login[1])
				.end((err, res) => {
					console.log(res.text);
					expect(res).to.have.status(200);
					done();
				});
		});
		it("User provided wrong user password", (done) => {
			chai
				.request(app)
				.post("/login")
				.send(testData.login[2])
				.end((err, res) => {
					console.log(res.text);
					expect(res).to.have.status(400);
					done();
				});
		});
        it("User provided wrong user email", (done) => {
			chai
				.request(app)
				.post("/login")
				.send(testData.login[3])
				.end((err, res) => {
					console.log(res.text);
					expect(res).to.have.status(404);
					done();
				});
		});
	});
	// Test other API endpoints here
});
