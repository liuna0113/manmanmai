$(function () {
  console.log(1);
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
  var categoryid = tools.getObjContent("categoryid");
  var productid = tools.getObjContent("productid");
  console.log(productid);
  // var titleid = tools.getObjContent("titleid");
  // var pageid = tools.getObjContent("pageid") || 1;
  $.ajax({})
  $.ajax({
    type: "get",
    url: "http://www.mmb.com:9090/api/getproduct",
    data: {
      productid: productid
    },
    success: function (data) {
      console.log(data);
      $('.good_lists').html(template('tpl2', data));
      $.ajax({
        type: "get",
        url: "http://www.mmb.com:9090/api/getproductcom",
        data: {
          productid: productid
        },
        success: function (data) {
          console.log(data);
          $('.pro_content').html(template('tpl3', data));
        }
      })
    }
  })
  
})