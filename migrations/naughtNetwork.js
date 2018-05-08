exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('naughtNetwork', table => {
    table.increments('id')
    table.text('naughtNetwork')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('naughtNetwork')
}
