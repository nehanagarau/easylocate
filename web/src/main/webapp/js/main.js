// Filename: main.js

require.config({
	shim : {
		'underscore' : {
			exports : '_'
		},
		'mediator' : {
			exports : 'Mediator'
		},
		'jquery' : {
			exports : 'jquery'
		},
		'backbone' : {
			deps : [ 'underscore', 'jquery' ],
			exports : 'Backbone'
		}
	},
	paths : {
		jquery : 'libs/jquery-1.9.1',
		underscore : 'libs/underscore-min',
		backbone : 'libs/backbone-min',
		mediator : 'libs/mediator',
		text : 'libs/text'
	}

});

require(['app', 'mediator'], function(App, Mediator) {
	$('document').ready(function() {
		console.log(Mediator);
		App();
	});
});