import Backbone from 'backbone';

export default Backbone.Model.extend({
	attributes: {
		id: null,
		createdAt: null,
		updatedAt: null,
		firstName: '',
		lastName: '',
		email: ''
	},
	isLoggedIn: function() {
		if(this.get('id')) {
			return true;
		}
		return false;
	}
});