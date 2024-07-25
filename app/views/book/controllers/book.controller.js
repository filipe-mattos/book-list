app.controller('bookController', function ($scope) {
  $scope.books = [];

  //Fazer funcao para carregar esses dados do localStorage
  $scope.authors = [
    {
      name: "Filipe",
      age: 24,
    },
    {
      name: "Julia",
      age: 16,
    }
  ];
  $scope.saveBook = function(book){
    //Salvar no local host atravez de um service
    $scope.books.push(book);
    console.log($scope.books);
  }

})