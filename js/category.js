$(function () {
  $.ajax({
    type: 'get',
    url: "http://www.mmb.com:9090/api/getcategorytitle",
    success: function (data) {
      // console.log(data);
      $('.mmb_container').html(template('tpl', data));
    }

  });
  $('.mmb_container').on('click', '.box_title', function () {
    // console.log("出来了");
    $(this).siblings().toggle();
    var titleId = $(this).data("id");
    // console.log(titleId);
    $.ajax({
      type: "get",
      url: "http://www.mmb.com:9090/api/getcategory",
      data: {'titleid': titleId},
      success: function (data) {
        console.log(data);
        $('.pro_list').html(template('tpl2', data));
      }
    })
  })
})