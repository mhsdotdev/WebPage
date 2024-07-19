$(document).ready(function() {
    var books = [];

    // Fetch book data from books.json
    $.ajax({
        url: 'books.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            books = data;
            // Do not display books here; only save data
        },
    });

    // Search functionality
    $("#viewAll").on("click", function() {
        displayResults(books);
    });


    function displayResults(results) {
        var resultsContainer = $(".gallery");
        resultsContainer.empty();

        if (results.length > 0) {
            var resultsHtml = "<div class=book><br>";
            results.forEach(function(book) {
                resultsHtml += "<img src=" + book.image + "><br>";
                resultsHtml += "<p><h4>" + book.title + "</h><p><br>";
                resultsHtml += "<p>" + book.author + "</p><br>";
            });
            resultsHtml+="</div><br>";
            resultsContainer.html(resultsHtml);
            console.log(resultsHtml);
        } else {
            resultsContainer.html("<p>No results found.</p>");
        }
    }
});
