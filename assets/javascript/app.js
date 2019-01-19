$('#search').on('click', function(event) {
    event.preventDefault();
    var recordsToShow = 10;
    var startYear = $('#startYear').val().trim();
    var endYear = $('#endYear').val().trim();
    var apiKey = 'ufgKlTE4GXs3MGJoJsiIbkRXLgwMS3XJ';
    var cors = 'https://cors-anywhere.herokuapp.com/';
    var userSearch = $('#user-input').val().trim();
    var dateRange = '&facet_field=day_of_week&facet=true&begin_date='+startYear+'&end_date='+endYear;
    var queryURL = cors+'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='+userSearch+'&api-key='+apiKey;
    console.log(userSearch);
    $.ajax({
        url: queryURL,
        method:'GET',
    }).then(function(results){
        console.log(queryURL);
        console.log(results)
        for (var i = 0; i < results.recordsToShow; i++) {
            var articleSummary = $('<div>');
            var p = $('<p>');
            $('.top-articles').append(p);
            p.text(results.response.docs[i].snippet);
        }
    })
});
$('clear').on('click', function(event){
    event.preventDefault();
    $('.top-articles').innerhtml('');
});