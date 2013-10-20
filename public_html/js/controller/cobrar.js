'use strict';
function CobrarCtrl($scope, $rootScope, $http, $location) {

    $rootScope.menu = "cobrar";
    
    $scope.estado = 'llenar'
    
    $scope.siguiente = function() {
        $scope.estado = 'confirmar';
    };
    
    $scope.cancelar = function() {
        $scope.estado = 'llenar';
    }

    $scope.llenar = function() {
        if ($scope.estado === 'llenar') {
            return true;
        } else {
            return false;
        }
    };
            
    $scope.confirmar = function() {
        if ($scope.estado === 'confirmar') {
            return true;
        } else {
            return false;
        }
    }
    
    $scope.cobrar = function() {
        // Enviar todo al servidor
    }
}

