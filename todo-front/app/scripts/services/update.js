'use strict';

angular.module('todoFrontApp').factory('editTodo', function($http) {
  return {
    update: function(id, title) {
      return $http.put('/v1/todos/' + id, {title: title});
    }
  };
});
