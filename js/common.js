var str = "http://www.mmb.com:9090/api/";
var url = {
  getindexmenu: "getindexmenu",
  getmoneyctrl: "getmoneyctrl",
  getcategorytitle: "getcategorytitle",
  getcategory: "getcategory",
  getcategorybyid: "getcategorybyid",
  getproductlist: "getproductlist",
  getproduct: "getproduct",
  getproductcom: "getproductcom",
  getmoneyctrlproduct: "getmoneyctrlproduct",
  getinlanddiscount: "getinlanddiscount",
  getdiscountproduct: "getdiscountproduct",
  getbaicaijiatitle: "getbaicaijiatitle",
  getbaicaijiaproduct: "getbaicaijiaproduct",
  getcoupon: "getcoupon",
  getcouponproduct: "getcouponproduct",
  getgsshop: "getgsshop",
  getgsshoparea: "getgsshoparea",
  getgsproduct: "getgsproduct",
  getsitenav: "getsitenav",
  getbrandtitle: "getbrandtitle",
  getbrand: "getbrand",
  getbrandproductlist: "getbrandproductlist"
};
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
  },
  render: function (retUrl, data, selector, idStr) {
    console.log(1);
    $.ajax({
      type: "get",
      url: retUrl,
      data: data,
      success: function (data) {
        console.log(data);
        selector.html(template(idStr, data));
      }
    })
  }
};