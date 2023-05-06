import express from "express";
import { resolve } from "path";
const app = express();
import gameRoute from "./routes/pages.routes.js";

app.set("port", 3000);
app.set("view engine", "ejs");
app.use("/public", express.static(resolve("public")));
app.use("/", gameRoute);

export default app;
