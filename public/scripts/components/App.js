import React from 'react';
import Navigation from './Navigation';

export default React.createClass({
	render: function() {
		return (
			<section>
				<Navigation />
				{this.props.children}
			</section>
		);
	}
});