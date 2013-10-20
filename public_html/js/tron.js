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
    $routeProvider.when('/cargar', {templateUrl: 'view/cargar.html',
        controller: 'CargarCtrl'});
    $routeProvider.when('/transferencias', {templateUrl: 'view/transferencias.html',
        controller: 'TransferenciasCtrl'});
    $routeProvider.when('/cobrar', {templateUrl: 'view/cobrar.html',
        controller: 'CobrarCtrl'});
    $routeProvider.when('/enviar', {templateUrl: 'view/enviar.html',
        controller: 'EnviarCtrl'});
    $routeProvider.when('/registro', {templateUrl: 'view/registro.html',
        controller: 'RegistroCtrl'});
    $routeProvider.when('/login', {templateUrl: 'view/login.html',
        controller: 'LoginCtrl'});
    $routeProvider.when('/perfil', {templateUrl: 'view/perfil.html',
        controller: 'PerfilCtrl'});
    $routeProvider.when('/pago_online', {templateUrl: 'view/pago_online.html',
        controller: 'PerfilCtrl'});
    $routeProvider.when('/', {templateUrl: 'view/cuenta.html',
        controller: 'CuentaCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
});

