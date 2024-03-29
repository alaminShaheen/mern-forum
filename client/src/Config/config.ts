const config = {
	server: {
		port: 5000, 
		url: process.env.NODE_ENV === "production" ? "https://server-mern-forum.herokuapp.com" : "http://localhost:5000"
	},
	apiEndpoints: {
		questions: process.env.NODE_ENV === "production" ? "https://server-mern-forum.herokuapp.com/questions" : "http://localhost:1337/questions",
		answers: process.env.NODE_ENV === "production" ? "https://server-mern-forum.herokuapp.com/answers" : "http://localhost:1337/answers",
		auth: process.env.NODE_ENV === "production" ? "https://server-mern-forum.herokuapp.com" : "http://localhost:1337"
	}
};

export default config;
