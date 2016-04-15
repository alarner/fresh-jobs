import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';

import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import PostJobPage from './components/PostJobPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';


ReactDOM.render(
	<div>
		<Navigation />
		<Router history={hashHistory}>
			<Route path='/' component={HomePage} />
			<Route path='/post' component={PostJobPage} />
			<Route path='/login' component={LoginPage} />
			<Route path='/register' component={RegisterPage} />
		</Router>
	</div>,
	document.querySelector('main')
);