/***
The composer is responsible for creating views.
Right now I am using it to 'compose' the scaffolding of the application
The composer will also be responsible for applying animation between transitions
***/
define(function(require) {

	'use strict';

	var Shell = require('shell/shell');

	function Composer() {

	}

	Composer.prototype.composeScaffolding = function Composer_composeScaffolding() {
		var shell = new Shell();
		shell.activate();
	};


	return Composer;
});