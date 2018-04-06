var faker = require('faker')

exports.seed = function(knex, Promise) {
  return knex('events').del()
    .then(function() {
      return knex('events').insert([
        {name: "Breakfast2Go", details: "Breakfast in the Lobby", date: faker.date.future(30)},
        {name: "Pool Party", details: "Enjoy Drinks and Food at the Pool", date: faker.date.future(45)},
        {name: "Wine and Cheese", details: "Enjoy Wine and Cheese at our Mixer", date: faker.date.future(55)},
        {name: "Meet your Neighbors!", details: "Meet your neighbors!", date: faker.date.future(32)},
        {name: "Movie Night!", details: "Watch Cheech and Chong!", date: faker.date.future(64)},
        {name: "Quarterly Social", details: "Take a break at our Quarterly Social", date: faker.date.future(25)}])
    })
}
