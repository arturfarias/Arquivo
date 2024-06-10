import mongoose from "mongoose";

const env = process.env;

mongoose.connect(`mongodb://${env.USER}:${env.PASSWORD}@${env.DOMAIN}/${env.DATABASE}`);

let db = mongoose.connection;

export default db;