const router = require("express").Router();
const projectsController = require("../../controllers/projectsController");

// Matches with "/api/projects"
router.route("/projects").get(projectsController.findAll);

module.exports = router;
