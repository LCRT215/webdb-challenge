const knex = require("knex");
const knexConfig = require("../knexfile.js");
const db = knex(knexConfig.development);

module.exports = {
  get,
  getWithId,
  add
};

function get() {
  return db("actions");
}

function getWithId(id) {
  return db("actions")
    .where({ id })
    .first();
}

function add(action) {
  return db("actions").insert(action);
}
