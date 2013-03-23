require([
	'js/module/hoge',
	'js/module/fuga'
], function(Hoge, Fuga) {
	// Hogeにはhoge.jsで定義されたコンストラクタが渡る
	var hoge = new Hoge();
	hoge.awesomeThod();
});