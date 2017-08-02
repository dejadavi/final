// Add module and controller here.
var app = angular.module("finalMod");

app.controller("profileCtrl", function(loginService,$scope){

$scope.userDetails=loginService.getProfile();





});