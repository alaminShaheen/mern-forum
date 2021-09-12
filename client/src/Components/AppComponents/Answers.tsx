import Answer from "Components/AppComponents/Answer";
import { Answer as AnswerModel } from "Models/answer.model";
import { useState } from "react";
import { CardText, Collapse, Input } from "reactstrap";
import * as BsIcons from "react-icons/bs";
import * as AnswerServices from "Services/answer.services";
import styled from "styled-components";

interface IAnswers {
	answers: AnswerModel[];
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	questionId: string;
}

const StyledInput = styled(Input)`
	&:hover,
	&:focus {
		border: 2px solid rgb(96, 165, 250);
		box-shadow: none;
	}
`;

const ReplyText = styled.small`
	font-size: small;
`;

const Answers = ({ answers: answerData, isOpen = false, setIsOpen, questionId }: IAnswers) => {
	const [answers, setAnswers] = useState<AnswerModel[]>(answerData);
	const [status, setStatus] = useState("Closed");
	const [answerText, setAnswerText] = useState("");
	const [isLoading, setIsLoading] = useState(false);

	const onEntering = () => setStatus("Opening...");

	const onEntered = () => setStatus("Opened");

	const onExiting = () => setStatus("Closing...");

	const onExited = () => setStatus("Closed");

	const postAnswer = async () => {
		setIsLoading(true);
		try {
			const {
				data: { answer }
			}: any = await AnswerServices.postAnswer(questionId, answerText);
			setAnswers((prev) => [...prev, new AnswerModel(answer)]);
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	const onEnterPress = async (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (!answerText) return;
		if (event.key === "Enter") {
			postAnswer();
		}
	};

	return (
		<div className="mt-2">
			{answers.length > 0 ? (
				<>
					<CardText>
						<>
							<BsIcons.BsArrowReturnRight />
							<ReplyText className="ml-2 text-muted">{`${answers.length} ${answers.length === 1 ? "reply" : "replies"}`}</ReplyText>
						</>
					</CardText>
					{/* <Collapse
						isOpen={isOpen}
						// onEntering={onEntering}
						// onEntered={onEntered}
						// onExiting={onExiting}
						// onExited={onExited}
					>
						{answers.map((answer) => (
							<Answer answer={answer} key={answer.Id} />
						))}
						<StyledInput
							onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => onEnterPress(e)}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setAnswerText(e.target.value)}
							value={answerText}
							className="my-3"
							placeholder="Write a reply..."
							type="textarea"
							name="text"
							id="exampleText"
						/>
					</Collapse> */}
				</>
			) : (
				<CardText>
					<small className="text-muted">No replies posted yet.</small>
				</CardText>
			)}
		</div>
	);
};

export default Answers;
