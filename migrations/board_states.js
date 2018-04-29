exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('boards', table => {
    table.increments('id')
    table.string('board')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('boards')
}
