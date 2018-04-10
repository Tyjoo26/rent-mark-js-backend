var faker = require('faker')
var date = new Date(2018, 05, 22)
var unit_date = new Date(2018, 14, 1)


exports.seed = function(knex, Promise) {
  return knex('units').del()
    .then(() => {
      return knex('users').del()
    })
    .then(() => {
      return knex('events').del()
    })
    .then(() => {
      return knex('events').insert([
        {event_name: "Breakfast2Go", event_details: "Breakfast in the Lobby", event_date: date},
        {event_name: "Pool Party", event_details: "Enjoy Drinks and Food at the Pool", event_date: date},
        {event_name: "Wine and Cheese", event_details: "Enjoy Wine and Cheese at our Mixer", event_date: date},
        {event_name: "Meet your Neighbors!", event_details: "Meet your neighbors!", event_date: date},
        {event_name: "Movie Night!", event_details: "Watch Cheech and Chong!", event_date: date},
        {event_name: "Quarterly Social", event_details: "Take a break at our Quarterly Social", event_date: date}
      ])
    })
    .then(() => {
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
        { first_name: faker.name.firstName(), last_name: faker.name.lastName(), email: faker.internet.email(), password: faker.internet.password(), access: 'manager'},
        { first_name: "Timothy", last_name: "Joo", email: "tyjoo21@gmail.com", password: "12345", access: 'manager'}
      ])
    })
    .then(() => {
      return knex("units").insert([
        {unit_type: "1Bdr", unit_number: "A1",  rent: 975.25, rent_due: 975.25, rent_due_date: unit_date },
        { unit_type: "1Bdr",unit_number: "A2", rent: 975.25, rent_due: 975.25, rent_due_date: unit_date },
        { unit_type: "1Bdr", unit_number: "A3", rent: 975.25, rent_due: 975.25, rent_due_date: unit_date },
        { unit_type: "1Bdr", unit_number: "A4", rent: 975.25, rent_due: 975.25, rent_due_date: unit_date },
        { unit_type: "1Bdr", unit_number: "A5", rent: 975.25, rent_due: 975.25, rent_due_date: unit_date },
        { unit_type: "1Bdr", unit_number: "A6", rent: 975.25, rent_due: 975.25, rent_due_date: unit_date },
        { unit_type: "1Bdr", unit_number: "A7",rent: 975.25, rent_due: 975.25, rent_due_date: unit_date },
        { unit_type: "1Bdr",unit_number: "A8", rent: 975.25, rent_due: 975.25, rent_due_date: unit_date },
        { unit_type: "1Bdr", unit_number: "A9",rent: 975.25, rent_due: 975.25, rent_due_date: unit_date },
        { unit_type: "1Bdr", unit_number: "A10",rent: 975.25, rent_due: 975.25, rent_due_date: unit_date },
        {unit_type: "2Bdr",unit_number: "B1",  rent: 1880.50, rent_due: 1880.50, rent_due_date: unit_date },
        { unit_type: "2Bdr",unit_number: "B2", rent: 1880.50, rent_due: 1880.50, rent_due_date: unit_date },
        { unit_type: "2Bdr", unit_number: "B3", rent: 1880.50, rent_due: 1880.50, rent_due_date: unit_date },
        { unit_type: "2Bdr",unit_number: "B4", rent: 1880.50, rent_due: 1880.50, rent_due_date: unit_date },
        {unit_type: "2Bdr",unit_number: "B5",  rent: 1880.50, rent_due: 1880.50, rent_due_date: unit_date },
        {unit_type: "2Bdr",unit_number: "B6",  rent: 1880.50, rent_due: 1880.50, rent_due_date: unit_date },
        { unit_type: "2Bdr", unit_number: "B7",rent: 1880.50, rent_due: 1880.50, rent_due_date: unit_date },
        { unit_type: "2Bdr", unit_number: "B8", rent: 1880.50, rent_due: 1880.50, rent_due_date: unit_date },
        { unit_type: "2Bdr",unit_number: "B9", rent: 1880.50, rent_due: 1880.50, rent_due_date: unit_date },
        { unit_type: "2Bdr",unit_number: "B10", rent: 1880.50, rent_due: 1880.50, rent_due_date: unit_date }
      ])
    })
    .then(() => {
      return knex('event_users').insert([
        {event_id: 1, user_id: 1},
        {event_id: 1, user_id: 2},
        {event_id: 1, user_id: 3},
        {event_id: 1, user_id: 4},
        {event_id: 1, user_id: 5},
        {event_id: 1, user_id: 6},
        {event_id: 1, user_id: 7},
        {event_id: 1, user_id: 8},
        {event_id: 2, user_id: 9 },
        {event_id: 2, user_id: 10  },
        {event_id: 2, user_id: 11  },
        {event_id: 2, user_id: 12  },
        {event_id: 2, user_id: 13  },
        {event_id: 2, user_id: 14  },
        {event_id: 2, user_id: 15  },
        {event_id: 3, user_id: 16 },
        {event_id: 3, user_id: 17 },
        {event_id: 3, user_id: 18 },
        {event_id: 3, user_id: 19 },
        {event_id: 3, user_id: 20 },
        {event_id: 4, user_id: 21},
        {event_id: 4, user_id: 22},
        {event_id: 4, user_id: 23},
        {event_id: 4, user_id: 24},
        {event_id: 4, user_id: 25},
        {event_id: 4, user_id: 26},
        {event_id: 5, user_id: 27},
        {event_id: 5, user_id: 28},
        {event_id: 5, user_id: 29},
        {event_id: 5, user_id: 30},
        {event_id: 5, user_id: 31},
        {event_id: 5, user_id: 32},
        {event_id: 5, user_id: 1},
        {event_id: 6, user_id: 1},
      ])
    })
    .then(() => {
      return knex('unit_users').insert([
        {user_id: 1, unit_id: 1},
        {user_id: 2, unit_id: 2},
        {user_id: 3, unit_id: 3},
        {user_id: 4, unit_id: 4},
        {user_id: 5, unit_id: 5},
        {user_id: 6, unit_id: 6},
        {user_id: 7, unit_id: 7},
        {user_id: 8, unit_id: 8},
        {user_id: 9, unit_id: 9},
        {user_id: 10, unit_id: 10},
        {user_id: 11, unit_id: 11},
        {user_id: 12, unit_id: 11},
        {user_id: 13, unit_id: 12},
        {user_id: 14, unit_id: 12},
        {user_id: 15, unit_id: 13},
        {user_id: 16, unit_id: 13},
        {user_id: 17, unit_id: 14},
        {user_id: 18, unit_id: 14},
        {user_id: 19, unit_id: 15},
        {user_id: 20, unit_id: 15},
        {user_id: 21, unit_id: 16},
        {user_id: 22, unit_id: 16},
        {user_id: 23, unit_id: 17},
        {user_id: 24, unit_id: 17},
        {user_id: 25, unit_id: 18},
        {user_id: 26, unit_id: 18},
        {user_id: 27, unit_id: 19},
        {user_id: 28, unit_id: 19},
        {user_id: 29, unit_id: 20},
        {user_id: 30, unit_id: 20}
      ])
    })
}
