const router = require("express").Router();
//importing functions
const {
  getAllThoughts,
  getOneThought,
  newThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  deleteThoughtReaction,
} = require("../../controllers/thoughtController");
//use /
router.route("/").get(getAllThoughts).post(newThought);

router
  .route("/:thoughtId")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);
//add thought reaction route
router.route("/:thoughtId/reactions").post(addThoughtReaction);
//delete thoght reaction
router.route("/:thoughtId/reactions/:reactionId").delete(deleteThoughtReaction);

module.exports = router;
