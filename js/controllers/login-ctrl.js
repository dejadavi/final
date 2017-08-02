// Add module and controller here.
var app = angular.module("finalMod");

app.controller("loginCtrl", function ($location, $scope,loginService){

 
    $scope.checkLogin=loginService.checkLogin;
    
  


});