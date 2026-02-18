import { Router } from "express";
import "dotenv/config";

import { Request, Response } from "express";
import createInMemoryDatabase from "../fakeDB";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import authMiddleware from "../middleweres/auth";

import User from "../interfaces/user"
const userDb = createInMemoryDatabase<User>();

const userRouter  = Router();

userRouter.post("/user", async (req: Request, res: Response): Promise<Response> => {
    const {id, name, email, password} = req.body;

    const userExists = userDb.findByEmail(email);

    if(userExists) {
      return res.status(400).json({ error: "Email ja cadastrado" });
    }

    const hashPassword = await bcrypt.hash(password,10)
    
    const newUser = await userDb.create({id, name, email, password:hashPassword});
    
    return res.status(201).json(newUser);
  }
);

userRouter.post("/login", async (req: Request, res: Response): Promise<Response> => {
    const {id, name, email, password} = req.body;

    const user = userDb.findByEmail(email);

    if(!user) {
      return res.status(400).json({ error: "Email ou senha invalidos" });
    }

    const verifyPass = await bcrypt.compare(password, user.password);

    if(!verifyPass) {
      return res.status(400).json({ error: "Email ou senha invalidos" });
    }

    const token = jwt.sign({id: user.id}, process.env.API_KEY ?? "", {expiresIn: '8h'})
    
    return res.status(200).json({token});
  }
);

userRouter.get("/teste",authMiddleware ,async (req: Request, res: Response): Promise<Response> => {

    return res.status(200).json("Teste");
  }
);

export default userRouter;
