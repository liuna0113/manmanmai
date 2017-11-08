$(function () {
  var shopid = tools.getObjContent("shopId") || 0;
  var areaid = tools.getObjContent("areaId") || 0;
  var retUrl = str + url.getgsproduct;
  var data = {
    "shopid": shopid,
    "areaid": areaid
  };
  tools.render(retUrl, data, $('.item_box'), 'tpl');

  function renderShop(idStr) {
    $.ajax({
      url: "http://www.mmb.com:9090/api/getgsshop",
      type: "get",
      success: function (data) {
        console.log(data);
        $('.gs_product').html(template(idStr, data));
      }
    });
  }
  
  function renderArea(idStr) {
    $.ajax({
      url: "http://www.mmb.com:9090/api/getgsshoparea",
      type: "get",
      success: function (data) {
        console.log(data);
        $('.gs_Doubleproduct').html(template(idStr, data));
      }
    });
  }

  $('.gs_brand').on('click', function () {
    renderShop('tpl2');
    myClick();
  });
  
  $('.gs_area').on('click', function () {
    // var $that = $(this);
    renderArea('tpl3');
    myDoubleClick();
  });

  function myClick() {
    $('.gs_Doubleproduct').hide();
    $('.gs_product').toggle().on('click', 'a', function () {
      $(this).children().removeClass("now").parent().siblings().children().addClass("now").parent().parent().hide();
      $that = $(this).find('i').html();
      $('.gs_brand').html($that);
      data.shopid = $(this).data("shopid");
      console.log(data);
      tools.render(retUrl, data, $('.item_box'), 'tpl');
    });
  }

  function myDoubleClick() {
    var $that = null;
    $('.gs_product').hide();
    $('.gs_Doubleproduct').toggle().on('click', 'a', function () {
      $(this).children().removeClass("now").parent().siblings().children().addClass("now").parent().parent().hide();
      $that = $(this).find('i').html().substr(0, 2);
      $('.gs_area').html($that);
      data.areaid = $(this).data("areaid");
      console.log(data);
      tools.render(retUrl, data, $('.item_box'), 'tpl');
    });

  }


})