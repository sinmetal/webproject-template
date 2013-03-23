//main.js
require.config({
	baseUrl: 'js',
	paths: {
		'jquery': '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js'
	}
});

require([
	'module/hoge',
	'module/fuga'
], function(Hoge, Fuga) {
	// Hogeにはhoge.jsで定義されたコンストラクタが渡る
	var hoge = new Hoge();
	hoge.awesomeThod();
});