// /api/thoughts

// GET to get all thoughts

// GET to get a single thought by its _id

// POST to create a new thought (don't forget to push the created thought's _id to the associated user's thoughts array field)

// // example data
// {
//   "thoughtText": "Here's a cool thought...",
//   "username": "lernantino",
//   "userId": "5edff358a0fcb779aa7b118b"
// }
// PUT to update a thought by its _id

// DELETE to remove a thought by its _id

const router = require("express").Router();
const {
  getAllThoughts,
  getOneThought,
  newThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  deleteThoughtReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getAllThoughts).post(newThought);

router
  .route("/:thoughtId")
  .get(getOneThought)
  .put(updateThought)
  .delete(deleteThought);

router.route("/:thoughtId/reactions").post(addThoughtReaction);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteThoughtReaction);

module.exports = router;
