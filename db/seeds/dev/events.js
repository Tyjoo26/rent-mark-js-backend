var faker = require('faker')
var date = new Date(2018, 05, 22)

exports.seed = function(knex, Promise) {
  return knex('events').del()
    .then(function() {
      return knex('events').insert([
        {event_name: "Breakfast2Go", event_details: "Breakfast in the Lobby", event_date: date},
        {event_name: "Pool Party", event_details: "Enjoy Drinks and Food at the Pool", event_date: date},
        {event_name: "Wine and Cheese", event_details: "Enjoy Wine and Cheese at our Mixer", event_date: date},
        {event_name: "Meet your Neighbors!", event_details: "Meet your neighbors!", event_date: date},
        {event_name: "Movie Night!", event_details: "Watch Cheech and Chong!", event_date: date},
        {event_name: "Quarterly Social", event_details: "Take a break at our Quarterly Social", event_date: date}
      ]);
    })
}
