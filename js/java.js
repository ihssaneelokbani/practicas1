$(function () {
 $("body").on("dblclick",function () {
     location="../index.html"
 });
 $("section").on("mouseover",function () {
     $("h1").text($(this).data("nombre"));
 });
});

