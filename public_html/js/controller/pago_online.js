/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
function PagoOnlineCtrl($scope, $rootScope, $http, $location) {
    $scope.estado = "inicio";
    
    $scope.confirmacion = function() {
        if ($scope.estado === "confirmacion") {
            return true;
        } else {
            return false;
        }
    }
   
    $scope.inicial = function() {
        if ($scope.estado === "inicio") {
            return true;
        } else {
            return false;
        }
    };
    
    $scope.recibo = function() {
        if ($scope.estado === "recibo") {
            return true;
        } else {
            return false;
        }
    };
    
    $scope.login = function() {
        $scope.estado = "confirmacion";
    };
    
    $scope.transferir = function() {
        $scope.estado = "recibo";
    };
}

