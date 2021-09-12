import { Question } from "Models/question.models";
import { useLocation, useParams, withRouter } from "react-router";

interface ParamTypes {
	postId: string;
}

interface IPost {
    question: Question;
}

const Post = () => {
	const { postId } = useParams<ParamTypes>();
    const location = useLocation<IPost>()
    console.log(location.state.question);
	return <div>{postId}</div>;
};

export default withRouter(Post);
