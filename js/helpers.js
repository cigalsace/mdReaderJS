function urlConstruct(config) {
	csw_url = config.url;
	if (csw_url.indexOf('?') != -1) {
		if (csw_url.charAt(csw_url.length-1) == '?') {
			var url = csw_url;
		} else {
			var url = csw_url+'&';
		}
	} else {
		var url = csw_url+'?';
	}
    for (item in config) {
        if (item != 'url' && config[item] != '') {
            url += item + '=' + config[item] + '&';
        }
    }
  	console.log(url);
    return url;
}
