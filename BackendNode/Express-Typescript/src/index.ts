import express from "express";
import { Request, Response, NextFunction } from "express";

import testeRouter from "./routes/teste";

const app = express()
const port = 3000

function global(req: Request, res: Response, next: NextFunction): void {
  req.body.batata = "fdsdasdasd";
  console.log(req.body);
  next();
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(global)

app.use("/static", express.static('public'))

app.use("/", testeRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
