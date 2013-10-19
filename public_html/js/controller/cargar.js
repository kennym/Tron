/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
'use strict';
function CargarCtrl($scope, $http, $location) {
    $scope.showTigo = false;
    $scope.showPersonal = false;
    $scope.showAquipago = false;
    
    $scope.toggle = function(option) {
        switch(option) {
            case "tigo":
                $scope.showTigo = true;
                $scope.showPersonal = false;
                $scope.showAquipago = false;
                break;
            case "personal":
                $scope.showTigo = false;
                $scope.showPersonal = true;
                $scope.showAquipago = false;
                break;
            case "aquipago":    
                $scope.showTigo = false;
                $scope.showPersonal = false;
                $scope.showAquipago = true;
                break;
        }
    }
}

