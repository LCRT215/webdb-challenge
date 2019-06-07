exports.up = function(knex, Promise) {
  return knex.schema.createTable("projects", function(tbl) {
    //id
    tbl.increments().unique();
    //name
    tbl
      .string("name", 128)
      .notNullable()
      .unique();
    tbl.string("description", 400);
    tbl
      .boolean("completed")
      .notNullable()
      .defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("projects");
};
