'use strict';

define([ 'angularAMD', 'route', 'jquery', 'jquery-ui', 'angular-route', 'angular-resource', 'gettext',
		'angular-locale_nl', 'translations', 'directives','bootstrap', 'ui-bootstrap-tpls','liwid-modules','liwid-filters','spin', 'angular-spinner'],
		function (angularAMD, route) {

		var app = angular.module("hkbApp", [ 'ngRoute', 'ngResource', 'gettext', 'hkbDirectives', 'ui.bootstrap', 'LiWidFilters','angularSpinner']);

			// config for route.js
		app.config(route);

		
		app.filter('formatdate', function () {
			return function (input, lang) {
				if (input !== null && lang === 'en') {
					if (input.indexOf("mrt") > -1) {
						input = input.replace("mrt", "mar");
					}
					if (input.indexOf("mei") > -1) {
						input = input.replace("mei", "may");
					}
					if (input.indexOf("okt") > -1) {
						input = input.replace("okt", "oct");
					}
				}
				return input;
			};
		});

		app.factory('hkbCache', function($cacheFactory) {
			return $cacheFactory('cacheData');
		});

		app.run(function (gettextCatalog, $rootScope) {
			gettextCatalog.currentLanguage = 'nl';
			$rootScope.currentLanguage = 'nl';
			gettextCatalog.currentLanguage = $rootScope.currentLanguage;
			gettextCatalog.debug = true;
		});
 		
 		app.controller('langCtrllr', ['$scope','$rootScope', 'gettextCatalog', function ($scope,$rootScope, gettextCatalog) {

	        $scope.changetoNL = function() {
	            gettextCatalog.currentLanguage = 'nl';
	            $rootScope.currentLanguage = 'nl';
	            return false;
	        };
	        
	        $scope.changetoEN = function() {
	            gettextCatalog.currentLanguage = 'en';
	            $rootScope.currentLanguage = 'en';
	            return false;
	        };

	    }]);
	
		return angularAMD.bootstrap(app);
	});