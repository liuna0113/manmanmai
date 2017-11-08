$(function () {
  var retUrl = str + url.getindexmenu;
  var retUrl2 = str + url.getmoneyctrl;
  var data = "";
  tools.render(retUrl, data, $('.one_nav'), 'tpl');
  tools.render(retUrl2, data, $('.good_box'), 'tpl2');
  $('.one_nav').on('click', '.nav_now', function () {
    $('.two_nav').toggle();
  })
})