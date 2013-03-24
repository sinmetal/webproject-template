//page1/main.js
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
	hoge.outputLog('Hello Page1 New!');
	hoge.outputLog('Grunt watch? from 2215');
});