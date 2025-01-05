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
    window.location.href="https://www.dedao.cn"; 
})



mapkey('ag','Getabstract',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="https://www.getabstract.com/"; 
})


mapkey('ai','bokelai',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="https://www.books.com.tw/web/books_newbook/?loc=subject_003"; 
})

mapkey('aj','JD',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="http://www.jd.com/"; 
})


mapkey('ak','Kongfz',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="http://www.kongfz.com/"; 
})

mapkey('al','Bilibili',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="https://www.bilibili.com/"; 
})




mapkey('ap','Pubu',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="https://www.pubu.com.tw/"; 
})


mapkey('aq','Qmail',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="http://mail.qq.com/"; 
})


mapkey('as','Duxiu',()=>{
    //orwindow.open("https://www.hao123.com"); 
    window.location.href="https://libproxy.z.library.sh.cn/https/443/com/duxiu/www/yitlink/#"; 
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
//����


mapkey('gu', '#save url file', function() {
  // ��ȡ��ǰҳ��� URL
  var url = window.location.href;

  // ��ȡ��ǰҳ��ı���
  var title = document.title;

  // �����ı��ļ�����
  var fileContent = "[InternetShortcut]\nURL=" + url;

  // ���� Blob ����
  var blob = new Blob([fileContent], { type: 'text/plain' });

  // ������������
  var downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink = title + '.url';

  // ģ������������
  downloadLink.click();
});


api.map('=','zi');
api.map('-','zo');

api.map('p','cc');


//api.map('<Ctrl-/>','<Ctrl-.>');
cmap('<Ctrl-/>', '<Ctrl-.>');

//����
api.map('\\', 'gi');
api.map('i', 'gi');



//����
map('j', 'd');
map('k','e')
map('gxz', 'gx0');
map('gxc', 'gx$');
map('gb', 'gx$');


//
map('p', 'cc');

//��ǩ�л�
map('q','E');
map('w', 'R');
map('h', 'E');
map('l', 'R');

//�ƶ���ǩ
map('<', '<<');
map('>', '>>');

//��ҳ
map('[', '[[');
map(']', ']]');


api.map('b','S')
api.map('n','D')




//�������ۿ����ٱ�ǩ�����ÿ�����ѡ���ǩ,�����ݼ�
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
  // ��ȡ��ǰҳ��� URL
  var url = window.location.href;

  // ��ȡ��ǰҳ��ı���
  var title = document.title;

  // �����ı��ļ�����
  var fileContent = "[InternetShortcut]\nURL=" + url;

  // ���� Blob ����
  var blob = new Blob([fileContent], { type: 'text/plain' });

  // ������������
  var downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = title + '.url';

  // ģ������������
  downloadLink.click();
});




addSearchAlias('a', 'Amazon', 'https://www.amazon.com/s?k=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});


addSearchAlias('b', 'Douban', 'https://search.douban.com/book/subject_search?search_text=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});


addSearchAlias('c', 'Taaze', 'https://www.taaze.tw/rwd_searchResult.html?keyType%5B%5D=0&keyword%5B%5D=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});


addSearchAlias('d', 'Dedao', 'https://www.dedao.cn/search/result?q=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
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



addSearchAlias('k', 'Kongfz', 'https://search.kongfz.com/product_result/?key=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});


addSearchAlias('l', 'Bilibili', 'https://search.bilibili.com/all?keyword=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
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


addSearchAlias('s', 'Duxiu', 'https://z.library.sh.cn/https/443/com/duxiu/book/yitlink/search?exp=0&allsw=&channel=search&bCon=&ecode=utf-8&Field=all&sw=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});


addSearchAlias('t', 'TaoBao', 'https://s.taobao.com/search?q=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});


addSearchAlias('u', 'Zhihu', 'https://www.zhihu.com/search?type=content&q=', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
    var res = JSON.parse(response.text);
    return res.map(function(r){
        return r.phrase;
    });
});



addSearchAlias('w', 'Wiki', 'https://zh.wikipedia.org/wiki/', 's', 'https://duckduckgo.com/ac/?q=', function(response) {
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


// ʹ�� Google ����ѡ�е����֣����ں�̨���±�ǩҳ
// mapkey('sg', '#6 Search selected with Google in background tab', function() {
//     var selectedText = window.getSelection().toString();
//     if (selectedText) {
//         var searchURL = 'https://www.google.com/search?q=' + encodeURIComponent(selectedText);
//         // ʹ�� runtime.command ���±�ǩҳ���ں�̨���д���
//         runtime.command({
//             action: 'openLink',
//             url: searchURL,
//             tab: {
//                 tabbed: true,
//                 active: false  // ����Ϊ false ��ʾ�ں�̨��
//             }
//         });
//     }
// });


