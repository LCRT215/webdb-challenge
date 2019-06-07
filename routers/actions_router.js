const router = require("express").Router();

const db = require("../models/actions_model");

//ACTION ENDPOINTS

router.get("/", (req, res) => {
  db.get()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
});

router.get("/:id", (req, res) => {
  db.getWithId(req.params.id)
    .then(action => {
      if (action) {
        res.status(200).json(action);
      } else {
        res.status(404).json({ message: "no action found with that id" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("/", (req, res) => {
  db.add(req.body).then(action => {
    res
      .status(201)
      .json(action)
      .catch(res.status(500).json({ message: "error adding project" }));
  });
});
module.exports = router;
