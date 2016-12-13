$(document).ready(function() {
    $("button").click(function() {
        var blank = $("#giphy").val();
    
  for (i=0 ; i < 5 ; i++) {
  $.getJSON(
     
      "https://api.giphy.com/v1/gifs/search?q=" + blank + "&api_key=dc6zaTOxFJmzC",
     
        
     function(response) {
       //  console.log(x);
        $("#results").append("<img src=" + response.data[0].images.fixed_width_downsampled.url + ">");
      });
     }
    });
});