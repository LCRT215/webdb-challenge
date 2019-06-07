const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("../knexfile");

const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get("/projects", async (req, res) => {
  try {
    const projects = await db("projects");
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.get("/projects/:id", async (req, res) => {
  try {
    const project = await db("projects")
      .where({ id: req.params.id })
      .first();
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.post("/projects", async (req, res) => {
  try {
    const [id] = await db("projects").insert(req.body);

    const project = await db("projects")
      .where({ id })
      .first();

    res.status(201).json(project);
  } catch (error) {
    const message = errors[error.errno] || "We ran into an error";
    res.status(500).json({ message, error });
  }
});

module.exports = server;
