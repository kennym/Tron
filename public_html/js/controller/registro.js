'use strict';
function RegistroCtrl($scope, $rootScope, $http, $location) {
    $scope.cliente = {};

    $scope.registrar = function() {
        $http.post('/api/cliente', $scope.cliente, {}).success(function(susess) {
            alert('Registro');
        });
    };


}
