import { Answer } from "Models/answer.model";

export class Question {
	Id: string;
	QuestionText: string;
	Answers: Answer[];
	CreatedAt: Date;

	constructor(data: any) {
		this.Id = data._id;
		this.QuestionText = data.QuestionText;
		this.Answers = data.Answers;
		this.CreatedAt = new Date(data.CreatedAt);
	}
}
