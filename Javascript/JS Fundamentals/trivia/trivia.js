$(document).ready(function(){
    $.get(
        "https://opentdb.com/api.php?amount=4&category=9&difficulty=medium",
        function(data1){
            general = data1.results;
        }
    );
    $.get(
        "https://opentdb.com/api.php?amount=4&category=21&difficulty=medium",
        function(data2){
            sports = data2.results;
        }
    );
    $.get(
        "https://opentdb.com/api.php?amount=4&category=29&difficulty=medium",
        function(data3){
            comics = data3.results;
        }
    );




})