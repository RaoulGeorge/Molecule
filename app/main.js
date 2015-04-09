require(['jquery'], function($) {
	window.$ = $;
	require(['application/application'], function(App) {
		debugger
		var app = new App();
		app.start();
	})
});