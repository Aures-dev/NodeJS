# Les codes de statut HTTP

Les codes de statut HTTP sont des réponses standardisées que les serveurs web envoient aux clients (comme les navigateurs web) après avoir traité leurs requêtes. Ils indiquent le résultat de cette tentative. Voici une vue d'ensemble des codes de statut HTTP les plus courants, classés par catégorie :

### Codes de statut 1xx : Informational (informations)

- **100 Continue** : Le client peut continuer sa requête.
- **101 Switching Protocols** : Le serveur accepte de changer de protocole.

### Codes de statut 2xx : Success (succès)

- **200 OK** : La requête a réussi.
- **201 Created** : La requête a réussi et une nouvelle ressource a été créée.
- **202 Accepted** : La requête a été acceptée, mais le traitement n'est pas encore terminé.
- **204 No Content** : La requête a réussi, mais il n'y a pas de contenu à envoyer en réponse.

### Codes de statut 3xx : Redirection

- **301 Moved Permanently** : La ressource demandée a été déplacée définitivement à une nouvelle URL.
- **302 Found** : La ressource demandée réside temporairement à une autre URL.
- **304 Not Modified** : La ressource n'a pas été modifiée depuis la dernière requête.

### Codes de statut 4xx : Client Error (erreur client)

- **400 Bad Request** : La requête est incorrecte.
- **401 Unauthorized** : L'authentification est nécessaire et a échoué ou n'a pas encore été fournie.
- **403 Forbidden** : Le serveur refuse d'autoriser la requête.
- **404 Not Found** : La ressource demandée est introuvable.
- **405 Method Not Allowed** : La méthode de requête n'est pas autorisée pour la ressource demandée.
- **409 Conflict** : La requête ne peut pas être complétée à cause d'un conflit avec l'état actuel de la ressource.
- **422 Unprocessable Entity** : La requête est bien formée mais ne peut pas être traitée à cause d'erreurs sémantiques.

### Codes de statut 5xx : Server Error (erreur serveur)

- **500 Internal Server Error** : Une erreur interne au serveur s'est produite.
- **501 Not Implemented** : La méthode de requête n'est pas prise en charge par le serveur.
- **502 Bad Gateway** : Le serveur a reçu une réponse invalide d'un autre serveur.
- **503 Service Unavailable** : Le serveur n'est pas disponible pour le moment (surcharge ou maintenance).

Ces codes de statut aident à comprendre ce qui se passe avec les requêtes que vous envoyez ou recevez.
