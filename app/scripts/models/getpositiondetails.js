'use strict';
define(['app','angular-resource'], function (app) {
	app.factory("CostDetails", function($resource,$location) {
		return function(lang){
			return $resource('../newHKB/details.json', {}, {
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