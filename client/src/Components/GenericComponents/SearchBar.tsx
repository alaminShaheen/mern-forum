import { Question } from "Models/question.models";
import { useState } from "react";
import { FormGroup, Input, Form, Button } from "reactstrap";
import styled from "styled-components";
import * as QuestionServices from "Services/question.services";

interface ISearchBar {
	setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}

const StyledFormGroup = styled(FormGroup)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledInput = styled(Input)`
	height: 6rem;
	margin-bottom: 1.5em;
	&:hover, &:focus {
		border: 2px solid rgb(96, 165, 250);
		box-shadow: none;
	}
`;

const StyledButton = styled(Button)`
	border: 2px solid tomato;
	width: 10rem;
	box-shadow: none;
	&:hover, &:focus, &:active {
		background-color: tomato;
		border: 2px solid tomato;
		color: black;
		box-shadow: none;
	}
`;

const SearchBar = ({ setQuestions }: ISearchBar) => {
	const [isLoading, setIsLoading] = useState(false);
	const [searchValue, setSearchValue] = useState("");
	const Title = styled.h1`
		font-size: 2.5rem;
		text-align: center;
		margin: 0.7em 0;
	`;

	const submitQuestion = async () => {
		setIsLoading(true);
		try {
			if (!searchValue) throw new Error("No value");
			const {
				data: { question }
			}: any = await QuestionServices.postQuestion(searchValue);
			setQuestions((prev) => [new Question(question), ...prev]);
			setSearchValue("");
		} catch (error) {
			console.log(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<Form style={{ width: "100%" }} onSubmit={submitQuestion}>
			<StyledFormGroup>
				<Title>Ask me anything!</Title>
				<StyledInput
					disabled={isLoading}
					value={searchValue}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value)}
					style={{ height: "5rem", marginBottom: "1.5em" }}
					type="textarea"
					name="text"
					id="exampleText"
				/>
				<StyledButton disabled={isLoading} onClick={() => submitQuestion()} outline color="primary">
					Ask
				</StyledButton>
			</StyledFormGroup>
		</Form>
	);
};

export default SearchBar;
