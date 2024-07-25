app.controller('authorController', function ($scope, authorService) {
 // $scope.authors = [];

  $scope.saveAuthor = function(author){
    //Salvar no local host atravez de um service
    authorService.saveAuthorOnLocalStorage(author);
   // $scope.authors.push(author);
    console.log($scope.authors);
  }

})