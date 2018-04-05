var faker = require('faker');

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function() {
      return knex('users').insert([
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password()}
      ])
    })
}
