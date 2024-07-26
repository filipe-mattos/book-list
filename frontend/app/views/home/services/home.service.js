app.factory('homeService', [ 'bookService',
  function(bookService) {
  const getBooks = function() {
    return bookService.listBooks();
  }

  return {
    getBooks: getBooks,
  }
}])