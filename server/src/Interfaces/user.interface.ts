import { Document } from "mongoose";

export interface IUser extends Document {
    Email: string;
    Password: string;
    CreatedAt: Date;
}