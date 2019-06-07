const router = require("express").Router();

const db = require("../models/projects_model.js");

//PROJECT ENDPOINTS

router.get("/", (req, res) => {
  db.get()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  db.getWithId(req.params.id)
    .then(project => res.status(200).json(project))
    .catch(res.status(500).json({ message: "no project found with that id" }));
});

router.post("/", (req, res) => {
  const { name } = req.body;
  if (name) {
    db.add(req.body, "project").then(project => {
      res
        .status(201)
        .json(project)
        .catch(res.status(500).json({ message: "error adding project" }));
    });
  } else {
    res.status(400).json({ message: "name is not unique" });
  }
});
module.exports = router;
