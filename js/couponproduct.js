$(function () {
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
        $('.coupon_items').on('click', '.coupon_item', function (e, i) {
          console.log(e, i);
          // console.log(data);
          $('.shadow').show();
          $('.mui-slider-group').html(template('tpl2', data));
          var gallery = mui('.mui-slider');
          var slider = mui('.mui-slider').slider();
          $('.arrow_right').on('click', function (e) {
            e.stopPropagation();
            slider.nextItem();
          });
          $('.arrow_left').on('click', function (e) {
            e.stopPropagation();
            slider.prevItem();
          });
          slider.stopped = false;
        });
        $('.shadow').on('click', function () {
          $(this).hide();
        })
      }
    });
  }
  
  render(couponid);
  
})