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
  var productid = tools.getObjContent("productid") || 1;
  
  function render(productid) {
    var data = {
      productid: productid
    };
    $.ajax({
      url: "http://www.mmb.com:9090/api/getmoneyctrlproduct",
      type: "get",
      data: data,
      success: function (data) {
        console.log(data);
        $('.mmb_container').html(template('tpl', data));
      }
    });
  }
  
  render(productid);
  
  
  $('.icon-fanhui').on('click', function () {
    history.go(-1);
  })
  
  
})