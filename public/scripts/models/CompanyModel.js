import Backbone from 'backbone';

export default Backbone.Model.extend({
	attributes: {
		id: null,
		name: '',
		headquarters: '',
		numEmployees: 0,
		createdAt: null,
		updatedAt: null
	},
	urlRoot: '/api/v1/company'
});