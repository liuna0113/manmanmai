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
  var couponid = tools.getObjContent("couponid") || 0;
  
  function render(couponid) {
    $.ajax({
      url: "http://www.mmb.com:9090/api/getcouponproduct",
      type: "get",
      data: {
        couponid: couponid
      },
      success: function (data) {
        console.log(data);
        $('.mmb_container').html(template('tpl', data));
        $('.coupon_item').each(function (i, e) {
          var index = i;
          $(e).on('click', function () {
            data.index = i;
            $('.shadow_box').html(template('tpl2', data)).show();
            $('.shadow_box').on('click', function () {
              $(this).hide()
            })
            $('.arrow_left').on('click', function (e) {
              e.stopPropagation();
              if (data.index < 0) {
                data.index == data.result.length;
              }
              data.index--;
              // $('.shadow_box').html(template('tpl2', data));
            });
          });
          
        })
        
      }
    });
  }
  
  render(couponid);
  
  $('.icon-fanhui').on('click', function () {
    history.go(-1);
  })
  
  
})