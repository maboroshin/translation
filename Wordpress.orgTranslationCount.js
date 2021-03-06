// ==UserScript==
// @name         Wordpress.org translation count
// @version      1.2
// @description  First, Please add Tampermoneky Add-on. This Add count number on Wordpress.org's translation. Similar to PoEditor's string ID. When used together(Web. PoEditor), you can search on web.
// @author       maboroshin
// @namespace    https://github.com/maboroshin/translation
// @grant        none
// @match        https://translate.wordpress.org/projects/wp-plugins/*/*
// @match        https://translate.updraftplus.com/projects/*/ja/japanese/?*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js
// ==/UserScript==

(function() {
  if (/wp-plugins\/[^/]+\/[^/]+\/[a-z0-9]/i.test(location.href) == false) return;

  addCssRule([
    '.wrapper { margin-top: 0px; }',
    'h1 { zoom:50%; }',
    '#wporg-footer, #bulk-actions-toolbar-top, #download { display:none; } ',
    '#masthead, h2, .breadcrumb, .filter-toolbar, #legend { margin:0 !important; padding:0 !important; }',
    '#legend { font-size:80% !important; }',
    '.gp-content {margin-top:0 !important; margin-bottom:0 !important;}',
    'h2 {font-size:95%; font-weight:bold;}',
    'h2 .glossary-link { font-size:120% !important;}'
  ]);
  let perPage = 15;
  let pageNum = $(".paging:first .current").text();
  let countTotalBase = pageNum * perPage - perPage;

  let o = $("#translations").find(".actions");
  //let tableLength = o.length;
  let countTable = 0;

  o.each(function() {
    if (countTable) {
      let u = $(this);
      $(this).html('<span style="font-size:70%";">' +
        (Number(countTotalBase) + Number(countTable)) + "</span>" +
        $(this).html());
    }
    countTable++;
  });

  countTable--; // Extra +1
  let countTotalAll = Number(countTotalBase) + Number(countTable);
  document.title = "[" +
    (countTotalAll - Number(countTable) +1 ) + "-" + countTotalAll +
    "/p" +
    pageNum +
    "] " + document.title;

  let t = $(".paging").find("a");
  t.each(function() {
    let u = $(this);
    let url = u.attr("href");
    if (/page=([0-9]{1,3}$)/.test(url)) {
      let pageNumTemp = $(this).html();
      let countTotalTemp = Number(pageNumTemp) * perPage - perPage + 1;
      $(this).attr("title", String(countTotalTemp) + String("/p") + String(pageNumTemp) );
    }
  });

  function addCssRule(a) {
    var styleTag = document.createElement("style");
    var head = document.getElementsByTagName("head")[0];
    head.appendChild(styleTag);
    var thisSheet = styleTag.sheet ? styleTag.sheet : styleTag.styleSheet;
    if (thisSheet.insertRule)
      for (var i in a)
        thisSheet.insertRule(a[i], 0);
    else
      for (var i in a) {
        var t = a[i].split("{");
        var u = t[0].split(",");
          for (var j in u) {
              thisSheet.addRule(u[j], t[1].slice(0, -1));
          }
      }
  }

})();
