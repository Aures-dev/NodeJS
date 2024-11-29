# Intro

Le module intégré `http` de Node.js est l'un des modules les plus utilisés car il permet de créer des serveurs web et de gérer les requêtes HTTP. Ce module fournit des outils pour créer un serveur qui peut écouter et répondre aux requêtes des clients (comme les navigateurs web).

### Fonctionnalités du module `http`

Le module `http` inclut des méthodes et des objets pour :

1. **Créer des serveurs** qui répondent aux requêtes HTTP.
2. **Écouter sur un port spécifique** pour recevoir des requêtes.
3. **Traiter les requêtes et réponses HTTP**, comme définir les en-têtes de réponse ou analyser les URL de requête.

### Utilisation de base du module `http`

Voici comment créer un serveur simple avec `http` en Node.js :

```javascript
const http = require("http");

// Créer le serveur
const server = http.createServer((req, res) => {
  // Définir l'en-tête de réponse
  res.writeHead(200, { "Content-Type": "text/plain" });

  // Envoyer une réponse
  res.end("Hello, World!\n");
});

// Spécifier le port d'écoute du serveur
const port = 3000;
server.listen(port, () => {
  console.log(`Serveur démarré et écoutant sur le port ${port}`);
});
```

#### Explications :

- `http.createServer(callback)`: Crée un serveur HTTP. Le callback prend deux arguments :
  - **`req` (request)** : Objet représentant la requête entrante, qui contient des informations sur ce que le client a envoyé au serveur.
  - **`res` (response)** : Objet représentant la réponse que le serveur enverra au client.
- `res.writeHead(statusCode, headers)`: Définit le code de statut HTTP (par exemple, `200` pour "OK") et les en-têtes HTTP. Ici, on utilise `'Content-Type': 'text/plain'` pour indiquer que la réponse est du texte brut.
- `res.end(data)`: Envoie la réponse au client et termine la requête.
- `server.listen(port, callback)`: Fait en sorte que le serveur écoute les requêtes sur le port spécifié. Le callback est optionnel et peut être utilisé pour effectuer des actions lorsque le serveur commence à écouter.

### Utilisation avancée du module `http`

Le module `http` peut aussi être utilisé pour :

1. **Analyser et traiter des routes** : En fonction de l'URL demandée par le client, vous pouvez fournir des réponses différentes.
2. **Créer des requêtes HTTP** : Le module `http` peut également être utilisé pour faire des requêtes HTTP en tant que client vers d'autres serveurs.

#### Exemples d'utilisation avancée

1. **Gérer les routes :**

   ```javascript
   const http = require("http");

   const server = http.createServer((req, res) => {
     if (req.url === "/") {
       res.writeHead(200, { "Content-Type": "text/plain" });
       res.end("Page d'accueil");
     } else if (req.url === "/about") {
       res.writeHead(200, { "Content-Type": "text/plain" });
       res.end("À propos");
     } else {
       res.writeHead(404, { "Content-Type": "text/plain" });
       res.end("Page non trouvée");
     }
   });

   server.listen(3000, () => {
     console.log("Serveur en écoute sur le port 3000");
   });
   ```

2. **Envoyer des requêtes HTTP sortantes :**

   ```javascript
   const http = require("http");

   const options = {
     hostname: "www.example.com",
     port: 80,
     path: "/path",
     method: "GET",
   };

   const req = http.request(options, (res) => {
     let data = "";
     res.on("data", (chunk) => {
       data += chunk;
     });
     res.on("end", () => {
       console.log("Réponse:", data);
     });
   });

   req.on("error", (error) => {
     console.error("Erreur:", error);
   });

   req.end();
   ```

### En résumé

Le module `http` est essentiel en Node.js pour les applications côté serveur. Avec lui, vous pouvez gérer la plupart des fonctionnalités de base des requêtes HTTP, ce qui permet de créer des applications web complètes et des API.
