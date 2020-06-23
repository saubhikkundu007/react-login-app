import React, { Component } from 'react';
import Login from './components/login/Login';
import Home from './components/login/Home'
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
  } from "react-router-dom";

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			loggedIn: false,
			userEmail: ''
		}
	}

	updateLoggedIn = (e) => {
        this.setState({loggedIn: e})
	}
	
	updateUserEmail = (e) => {
        this.setState({userEmail: e})
    }

	render() {
		let { loggedIn, userEmail } = this.state
		return (
			<Router>
			  <div>
				<Switch>
				  <Route exact path="/">
				  	{loggedIn ? <Redirect to="/home" /> : 
					  <Login onLogin={e => this.updateLoggedIn(e)} getUserEmail={e => this.updateUserEmail(e)}/>}
				  </Route>
				  <Route path="/home">
				  	{!loggedIn ? <Redirect to="/" /> : <Home email={userEmail}/>}  
				  </Route>
				</Switch>
			  </div>
			</Router>
		  );
	}
}

export default App;
