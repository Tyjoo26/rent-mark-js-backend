
exports.up = function(knex, Promise) {
  return knex.schema
  .createTable("users", function(t){
    t.increments('id')
  })
};

exports.down = function(knex, Promise) {

};
