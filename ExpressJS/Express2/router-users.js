const express = require("express");
const fs = require("fs");
const router = express.Router();
const users = require("./users");

router.get("/:id", (req, res) => {
  //   const users = [
  //     { id: 1, nom: "Man", prenom: "Adam" },
  //     { id: 2, nom: "Woman", prenom: "Eve" },
  //     { id: 3, nom: "Men", prenom: "Adamas" },
  //     { id: 4, nom: "Women", prenom: "Ella" },
  //   ];
  const { id } = req.params;
  res.status(200).send(`Le user est :${id}`);
});

router.get("/", (req, res) => {
  //   const users = [
  //     { id: 1, nom: "Man", prenom: "Adam" },
  //     { id: 2, nom: "Woman", prenom: "Eve" },
  //     { id: 3, nom: "Men", prenom: "Adamas" },
  //     { id: 4, nom: "Women", prenom: "Ella" },
  //   ];

  let theUser = null;
  const { id, nom, prenom } = req.query;

  if (nom) {
    theUser = users.filter((el) => el.nom.toLowerCase() == nom.toLowerCase());
    if (theUser.length > 0) {
      res.status(200).json(theUser);
    } else {
      res.send("Utilisateur non trouvé");
      console.log(theUser);
    }
  } else if (id) {
    theUser = users.filter((el) => el.id == id);
    if (theUser.length > 0) {
      res.status(200).json(theUser);
    } else {
      res.send("Utilisateur non trouvé");
      console.log(theUser);
    }
  } else {
    res.json(users);
  }
});

module.exports = router;
