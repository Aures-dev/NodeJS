## Exercice : Gestion des Employés
Vous allez créer une application de gestion des employés en Node.js qui se déroule entièrement dans la console. Cette application permet d'ajouter, consulter, modifier et supprimer des étudiants, ainsi que de quitter l’application. Les données des étudiants doivent être sauvegardées dans un fichier JSON pour garantir la persistance des informations entre les exécutions du programme.

### Prérequis
 
1. Initialisez **npm** et Installez des packages : Utilisez le package `uuid` pour générer des identifiants uniques pour chaque étudiant.

```bash

npm init 
npm install uuid

```

2. **Création du Fichier de Données** :

 * Créez un fichier `etudiants.json` qui servira de base de données pour stocker les informations des étudiants.
 * Si le fichier n'existe pas lors du lancement de l'application, créez-le automatiquement avec un tableau vide (`[]`) comme contenu initial.

### Consignes

1. **Création du Projet** :

 * Créez un fichier principal `app.js` pour gérer l'ensemble des fonctionnalités de l'application.
 * Utilisez `readline` pour interagir avec l'utilisateur dans la console.

2. **Structure des Données d'un Étudiant** :

 * Chaque étudiant doit être représenté par un objet contenant les informations suivantes :
   * `id` : identifiant unique généré automatiquement (avec le package `uuid`).
   * `nom` : nom de l’étudiant (type string).
   * `prenom` : prénom de l’étudiant (type string).
   * `age` : âge de l’étudiant (type number).
   * `promo` : promotion de l’étudiant (type number).
   * `matricule` : code unique pour chaque étudiant, de la forme **"BJGLI000"** suivi d'un numéro (ex. "BJGLI0001", "BJGLI0002", etc.).

3. **Gestion des Données dans un Fichier JSON** :

 * Les informations des étudiants doivent être stockées et récupérées depuis le fichier `etudiants.json`.
 * Chaque opération (ajout, modification, suppression) doit mettre à jour le fichier `etudiants.json` pour garantir la persistance des données.
 * Utilisez le module fs  pour lire et écrire dans le fichier JSON.

4. **Fonctionnalités de l'Application** :

L'application doit proposer un menu avec les options suivantes :

* **Ajouter un étudiant**
 * Demander à l'utilisateur d'entrer le nom, le prénom, l'âge et la promotion de l'étudiant.
 * Générer automatiquement un `id` pour l’étudiant et un `matricule` unique sous la forme **"BJGLI0001"** suivi d'un numéro.
 * Ajouter l'étudiant à la liste des étudiants dans le fichier `etudiants.json`.

* **Afficher la liste des étudiants**
 * Charger et afficher tous les étudiants avec leurs informations depuis le fichier `etudiants.json`.
 * Pour chaque étudiant, afficher au moins : `id`, `nom`, `prenom`, `age`, `promo`, et `matricule`.

* **Modifier un étudiant**
 * Demander à l'utilisateur s'il souhaite sélectionner l'étudiant à partir de son `id` ou de son `matricule`.
 * Charger les données depuis le fichier, puis permettre de modifier les informations `nom`, `prenom`, `age` et `promo`.
 * Vérifier que l'identifiant ou le matricule entré existe bien dans la liste avant de procéder à la modification.
 * Mettre à jour les informations de l’étudiant dans le fichier `etudiants.json`.

* **Afficher les informations d'un étudiant**
 * Demander si l'utilisateur souhaite accéder à un étudiant par `id` ou par `matricule`.
 * Charger les données depuis le fichier `etudiants.json` et afficher les informations complètes de l’étudiant sélectionné.

* **Supprimer un étudiant**
 * Demander si l'utilisateur souhaite supprimer un étudiant par `id` ou par `matricule`.
 * Charger les données depuis le fichier `etudiants.json`, puis supprimer l'étudiant sélectionné.
 * Mettre à jour le fichier pour refléter la suppression.

* **Quitter l'application**
 * Terminer l'exécution du programme.

5. **Exigences Techniques** :

 * Utiliser des fonctions pour structurer le code, par exemple : `ajouterEtudiant`, `afficherEtudiants`, `modifierEtudiant`, etc.
 * Utiliser le package `uuid` pour générer des identifiants uniques pour chaque étudiant.
 * Manipuler les données dans le fichier JSON en lisant et écrivant au besoin.

### Exemple d'Interaction avec l'Utilisateur

Voici un exemple de ce à quoi pourrait ressembler une session :

```plaintext

Bienvenue dans l'application de gestion des employés.
Que souhaitez-vous faire ?
1. Ajouter un étudiant
2. Afficher la liste des étudiants
3. Modifier les informations d'un étudiant
4. Accéder aux informations d'un étudiant
5. Supprimer un étudiant
6. Quitter

Votre choix : 1
Entrez le nom de l'étudiant : Dupont
Entrez le prénom de l'étudiant : Jean
Entrez l'âge de l'étudiant : 20
Entrez la promotion de l'étudiant : 2023
Étudiant ajouté avec succès !

Votre choix : 2
Liste des étudiants :
1. ID: abc123, Nom: Dupont, Prénom: Jean, Age: 20, Promo: 2023, Matricule: BJGLI0001
...

Votre choix : 6
Au revoir !
```

### Suggestions de Bonus
 * **Validation des Entrées** : Vérifiez que l’âge et la promotion soient bien des nombres.
 * **Gestion des Erreurs** : Gérer les erreurs de lecture et d’écriture dans le fichier JSON
 * **Gérer le nombre de tentatives** : Si à trois reprises l'utilisateurs entre une valeur différente ce celle attendue à trois reprises, il faudra interrompre le processus et lui dire "Au revoir"