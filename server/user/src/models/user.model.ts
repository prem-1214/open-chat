import { IUser } from "../types/user.types";
import mongoose, { Schema } from "mongoose";

const userSchema: Schema<IUser> = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },    
  { timestamps: true }
);

export const User = mongoose.model<IUser>("User", userSchema);
