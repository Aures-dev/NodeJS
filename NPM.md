## NPM

**npm** (Node Package Manager) est le **gestionnaire de paquets** officiel pour Node.js. Il permet d'installer, de gérer, de mettre à jour et de partager des bibliothèques (ou "paquets") JavaScript qu'on peut utiliser dans nos projets Node.js. Avec plus d'un million de paquets disponibles, npm est l'un des écosystèmes open source les plus vastes.

### Fonctionnalités principales de npm

1. **Installation de paquets** : npm permet d'installer des paquets locaux pour un projet spécifique ou globalement pour être accessible partout.
2. **Gestion des dépendances** : npm gère automatiquement les dépendances d'un projet et les enregistre dans un fichier `package.json`.
3. **Scripts npm** : npm permet de définir des scripts dans `package.json` pour automatiser des tâches (ex. lancer un serveur, exécuter des tests).
4. **Publication de paquets** : npm permet de publier vos propres bibliothèques pour les partager avec la communauté.

### Concepts de base de npm

- **Package** : C'est une bibliothèque ou un module prêt à être utilisé. Par exemple, `express`, `axios` sont des paquets.
- **Registry** : npm possède un registre en ligne où sont hébergés tous les paquets. Ce registre est accessible à [npmjs.com](https://www.npmjs.com).

### Initialiser un projet npm

Pour démarrer un projet et créer un fichier `package.json`, vous pouvez exécuter la commande suivante dans votre terminal :

```bash
npm init
```

Cela lancera un assistant qui vous demandera de configurer votre projet. Vous pouvez également utiliser `npm init -y` pour générer un `package.json` avec des valeurs par défaut.

### Installer un paquet

#### Installation locale

Pour installer un paquet pour un projet spécifique, utilisez la commande suivante. Cela ajoute le paquet dans le dossier `node_modules` du projet et l’enregistre dans `package.json` :

```bash
npm install express
```

Vous pouvez également utiliser l'abréviation `npm i express`.

#### Installation globale

Pour installer un paquet globalement afin qu’il soit accessible partout dans votre système, utilisez l'option `-g` :

```bash
npm install -g nodemon
```

### Désinstaller un paquet

Pour désinstaller un paquet, utilisez la commande suivante :

```bash
npm uninstall express
```

### Mettre à jour un paquet

Pour mettre à jour un paquet à sa dernière version :

```bash
npm update express
```

### Fichier package.json

Le fichier `package.json` est essentiel dans un projet Node.js car il contient les informations sur le projet et liste les dépendances. Voici un exemple :

```json
{
  "name": "mon-projet",
  "version": "1.0.0",
  "description": "Un projet exemple",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Votre nom",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.1"
  }
}
```

### Scripts npm

Vous pouvez définir des scripts personnalisés dans `package.json` pour exécuter des commandes dans le terminal. Par exemple, pour lancer un serveur :

```json
"scripts": {
  "start": "node server.js",
  "dev": "nodemon server.js"
}
```

Ensuite, vous pouvez lancer le script avec :

```bash
npm run start
```

### En résumé

npm est un outil essentiel pour tout développeur Node.js car il facilite la gestion des dépendances et l'automatisation des tâches dans un projet. Grâce à npm, vous pouvez accéder à une immense bibliothèque de paquets open source, ce qui accélère et simplifie le développement d'applications.
