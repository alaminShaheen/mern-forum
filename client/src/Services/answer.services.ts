import axios from "axios";
import config from "Config/config";

export const postAnswer = async (questionId: string, answer: string) => {
	const body = { AnswerText: answer };
	return await axios.post(`${config.apiEndpoints.answers}/create/${questionId}`, body);
};
