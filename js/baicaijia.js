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
  var titleid = tools.getObjContent("titleid") || 0;
  var num = 0;
  
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
  pageRender(titleid);
  function pageRender(titleid) {
    titleid = titleid || 0;
    $.ajax({
      url: "http://www.mmb.com:9090/api/getbaicaijiaproduct",
      type: "get",
      data: {
        titleid: titleid
      },
      success: function (data) {
        console.log(data);
        $('.baicai_item_box').html(template('tpl2', data));
      }
    });
  }

  // console.log($('.baicai_nav ul li'));

  $('.baicai_nav ul').on('click', 'li a', function () {
    $(this).toggleClass("now").parent().siblings().find("a").removeClass("now");
    var titleid = $(this).data("titleid");
    pageRender(titleid);
  });

  $('.icon-fanhui').on('click', function () {
    history.go(-1);
  })
  
  
})