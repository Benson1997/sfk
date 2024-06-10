const {
    unmap,
    iunmap,
    vunmap,
    aceVimMap,
    mapkey,
    imap,
    imapkey,
    getClickableElements,
    vmapkey,
    map,
    cmap,
    addSearchAlias,
    removeSearchAlias,
    tabOpenLink,
    readText,
    Clipboard,
    Front,
    Hints,
    Visual,
    RUNTIME
} = api;
// set theme

/*
settings.theme = `
.sk_theme {
    font-family: Input Sans Condensed, Charcoal, sans-serif;
    font-size: 10pt;
    background: #24272e;
    color: #abb2bf;
}
.sk_theme tbody {
    color: #fff;
}
.sk_theme input {
    color: #d0d0d0;
}
.sk_theme .url {
    color: #61afef;
}
.sk_theme .annotation {
    color: #56b6c2;
}
.sk_theme .omnibar_highlight {
    color: #528bff;
}
.sk_theme .omnibar_timestamp {
    color: #e5c07b;
}
.sk_theme .omnibar_visitcount {
    color: #98c379;
}
.sk_theme #sk_omnibarSearchResult ul li:nth-child(odd) {
    background: #303030;
}
.sk_theme #sk_omnibarSearchResult ul li.focused {
    background: #3e4452;
}
#sk_status, #sk_find {
    font-size: 20pt;
}`;

*/








mapkey('aa','Amazon',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="http://www.amazon.com/"; 
})



mapkey('ac','Taaze',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="https://www.taaze.tw/"; 
})


mapkey('ad','Douban',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="http://www.dangdang.com/"; 
})



mapkey('ag','Getabstract',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="https://www.getabstract.com/"; 
})


mapkey('aj','JD',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="http://www.jd.com/"; 
})


mapkey('al','博客来新书',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="https://www.books.com.tw/web/books_newbook/?loc=subject_003"; 
})




mapkey('ap','Pubu',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="https://www.pubu.com.tw/"; 
})


mapkey('aq','Qmail',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="http://mail.qq.com/"; 
})


mapkey('as','ucdrs',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="http://www.ucdrs.superlib.net/"; 
})


mapkey('at','Taobao',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="http://www.taobao.com/"; 
})







mapkey('yq', '#7Copy pre text', function () {
    Hints.create("pre", function (element) {
        Clipboard.write(element.innerText);
    });
});

     mapkey(',', '#8Bookmark current page to selected folder', function () {
            var page = {
                url: window.location.href,
                title: document.title
            };
            Front.openOmnibar(({ type: "AddBookmark", extra: page }));
        });
//搜索


mapkey('gu', '#save url file', function() {
  // 获取当前页面的 URL
  var url = window.location.href;

  // 获取当前页面的标题
  var title = document.title;

  // 创建文本文件内容
  var fileContent = "[InternetShortcut]\nURL=" + url;

  // 创建 Blob 对象
  var blob = new Blob([fileContent], { type: 'text/plain' });

  // 创建下载链接
  var downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink = title + '.url';

  // 模拟点击下载链接
  downloadLink.click();
});


api.map('=','zi');
api.map('-','zo');

api.map('p','cc');
api.map('c','cf');


cmap('<Ctrl-/>','<Ctrl-.>');


//搜索
api.map('\\', 'gi');
api.map('i', 'gi');



//滚动
map('j', 'd');
map('k','e')
map('gxz', 'gx0');
map('gxc', 'gx$');


//
map('p', 'cc');

//标签切换
map('q','E');
map('w', 'R');
map('h', 'E');
map('l', 'R');

//移动标签
map('<', '<<');
map('>', '>>');

//翻页
map('[', '[[');
map(']', ']]');


api.map('b','S')
api.map('n','D')
api.map('o',"og")



//设置无论开多少标签都不用框子来选择标签,方便快捷键
settings.tabsThreshold = 100;

mapkey('yet', '#7Copy a table', function() {
	Hints.create("table", function(element) {
		selectElement(element);
		document.execCommand('copy');
		// Clipboard.write(element.innerText);
	});
});

selectElement = function (el) {
    var range = document.createRange(),
        selection = window.getSelection();

    range.selectNodeContents(el);
    selection.removeAllRanges();
    selection.addRange(range);
}

mapkey('gu', '#save url file', function() {
  // 获取当前页面的 URL
  var url = window.location.href;

  // 获取当前页面的标题
  var title = document.title;

  // 创建文本文件内容
  var fileContent = "[InternetShortcut]\nURL=" + url;

  // 创建 Blob 对象
  var blob = new Blob([fileContent], { type: 'text/plain' });

  // 创建下载链接
  var downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = title + '.url';

  // 模拟点击下载链接
  downloadLink.click();
});




addSearchAlias('a', 'Amazon', 'http://book.ucdrs.superlib.net/search?&ecode=utf-8&channel=search&Field=all&sw=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});


addSearchAlias('c', '读册', 'https://www.taaze.tw/rwd_searchResult.html?keyType%5B%5D=0&keyword%5B%5D=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});



addSearchAlias('d', '豆瓣', 'https://search.douban.com/book/subject_search?search_text=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});


addSearchAlias('j', 'JD', 'https://search.jd.com/Search?&enc=utf-8&keyword=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});



addSearchAlias('k', '孔夫子', 'https://search.kongfz.com/product_result/?key=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});




addSearchAlias('r', 'Goodreads', 'https://www.goodreads.com/search?q=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});


addSearchAlias('s', '全国图书馆', 'http://book.ucdrs.superlib.net/search?&ecode=utf-8&channel=search&Field=all&sw=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});


addSearchAlias('t', '淘宝', 'https://s.taobao.com/search?q=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});


addSearchAlias('u', '知乎', 'https://www.zhihu.com/search?type=content&q=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});



addSearchAlias('w', 'wiki', 'https://zh.wikipedia.org/wiki/', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});


addSearchAlias('y', 'Youtube', 'https://www.youtube.com/results?search_query=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});


