define(function(require) {
	'use strict';
	
	require('backbone');

	var HeaderView = Backbone.View.extend({
		initialize: function() {
			console.log('init');
		},
		render: function() {
			console.log('render');
		}
	});

	return HeaderView;

});