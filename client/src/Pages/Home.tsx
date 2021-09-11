import Answer from "Components/AppComponents/Answer";
import Questions from "Components/AppComponents/Questions";
import SearchBar from "Components/GenericComponents/SearchBar";
import { Question } from "Models/question.models";
import { Answer as AnswerModel } from "Models/answer.model";
import { useEffect, useState } from "react";
import { Container, Row } from "reactstrap";
import * as QuestionServices from "Services/question.services";
export const Home = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [questions, setQuestions] = useState<Question[]>([]);

	const fetchAllQuestions = async () => {
		setIsLoading(true);
		try {
			const {
				data: { questions }
			} = await QuestionServices.getAllQuestions();
			setQuestions(
				questions
					.map((question: any) => {
						return new Question({
							...question,
							Answers: question.Answers.map((answer: any) => new AnswerModel(answer))
						});
					})
					.sort((a: Question, b: Question) => {
						const da = new Date(a.CreatedAt);
						const db = new Date(b.CreatedAt);
						return db.getTime() - da.getTime();
					})
			);
		} catch (error: any) {
			console.log(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchAllQuestions();
	}, []);

	return (
		<Container>
			<Row>
				<SearchBar setQuestions={setQuestions} />
			</Row>
			<Questions questionsData={questions} />
		</Container>
	);
};
