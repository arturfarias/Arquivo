import { Router } from "express";

import { Request, Response } from "express";

import uploads from "../upload";

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

homeRouter.post("/file",uploads.single("file"), (req: Request<{},{}, TesteBody>, res: Response): Response => {
  console.log(req.file);
  console.log(req.body);
  return res.status(200).json({body: req.body, file: req.file});
  }
);

homeRouter.post("/files",uploads.array("files", 5), (req: Request, res: Response) => {
    console.log(req.files);
    console.log(req.body); 

    return res.send("ok");
  }
);

export default homeRouter;
