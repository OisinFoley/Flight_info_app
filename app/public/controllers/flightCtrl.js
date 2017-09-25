console.log("flight controller loaded");

angular.module("flightController", ['flightServices'])

.controller("flightCtrl", function(Flight, $scope){

  $scope.getAircraftInfo = function(){
    Flight.getAircraftInfo().then(function(){

    });
  };

  $scope.getFlightInfo = function(){
    Flight.getFlightInfo().then(function(){

    });
  };

  $scope.getAircraftPositionInfo = function(){
    Flight.getAircraftPositionInfo().then(function(){

    });
  };


});
