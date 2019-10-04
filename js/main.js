// Js onload function
var APIurl = ""; //fill url google app script
(function() {

})();

$("#login-student").click(function(event) {
  $("#app-main").html("");
  var user = $.trim($("#user-student").val()).replace(/ /g,'');
  var pass = $.trim($("#user-student").val()).replace(/ /g,'');
  var url ="https://script.google.com/macros/s/AKfycbzYPTjObWfAe0sBQrCCjPN1FjYxdJ1Vp178WIN5rrnUeRlzw4ft/exec?clientUSER="+user+"&clientPASS="+pass+"&action=overview";

     var strText = "";
     $.getJSON(url, function( data ) {
 		         $.each(data, function( key, val ) {
             strText += val[0].["overview"];
         });
         $("#app-main").html(strText);
     });
})
$("#login-lecturers").click(function(event) {
  $("#app-main").html("");

  var user = $.trim($("#user-lecturers").val()).replace(/ /g,'');
  var pass = $.trim($("#user-lecturers").val()).replace(/ /g,'');

  var url ="https://script.google.com/macros/s/AKfycbzYPTjObWfAe0sBQrCCjPN1FjYxdJ1Vp178WIN5rrnUeRlzw4ft/exec?clientUSER="+user+"&clientPASS="+pass+"&action=overview";

     var strText = "";
     $.getJSON(url, function( data ) {
 		         $.each(data, function( key, val ) {
             strText += val[0].["overview"];
         });
         $("#app-main").html(strText);
     });
})
