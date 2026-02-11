import { Router } from "express";

import { Request, Response } from "express";
import createInMemoryDatabase from "../fakeDB";

import User from "../interfaces/user"
const userDb = createInMemoryDatabase<User>();


const userRouter  = Router();

userRouter.post("/user", (req: Request, res: Response): Response => {
    const {name,email, password} = req.body;

    const userExists = userDb.findByEmail(email);
    
    return res.json({ message: userExists });
  }
);



export default userRouter;
