import express from "express";
import { resolve } from "path";
const app = express();
import gameRoute from "./routes/pages.routes.js";
import apiRoute from "./routes/api.routes.js";

app.set("port", 3000);
app.set("view engine", "ejs");
app.use("/public", express.static(resolve("public")));
app.use(express.json());
app.use("/", gameRoute);
app.use("/api", apiRoute);

export default app;
