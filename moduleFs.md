# Intro

Le module intégré `fs` en Node.js est un module permettant d'interagir avec le **système de fichiers**. Il fournit des méthodes pour lire, écrire, mettre à jour et supprimer des fichiers et des répertoires. Ce module est particulièrement utile pour travailler avec des fichiers et des dossiers en local sur un serveur Node.js.

### Fonctions principales du module `fs`

Le module `fs` propose deux types de méthodes pour la manipulation des fichiers :

1. **Méthodes synchrones** : Bloquent l'exécution jusqu'à ce que l'opération soit terminée (par exemple, `fs.readFileSync`).
2. **Méthodes asynchrones** : Utilisent des callbacks ou des promesses pour exécuter l'opération en arrière-plan (par exemple, `fs.readFile`). Les méthodes asynchrones sont généralement préférées pour éviter le blocage du fil d'exécution principal.

### Importer le module `fs`

```javascript
const fs = require("fs");
```

### 1. Lire un fichier

#### En mode asynchrone

```javascript
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Erreur lors de la lecture du fichier :", err);
    return;
  }
  console.log("Contenu du fichier :", data);
});
```

- `fs.readFile` lit le fichier de manière asynchrone.
- `utf8` est l'encodage, qui permet de lire le fichier sous forme de texte.
- La fonction de callback gère l’erreur (s’il y en a une) ou affiche le contenu du fichier.

#### En mode synchrone

```javascript
try {
  const data = fs.readFileSync("example.txt", "utf8");
  console.log("Contenu du fichier :", data);
} catch (err) {
  console.error("Erreur lors de la lecture du fichier :", err);
}
```

### 2. Écrire dans un fichier

#### En mode asynchrone

```javascript
fs.writeFile("example.txt", "Bonjour, Node.js!", (err) => {
  if (err) {
    console.error("Erreur lors de l'écriture dans le fichier :", err);
    return;
  }
  console.log("Écriture terminée avec succès.");
});
```

- `fs.writeFile` crée ou écrase le fichier avec le contenu spécifié.

#### En mode synchrone

```javascript
try {
  fs.writeFileSync("example.txt", "Bonjour, Node.js!");
  console.log("Écriture terminée avec succès.");
} catch (err) {
  console.error("Erreur lors de l'écriture dans le fichier :", err);
}
```

### 3. Ajouter du contenu à un fichier existant

#### En mode asynchrone

```javascript
fs.appendFile("example.txt", "\nTexte ajouté.", (err) => {
  if (err) {
    console.error("Erreur lors de l'ajout de contenu :", err);
    return;
  }
  console.log("Ajout terminé avec succès.");
});
```

### 4. Supprimer un fichier

```javascript
fs.unlink("example.txt", (err) => {
  if (err) {
    console.error("Erreur lors de la suppression du fichier :", err);
    return;
  }
  console.log("Fichier supprimé avec succès.");
});
```

### 5. Créer et supprimer des répertoires

#### Créer un répertoire

```javascript
fs.mkdir("monDossier", (err) => {
  if (err) {
    console.error("Erreur lors de la création du dossier :", err);
    return;
  }
  console.log("Dossier créé avec succès.");
});
```

#### Supprimer un répertoire

```javascript
fs.rmdir("monDossier", (err) => {
  if (err) {
    console.error("Erreur lors de la suppression du dossier :", err);
    return;
  }
  console.log("Dossier supprimé avec succès.");
});
```

### 6. Lire le contenu d'un répertoire

```javascript
fs.readdir("monDossier", (err, files) => {
  if (err) {
    console.error("Erreur lors de la lecture du dossier :", err);
    return;
  }
  console.log("Contenu du dossier :", files);
});
```

### En résumé

Le module `fs` est très puissant et permet une gestion complète des fichiers et des répertoires sur un système de fichiers. Il est particulièrement utile pour la création d'applications côté serveur et pour la manipulation de fichiers en Node.js.
