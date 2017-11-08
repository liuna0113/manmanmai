$(function () {
  var pageid = tools.getObjContent("pageid") || 1;
  var pageNum = 0;
  
  function render(pageid) {
    var data = {
      pageid: pageid
    };
    $.ajax({
      url: "http://www.mmb.com:9090/api/getmoneyctrl",
      type: "get",
      data: data,
      success: function (data) {
        console.log(data);
        var total = data.totalCount;
        var pageSize = data.pagesize;
        console.log(total, pageSize);
        pageNum = Math.ceil(total / pageSize);
        $('.good_box').html(template('tpl2', data));
        var data2 = {
          pageid: pageid,
          pageNum: pageNum
        };
        console.log(data2);
        $('.middle_btn select').html(template('tpl', data2));
      }
    });
  }
  
  render(pageid);
  
  
  $('.left_btn').on('click', function () {
    if (pageid <= 1) {
      pageid = 1;
    } else {
      pageid = pageid - 1;
    }
    location.href = "moneyctrl.html?pageid=" + pageid;
  });
  
  $('.right_btn').on('click', function () {
    if (pageid >= Math.ceil(pageNum)) {
      pageid = Math.ceil(pageNum);
    } else {
      pageid = (+pageid) + 1;
    }
    console.log(pageid);
    location.href = "moneyctrl.html?pageid=" + pageid;
  });
  
  $('.middle_btn select').on('change', function () {
    pageid = (+$(this).val());
    location.href = "moneyctrl.html?pageid=" + pageid;
  });
  
  $('.good_box').on('click', '.good_list', function () {
    console.log(1);
    var productid = $(this).data("productid");
    location.href = "http://www.mmb.com/moneyctrlList.html?productid=" + productid;
  })
  
  
})