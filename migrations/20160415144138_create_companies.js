exports.up = function(knex, Promise) {
	return knex.schema.createTable('companies', function(t) {
		t.increments('id').unsigned().primary();
		t.dateTime('createdAt').notNull();
		t.dateTime('updatedAt').nullable();
		t.dateTime('deletedAt').nullable();

		t.string('name').notNull();
		t.string('headQuarters').notNull();
		t.integer('numEmployees').notNull();
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTable('companies');
};
