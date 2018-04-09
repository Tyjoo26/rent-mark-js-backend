
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("events", function(t) {
    t.increments("id").unsigned().primary().notNullable();
    t.string("event_name").notNullable();
    t.text("event_details").notNullable();
    t.date("event_date").notNullable()
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("events")
};
