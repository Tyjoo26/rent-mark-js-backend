var faker = require('faker')

exports.seed = function(knex, Promise) {
  return knex('units').del()
    .then(function() {
      return knex('units').insert([
        {unit_number: "A1", unit_type: "1Bdr", rent: 975.25, rent_due: 975.25, rent_due_date: }
      ])
    })
}
