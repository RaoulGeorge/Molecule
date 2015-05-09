/**
 The shell is responsible for creating the leftnav, header and footer of the app
**/

define(function(require) {
	'use strict';

	var LeftNav = require('./left-nav'),
		Header = require('./header/header'),
		Footer = require('./footer');

	function Shell() {

	}

	Shell.prototype.activate = function Shell_activate() {
		console.log('activating shell');
		this.leftnav = new LeftNav();
		this.header = new Header();
		this.footer = new Footer();
	};

	return Shell;
});