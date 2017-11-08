$(function () {
  var brandtitleid = tools.getObjContent("brandtitleid") || 1;
  var pagesize = tools.getObjContent("pagesize") || 4;
  var retUrl = str + url.getbrandproductlist;
  var data = {
    "brandtitleid": brandtitleid,
    "pagesize": pagesize
  };
  tools.render(retUrl, data, $('.product_lists'), 'tpl');
})