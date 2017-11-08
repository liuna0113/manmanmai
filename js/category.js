$(function () {
  var retUrl = str + url.getcategorytitle;
  var retUrl2 = str + url.getcategory;
  var data = "";
  tools.render(retUrl, data, $('.mmb_container'), 'tpl');
  $('.mmb_container').on('click', '.box_title', function () {
    // console.log("出来了");
    $(this).siblings().toggle().parent().siblings().children('.pro_list').hide();
    var titleId = $(this).data("id");
    var data = {'titleid': titleId};
    tools.render(retUrl2, data, $('.pro_list'), 'tpl2');
  })
})