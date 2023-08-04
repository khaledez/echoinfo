import express from "express";
import morgan from "morgan";
import os from "os";
import page from "./template.js";

const hostname = os.hostname();
const port: number = Number(process.env.PORT) || 3000;

const app = express();

app.use(morgan("combined"))

app.get("/", function (req, res) {
	const result = {
		host: hostname,
		headers: req.headers
	}

	res.format({
		"text/plain": function () {
			res.json(result)
		},
		"application/json": function () {
			res.json(result)
		},
		"text/html": function () {
			res.send(template(page(result)))
		}
	})
})

app.get("/health", function (req, res) {
	res.sendStatus(200);
})

app.listen(port, function () {
	console.log(`Listening on port: ${port}`)
})

const template = (content: string) => `<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Serving from express.js</title>
	<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
</head>
<body>
${content}
</body>
</html>`;