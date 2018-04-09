var faker = require("faker")

exports.seed = function(knex, Promise) {
  return knex('users').del()
    .then(function() {
      return knex('users').insert([
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'tenant'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'manager'},
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'manager'},
        { first_name: "Timothy", last_name: "Joo", email: "tyjoo21@gmail.com", password: "12345", access: 'manager'}
      ])
    })
}
