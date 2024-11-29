#### Exercice 1 : Création de routes simples (Niveau Débutant)

**Objectif** : Créer une application Express avec une route de base qui renvoie un simple message de bienvenue.

**Instructions** :

1. Initialise une application Express.
2. Crée une route `GET` accessible sur `/welcome` qui envoie le message "Bienvenue sur mon API Express !".
3. Démarre le serveur sur le port 3000.

#### Exercice 2 : Gestion des requêtes avec paramètres (Niveau Junior)

**Objectif** : Créer une route qui accepte un paramètre dans l'URL et renvoie un message personnalisé.

**Instructions** :

1. Crée une route `GET` accessible sur `/hello/:name`.
2. Récupère le paramètre `name` de la requête et retourne une réponse personnalisée de la forme "Bonjour, [name] !".
3. Si aucun nom n’est fourni (ex. `/hello/`), renvoie un statut `400` avec le message "Nom requis".

#### Exercice 3 : Gestion de requêtes avec paramètres de requête (Niveau Intermédiaire)

**Objectif** : Créer une route `GET` qui accepte des paramètres de requête et envoie une réponse appropriée en fonction de leur validité.

**Instructions** :

1. Crée une route `GET` accessible sur `/user`.
2. Dans la requête, attends deux paramètres : `name` et `age`.
3. Si `name` ou `age` est manquant, renvoie un statut `400` avec le message "Données incomplètes".
4. Sinon, renvoie un statut `200` avec le message "Utilisateur créé avec succès : [name], Age : [age]".

#### Exercice 4 : Vérification d'un en-tête d'autorisation dans la route (Niveau Expert)

**Objectif** : Créer une route protégée qui vérifie la présence d'un en-tête spécifique (par exemple, `x-api-key`) avant de répondre.

Instructions :

1. Crée une route GET accessible sur /dashboard.
2. Dans cette route, vérifie si l'en-tête x-api-key est présent dans la requête.
3. Si cet en-tête est absent, renvoie un statut 403 avec le message "Accès refusé".
4. Si l'en-tête est présent, renvoie le message "Bienvenue dans le tableau de bord".