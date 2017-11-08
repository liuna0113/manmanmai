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
  var shopid = tools.getObjContent("shopId") || tools.getObjContent("shopid") || 1;
  var areaid = tools.getObjContent("areaId") || tools.getObjContent("areaid") || 1;
  
  function render(shopid, areaid) {
    $.ajax({
      url: "http://www.mmb.com:9090/api/getgsproduct",
      type: "get",
      data: {
        shopid: shopid,
        areaid: areaid
      },
      success: function (data) {
        console.log(data);

        $('.item_box').html(template('tpl', data));
        
      }
    });
  }
  
  function renderShop() {
    $.ajax({
      url: "http://www.mmb.com:9090/api/getgsshop",
      type: "get",
      success: function (data) {
        console.log(data);
        data.result[0].shopid = data.result[0].shopId;
        data.result[0].areaid = data.result[0].areaId;
        console.log(shopid);
        console.log(areaid);
        $('.gs_product').html(template('tpl2', data));
      }
    });
  }
  
  function renderArea() {
    $.ajax({
      url: "http://www.mmb.com:9090/api/getgsshoparea",
      type: "get",
      success: function (data) {
        console.log(data);
        data.result[0].shopid = data.result[0].shopId;
        data.result[0].areaid = data.result[0].areaId;
        console.log(shopid);
        console.log(areaid);
        $('.gs_product').html(template('tpl2', data));
      }
    });
  }
  
  render(shopid, areaid);
  
  $('.gs_brand').on('click', function () {
    renderShop();
    myClick();
  });
  
  $('.gs_area').on('click', function () {
    renderArea();
    myClick();
  });
  
  $('.icon-fanhui').on('click', function () {
    history.go(-1);
  })
  function myClick() {
    $('.gs_product').toggle().on('click', 'a', function () {
      console.log(2);
      $(this).children().toggleClass("now").parent().siblings().children().addClass("now");
    })
  }
  
})