'use strict';

app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: "./views/home/home.html",
    controller: "homeController"
  });
  $routeProvider.when('/book', {
    templateUrl: "./views/book/book-form.html",
    controller: "bookController"
  });
  $routeProvider.when('/author', {
    templateUrl: "./views/author/author-form.html",
    controller: "authorController"
  })
}])