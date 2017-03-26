/**
 *
 */
module.exports=function(url,callback){
	let request = require('request');
	let iconv = require('iconv-lite');//把GBK格式的buffer转成utf8字符串
	let cheerio = require('cheerio');
	var debug = require('debug');
	var logger = debug('crawl:read');

	request({url,encoding:null},function(err,res,body){
		body = iconv.decode(body,'gbk');
		var movies = [];
		let $ = cheerio.load(body);
		$(".keyword .list-title").each(function(item){
			var $this = $(this);
			var movie={
				name:$this.text(),
				url:$this.attr('href')
			};
			logger(`读取到电影：${movie.name}`);
			movies.push(movie);

		})
		callback(err,movies);
	});
};
var url = 'http://top.baidu.com/buzz?b=26&c=1&fr=topcategory_c1';
module.exports(url,function(err,movies){
	//console.log(movies);
});
