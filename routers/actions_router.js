const router = require("express").Router();

const db = require("../models/projects_model.js");

//ACTION ENDPOINTS
router.get("/actions", async (req, res) => {
  try {
    const actions = await db("actions");
    res.status(200).json(actions);
  } catch (error) {
    res.status(500).json(error);
  }
});

router.post("/actions", async (req, res) => {
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

module.exports = router;
