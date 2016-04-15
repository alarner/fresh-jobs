import React from 'react';
import {Link} from 'react-router';
import $ from 'jquery';

import user from '../stores/user';

export default React.createClass({
	getInitialState: function() {
		return {
			user: user
		};
	},
	componentWillMount: function() {
		user.on('change', u => {
			this.setState({ user: u });
		});
	},
	render: function() {
		let links = [
			<a href="#" key="jobs">Jobs</a>,
			<a href="#" key="companies">Companies</a>,
			<a href="#" key="why">Why Fresh Jobs?</a>
		];
		if(!user.isLoggedIn()) {
			links.push(<a href="#login" key="login">Login</a>);
			links.push(<a href="#register" key="register">Register</a>);
		}
		else {
			links.push(<a href="#post" key="post">Post a Job</a>);
			links.push(<a href="#" key="logout" onClick={this.logout}>Logout</a>);
		}

		return (
			<header>
				<div className="logo-area">
					<img src="/images/logo.png" />
					<h1>Fresh Jobs</h1>
				</div>
				<nav>{links}</nav>
			</header>
		);
	},
	logout: function(e) {
		e.preventDefault();
		user.clear();
		$.ajax({
			url: '/auth/logout',
			method: 'post',
			accepts: 'application/json'
		})
		.error(err => {
			console.log(err);
		});
	}
});