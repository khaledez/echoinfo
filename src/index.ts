import "dotenv/config";
import express from "express";
import morgan from "morgan";
import info from "./info/controller.js";
import todo from "./todo/controller.js";

const app = express();

app.use(morgan("combined"));
app.get("/health", function (req, res) {
  res.sendStatus(200);
});

app.use("/info", info);
app.use("/todo", todo);

const port: number = Number(process.env.PORT) || 3000;
const server = app.listen(port, function () {
  console.log("process ID:", process.pid)
  console.log(`Listening on port: ${port}`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server')
  server.close(() => {
    console.log('HTTP server closed')
  })
})
