$(function () {
  var categoryid = tools.getObjContent("categoryid");
  var titleid = tools.getObjContent("titleid");
  var pageid = tools.getObjContent("pageid") || 1;
  var total = 0;
  var pagesize = 0;
  var str1 = "<option>请选择</option>";
  var retUrl = str + url.getcategorybyid;
  var data = {categoryid: categoryid};
  tools.render(retUrl, data, $('.product_nav_main'), 'tpl');
  function pagerender(categoryid, titleid, pageid) {
    $.ajax({
      type: "get",
      url: "http://www.mmb.com:9090/api/getproductlist",
      data: {
        categoryid: categoryid,
        titleid: titleid,
        pageid: pageid
      },
      success: function (data) {
        console.log(data);
        total = data.totalCount;
        pagesize = data.pagesize;
        pageNum = Math.ceil(total / pagesize);
        getStr(pageNum);
        $('.middle_btn select').html(str1);
        $('.good_lists').html(template('tpl2', data))
      }
    });
  }
  
  pagerender(categoryid, titleid, pageid);
  
  $('.left_btn').on('click', function () {
    var pageNum = total / pagesize;
    if (pageid <= 1) {
      pageid = 1;
    } else {
      pageid = pageid - 1;
    }
    location.href = "productList.html?categoryid=" + categoryid + "&titleid=" +
      titleid + "&pageid=" + pageid;
  });
  
  $('.right_btn').on('click', function () {
    var pageNum = total / pagesize;
    if (pageid >= Math.ceil(pageNum)) {
      pageid = Math.ceil(pageNum);
    } else {
      pageid = (+pageid) + 1;
    }
    console.log(pageid);
    location.href = "productList.html?categoryid=" + categoryid + "&titleid=" +
      titleid + "&pageid=" + pageid;
  });
  
  $('.middle_btn select').on('change', function () {
    // console.log($(this).val());
    pageid = (+$(this).val());
    location.href = "productList.html?categoryid=" + categoryid + "&titleid=" +
      titleid + "&pageid=" + pageid;
  });
  
  $('.good_lists').on('click', '.good_list', function () {
    // var category = $(this).data("category");
    // console.log(category);
    var categoryid = $(this).data("categoryid");
    var productid = $(this).data("productid");
    var categoryName = $('.category_name').html();
    console.log(categoryName);
    location.href = "http://www.mmb.com/productInfo.html?categoryid=" + categoryid + "&productid=" + productid + "&categoryname=" + categoryName;
  })
  
  function getStr(pageNum) {
    console.log(pageid);
    for (var i = 1; i <= pageNum; i++) {
      if (i == pageid) {
        str1 += "<option selected>" + i + "</option>"
      } else {
        str1 += "<option>" + i + "</option>"
      }
    }
  };
})