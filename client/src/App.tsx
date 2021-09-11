import NavigationBar from "Components/GenericComponents/NavigationBar";
import { Home } from "Pages/Home";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

const App = () => {
	// return <Home />;
	return (
		<>
			<NavigationBar />
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						{userState.Id ? <Home /> : <Redirect to="/login" />}
					</Route>
					<Route path="/login" component={Login} />
					<Route path="/register" component={Register} />
				</Switch>
			</BrowserRouter>
			<Home />
		</>
	);
};

export default App;
