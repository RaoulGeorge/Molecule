define(function(require) {
	'use strict';

	var HeaderView = require('./header-view');

	function Header() {
		this.init();
	}

	Header.prototype.init = function Header_init() {
		debugger
		this.headerView = new HeaderView();
		$(body).append(headerView.render());
	}

	return Header;

});