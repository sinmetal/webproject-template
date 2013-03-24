//main.js
require.config({
	baseUrl: 'js',
	paths: {
		'jquery': 'lib/jquery.js'
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