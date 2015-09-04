'use strict';

angular.module('todoFrontApp')
  .controller('MainCtrl', function ($scope, Todos, newTodo, editTodo, deleteTodo) {
    $scope.todos = Todos.query();

    $scope.addTodo = function(todo) {
      newTodo.create(todo).success(function(todo) {
        $scope.todos.push(todo);
      });
    };

    $scope.removeTodo = function(index, todo) {
      deleteTodo.destroy(todo);
      $scope.todos.splice(index, 1);
    };

    $scope.updateTodo = function(index, todo) {
      editTodo.update(todo.id, todo.title).success(function(todo) {
        $scope.todos[index] = todo;
      });
    };
  });
