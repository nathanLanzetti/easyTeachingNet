# easyTeachingNet
Backend de mon projet EasyTeaching réalisé avec Angular pour le front-end et C# pour le backend. Le projet en Angular est compilé dans celui-ci.

# Explication du projet
Ce projet est un outil pour les professeurs pour créers des tests.
Le site n'est accessible qu'aux professeurs, les idientifiants sont repris dans le fichier "credentials.txt".

## User stories
1. Le professeur peut se connecter au site.
2. Le professeur peut consulter toutes les questions des cours qu'il dispense.
3. Le professeur peut ajouter, modifier et supprimer les questions qu'il a créé.
4. Le professeur peut consulter tous les tests des cours qu'il dispense.
5. Le professeur peut ajouter, modifier et supprimer les tests qu'il a créé.
6. Le professeur est prévenu des questions trop utilisés dans les tests.
7. Le professeur peut sauvegarder un test.
8. Le professeur peut accéder au correctif d'un test.
9. Le professeur peut générer un test de manière aléatoire. (bouton Surprise me!)

## Exécuter le projet
Pour pouvoir exécuter le projet, il faut : 
* Le sdk .net (version 3.0 => https://dotnet.microsoft.com/download/dotnet-core/3.0).
* Importer la base de données (lanzettiProjetAout.sql, en SqlServer).
* Changer dans la classe Database.cs la variable "CONNECTION_STRING" et remplacer avec les valeurs de votre machine.
* Naviguer à la racine du projet (projet_aout_bloc3), et taper la commande "dotnet run".
* Ouvrir le navigateur au port correspondant au serveur (localhost:5001).
