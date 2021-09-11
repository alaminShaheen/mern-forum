import mongoose, { Schema } from "mongoose";
import { IUser } from "../Interfaces/user.interface";

const UserSchema: Schema = new Schema({
	Email: {
		type: String,
		required: true,
		unique: true
	},
	Password: {
		type: String,
		required: true
	},
	CreatedAt: {
		type: Date,
		default: Date.now
	}
});

const User = mongoose.model<IUser>("User", UserSchema);

export default User;
