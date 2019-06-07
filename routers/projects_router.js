const router = require("express").Router();

const db = require("../models/projects_model.js");

//PROJECT ENDPOINTS

router.get("/", (req, res) => {
  db.get()
    .then(projects => res.status(200).json(projects))
    .catch(err => res.status(500).json(err));
});

// server.get("/projects/:id", async (req, res) => {
//   try {
//     const project = await db("projects")
//       .where({ id: req.params.id })
//       .first();
//     res.status(200).json(project);
//   } catch (error) {
//     res.status(500).json(error);
//   }
// });

// server.post("/projects", async (req, res) => {
//   try {
//     const [id] = await db("projects").insert(req.body);

//     const project = await db("projects")
//       .where({ id })
//       .first();

//     res.status(201).json(project);
//   } catch (error) {
//     const message = errors[error.errno] || "We ran into an error";
//     res.status(500).json({ message, error });
//   }
// });

// server.put("/projects/:id", async (req, res) => {
//   try {
//     const count = await db("projects")
//       .where({ id: req.params.id })
//       .update(req.body);

//     if (count > 0) {
//       const project = await db("projects")
//         .where({ id: req.params.id })
//         .first();

//       res.status(200).json(project);
//     } else {
//       res.status(404).json({ message: "Project not found" });
//     }
//   } catch (error) {}
// });

module.exports = router;
