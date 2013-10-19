/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


'use strict';
var app = angular.module("Tron", ['ngRoute']);
app.config(function($routeProvider) {
//app.config(function($locationProvider, $routeProvider) {
//    $locationProvider.html5Mode(true);
    $routeProvider.when('/enviar', {templateUrl: 'view/enviar.html',
        controller: 'EnviarCtrl'});
    $routeProvider.when('/transferencias', {templateUrl: 'view/transferencias.html',
        controller: 'TransferenciasCtrl'});
    $routeProvider.when('/', {templateUrl: 'view/cuenta.html',
        controller: 'CuentaCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
});

