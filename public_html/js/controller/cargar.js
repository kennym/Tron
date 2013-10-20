/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
function CargarCtrl($scope, $rootScope, $http, $location) {
    $rootScope.menu = "carga";
    $scope.showTigo = false;
    $scope.showPersonal = false;
    $scope.showAquipago = false;
    $scope.showBancard = false;

    $scope.toggle = function(option) {
        switch (option) {
            case "tigo":
                $scope.showTigo = true;
                $scope.showPersonal = false;
                $scope.showAquipago = false;
                $scope.showBancard = false;

                break;
            case "personal":
                $scope.showTigo = false;
                $scope.showPersonal = true;
                $scope.showAquipago = false;
                $scope.showBancard = false;

                break;
            case "aquipago":
                $scope.showTigo = false;
                $scope.showPersonal = false;
                $scope.showAquipago = true;
                $scope.showBancard = false;
                
                break;
            case "bancard":
                $scope.showTigo = false;
                $scope.showPersonal = false;
                $scope.showAquipago = false;
                $scope.showBancard = true;
        }
    }
}

