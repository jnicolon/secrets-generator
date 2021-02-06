const router = require("express").Router();

let Secret = require("../models/secret.model");

router.route("/").get((req, res) => {
  Secret.find()
    .then((secrets) => res.json(secrets))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const author = req.body.author;
  const secret = req.body.secret;
  const date = Date.parse(req.body.date);

  const newSecret = new Secret({ author, secret, date });

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

router.route("/update/:id").post((req, res) => {
  Secret.findById(req.params.id)
    .then((secret) => {
      secret.author = req.body.author;
      secret.secret = req.body.secret;
      secret.date = Date.parse(req.body.date);

      secret
        .save()
        .then(() => res.json("Secret updated"))
        .catch((err) => console.log("Error :" + err));
    })
    .catch((err) => console.log("Error :" + err));
});

router.route("/:id").delete((req, res) => {
  Secret.findByIdAndDelete(req.params.id)
    .then(() => res.json("Secret deleted"))
    .catch((err) => console.log("Error :" + err));
});

module.exports = router;
