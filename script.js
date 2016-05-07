console.log("Is this working?");
$('#one').slideUp(3000);
$('#two').animate(3000);
$('#three').show();

$("#header").mouseenter(function(){
    $(this).css("background-color", "lightblue");
});

$("#header").mouseleave(function(){
    $(this).css("background-color", "white");
});