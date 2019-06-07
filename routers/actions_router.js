const router = require("express").Router();

const db = require("../models/actions_model");

//ACTION ENDPOINTS

router.get("/", (req, res) => {
  db.get()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
});

router.post("/actions", (req, res) => {
  db.getWithId(req.params.id)
    .then(project => res.status(200).json(project))
    .catch(res.status(500).json({ message: "no action found with that id" }));
});

module.exports = router;
