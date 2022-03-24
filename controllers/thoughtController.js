const { Thought, User } = require("../../models");

module.exports = {
  // get thoughts - all
  getAllThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  //get thoughts - by id
  getOneThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .select("-__v")
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "No thought associated with provided ID" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  createThought(req, res) {
    Thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },


updateThought(req,res) {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true}
        )
    .then((thought) => {
        !thought
        ? res
            .status(404)
            .json({ message: 'No thought associated with provided ID' })
        : res.json(thought)
    })
    .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
},

deleteThought(req,res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
    // .populate('reactions')
    // .select('__v')
    .then((thought) => {
        !thought
        ? res
            .status(404)
            .json({ message: 'No thought found with that ID' })
        : res.json(thought)
    })
    .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
    })
},