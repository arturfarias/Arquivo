import { Router } from "express";

import { Request, Response } from "express";

import TesteParams from "../interfaces/TesteParams"
import TesteBody from "../interfaces/teste"

const testeRouter  = Router();

testeRouter.get("/", (req: Request, res: Response): Response => {
    return res.json({ message: "Hello World!" });
  }
);

testeRouter.get("/params/:test", (req: Request<TesteParams>, res: Response): Response => {
    return res.json(req.params);
  }
);

testeRouter.post("/body", (req: Request<{},{}, TesteBody>, res: Response): Response => {
    return res.status(200).json(req.body);
  }
);

export default testeRouter;
