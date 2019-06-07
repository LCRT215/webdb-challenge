exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    //id
    tbl.increments().unique();
    //description
    tbl;
    tbl.string("description", 200).notNullable();
    //notes
    tbl.string("notes", 400).notNullable();
    //completed
    tbl
      .boolean("completed")
      .notNullable()
      .defaultTo(false);
    //foreign key
    tbl
      .integer("project_id")
      .notNullable()
      .unsigned()
      .references("id")
      .inTable("projects")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};
