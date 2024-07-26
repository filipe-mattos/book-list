app.controller('authorController', function ($scope, authorService) {

  // $scope.authors = authorService.listAuthors();

  $scope.saveAuthor = function(author){
    authorService.saveAuthor(author);
    //Colocar msg de success
  }

})