$(function () {
  
  // console.log(obj.retUrl + '===');
  $.ajax({
    url: "http://www.mmb.com:9090/api/getindexmenu",
    type: "get",
    success: function (data) {
      console.log(data);
      $('.one_nav').html(template('tpl', data));
    }
  });
  $.ajax({
    url: "http://www.mmb.com:9090/api/getmoneyctrl",
    type: "get",
    success: function (data) {
      console.log(data);
      $('.good_box').html(template('tpl2', data));
    }
  });
  $('.one_nav').on('click', '.nav_now', function () {
    $('.two_nav').toggle();
  })
  $('.icon-huidingbu').on('click', function () {
    console.log(1);
    // top = 0;
  })
})