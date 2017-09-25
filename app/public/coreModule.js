/* This module is the core of our app, and all other modules such as controllers and services feed off of this mainModule */

/* This module is injected into the body of our index.html file */

angular.module('coreModule',['flightController','flightServices'])

.config(function(){

	console.log('testing coreModule');

});
