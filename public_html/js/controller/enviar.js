'use strict';
function EnviarCtrl($scope, $rootScope, $http, $location) {
    $rootScope.menu = "enviar";

    $scope.estado = 'elegir';
    $scope.img = '';
    $scope.transferencia = {};

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

    $scope.confirmar = function() {
        $scope.transferencia.num = $rootScope.transferencias.length + 1;
        $scope.transferencia.fecha = new Date();
        $scope.transferencia.tipoPago = 'Transferencias';
        $scope.transferencia.estado = 'Pagado';
        $scope.transferencia.origen = 'Tu cuenta';
        $scope.transferencia.montoEntrada = '0';
//        $rootScope.transferencias.push($scope.transferencia);
        $rootScope.transferencias.splice(0, 0,$scope.transferencia);
//        $rootScope.transferencias = $filter('orderBy')($rootScope.transferencias, 'num');
//        $location.path("/");
        $scope.transferencia = {};
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

