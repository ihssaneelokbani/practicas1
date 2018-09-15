$(function () {
    var textponer=$(this).data("nombre");
 $("body").on("dblclick",function () {
     location="../index1.html"
 });
 $("section").on("onmouseover",function () {
     $("header h1").text(textponer);
 });
});

