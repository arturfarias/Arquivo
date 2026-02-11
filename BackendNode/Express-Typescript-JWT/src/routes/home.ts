import { Router } from "express";

import { Request, Response } from "express";

import TesteParams from "../interfaces/testeParams"
import TesteBody from "../interfaces/teste"

const homeRouter  = Router();

homeRouter.get("/", (req: Request, res: Response): Response => {
    return res.json({ message: "Hello World!" });
  }
);

homeRouter.get("/params/:test", (req: Request<TesteParams>, res: Response): Response => {
    return res.json(req.params);
  }
);

homeRouter.post("/body", (req: Request<{},{}, TesteBody>, res: Response): Response => {
    return res.status(200).json(req.body);
  }
);

export default homeRouter;
