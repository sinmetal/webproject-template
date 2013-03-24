define([
	'lib/jquery'
], function($) {
	var Hoge = function() {};
	Hoge.prototype.awesomeThod = function() {
		console.log('Hellow RequireJS!');
	};

	Hoge.prototype.outputLog = function(text) {
		console.log(text);
	};

	return Hoge;
});