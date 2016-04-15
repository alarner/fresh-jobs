import React from 'react';
import $ from 'jquery';
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
				<h1>Register Page</h1>
				<form onSubmit={this.register}>
					<div>
						<div className="error">{this.state.errors.firstName ? this.state.errors.firstName.message : ''}</div>
						<input type="text" placeholder="first name" ref="firstName" />
					</div>
					<div>
						<div className="error">{this.state.errors.lastName ? this.state.errors.lastName.message : ''}</div>
						<input type="text" placeholder="last name" ref="lastName" />
					</div>
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
	register: function(e) {
		e.preventDefault();
		$.ajax({
			url: '/auth/register',
			method: 'post',
			accepts: 'application/json',
			data: {
				firstName: this.refs.firstName.value,
				lastName: this.refs.lastName.value,
				email: this.refs.email.value,
				password: this.refs.password.value
			}
		})
		.done(u => {
			user.set(u);
		})
		.error(err => {
			this.setState({
				errors: err.responseJSON
			});
		});
	}
});