import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({ error: "Sem autorização" });
    }

    const [type, token] = authorization.split(" ");

    jwt.verify(token, "MuitoSegura") as JwtPayload;

    return next();

  } catch (error) {
    return res.status(401).json({ error: "Token inválido ou expirado" });
  }
}

export default authMiddleware;