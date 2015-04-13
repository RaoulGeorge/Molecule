define (function(require) {
	'use strict';

	var Composer = require('composer/composer');

	function Application() {
		this.composer = new Composer();
	}

	Application.prototype.start = function Application_start() {
		this.composer.composeScaffolding();
	};

	return new Application();	//Singeton

});