define(function(require) {
	'use strict';

	require('backbone');

	var view = Backbone.View.extend({
		initialize: function() {
			console.log('init');
		},
		render: function() {
			console.log('render');
		}
	});

	return view;
});