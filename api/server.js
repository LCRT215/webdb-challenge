const express = require("express");
const helmet = require("helmet");

const projectsRouter = require("../routers/projects_router.js");

const actionsRouter = require("../routers/actions_router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use("/projects", projectsRouter);
server.use("/actions", actionsRouter);

module.exports = server;
