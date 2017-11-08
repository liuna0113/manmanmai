$(function () {
  var tools = {
    getObj: function () {
      var str = location.search;
      str = str.substring(1);
      var arr = [];
      var obj = {};
      arr = str.split('&');
      arr.forEach(function (v, i) {
        obj[v.split('=')[0]] = decodeURI(v.split('=')[1]);
      });
      return obj;
    },
    getObjContent: function (key) {
      return this.getObj()[key];
    }
  };
  var brandtitleid = tools.getObjContent("brandtitleid") || 1;
  var pagesize = tools.getObjContent("pagesize") || 4;

  function render(brandtitleid, pagesize) {
    $.ajax({
      type: 'get',
      url: "http://www.mmb.com:9090/api/getbrandproductlist",
      data: {
        brandtitleid: brandtitleid,
        pagesize: pagesize
      },
      success: function (data) {
        console.log(data);
        $('.product_lists').html(template('tpl', data));
      }
    });
  }
  
  render(brandtitleid, pagesize);

  
})