import Backbone from 'backbone';

export default Backbone.Model.extend({
	attributes: {
		id: null,
		title: '',
		description: '',
		location: '',
		tags: [],
		companyName: null,
		companyId: null,
		createdAt: null,
		updatedAt: null
	},
	urlRoot: '/api/v1/job'
});