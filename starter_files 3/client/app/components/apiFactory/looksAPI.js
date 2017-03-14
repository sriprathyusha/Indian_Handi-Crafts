(function() {
  'use strict';

  angular
    .module('app')
    .factory('looksAPI', looksAPI);

  looksAPI.$inject = ['$http', '$stateParams'];

  function looksAPI($http, $stateParams) {
    return ({
      getAllLooks: getAllLooks,
      createScrapeLook: createScrapeLook,
      getUserLooks: getUserLooks,
      findOneLook: findOneLook,
      getUpdateLook: getUpdateLook,
      updateLook: updateLook,
      popLooks: popLooks,
      deleteLook: deleteLook,
      upVoteLook: upVoteLook,
      addView: addView
    });

    function createScrapeLook(look) {
      return $http.post('/api/look/scrapeUpload', look);
    }

    // GET all Looks
    function getAllLooks() {
      return $http.get('/api/look/getAllLooks', {
        cache: true
      });
    }

    function getUserLooks(id) {
      return $http.get('/api/look/getUserLooks/?email=' + id, {
        cache: true
      });
    }

    function findOneLook(look) {
      return $http.get('/api/look/' + look);
    }

    function popLooks(look) {
      return $http.get('/api/look/popLooks/' + look);
    }

    function getUpdateLook(look) {
      return $http.get('api/look/' + look._id);
    }

    function updateLook(look) {
      return $http.put('api/look/' + look._id, look);
    }

    function deleteLook(look) {
      return $http.delete('/api/look/' + look._id);
    }

    function upVoteLook(look) {
      return $http.put('/api/look/upvote/' + look._id);
    }

    function addView(look) {
      return $http.put('/api/look/view/' + look);
    }

  }
})();