# mdReaderJS

Application javascript de lecture d'une fiche de métadonnées conforme ISO-19139/INSPIRE.
Cette application constitue l'un des modules du projet mdViewer

## Projet mdViewer

Le projet "mdViewer" vise à proposer une solution simple de consultation de fiches de métadonnées issues de services web (CSW) ou de fichiers XML stockés en ligne (Iso 19139) en utilisant une logique client/serveur.
Il n'a pas pour objectif de remplacer des solutions complètes tel que GéoSources ou GéoNetwork.

L'application se compose de 3 modules indépendants:

  - cswReaderJS : permet de lire un flux afficher la liste des fiches de métadonnées de façon synthétique.
  - mdReaderJS : permet de lire une fiche de métadonnées et l'afficher de façon complète selon le profil CIGAL.
  - xml2csw : permet de simuler un serveur csw minimaliste à partir d'une liste de fichiers XML pour pouvoir les consulter via cswReaderJS et mdReaderJS.

Cette application s'inspire des travaux réalisé pour le sViewer développé par Géobretagne.

## Technologie:

Le module cswReaderJS est développé principalement via du JavaScript, du HTML, du CSS 3. Il s'apuie notamment sur les bibliothèques suivantes:

JQuery pour l'interaction javacript
Mustache et Mustache.js comme système de template pour la mise en forme des pages HTML
Uikit pour la présentation des pages et le rendu
Un script PHP est utilisé pour appeler les pages distantes et permettre de réaliser des requêtes AJAX "cross-domain".
Il peut être facilement remplacé par un script dans un autre langage comme Python, Java ou autre (développement à prévoir).

## Principes:

A partir d'une URL vers un serveur CSW et un identifiant de fiche transmis en paramètre, le module génère une requête de type GetRecordByID et affiche la métadonnée envoyée en retour selon le modèle spécifié.

## Installation:

  - Télécharger le fichier zip contenant les sources.
  - Dézipper le fichier téléchargé sur le serveur
  - L'application est fonctionnelle.

## Paramétrage:

Les paramétrages s'affectuent dans le fichier js/config.js.

[A compléter]

## Utilisation:

[A compléter]

## Démonstration:

http://www.cigalsace.net/mdReaderJS/0.01/index.html?url=http://www.cigalsace.org/geonetwork-private/srv/fre/csw-geocatalogue&id=FR-236700019-ORTHO-PIR-20112012-CIGAL