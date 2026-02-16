import multer, { StorageEngine } from "multer";
import { Request } from "express";
import crypto from "crypto";

const storage: StorageEngine = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb) => {
    cb(null, "uploads/");
  },

  filename: (req: Request, file: Express.Multer.File, cb) => {
    const hash = crypto.randomBytes(6).toString('hex');
    const fileName = `${hash}-${file.originalname}`
    
    cb(null, fileName);
  }
});

const uploads = multer({
  storage,
  fileFilter: (req: Request, file: Express.Multer.File, cb) => {
    const allowedTypes = ["image/jpeg", "image/png"];

    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Tipo de arquivo não permitido"));
    }
  }
});

export default uploads;
