$(document).ready(function() {
    var books = [];

    // Fetch book data from books.json
    $.ajax({
        url: 'https://localhost:7187/api/books',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            books = data;
            // Do not display books here; only save data
        },
    });

    // Search functionality
    // $("#search-button").on("click", function() {
    //     var searchTerm = $("#search-bar").val().toLowerCase();
    //     var filteredBooks = books.filter(function(book) {
    //         return book.title.toLowerCase().includes(searchTerm) ||
    //                book.author.toLowerCase().includes(searchTerm);
    //     });
    //     displayResults(filteredBooks);
    // });

    // View All functionality
    $("#viewAll").on("click", function() {
        displayResults(books);
    });

    function displayResults(results) {
        var resultsContainer = $(".gallery");
        resultsContainer.empty();

        if (results.length > 0) {
            results.forEach(function(book) {
                var bookHtml = "<div class='book'>";
                bookHtml += "<img src='" + book.image + "'>";
                bookHtml += "<div class =description>";
                bookHtml += "<p><h5>" + book.title + "</h5><p>";
                bookHtml += "<p>" + book.author + "</p>";
                bookHtml += "<p>" + book.desc + "</p>";
                bookHtml += "</div>";
                bookHtml += "</div>";
                resultsContainer.append(bookHtml);
            });
        } else {
            resultsContainer.html("<p>No results found.</p>");
        }
    }
});

$(document).ready(function() {
    $('#search-button').click(function() {
        var author = $('#search-bar').val();
        fetchBooksByAuthor(author);
    });

    function fetchBooksByAuthor(author) {
        $.ajax({
            url: `https://localhost:7187/api/books/author/${author}`,
            method: 'GET',
            success: function(data) {
                displayData(data);
            },
            error: function(err) {
                console.error('Error fetching data:', err);
                $('#data-container').html('<p>No books found for the specified author.</p>');
            }
        });
    }

    function displayResults(results) {
        var resultsContainer = $(".gallery");
        resultsContainer.empty();

        if (results.length > 0) {
            results.forEach(function(book) {
                var bookHtml = "<div class='book'>";
                bookHtml += "<img src='" + book.image + "'>";
                bookHtml += "<div class =description>";
                bookHtml += "<p><h5>" + book.title + "</h5><p>";
                bookHtml += "<p>" + book.author + "</p>";
                bookHtml += "<p>" + book.desc + "</p>";
                bookHtml += "</div>";
                bookHtml += "</div>";
                resultsContainer.append(bookHtml);
            });
        } else {
            resultsContainer.html("<p>No results found.</p>");
        }
    }
});
