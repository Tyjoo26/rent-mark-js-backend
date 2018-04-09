
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("units", function(t){
    t.increments("id").unsigned().primary().notNullable();
    t.string("unit_type").notNullable();
    t.string("unit_number").notNullable()
    t.decimal("rent", 6, 2).notNullable();
    t.decimal("rent_due", 6, 2 ).notNullable();
    t.date("rent_due_date").notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("units")
};
