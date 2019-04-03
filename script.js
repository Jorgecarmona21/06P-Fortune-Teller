$("button").click(function(){
    // 1. Extract the text from the inputs
    var name = $(".name").val();
    
    // 2. Use the input text to build the fortune to display.
    var myAnswer = name;
    $(".answer").text(myAnswer);
    
    // 3. Clear the old text from the inputs.
    $(".name").val("");
});

$("button").click(function() {
    var message = $("input").val();
    $(".comments").append("<div class='row'><div class='avatar odie'></div><div class='comment'>" + message + "</div>"); 
});