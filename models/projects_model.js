const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  get,
  getWithId,
  add
};

function get() {
  return db("projects");
}

function getWithId(id) {
  return db("projects")
    .where({ id })
    .first();
}

function add(project) {
  return db("projects").insert(project);
}
