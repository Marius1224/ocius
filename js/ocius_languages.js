'use strict'

/*

	Languages management

	use of jquery cookie

*/

var ociusLanguages = {
	get : function() {
		//reading cookie
		var ociusCookieLanguage = $.cookie('ocius_language');

		//browser language
		var browserLanguage = window.navigator.language;
			browserLanguage = browserLanguage.split("-")[0];

		if (typeof ociusCookieLanguage === 'undefined') {
			if (browserLanguage !== 'fr') {
				browserLanguage = 'en';
			}
			$.cookie('ocius_language', browserLanguage, { expires: 20 * 365 });

			return browserLanguage;
		} else {
			return ociusCookieLanguage;
		}
	},

	set : function() {
		var language    = this.get();
		var lang        = language == 'fr' ? 'en' : 'fr';

		$.cookie('ocius_language', lang, { expires: 20 * 365 });

		window.location = "index.php?lang=" + lang;
	},

	setButton : function() {
		//var language    = this.get();
		//var newLanguage = language == 'fr' ? 'en' : 'fr';
		
		//$("#language").text(newLanguage.toUpperCase());
	}
};