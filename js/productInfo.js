$(function () {
  var categoryid = tools.getObjContent("categoryid");
  var categoryname = tools.getObjContent("categoryname");
  var productid = tools.getObjContent("productid");
  console.log(productid);
  $.ajax({
    type: "get",
    url: "http://www.mmb.com:9090/api/getproduct",
    data: {
      productid: productid
    },
    success: function (data) {
      console.log(data);
      $('.good_lists').html(template('tpl2', data));
      data.categoryname = categoryname;
      console.log(data);
      $('.product_nav_main').html(template('tpl', data));
      $.ajax({
        type: "get",
        url: "http://www.mmb.com:9090/api/getproductcom",
        data: {
          productid: productid
        },
        success: function (data) {
          console.log(data);
          $('.pro_content').html(template('tpl3', data));
        }
      })
    }
  })
})