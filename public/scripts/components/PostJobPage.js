import React from 'react';
import CompanySelection from './CompanySelection';

export default React.createClass({
	getInitialState: function() {
		return {
			company: null
		};
	},
	render: function() {
		return (
			<section>
				<h1>Post your Job</h1>
				<form>
					<div className="form-row">
						<label>
							<div className="label">Title</div>
							<input type="text" />
						</label>
						<div className="error"></div>
					</div>
					<div className="form-row">
						<label>
							<div className="label">Location</div>
							<input type="text" />
						</label>
						<div className="error"></div>
					</div>
					<div className="form-row">
						<label>
							<div className="label">Description</div>
							<textarea />
						</label>
						<div className="error"></div>
					</div>
				</form>
				<CompanySelection onCompanyClick={this.onCompanyChange} selected={this.state.company} />
				<button className="btn primary">Post Job</button>
			</section>
		);
	},
	onCompanyChange: function(company) {
		this.setState({company: company});
	}
});