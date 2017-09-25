console.log("flight services loaded");

angular.module('flightServices',[])
.factory('Flight', function($http){

	console.log("this is a log from FLIGHT SERVICES");

	var flightFactory = {};


	flightFactory.getAircraftInfo = function(data){
		return $http.get('/api/flights/register', data);
	}

  flightFactory.getFlightInfo = function(data){
		return $http.get('/api/flights/register', data);
	}

  flightFactory.getAircraftPositionInfo = function(data){
		return $http.get('/api/flights/register', data);
	}

	return flightFactory;

})
