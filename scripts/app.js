var app = angular.module("createArticle",[]);

app.controller('MainCtrl',function($scope,$compile){
  $scope.name = "World";

  $scope.addField = function(){ 
    var html = '<p>Hi there</p>';

    var topScope = angular.element(document).scope();
    var elem = $compile(html)(topScope);
    angular.element(document.getElementById('example')).append(elem);
  };
});