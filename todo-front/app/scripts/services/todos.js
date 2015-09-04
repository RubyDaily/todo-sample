'use strict';

angular.module('todoFrontApp').factory('Todos', function($resource) {
  return $resource('/v1/todos');
});
