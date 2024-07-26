app.controller('homeController', function ($scope, homeService) {
  $scope.books = homeService.getBooks();
  console.log($scope.books);
})