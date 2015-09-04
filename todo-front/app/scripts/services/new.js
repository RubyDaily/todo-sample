'use strict';

angular.module('todoFrontApp').factory('newTodo', function($http) {
  return {
    create: function(title) {
      return $http.post('/v1/todos', {title: title});
    }
  };
});
