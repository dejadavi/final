// Add module here.
var app = angular.module("finalMod");
// Routing goes here.

app.config(function($routeProvider){

$routeProvider
    .when("/login",{
        
        templateUrl:"./partials/login.html",
        controller: "loginCtrl"
    })

    .when("/profile",{
        controller:"profileCtrl",
        templateUrl: "./partials/profile.html"
    })

    .otherwise({redirectTo:"/login"})
});