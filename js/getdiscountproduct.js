$(function () {
  var productid = tools.getObjContent("productid") || 1;
  var retUrl = str + url.getdiscountproduct;
  var data = {
    "productid": productid
  };
  tools.render(retUrl, data, $('.mmb_container'), 'tpl');
})