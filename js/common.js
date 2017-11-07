(function (win) {
  var obj = {
    retUrl: "http://www.mmb.com:9090/api/",
    index: "index",
    cate: "cate"
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
    checkLogin: function (data) {
      if (data.error === 400) {
        location.href = "login.html?retUrl=" + location.href;
      }
    }
  };
  
})(window)