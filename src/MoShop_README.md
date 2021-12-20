# MoShop

Cette semaine sera consacrée à une série d'exercices sur l'API [MoShop](https://api-moshop.molengeek.pro/) créée spécialement pour la Level Up School (c'est vous ça).

Il n'y a pas de design imposé (ni même suggéré d'ailleurs), libre à vous de trouver une template ou de designer votre front.  (si ce n'est pas un exercice sur le css, ce serait bien que ce soit quand même regardable)

Ce sera votre premier pas dans l'utilisation d'un back et d'un front séparés mais liés par une API.

La documentation vous donne toutes les routes à votre disposition, le type de requête correspondant à ces routes ainsi qu'un exemple de réponse succès et erreur.

⚠️ **C’est un back pour tout le monde, si vous faites planter l’api ça plante pour tout le monde** ⚠️

⚠️ **C’est un back pour tout le monde, donc quand vous enrégistrerez des choses dedans, tout le monde pourra les voir, évitez tout ce qui pourrait être mal pris et les noms trop simples/générique/peu représentatifs** ⚠️

*Cette API a été préparée par Lucas de la team pro.*

<span style="font-size:8px;">*Soyez gentils,ignorez les lorem et les "introductions" vides. Les titres et exemples de résultats devraient être suffisant pour comprendre chaque section.*</span>


## Exercice 1

Le premier erercice nécessite juste d'afficher le shop de Molengeek
Vous devez donc créer une vue pour afficher les datas récupérées de la route :
`/api/v1/mg/shop`

*Pensez à le faire directement dans un component séparé du `App.vue` pour vous simplifier la vie plus tard.*

## Exercice 2

Le second exercice sert à préparer la suite.
Créez une vue `register`  et `login` en vous basant sur les champs nécessairs indiqués dans la doc de l'API.

## Exercice 3

La partie compliquée arrive maintenant, il va s'agir d'être capable de :
1) enregistrer un nouvel utilisateur
2) se connecter avec le compte nouvellement créé
3) stocker le token reçu lorsque vous vous connectez avec succès afin que le site vous considère comme connecté et le retienne.
4) se déconnecter (retirer le token et rediriger sur vue `login`)

⚠️ **Attention aux champs obligatoires  indiqués dans la doc** ⚠️

## Exercice 4

Créer une vue `profil` qui affiche les données de l'utilisateur et permet de les éditer.

## Exercice 5

Créer une vue pour votre shop personnel.

Un shop personnel est créé lorsque vous vous enregistrez.

## Exercice 6

Créer les vues pour gérer le stock de votre magasin :
- Ajout de produit
- Modification de produit
- Suppression de produit

⚠️ **Attention aux champs obligatoires  indiqués dans la doc** ⚠️

## Exercice 7

Panier et commandes
- Créer la vue du panier
- Possibilité d'ajouter des articles dans le panier
- ~~Retirer un article du panier~~
- Voir une liste des commandes passées
- Afficher une commande

**Bonne chance !** 👾