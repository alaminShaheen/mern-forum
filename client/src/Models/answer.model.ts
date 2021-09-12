export class Answer {
	Id: string;
	AnswerText: string;
	CreatedAt: Date;
	CreatedBy: string;

	constructor(data: any) {
		this.Id = data._id;
		this.AnswerText = data.AnswerText;
		this.CreatedBy = data.CreatedBy;
		this.CreatedAt = new Date(data.CreatedAt);
	}
}
