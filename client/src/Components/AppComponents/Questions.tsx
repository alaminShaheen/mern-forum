import SingleQuestion from "Components/AppComponents/Question";
import { Question } from "Models/question.models";
import { useEffect, useState } from "react";
import { Container } from "reactstrap";
import styled from "styled-components";

interface IQuestions {
	questionsData: Question[];
}

const Questions = ({ questionsData }: IQuestions) => {
	const QuestionContainer = styled(Container)`
		width: 90%;
		margin: 2em auto;
	`;

	return (
		<QuestionContainer className="mb-5">
			{questionsData.map((question) => (
				<SingleQuestion question={question} key={question.Id} />
			))}
		</QuestionContainer>
	);
};

export default Questions;
