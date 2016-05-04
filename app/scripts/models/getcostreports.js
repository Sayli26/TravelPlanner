'use strict';
define(['app','angular-resource'], function (app) {
	app.factory("CostReports", function($resource,$location) {
		return function(lang){
			return $resource('http://localhost:9088/investmentcosts', {}, {
				'get' : {
					method : 'GET',
					headers : {'Accept-Language':lang}
				},
				'query' : {
					method : 'GET',			
					isArray : false,
					headers : {'Accept-Language':lang}
				}
			});
		};
	});
});