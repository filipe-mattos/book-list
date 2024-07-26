app.factory('authorService', [function () {
  const dbConnection = indexedDB.open('ConsultaLivros', 1)

  async function _listAuthors(key) {
    return (await dbConnection).get('authors');
  }
  async function _saveAuthor(val) {
    return (await dbConnection).put('authors', val);
  }


  const _saveAuthorOnLocalStorage = function (author) {



    try {
      const savedAuthor = _saveAuthor(author);
      //const storage = window.localStorage;
      //storage.setItem('author', JSON.stringify(author));
      return true;
    }catch(err) {
      console.log(err);
    }
  }

  return {
    saveAuthorOnLocalStorage: _saveAuthorOnLocalStorage
  }

}])