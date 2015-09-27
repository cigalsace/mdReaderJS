// Récupération des paramètres de l'URL passées en GET
function getUrlParams(url) {
    var query = url.search.substring(1);
    if (query.indexOf('?') != -1) {
        var variables = query.split('?');
        var url_vars = { url: variables[0].substring(4) };
        var params = variables[1].split('&');
    } else {
        var url_vars = {};
        var params = query.split('&');
    }
    for (var i in params) {
        var v = params[i].split('=');
        url_vars[v[0]] = decodeURIComponent(v[1]);
    }
    return url_vars;
}

// Construction de l'URL d'appel de la fiche de métadonnées à partir des valeurs l'object config
function urlConstruct(config) {
    var csw_url = config.url;
    if (csw_url.indexOf('?') != -1) {
        if (csw_url.charAt(csw_url.length-1) == '?') {
            var url = csw_url;
        } else {
            var url = csw_url+'&';
        }
    } else {
        var url = csw_url+'?';
    }
    for (var item in config) {
        if (item != 'url' && config[item] != '') {
            url += item + '=' + config[item] + '&';
        }
    }
    console.log(url);
    return url;
}





