$(function () {
  function render() {
    $.ajax({
      type: 'get',
      url: "http://www.mmb.com:9090/api/getbrandtitle",
      success: function (data) {
        console.log(data);
        $('.product_lists').html(template('tpl', data));
      }
    });
  }
  
  render();
  
  
})