# Modules

Les modules en Node.js sont des blocs de code réutilisables qui permettent d'organiser et de structurer les fonctionnalités d'une application. Node.js fournit un système de modules intégré qui permet de diviser une application en différentes parties, facilitant ainsi la maintenance, le test et la réutilisation du code.

### Types de modules en Node.js

1. **Modules intégrés (ou core modules)** : Ces modules sont fournis par défaut avec Node.js. Ils incluent, par exemple, `fs` (pour le système de fichiers), `http` (pour créer des serveurs web), `path` (pour manipuler les chemins de fichiers) et `os` (pour obtenir des informations sur le système d'exploitation). On peut les importer directement sans installation.

   ```javascript
   const fs = require("fs");
   ```

2. **Modules locaux** : Ce sont des modules que l’on crée soi-même dans le cadre de l'application. Par exemple, on peut créer un fichier `math.js` pour gérer toutes les opérations mathématiques, puis l’importer dans d’autres fichiers du projet.

   ```javascript
   // math.js
   function addition(a, b) {
     return a + b;
   }
   module.exports = addition;

   // Dans un autre fichier
   const addition = require("./math");
   console.log(addition(2, 3)); // 5
   ```

3. **Modules tiers (third-party modules)** : Ce sont des modules développés par la communauté et disponibles via le gestionnaire de paquets de Node.js, **npm** (Node Package Manager). Par exemple, `express` pour créer des serveurs web ou `axios` pour faire des requêtes HTTP. Ces modules doivent être installés avant de pouvoir être utilisés.

   ```bash
   npm install express
   ```

   ```javascript
   const express = require("express");
   const app = express();
   ```

### Structure des modules en Node.js

Les modules en Node.js fonctionnent selon le principe **CommonJS**, où chaque fichier est considéré comme un module isolé. On utilise `module.exports` pour exposer les fonctions ou objets d’un module, et `require` pour les importer dans un autre module.

### Pourquoi utiliser les modules ?

- **Modularité** : Facilite la gestion et l’organisation du code.
- **Réutilisabilité** : Permet d'utiliser le même code dans différents projets.
- **Isolation** : Chaque module a son propre scope, évitant les conflits de variables.

Utiliser les modules rend une application Node.js plus structurée, maintenable et évolutive.
