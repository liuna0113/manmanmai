$(function () {
  // var tools = {
  //   getObj: function () {
  //     var str = location.search;
  //     str = str.substring(1);
  //     var arr = [];
  //     var obj = {};
  //     arr = str.split('&');
  //     arr.forEach(function (v, i) {
  //       obj[v.split('=')[0]] = decodeURI(v.split('=')[1]);
  //     });
  //     return obj;
  //   },
  //   getObjContent: function (key) {
  //     return this.getObj()[key];
  //   }
  // };
  // var productid = tools.getObjContent("productid") || 1;

  function render() {
    $.ajax({
      url: "http://www.mmb.com:9090/api/getinlanddiscount",
      type: "get",
      success: function (data) {
        console.log(data);
        $('.item_box').html(template('tpl', data));
      }
    });
  }

  render();


  $('.icon-fanhui').on('click', function () {
    history.go(-1);
  })


})