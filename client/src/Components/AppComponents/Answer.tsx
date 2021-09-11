import { relativeTimeFromDates } from "Helpers/time.helper";
import { Answer as AnswerModel } from "Models/answer.model";
import { Card, CardBody, CardText } from "reactstrap";

interface IAnswer {
	answer: AnswerModel;
}

const Answer = ({ answer }: IAnswer) => {
	return (
		<Card className="mb-3">
			<CardBody>
				{/* <CardTitle tag="h5">Card Title</CardTitle> */}
				<CardText>{answer.AnswerText}</CardText>
				<CardText>
					<small className="text-muted">{"Posted " + relativeTimeFromDates(new Date(answer.CreatedAt))}</small>
				</CardText>
			</CardBody>
		</Card>
	);
};

export default Answer;
