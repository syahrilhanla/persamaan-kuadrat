const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const data = require('./data.json');

app.use(express.json());
app.use(cors());

dotenv.config({ path: "./config/config.env" });

const PORT = process.env.PORT || 5000;

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
