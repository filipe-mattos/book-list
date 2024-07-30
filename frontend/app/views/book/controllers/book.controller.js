app.controller('bookController', function ($scope, bookService, authorService) {
  $scope.books = bookService.listBooks();

  //Fazer funcao para carregar esses dados do localStorage
  $scope.authors = authorService.listAuthors();
  console.log($scope.authors);
  $scope.saveBook = function(book){
    bookService.saveBook(book)
  }

})