define(function(require) {
	'use strict';

	var LeftNavView = require('./left-nav/view');

	require('backbone');

	function LeftNav() {
		this.leftNavView = new LeftNavView();
		this.leftNavView.render();
	}

	return LeftNav;

});