import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import View from './View';
import Create from './Create';

function Main() {

	// useEffect(() => {

		// fetch('http://localhost:8000/card/create', {
		// 	method: "POST",
		// 	body: JSON.stringify({
		// 		name: "TestUser",
		// 		job: "programmer",
		// 		email: "example@email.com",
		// 		author: "authorID"
		// 	}),
		// 	headers: {'Content-Type': 'application/json'}
		// }).then(result => {
		// 	result.text().then(d => console.log(d));
		// })
	// }, [])

	return (
		<Router>
			<Switch>
				<Route path="/view/:id">
					<View />
				</Route>
				<Route path="/">
					<Create />
				</Route>
			</Switch>

		</Router>
	)
}

export default Main;