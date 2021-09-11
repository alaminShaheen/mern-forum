import { Question } from "Models/question.models";
import { useState } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import styled from "styled-components";
import { relativeTimeFromDates } from "Helpers/time.helper";
import Answers from "Components/AppComponents/Answers";

interface ISingleQuestion {
	question: Question;
}

const StyledCardTitle = styled(CardTitle)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;
const SingleQuestion = ({ question }: ISingleQuestion) => {
	const [isOpen, setIsOpen] = useState(false);

	console.log(question);

	return (	
		<Card className="my-4">
			<CardBody>
				<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<CardText>
							<small className="text-muted">{"Posted " + relativeTimeFromDates(new Date(question.CreatedAt))}</small>
						</CardText>
						<StyledCardTitle tag="h5">{question.QuestionText}</StyledCardTitle>
					</div>
					{/* {question.Answers.length > 0 && (collapse ? <AiIcons.AiFillCaretUp /> : <AiIcons.AiFillCaretDown />)} */}
				</div>
				<Answers key={21983123} questionId={question.Id} setIsOpen={setIsOpen} isOpen={isOpen} answers={question.Answers} />
			</CardBody>
		</Card>
	);
};

export default SingleQuestion;
