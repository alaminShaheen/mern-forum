import config from "Config/config";
import { authHttpService } from "Interceptors/config";

export const postAnswer = async (questionId: string, answer: string) => {
	const body = { AnswerText: answer };
	return await authHttpService.post(`${config.apiEndpoints.answers}/create/${questionId}`, body);
};
