import axios from "axios";
import config from "Config/config";

export const getAllQuestions = async () => {
	return await axios.get(config.apiEndpoints.questions);
};

export const postQuestion = async (question: string) => {
	const body = { QuestionText: question };
	return await axios.post(`${config.apiEndpoints.questions}/create`, body);
};
