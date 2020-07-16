var request = require('request');
var events = require('events');
var cheerio = require('cheerio');

var checkStock = () => {
}

request('https://www.brandymelvilleusa.com/shannon-sweater-96s-162.html',
    (err, res, body) => {
        if (err) {
            console.log('err');
        } else {
            var $ = cheerio.load(body);
            if ($('.in-stock').text() == ' In Stock') {
                console.log('yes');
            } else {
                console.log($('.in-stock').text());
            }
        }
    });

request('https://www.brandymelvilleusa.com/catalogsearch/result/?q=carla+hoodie',
    (err, res, body) => {
        var $ = cheerio.load(body);
        if ($('.fallback').text().includes('did not match')) {
            console.log('out of stock');
        } else {
            $('.swiper-slide').each(function(index, value) {
                console.log($(this).find('a').attr('href'));
            })
        }
    })