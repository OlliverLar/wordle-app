import express from "express";
import { resolve } from "path";
const app = express();

app.set("port", 5080);
app.set("view engine", "ejs");
app.use("/static", express.static(resolve("static")));

export default app;
