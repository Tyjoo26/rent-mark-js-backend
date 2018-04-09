var faker = require("faker")
var date = new Date(2018, 14, 1)

exports.seed = function(knex, Promise) {
  return knex("units").del()
    .then(function() {
      return knex("units").insert([
        {unit_type: "1Bdr", unit_number: "A1",  rent: 975.25, rent_due: 975.25, rent_due_date: date },
        { unit_type: "1Bdr",unit_number: "A2", rent: 975.25, rent_due: 975.25, rent_due_date: date },
        { unit_type: "1Bdr", unit_number: "A3", rent: 975.25, rent_due: 975.25, rent_due_date: date },
        { unit_type: "1Bdr", unit_number: "A4", rent: 975.25, rent_due: 975.25, rent_due_date: date },
        { unit_type: "1Bdr", unit_number: "A5", rent: 975.25, rent_due: 975.25, rent_due_date: date },
        { unit_type: "1Bdr", unit_number: "A6", rent: 975.25, rent_due: 975.25, rent_due_date: date },
        { unit_type: "1Bdr", unit_number: "A7",rent: 975.25, rent_due: 975.25, rent_due_date: date },
        { unit_type: "1Bdr",unit_number: "A8", rent: 975.25, rent_due: 975.25, rent_due_date: date },
        { unit_type: "1Bdr", unit_number: "A9",rent: 975.25, rent_due: 975.25, rent_due_date: date },
        { unit_type: "1Bdr", unit_number: "A10",rent: 975.25, rent_due: 975.25, rent_due_date: date },
        {unit_type: "2Bdr",unit_number: "B1",  rent: 1880.50, rent_due: 1880.50, rent_due_date: date },
        { unit_type: "2Bdr",unit_number: "B2", rent: 1880.50, rent_due: 1880.50, rent_due_date: date },
        { unit_type: "2Bdr", unit_number: "B3", rent: 1880.50, rent_due: 1880.50, rent_due_date: date },
        { unit_type: "2Bdr",unit_number: "B4", rent: 1880.50, rent_due: 1880.50, rent_due_date: date },
        {unit_type: "2Bdr",unit_number: "B5",  rent: 1880.50, rent_due: 1880.50, rent_due_date: date },
        {unit_type: "2Bdr",unit_number: "B6",  rent: 1880.50, rent_due: 1880.50, rent_due_date: date },
        { unit_type: "2Bdr", unit_number: "B7",rent: 1880.50, rent_due: 1880.50, rent_due_date: date },
        { unit_type: "2Bdr", unit_number: "B8", rent: 1880.50, rent_due: 1880.50, rent_due_date: date },
        { unit_type: "2Bdr",unit_number: "B9", rent: 1880.50, rent_due: 1880.50, rent_due_date: date },
        { unit_type: "2Bdr",unit_number: "B10", rent: 1880.50, rent_due: 1880.50, rent_due_date: date }]);
    })
}
