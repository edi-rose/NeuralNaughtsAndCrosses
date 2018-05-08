exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('crossNetwork', table => {
    table.increments('id')
    table.text('crossNetwork')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('crossNetwork')
}
