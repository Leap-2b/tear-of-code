import { Schema } from "mongoose";

export interface UserType {
  _id: Schema.Types.ObjectId;
  email: string;
  password: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
}
