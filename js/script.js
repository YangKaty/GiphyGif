/*global getGiphyGifs*/

$(document).ready(function(){
    $("#submit").click(function(){
        var Gunit = $("#query").val();
        console.log(Gunit);
        getGiphyGifs(Gunit, function(data){
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                var url = data[i].images.original.url;
                var id = data[i].id;
                console.log(url);
           // $("#results").append("<li id= '" + id +"'>" + track + "</li>");
            $("#search-results").append("<img src= '"+ url +"'>" )
                $("#submit")
            }
        });
    });
    
});