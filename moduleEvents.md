# Les évenements en NodeJs

Les événements en Node.js sont essentiels pour construire des applications asynchrones. Node.js repose fortement sur un modèle basé sur les événements, permettant de gérer les opérations asynchrones sans bloquer le fil d’exécution principal. Ce modèle est implémenté grâce au module `events`, qui fournit un système d’événements puissant et flexible.

### Le module `events`

Pour utiliser des événements dans Node.js, il faut utiliser le module intégré `events`. Ce module vous permet de créer et de gérer des événements personnalisés.

#### Importer le module `events`

```javascript
const EventEmitter = require("events");
```

La classe `EventEmitter` est la base de tout objet qui émet des événements dans Node.js.

### Utiliser EventEmitter

1. **Créer un émetteur d’événements** : Vous devez d'abord créer une instance de `EventEmitter`.
2. **Écouter un événement** : Utilisez `on` ou `addListener` pour écouter un événement spécifique.
3. **Émettre un événement** : Utilisez `emit` pour déclencher un événement, ce qui appellera les callbacks associés.

### Exemple de base avec EventEmitter

Voici un exemple simple montrant comment créer, écouter et déclencher un événement.

```javascript
const EventEmitter = require("events");

// Créer une instance d'EventEmitter
const monEmetteur = new EventEmitter();

// Écouter l'événement 'salut'
monEmetteur.on("salut", (nom) => {
  console.log(`Salut, ${nom} !`);
});

// Émettre l'événement 'salut'
monEmetteur.emit("salut", "Alice"); // Affiche: Salut, Alice !
```

#### Explication :

- `monEmetteur.on('salut', callback)` : Définit un écouteur pour l’événement `salut`. Quand cet événement sera émis, le callback sera exécuté.
- `monEmetteur.emit('salut', 'Alice')` : Émet l’événement `salut` en passant `'Alice'` comme argument au callback.

### Gestion d’événements multiples

Vous pouvez ajouter plusieurs écouteurs pour le même événement. Tous les écouteurs seront exécutés dans l'ordre où ils ont été ajoutés.

```javascript
monEmetteur.on("salut", () => {
  console.log("Deuxième écouteur pour l'événement salut");
});

monEmetteur.emit("salut", "Alice");
// Affiche :
// Salut, Alice !
// Deuxième écouteur pour l'événement salut
```

### Autres méthodes d’EventEmitter

1. **once** : Écoute un événement une seule fois.

   ```javascript
   monEmetteur.once("unique", () => {
     console.log("Cet événement sera écouté une seule fois");
   });

   monEmetteur.emit("unique"); // Affiche le message
   monEmetteur.emit("unique"); // Ne fait rien
   ```

2. **removeListener** ou **off** : Supprime un écouteur spécifique d’un événement.

   ```javascript
   const listener = () => console.log("Salut, encore !");
   monEmetteur.on("salut", listener);

   monEmetteur.removeListener("salut", listener);
   monEmetteur.emit("salut"); // Ne fait rien
   ```

3. **removeAllListeners** : Supprime tous les écouteurs d'un événement.
   ```javascript
   monEmetteur.removeAllListeners("salut");
   ```

### Utilisation des événements dans des modules intégrés

Plusieurs modules de Node.js, comme `http`, `fs` et `stream`, utilisent également `EventEmitter` pour émettre et écouter des événements.

#### Exemple avec le module `http`

Voici un exemple de serveur HTTP qui écoute les événements `request` et `close` :

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Bonjour, monde !\n");
});

// Écouter l'événement 'request'
server.on("request", (req) => {
  console.log(`Requête reçue : ${req.url}`);
});

// Écouter l'événement 'close'
server.on("close", () => {
  console.log("Serveur fermé");
});

server.listen(3000, () => {
  console.log("Serveur en écoute sur le port 3000");
});
```

Dans cet exemple :

- L'événement `request` est émis chaque fois qu'une requête est envoyée au serveur.
- L'événement `close` est émis lorsque le serveur est fermé.

### En résumé

Les événements en Node.js permettent de créer des applications asynchrones et réactives. Grâce au module `events`, vous pouvez facilement émettre et écouter des événements, ce qui facilite la gestion de tâches non bloquantes et la communication entre différentes parties de votre application.
