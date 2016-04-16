import React from 'react';
import Rayon from 'rayon';
import validator from 'validator';
import CompanyCollection from '../collections/CompanyCollection';
import user from '../stores/user';

export default React.createClass({
	getInitialState: function() {
		return {
			loading: false,
			errors: {},
			isModelOpen: false,
			companies: new CompanyCollection()
		};
	},
	componentWillMount: function() {
		this.state.companies.on('update', () => {
			this.setState({
				companies: this.state.companies
			});
		});

		this.state.companies.fetch({
			data: {
				where: {
					userId: user.id
				}
			}
		});
	},
	render: function() {
		let companies = this.state.companies.map(company => {
			let className = 'company';
			if(this.props.selected && this.props.selected.id === company.id) {
				className += ' selected';
			}
			return (
				<div key={company.cid} className="company-wrapper">
					<div className={className} onClick={this.selectCompany.bind(this, company)}>{company.get('name')}</div>
				</div>
			);
		});
		return (
			<div className="company-selection">
				<div className="company-wrapper">
					<a href="#" className="company" onClick={this.openModal}>Add New Company</a>
				</div>
				{companies}
				<Rayon isOpen={this.state.isModelOpen} onClose={this.closeModal}>
					<form onSubmit={this.addCompany}>
						<header>
							Add a new Company
						</header>
						<div className="modal-body">
							<div className="form-row error">
								{this.state.errors.default}
							</div>
							<div className="form-row">
								<label>
									<div className="label">Name</div>
									<input type="text" ref="name" />
								</label>
								<div className="error">{this.state.errors.name}</div>
							</div>
							<div className="form-row">
								<label>
									<div className="label">Headquarters</div>
									<input type="text" ref="headquarters" />
								</label>
								<div className="error">{this.state.errors.headquarters}</div>
							</div>
							<div className="form-row">
								<label>
									<div className="label">Number of Employees</div>
									<input type="text" ref="employees" />
								</label>
								<div className="error">{this.state.errors.employees}</div>
							</div>
						</div>
						<footer>
							<button type="submit" className="btn primary" disabled={this.state.loading}>Add Company</button>
							<button className="btn" onClick={this.closeModal} disabled={this.state.loading}>Cancel</button>
						</footer>
					</form>
				</Rayon>
			</div>
		);
	},
	openModal: function(e) {
		e.preventDefault();
		this.setState({ isModelOpen: true });
	},
	closeModal: function(e) {
		this.setState({ isModelOpen: false });
	},
	selectCompany: function(company) {
		console.log('selectCompany', company);
		if(this.props.onCompanyClick) {
			this.props.onCompanyClick(company);
		}
	},
	addCompany: function(e) {
		e.preventDefault();
		let errors = {};
		if(!this.refs.name.value) {
			errors.name = 'Please enter a company name';
		}
		if(!this.refs.headquarters.value) {
			errors.headquarters = 'Please enter a company headquarters location';
		}
		if(!this.refs.employees.value) {
			errors.employees = 'Please enter the number of employees';
		}
		else if(!validator.isInt(this.refs.employees.value)) {
			errors.employees = 'The number of employees must be a number';
		}

		if(Object.keys(errors).length) {
			this.setState({
				errors: errors
			});
		}
		else {
			this.setState({ loading: true });
			this.state.companies.create(
				{
					name: this.refs.name.value,
					headquarters: this.refs.headquarters.value,
					numEmployees: this.refs.employees.value
				},
				{
					success: (company) => {
						this.setState({ isModelOpen: false });
						this.selectCompany(company);
					},
					error: (model, err) => {
						this.setState({ errors: err.e.toJSON() });
					},
					complete: () => {
						this.setState({ loading: false });
					}
				}
			);
		}
	}
});