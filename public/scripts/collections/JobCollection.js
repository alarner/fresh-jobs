import Backbone from 'backbone';
import JobModel from '../models/JobModel';

export default Backbone.Collection.extend({
	model: JobModel,
	url: '/api/v1/job'
});