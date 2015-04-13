require(['jquery', 'backbone'], function($, Backbone) {
	'use strict';
	
	window.$ = $;
	window.Backbone = Backbone;
	require(['application/application'], function(App) {
		App.start();
	});
});