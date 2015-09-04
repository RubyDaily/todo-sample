'use strict';

angular.module('todoFrontApp').factory('deleteTodo', function($http) {
  return {
    destroy: function(id) {
      return $http.delete('/v1/todos/' + id);
    }
  };
});
