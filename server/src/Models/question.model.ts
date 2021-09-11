import mongoose, { Schema } from "mongoose";
import { IQuestion } from "../Interfaces/question.interface";

const QuestionSchema: Schema = new Schema({
	Title: { type: String, required: true },
	Description: { type: String },
	CreatedBy: { type: Schema.Types.ObjectId, required: true },
	Answers: [
		{
			Description: {
				type: String,
				required: true
			},
			CreatedAt: {
				type: Date,
				default: Date.now
			},
			CreatedBy: {
				type: Schema.Types.ObjectId,
				required: true
			}
		}
	],
	CreatedAt: { type: Date, default: Date.now }
});

const Question = mongoose.model<IQuestion>("Question", QuestionSchema);

export default Question;
