const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");

app.use(express.json());
app.use(cors());

dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;

const data = [
	{
		id: 1,
		a: 1,
		b: 4,
		c: 2,
	},
	{
		id: 2,
		a: 1,
		b: 4,
		c: -12,
	},
	{
		id: 3,
		a: 2,
		b: 4,
		c: 2,
	},
	{
		id: 4,
		a: 1,
		b: 2,
		c: 4,
	}, {
		id: 5,
		a: 1,
		b: 6,
		c: -8,
	}, {
		id: 6,
		a: 1,
		b: 1,
		c: 5,
	}, {
		id: 7,
		a: 3,
		b: -5,
		c: -7,
	}, {
		id: 8,
		a: 2,
		b: 1,
		c: -10,
	}, {
		id: 9,
		a: 4,
		b: -7,
		c: 3,
	}, {
		id: 10,
		a: 2,
		b: -8,
		c: 3,
	}, {
		id: 11,
		a: 5,
		b: -4,
		c: 12,
	}
];

app.get("/questions", (req, res) => {
	try {
		return res.status(200).json({
			success: true,
			data: data,
		});
	} catch (err) {
		res.status(500).json({
			success: false,
			error: "Server Error",
		});
	}
});

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	app.get("/*", (req, res) => {
		res.sendFile(path.join(__dirname, "./client/build/index.html"));
	});
} else {
	app.use(express.static(path.join(__dirname, "/client/public")));
	app.get("/*", (req, res) => {
		res.sendFile(path.join(__dirname, "./client/public/index.html"));
	});
}

app.listen(PORT, () => console.log("server is running on port 5000"));
