(function () {
    'use strict';
    window.require = {
        paths: {
            'jquery': '../lib/jquery-2.1.3.min',
            'backbone': '../lib/backbone-min',
    		'underscore': '../lib/underscore-min'
        },
        shim: {
 			'backbone': {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            'underscore': {
                exports: '_'
            }
        }
       
    };
}());
