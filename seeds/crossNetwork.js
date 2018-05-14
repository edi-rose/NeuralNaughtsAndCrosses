const crossJson = require('./untrainedNetwork.json')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('crossNetwork').del()
    .then(function () {
      // Inserts seed entries
      return knex('crossNetwork').insert([
        {id: 1, crossNetwork: JSON.stringify(crossJson)}
      ])
    })
}
