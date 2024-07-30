app.factory('homeService', [ 'bookService', 'authorService',
  function(bookService, authorService) {
  const getBooks = function() {
    return bookService.listBooks();
  }
  const getAuthors = function() {
    return authorService.listAuthors();
  }

  return {
    getBooks: getBooks,
    getAuthors
  }
}])