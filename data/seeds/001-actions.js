exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("actions")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("actions").insert([
        {
          description: "test",
          notes: "test notes",
          completed: true,
          project_id: 2
        }
      ]);
    });
};
