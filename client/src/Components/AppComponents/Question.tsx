import { Question } from "Models/question.models";
import { useState } from "react";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import styled from "styled-components";
import { relativeTimeFromDates } from "Helpers/time.helper";
import Answers from "Components/AppComponents/Answers";
import { Link } from "react-router-dom";

interface ISingleQuestion {
	question: Question;
}

const StyledCardTitle = styled(CardTitle)`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledCard = styled(Card)`
	&:hover {
		border: 1px solid skyblue;
	}
	cursor: pointer;
`;

const SingleQuestion = ({ question }: ISingleQuestion) => {
	const [isOpen, setIsOpen] = useState(false);

	console.log(question);

	return (
		<Link to={{pathname: `/${question.Id}`, state: {question}}} style={{ color: "black", textDecoration: "none" }}>
			<StyledCard className="mb-4">
				<CardBody>
					<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
						<div style={{ display: "flex", flexDirection: "column" }}>
							<CardText>
								<small className="text-muted">
									{`Posted ${relativeTimeFromDates(new Date(question.CreatedAt))} by `}{" "}
									<span style={{ color: "black", fontWeight: 400, fontStyle: "italic" }}>{question.CreatedBy}</span>
								</small>
							</CardText>
							<StyledCardTitle tag="h5">{question.Title}</StyledCardTitle>
							<CardText>{question.Description}</CardText>
						</div>
						{/* {question.Answers.length > 0 && (collapse ? <AiIcons.AiFillCaretUp /> : <AiIcons.AiFillCaretDown />)} */}
					</div>
					<Answers key={21983123} questionId={question.Id} setIsOpen={setIsOpen} isOpen={isOpen} answers={question.Answers} />
				</CardBody>
			</StyledCard>
		</Link>
	);
};

export default SingleQuestion;
