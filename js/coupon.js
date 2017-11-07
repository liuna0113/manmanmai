$(function () {
  function render() {
    $.ajax({
      url: "http://www.mmb.com:9090/api/getcoupon",
      type: "get",
      success: function (data) {
        console.log(data);
        $('.coupon_content').html(template('tpl', data));
      }
    });
  }
  
  render();

  $('.icon-fanhui').on('click', function () {
    history.go(-1);
  })
  
  
})