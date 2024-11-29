# Structure app Express

Une bonne organisation dans une application Express suit généralement un ordre précis pour garder le code propre et éviter les erreurs d'ordre d'exécution. Voici une structure commune que tu peux utiliser comme base pour créer des applications Express bien structurées :

### Structure de base pour une application Express

1. **Chargement des modules** : Commence toujours par importer les modules nécessaires, y compris les dépendances externes comme Express et les modules internes.

2. **Configuration de l'application** : Définit des paramètres globaux pour l'application (comme le port) et, si besoin, configure des middlewares globaux comme `express.json()` (pour parser les JSON) ou `express.static()` (pour les fichiers statiques).

3. **Middlewares globaux** : Place les middlewares comme la journalisation (console logs) ou l'authentification avant les routes, pour qu'ils s'appliquent à toutes les requêtes.

4. **Définition des routes** : Crée des routes organisées par ressource (par exemple, utilisateur, produit) pour structurer le code. Si l'application est grande, il peut être utile d’organiser les routes dans des fichiers séparés.

5. **Gestion des erreurs** : Ajoute un middleware de gestion des erreurs pour capturer les erreurs et envoyer des réponses appropriées.

6. **Démarrage du serveur** : Configure `app.listen()` pour démarrer le serveur.

### Exemple d'une structure de base

Voici un exemple d'application Express bien structurée, suivant les étapes ci-dessus :

```javascript
// 1. Importation des modules
const express = require("express");
const morgan = require("morgan"); // Exemple de middleware pour journalisation

// 2. Configuration de l'application
const app = express();
const port = 3000;
app.use(express.json()); // Middleware pour parser le JSON

// 3. Middlewares globaux
app.use(morgan("dev")); // Middleware de journalisation
app.use((req, res, next) => {
  console.log(`Requête reçue pour ${req.url}`);
  next();
});

// 4. Définition des routes
app.get("/", (req, res) => {
  res.send("Bienvenue dans mon serveur Express bien structuré !");
});

app.get("/hello", (req, res) => {
  res.send("Hello, utilisateur Express !");
});

// Exemple d'une route inexistante pour tester la gestion d'erreurs
app.get("/notfound", (req, res) => {
  res.status(404).send("Page non trouvée !");
});

// 5. Middleware de gestion des erreurs
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Quelque chose s'est mal passé !");
});

// 6. Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur en écoute sur http://localhost:${port}`);
});
```

### Explication des sections

- **Middlewares globaux** (`app.use()`) : Ces middlewares s’exécutent pour toutes les routes, donc ils sont placés avant les routes elles-mêmes.
- **Routes** : Les routes principales sont définies après les middlewares globaux, et chaque route a sa propre logique de gestion de requête et de réponse. En structurant ainsi, tu assures que chaque requête est d'abord traitée par les middlewares globaux (journalisation, sécurité, etc.) avant de passer à la logique de la route.

- **Gestion des erreurs** : Ce middleware spécial se place tout à la fin. Si une erreur est levée dans une route, elle sera capturée ici, permettant de gérer toutes les erreurs en un seul endroit.

### Organiser les fichiers

Pour les applications plus grandes, tu peux aussi organiser les routes et les middlewares dans des fichiers séparés, par exemple :

- **routes/** : pour regrouper toutes les routes par ressource (utilisateur, produit, etc.).
- **middlewares/** : pour les middlewares personnalisés (comme l’authentification ou la validation).

En suivant cette structure, tu éviteras les erreurs d'ordre d'exécution et tu obtiendras un code plus clair et facile à maintenir.
