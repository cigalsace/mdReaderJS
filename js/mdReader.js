'use strict';
        
// Configuration de l'application
var app = {
    title: 'mdReaderJS',        // Titre de l'application
    name: 'mdReaderJS',         // Nom de l'application
    version: '0.05',            // Version de l'application
    template: 'bootstrap.html'  // Template par défaut de présentation de la fiche de métadonnées
};

// Configuration par défaut de l'url du CSW
var csw_config = {
    url: '',
    request: 'GetRecordById',
    service: 'CSW',
    version: '2.0.2',
    elementsetname: 'full',
    postencoding: 'XML',
    resulttype: 'results',
    outputschema: 'http://www.isotc211.org/2005/gmd',
    typenames: 'gmd:MD_Metadata',
    id: '',
    xml_dir: ''
};

// Définition de la langue par défaut pour les labels de la page.
var lang = 'fr';

// Lien vers le serveur de récupération des flux (gestion du pb de cross domain)
var server_url = './server/index.php';  // "false" pour un accès directe à la page sans passer par le script serveur si l'application cswReader est hébergée sur le serveur du flux CSW.

// Récupérer les valeurs passées en paramètres dans l'URL (GET)
var url_vars = getUrlParams(window.location);

// Ecraser la valeur du template avec le paramètre d'URL 'tpl'
if (url_vars['tpl']) {
    app.template = url_vars['tpl'];
}

// Modifier la configuration de l'url du CSW en fonction des valeurs passées en paramètre (GET)
csw_config.url = url_vars.url;
csw_config.id = url_vars.id;
csw_config.xml_dir = url_vars.xml_dir;

// Initialisation de la variable globale data
var data = {};
data['lb'] = lb[lang];
data['app'] = app;
data['csw_config'] = csw_config;

// Construction de l'URL du CSW    
var csw_url = urlConstruct(csw_config);
data['csw_url'] = csw_url;
console.log(csw_url);
if (server_url) {
    var url_page = server_url;
    var data_page = {url: csw_url};
} else {
    var url_page = csw_url;
    data_page = '';
}


/**
 * Déclaration de l'application Angular JS mdReaderApp
 */
var mdReaderApp = angular.module('mdReaderApp', [
    // Dépendance
    'mdReader'
]);

// Déclaration du module mdReader
var mdReader = angular.module('mdReader',[]);

// Contrôleur de l'application mdReader
mdReader.controller('mdReaderCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.xml = '';
    $scope.data = data;
    // console.log(url_page);
    // console.log(data_page);
    
    $http({
        method  : 'POST',
        url     : url_page,
        //url : '../../xml2csw/?request=GetRecordById&service=CSW&version=2.0.2&elementsetname=full&postencoding=XML&resulttype=results&outputschema=http://www.isotc211.org/2005/gmd&typenames=gmd:MD_Metadata&id=FR-236700019-ORTHO-RVB-20112012-CIGAL.xml&xml_dir=xml',
        dataType: 'json',
        data : data_page
    }).success(function(data, status, headers, config) {
        // console.log(data);  // XML document object
        $scope.data.md = readXML(data);
        // console.log($scope.data);
    }).error(function(data, status, headers, config) {
        console.log("Erreur: impossible de lire l'url demandée.");
        alert("Impossible de lire l'url demandée.");
    });
    
    // Définition du template utilisé pour l'affichage de la fiche de métadonnées
    $scope.template_url = "templates/"+app.template;
}]);
