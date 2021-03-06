
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("event_users", function(t){
    t.increments("id").notNullable();
    t.integer("event_id").notNullable().references('events.id');
    t.integer('user_id').notNullable().references('users.id');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("event_users")
};
