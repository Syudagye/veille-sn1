# Veille Numérique

## Dépendances

- [NodeJS](https://nodejs.org/)
- MariaDB ou MySQL

## Préparer le projet

### La BDD

#### Création de l'utilisateur

Connectez vous sur votre base de donnée en super-utilisateur

```sql 
CREATE USER 'veille'@'localhost' IDENTIFIED BY '<votre mdp>';
GRANT ALL PRIVILEGES ON veille_sn1.* TO 'veille'@'localhost' IDENTIFIED BY '<votre mdp>';
```

#### Création des tables

```
cd utils
mariadb -u veille -p
```

depuis la console mysql:
```sql 
source reset_db.sql
```

### l'API

installer les dépendance nodejs
```
npm i
```

compiler le typescript
```
npm run build
```

#### Variable d'environnement

Les codes d'accès à la base de donnée sont stockés dans `.env`.

Copier `.env.example` vers `.env` et completez le fichier avec les infos nécessaires

## Lancer le projet

```
node dist/index.js
```
