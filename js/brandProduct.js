$(function () {
  var brandtitleid = tools.getObjContent("brandtitleid") || 1;
  var retUrl = str + url.getbrand;
  var data = {"brandtitleid": brandtitleid};
  tools.render(retUrl, data, $('.product_lists'), 'tpl');
})