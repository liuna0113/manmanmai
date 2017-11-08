$(function () {
  var productid = tools.getObjContent("productid") || 1;
  var data = {"productid": productid};
  var retUrl = str + url.getproductcom;
  tools.render(retUrl, data, $('.product_lists'), 'tpl');
})