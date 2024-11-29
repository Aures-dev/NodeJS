# Le module intégré URL

`_protocle_` +` _nom de domaine_` + `_path_` +` _query_`

Le module intégré `url (Uniform Resource Locators) ` de Node.js permet de manipuler et d’analyser les URLs. C’est un outil très pratique pour travailler avec des URLs, que ce soit pour les analyser, extraire des informations spécifiques, ou pour créer des URLs dynamiquement. Il fournit des méthodes pour découper les URLs en parties, ce qui est très utile pour le développement d’applications web.

### Importer le module `url`

Le module `url` est un module intégré, donc il n’est pas nécessaire de l’installer. Vous pouvez simplement l’importer avec :

```javascript
const url = require("url");
```

### Fonctionnalités principales du module `url`

1. **Analyser une URL** : Extraire des informations d'une URL.
2. **Créer et formater des URLs** : Construire des URLs à partir d'objets et les formater en chaînes de caractères.

### 1. Analyser une URL

Vous pouvez utiliser `new URL()` pour analyser une URL en utilisant le module `url`. Cela retourne un objet `URL` qui contient les différentes parties de l’URL.

```javascript
const myUrl = new URL("https://example.com:8080/path/name?query=123#section");

console.log(myUrl.protocol); // 'https:'
console.log(myUrl.hostname); // 'example.com'
console.log(myUrl.port); // '8080'
console.log(myUrl.pathname); // '/path/name'
console.log(myUrl.search); // '?query=123'
console.log(myUrl.hash); // '#section'
console.log(myUrl.href); // 'https://example.com:8080/path/name?query=123#section'
```

#### Explication des propriétés de l'objet `URL`

- **protocol** : Le protocole utilisé (ex. `http:` ou `https:`).
- **hostname** : Le nom d'hôte de l'URL (ex. `example.com`).
- **port** : Le numéro de port s’il est spécifié dans l’URL.
- **pathname** : Le chemin après le nom d’hôte (ex. `/path/name`).
- **search** : La partie des paramètres de requête (query string) commençant par `?`.
- **hash** : La partie après `#` dans l’URL.
- **href** : L'URL complète.

#### Accéder aux paramètres de requête (Query Parameters)

Avec l’objet `URL`, vous pouvez utiliser la propriété `searchParams` pour accéder facilement aux paramètres de requête.

```javascript
const myUrl = new URL("https://example.com/path?name=John&age=30");

// Obtenir la valeur d'un paramètre
console.log(myUrl.searchParams.get("name")); // 'John'
console.log(myUrl.searchParams.get("age")); // '30'

// Ajouter un nouveau paramètre
myUrl.searchParams.append("city", "Paris");
console.log(myUrl.href); // 'https://example.com/path?name=John&age=30&city=Paris'

// Boucle sur tous les paramètres
myUrl.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});
```

### 2. Créer et formater une URL

Vous pouvez créer une URL à partir d'un objet en utilisant le constructeur `URL` ou les méthodes de `url.format`.

```javascript
const myUrl = new URL("https://example.com");
myUrl.pathname = "/new-path";
myUrl.searchParams.append("query", "value");

console.log(myUrl.href); // 'https://example.com/new-path?query=value'
```

### Parsing avec `url.parse` (ancienne méthode)

Avant l'introduction de l'API `URL`, on utilisait `url.parse` pour analyser les URLs. Cependant, cette méthode est maintenant obsolète et n'est recommandée que pour des raisons de compatibilité.

```javascript
const url = require("url");

const parsedUrl = url.parse(
  "https://example.com:8080/path/name?query=123#section",
  true
);
console.log(parsedUrl.host); // 'example.com:8080'
console.log(parsedUrl.pathname); // '/path/name'
console.log(parsedUrl.query); // { query: '123' }
console.log(parsedUrl.hash); // '#section'
```

### En résumé

Le module `url` est très utile pour toute manipulation d'URL en Node.js, qu'il s'agisse d'extraire des informations ou de créer des URLs dynamiquement. Il est particulièrement pertinent dans les applications web où l’analyse et la manipulation des URLs sont courantes.
