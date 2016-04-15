import Backbone from 'backbone';
import CompanyModel from '../models/CompanyModel';

export default Backbone.Collection.extend({
	model: CompanyModel,
	url: '/api/v1/company'
});