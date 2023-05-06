import app from "./src/app.js";

const port = 3000;
app.listen(process.env.PORT || port, () =>
  console.log(`app listening at http://localhost:${port}`)
);
