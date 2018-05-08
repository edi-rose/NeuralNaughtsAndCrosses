const naughtJson = require('../network/naughtNetwork.json')

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('naughtNetwork').del()
    .then(function () {
      // Inserts seed entries
      return knex('naughtNetwork').insert([
        {id: 1, naughtNetwork: JSON.stringify(naughtJson)}
      ])
    })
}
