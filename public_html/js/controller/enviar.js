'use strict';
function EnviarCtrl($scope, $rootScope, $http, $location) {
    $rootScope.menu = "enviar";
    
    $scope.estado = 'elegir';
    $scope.img = '';
    
    $scope.elegir = function() {
        $scope.estado = 'elegir';
    }

    $scope.cancelar = function() {
        $scope.estado = 'elegir';
    };

    $scope.nuevaTrans = function(img) {
        $scope.estado = 'trans';
        $scope.img = img;
    };

    $scope.enviar = function() {
        $scope.estado = 'confirm';
    };
    
    $scope.confirmar = function(){
        $scope.estado = 'elegir';
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

