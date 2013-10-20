/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
function TransferenciasCtrl($scope, $rootScope, $http, $location) {
    $rootScope.menu = "transferencias";

    $scope.estado = 'elegir';
    
    $scope.elegir = function() {
        $scope.estado = 'elegir';
    }

    $scope.cancelar = function() {
        $scope.estado = 'lista';
    };

    $scope.nuevaTrans = function() {
        $scope.estado = 'trans';
    };

    $scope.enviar = function() {
        $scope.estado = 'confirm';
    };
    
    $scope.confirmar = function(){
        $scope.estado = 'lista';
    }

    $scope.lista = function() {
        if ($scope.estado === 'lista') {
            return true;
        } else {
            return false;
        }
    };
    $scope.trans = function() {
        if ($scope.estado === 'trans') {
            return true;
        } else {
            return false;
        }
    };
    $scope.confirm = function() {
        if ($scope.estado === 'confirm') {
            return true;
        } else {
            return false;
        }
    };
    $scope.elegir = function() {
        if ($scope.estado === 'elegir') {
            return true;
        } else {
            return false;
        }
    };
}

