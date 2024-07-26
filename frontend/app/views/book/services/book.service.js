app.factory('bookService', ['$http',
  function ($http) {
    const _save = function (book) {
      let config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }

      //tratar erros das requests dps

      $http.post('http://localhost:3000/book', book, config)
        .then( (response) => {
          console.log('Sucesso');
        }).catch( (err) => {
        console.log(err);
      });

    }

    const _list = function () {
      let config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      let obj = {};
      const result = $http.get('http://localhost:3000/book', config)
      result.then( ({data}) => {
        obj.books = data;
        console.log(data);
      })
      return obj;
    }
    return {
      saveBook: _save,
      listBooks: _list
    }
}])