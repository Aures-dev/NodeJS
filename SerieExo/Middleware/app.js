const express = require("express");

const app = express();

//middleware de logs
function logger(req, res, next) {
  console.log(`${req.method}\n ${req.url}`);
  next();
}

app.get("/", logger, (req, res) => {
  res.send("Page d'acceuil");
});

//Middleware d'authentification
function auth(req, res, next) {
  const token = req.headers["auto"];
  if (token === "mon-token-secret") {
    next(); //token valide, passer à la suite
  } else {
    res.status(401).send("Accès non autorisé");
  }
}

//utiliser le middleware pour une route protégée
app.get("/admin", auth, (req, res) => {
  res.send("Bienvenu dans la section administrateur");
});

app.listen(3000, () => console.log("seveur démarré avec succès"));
