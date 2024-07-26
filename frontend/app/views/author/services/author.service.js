app.factory('authorService', ['$http',
  function ($http) {
  const _save = function (author) {
    let config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    //tratar erros das requests dps

    $http.post('http://localhost:3000/author', author, config)
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
    const result = $http.get('http://localhost:3000/author', config)
    result.then( ({data}) => {
      obj.authors = data;
      console.log(data);
    })
    return obj;
  }
  return {
    saveAuthor: _save,
    listAuthors: _list
  }

}])