var app = angular.module('TodoApp', []);

app.controller('TodoCtrl', TodoCtrl);

function TodoCtrl($scope) {
  $scope.todos = [];
  $scope.todo = {};
  $scope.name = 'Laura';
  $scope.today = new Date();
  $scope.onSubmit = function(todo) {
    $scope.todos.push(angular.copy(todo));
    todo.title = '';
  };
}