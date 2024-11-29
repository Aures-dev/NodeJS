const express = require("express");
const morgan = require("morgan");
const app = express();
const port = 3000;

//app.use() Définit un middleware qui s’exécute pour toutes les requêtes
app.use((req, res, next) => {
  console.log(`Requête reçue pour ${req.url}`);
  next();
});
app.use(morgan("dev"));

// app.get() Définit une route qui répond uniquement aux requêtes GET
app.get("/", (req, res) => {
  res.send("Bienvenue dans mon premier serveur Express !");
});

app.get("/hello", (req, res) => {
  res.send("Hello, utilisateur Express !");
});

app.get("/notfound", (req, res) => {
  res.status(404).send("Page non trouvée !");
});

//test avec cette url http://localhost:3000/recherche?terme=express&categorie=programming
app.get("/recherche", (req, res) => {
  const terme = req.query.terme; // Récupère le paramètre de requête "terme"
  const categorie = req.query.categorie; // Récupère le paramètre de requête "categorie"

  if (terme && categorie) {
    res.send(
      `Résultats de la recherche pour "${terme}" dans la catégorie "${categorie}"`
    );
  } else {
    res.send("Veuillez fournir des paramètres de recherche.");
  }
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
