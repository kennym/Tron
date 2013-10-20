'use strict';
function CobrarCtrl($scope, $rootScope, $http, $location, $filter) {

    $rootScope.menu = "cobrar";

    $scope.estado = 'llenar';

    $scope.transferencia = {};

    $scope.siguiente = function() {
        $scope.estado = 'confirmar';
    };

    $scope.cancelar = function() {
        $scope.estado = 'llenar';
        $scope.trasferencia = {};
    };

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
    };

    $scope.cobrar = function() {
        if ($rootScope.transferencias === undefined) {
            $rootScope.transferencias = [];
        }
        $scope.transferencia.num = $rootScope.transferencias.length + 1;
        $scope.transferencia.fecha = new Date();
        $scope.transferencia.tipoPago = 'Transferencias';
        $scope.transferencia.estado = 'En Proceso';
        $scope.transferencia.destinatario = 'Tu cuenta';
        $scope.transferencia.montoSalida = '0';

        $rootScope.transferencias.push($scope.transferencia);
        $location.path("/cuenta");
//        $scope.trasferencia = {};
        // Enviar todo al servidor
    };
}

