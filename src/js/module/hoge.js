define([
	'lib/jquery'
], function($) {
	var Hoge = function() {};
	Hoge.prototype.awesomeThod = function() {
		console.log('Hellow RequireJS!');
	};

	return Hoge;
});