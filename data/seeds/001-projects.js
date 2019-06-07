exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("projects")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Sprint challenge",
          description: "Web 19 sprint 12 challenge",
          completed: false
        },
        {
          name: "Clean home",
          description: "tidying up for visiters",
          completed: false
        },
        {
          name: "Job Search",
          description: "searching for a job",
          completed: false
        }
      ]);
    });
};
