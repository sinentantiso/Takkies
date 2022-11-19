import React from 'react';
import './App.css';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.min.css"


function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact component={Home} />
		<Route path='/about' component={About} />
		<Route path='/events' component={Events} />
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} />
	</Routes>
	</Router>
);
}

export default App;
