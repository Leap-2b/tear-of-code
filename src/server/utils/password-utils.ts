import { compareSync, hashSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const hashPassword = (password: string): string => {
  const saltRounds = 10;
  return hashSync(password, saltRounds);
};

export const comparePassword = (password: string, hashedPassword: string) => {
  return compareSync(password, hashedPassword);
};
