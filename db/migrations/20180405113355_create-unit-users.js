
exports.up = function(knex, Promise) {
  return Promise.all
  ([knex.schema.createTable('unit_users', function(t){
    t.increments('id').notNullable();
    t.integer('user_id').notNullable().references('users.id');
    t.integer("unit_id").notNullable().references('units.id');
  })])
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("unit_users")
};
