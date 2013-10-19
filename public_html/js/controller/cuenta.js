/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
function CuentaCtrl($scope, $rootScope, $http, $location) {
    $rootScope.menu = "cuenta";
    $scope.transferencias = [
        {fecha: new Date(),
            tipoPago: 'Transferencias',
            estado: 'En Proceso',
            destinatario: 'Cuenta bancaria',
            monto: '200.000'},
        {fecha: new Date(),
            tipoPago: 'Transferencias',
            estado: 'En Proceso',
            destinatario: 'Cuenta bancaria',
            monto: '200.000'},
        {fecha: new Date(),
            tipoPago: 'Transferencias',
            estado: 'Pagado',
            destinatario: 'elvis.ratzlaff@gmail.com',
            monto: '200.000'}
    ];
}

