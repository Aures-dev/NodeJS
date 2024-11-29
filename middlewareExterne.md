Les **middlewares** dans Express.js sont des fonctions qui exécutent du code entre la réception d'une requête et l'envoi de la réponse. Ils permettent d’ajouter des fonctionnalités comme l'analyse des corps de requêtes, la gestion des sessions, l'authentification, la journalisation des requêtes, etc.

**Les middlewares externes** sont des bibliothèques qui s'intègrent facilement à Express pour enrichir ses fonctionnalités sans avoir à tout coder manuellement. Voici un aperçu de quelques middlewares externes populaires et de leur utilisation :

### 1. **morgan** (journalisation des requêtes HTTP)

`morgan` est un middleware utilisé pour enregistrer les détails des requêtes HTTP dans la console, ce qui aide à la détection et à la résolution des problèmes.

**Installation** :

```bash
npm install morgan
```

**Utilisation** :

```javascript
const express = require("express");
const morgan = require("morgan");

const app = express();

// Utiliser morgan pour enregistrer toutes les requêtes
app.use(morgan("combined")); // Vous pouvez utiliser 'tiny', 'dev', etc., pour différents formats

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
```

### 2. **body-parser** (analyse du corps de la requête)

Avant Express 4.16.0, `body-parser` était un middleware externe couramment utilisé pour analyser les corps des requêtes. Depuis, il est intégré dans Express, mais il reste parfois utilisé séparément pour des cas particuliers.

**Installation** (si nécessaire) :

```bash
npm install body-parser
```

**Utilisation** :

```javascript
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware pour analyser les corps JSON
app.use(bodyParser.json());

// Middleware pour analyser les corps encodés en URL (formulaires)
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/submit", (req, res) => {
  console.log(req.body);
  res.send("Données reçues");
});

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
```

### 3. **cors** (autoriser les requêtes cross-origin)

`cors` permet de gérer les problèmes liés aux politiques de la même origine en autorisant les requêtes provenant de domaines différents.

**Installation** :

```bash
npm install cors
```

**Utilisation** :

```javascript
const express = require("express");
const cors = require("cors");

const app = express();

// Utiliser cors pour toutes les routes
app.use(cors());

// Exemple de route
app.get("/data", (req, res) => {
  res.json({ message: "CORS est activé pour cette route" });
});

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
```

### 4. **express-session** (gestion des sessions)

`express-session` est utilisé pour créer et gérer des sessions utilisateur. C'est utile pour des fonctionnalités comme l'authentification.

**Installation** :

```bash
npm install express-session
```

**Utilisation** :

```javascript
const express = require("express");
const session = require("express-session");

const app = express();

// Configurer le middleware de session
app.use(
  session({
    secret: "mon secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Mettez à true si vous utilisez HTTPS
  })
);

app.get("/", (req, res) => {
  if (!req.session.visites) {
    req.session.visites = 1;
  } else {
    req.session.visites++;
  }
  res.send(`Nombre de visites : ${req.session.visites}`);
});

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
```

### 5. **helmet** (sécurité)

`helmet` aide à sécuriser votre application Express en définissant divers en-têtes HTTP.

**Installation** :

```bash
npm install helmet
```

**Utilisation** :

```javascript
const express = require("express");
const helmet = require("helmet");

const app = express();

// Utiliser Helmet pour sécuriser l'application
app.use(helmet());

app.get("/", (req, res) => {
  res.send("Hello, sécurisé !");
});

app.listen(3000, () => {
  console.log("Serveur sécurisé démarré sur le port 3000");
});
```

### 6. **cookie-parser** (analyse des cookies)

`cookie-parser` permet de lire et de manipuler les cookies des requêtes.

**Installation** :

```bash
npm install cookie-parser
```

**Utilisation** :

```javascript
const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

// Utiliser cookie-parser
app.use(cookieParser());

app.get("/setcookie", (req, res) => {
  res.cookie("nom", "John Doe").send("Cookie défini");
});

app.get("/getcookie", (req, res) => {
  const nom = req.cookies.nom;
  res.send(`Cookie reçu : ${nom}`);
});

app.listen(3000, () => {
  console.log("Serveur démarré sur le port 3000");
});
```

### En résumé

L'utilisation de middlewares externes avec Express permet d'étendre facilement les fonctionnalités de votre application. Que ce soit pour analyser les requêtes, sécuriser l'application ou gérer les sessions, les middlewares externes offrent des solutions prêtes à l'emploi qui simplifient le développement et rendent votre application plus robuste.
