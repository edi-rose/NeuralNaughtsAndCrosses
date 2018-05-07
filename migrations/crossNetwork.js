exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('crossNetwork', table => {
    table.increments('id')
    table.json('crossNetwork')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('boards')
}
