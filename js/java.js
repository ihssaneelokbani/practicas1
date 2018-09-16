$(function () {
 $("body").on("dblclick",function () {
     location="../index1.html"
 });
 $("section").on("mouseover",function () {
     $("h1").text($(this).data("nombre"));
 });
});

