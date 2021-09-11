export class Answer {
	Id: string;
	AnswerText: string;
	CreatedAt: Date;

	constructor(data: any) {
		this.Id = data._id;
		this.AnswerText = data.AnswerText;
		this.CreatedAt = new Date(data.CreatedAt);
	}
}
