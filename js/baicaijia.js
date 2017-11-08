$(function () {
  var titleid = tools.getObjContent("titleid") || 0;
  var num = 0;
  var retUrl = str + url.getbaicaijiaproduct;
  var data = {"titleid": titleid};
  
  function render() {
    $.ajax({
      url: "http://www.mmb.com:9090/api/getbaicaijiatitle",
      type: "get",
      success: function (data) {
        console.log(data);
        $('.baicai_nav ul').html(template('tpl', data));
        $('.baicai_nav ul li').each(function (i, e) {
          num += $(e).width();
        });
        console.log(num);
        $('.baicai_nav ul').width((num + 1 + "px"));
      }
    });
  }
  
  render();
  mui('.mui-scroll-wrapper').scroll({
    deceleration: 0.0005,//flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    scrollY: false, //是否竖向滚动
    scrollX: true //是否横向滚动
  });
  tools.render(retUrl, data, $('.baicai_item_box'), 'tpl2');
  
  $('.baicai_nav ul').on('click', 'li a', function () {
    $(this).toggleClass("now").parent().siblings().find("a").removeClass("now");
    var titleid = $(this).data("titleid");
    tools.render(retUrl, data, $('.baicai_item_box'), 'tpl2');
  });
})