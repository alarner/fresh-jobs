import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import $ from 'jquery';
import Backbone from 'backbone';
import {globalErrorHandler, sync} from './sync';

$.ajaxSetup({
	error: globalErrorHandler,
	dataType: 'json'
});
Backbone.sync = sync;

import App from './components/App';
import HomePage from './components/HomePage';
import PostJobPage from './components/PostJobPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import WhyPage from './components/WhyPage';
import CompaniesPage from './components/CompaniesPage';


ReactDOM.render(
	<div>
		<Router history={hashHistory}>
			<Route path='/' component={App}>
				<IndexRoute component={HomePage} />
				<Route path='post' component={PostJobPage} />
				<Route path='login' component={LoginPage} />
				<Route path='register' component={RegisterPage} />
				<Route path='why' component={WhyPage} />
				<Route path='companies' component={CompaniesPage} />
			</Route>
		</Router>
	</div>,
	document.getElementById('app')
);