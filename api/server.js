const express = require("express");
const helmet = require("helmet");

const projectsRouter = require("../routers/projects_router.js");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/projects", projectsRouter);

module.exports = server;
