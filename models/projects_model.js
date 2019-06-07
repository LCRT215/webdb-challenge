const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  get,
  getProjectWithActions,
  getById,
  add
};

function get() {
  return db("projects");
}
function getById(id) {
  return db("projects")
    .where({ id })
    .first();
}

function getProjectWithActions(id) {
  return db("actions").where({ project_id: id });
}

function add(project) {
  return db("projects").insert(project);
}
