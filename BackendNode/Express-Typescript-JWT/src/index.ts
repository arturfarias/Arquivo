import express from "express";

import homeRouter from "./routes/home";
import userRouter from "./routes/user";

const app = express()
const port = 3000

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", homeRouter);
app.use("/", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
