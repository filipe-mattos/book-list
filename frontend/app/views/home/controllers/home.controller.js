app.controller('homeController', function ($scope, homeService) {
  $scope.books = homeService.getBooks();
  $scope.authors = homeService.getAuthors();
  console.log($scope.books);
})