
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("units", function(t){
    t.increments("unit_id").unsigned().notNullable();
    t.string("unit_type").notNullable();
    t.string("unit_number").notNullable()
    t.bigInteger("rent").notNullable();
    t.bigInteger("rent_due").notNullable();
    t.date("rent_due_date").notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("units")
};
