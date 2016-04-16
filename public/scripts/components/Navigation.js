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
			<Link to="/" key="home">Jobs</Link>,
			<Link to="/companies" key="companies">Companies</Link>,
			<Link to="/why" key="why">Why Fresh Jobs?</Link>
		];
		if(!user.isLoggedIn()) {
			links.push(<Link to="/login" key="login">Login</Link>);
			links.push(<Link to="/register" key="register">Register</Link>);
		}
		else {
			links.push(<Link to="/post" key="post">Post a Job</Link>);
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