const router = require("express").Router();

let Secret = require("../models/secret.model");

router.route("/").get((req, res) => {
  Secret.find()
    .then((secrets) => res.json(secrets))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const userName = req.body.userName;
  const secret = req.body.secret;

  const newSecret = new Secret({ userName, secret });

  newSecret
    .save()
    .then(() => {
      res.json("Secret added!");
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Secret.findById(req.params.id)
    .then((secret) => res.json(secret))
    .catch((err) => console.log("Error :" + err));
});

router.route("/:id").delete((req, res) => {
  Secret.findByIdAndDelete(req.params.id)
    .then(() => res.json("Secret deleted"))
    .catch((err) => console.log("Error :" + err));
});

module.exports = router;
