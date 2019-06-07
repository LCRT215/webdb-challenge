const express = require("express");
const helmet = require("helmet");
const knex = require("knex");
const knexConfig = require("../knexfile");

const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());
const errors = {
  "19": "Another record with that value exists"
};

//PROJECT ENDPOINTS
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

server.put("/projects/:id", async (req, res) => {
  try {
    const count = await db("projects")
      .where({ id: req.params.id })
      .update(req.body);

    if (count > 0) {
      const project = await db("projects")
        .where({ id: req.params.id })
        .first();

      res.status(200).json(project);
    } else {
      res.status(404).json({ message: "Project not found" });
    }
  } catch (error) {}
});

//ACTION ENDPOINTS
server.get("/actions", async (req, res) => {
  try {
    const actions = await db("actions");
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.post("/actions", async (req, res) => {
  try {
    const [id] = await db("actions").insert(req.body);

    const action = await db("actions")
      .where({ id })
      .first();

    res.status(201).json(action);
  } catch (error) {
    const message = errors[error.errno] || "We ran into an error";
    res.status(500).json({ message, error });
  }
});

module.exports = server;
