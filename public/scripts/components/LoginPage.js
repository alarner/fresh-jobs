import React from 'react';
import $ from 'jquery';
import {hashHistory} from 'react-router';

import user from '../stores/user';

export default React.createClass({
	getInitialState: function() {
		return {
			errors: {}
		};
	},
	render: function() {
		return (
			<section>
				<h1>Login Page</h1>
				<form onSubmit={this.login}>
					<div>
						<div className="error">{this.state.errors.email ? this.state.errors.email.message : ''}</div>
						<input type="text" placeholder="email" ref="email" />
					</div>
					<div>
						<div className="error">{this.state.errors.password ? this.state.errors.password.message : ''}</div>
						<input type="password" placeholder="password" ref="password" />
					</div>
					<button type="submit">Register</button>
				</form>
			</section>
		);
	},
	login: function(e) {
		e.preventDefault();
		$.ajax({
			url: '/auth/login',
			method: 'post',
			accepts: 'application/json',
			data: {
				email: this.refs.email.value,
				password: this.refs.password.value
			}
		})
		.done(u => {
			user.set(u);
			hashHistory.push('/');
		})
		.error(err => {
			this.setState({
				errors: err.responseJSON
			});
		});
	}
});