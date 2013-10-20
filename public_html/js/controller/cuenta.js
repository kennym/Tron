/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
function CuentaCtrl($scope, $rootScope, $http, $location, $filter) {
    $rootScope.menu = "cuenta";
    if ($rootScope.transferencias === undefined) {
        $rootScope.transferencias = [
            {num: 1, fecha: '2013-10-20T15:00:00.710Z',
                tipoPago: 'Transferencias',
                estado: 'En Proceso',
                origen: 'Tu cuenta',
                destinatario: 'kmeyer@openpago.co',
                montoEntrada: '0',
                montoSalida: '48000'},
            {num: 2, fecha: '2013-10-19T18:48:00.710Z',
                tipoPago: 'Transferencias',
                estado: 'En Proceso',
                origen: 'Tu cuenta',
                destinatario: 'eratzlaff@openpago.co',
                montoEntrada: '0',
                montoSalida: '58000'},
            {num: 3, fecha: '2013-10-18T10:35:00.710Z',
                tipoPago: 'Transferencias',
                estado: 'Pagado',
                origen: 'Aqui Pago',
                destinatario: 'Tu cuenta',
                montoEntrada: '150000',
                montoSalida: '0'},
            {num: 5, fecha: '2013-10-14T10:35:00.710Z',
                tipoPago: 'Transferencias',
                estado: 'Pagado',
                origen: 'Billetera Personal',
                destinatario: 'Tu cuenta',
                montoEntrada: '100000',
                montoSalida: '0'},
            {num: 4, fecha: '2013-10-17T10:35:00.710Z',
                tipoPago: 'Transferencias',
                estado: 'Pagado',
                origen: 'Tigo Money',
                destinatario: 'Tu cuenta',
                montoEntrada: '50000',
                montoSalida: '0'},
            {num: 6, fecha: '2013-10-13T10:35:00.710Z',
                tipoPago: 'Transferencias',
                estado: 'Pagado',
                origen: 'Cuenta bancaria',
                destinatario: 'Tu cuenta',
                montoEntrada: '250000',
                montoSalida: '0'}
        ];
//        $rootScope.transferencias = $filter('orderBy')($rootScope.transferencias, 'num');
    }

    $rootScope.balance = function() {
        var balance = 0;
        angular.forEach($rootScope.transferencias, function(trans) {
            balance = balance + parseInt(trans.montoEntrada);
            balance = balance - parseInt(trans.montoSalida);

        });
        return balance;
    };
}

