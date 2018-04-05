
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("users", function(t){
    t.increments('id').unsigned().primary();
    t.string("first_name").notNullable();
    t.string("last_name").notNullable();
    t.string("email").notNullable();
    t.string("password").notNullable();
    t.enum('access', ["tenant", "manager"]).notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users")
};
