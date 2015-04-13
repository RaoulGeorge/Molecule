require(['jquery'], function($) {
	'use strict';
	
	window.$ = $;
	require(['application/application'], function(App) {
		App.start();
	});
});