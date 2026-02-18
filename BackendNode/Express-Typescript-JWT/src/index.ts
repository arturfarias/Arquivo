import express from "express";
import dotenv from 'dotenv';

import homeRouter from "./routes/home";
import userRouter from "./routes/user";

dotenv.config();

const app = express()
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", homeRouter);
app.use("/", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
