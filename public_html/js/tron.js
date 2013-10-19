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
    $routeProvider.when('/cobrar', {templateUrl: 'view/cobrar.html',
        controller: 'CobrarCtrl'});
    $routeProvider.when('/cobrar_confirmacion', {templateUrl: 'view/cobrar_confirmacion.html',
        controller: 'CobrarConfirmacionCtrl'});
    $routeProvider.when('/', {templateUrl: 'view/cuenta.html',
        controller: 'CuentaCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
});

