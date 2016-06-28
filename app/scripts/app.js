'use strict';

define([ 'angularAMD', 'route', 'jquery', 'jquery-ui', 'angular-route', 'angular-resource', 'gettext',
	'angular-locale_nl', 'translations', 'directives','bootstrap', 'ui-bootstrap-tpls','liwid-modules','liwid-filters','spin', 'angular-spinner','http-error-handling','print'],
	function (angularAMD, route) {

		var app = angular.module("hkbApp", [ 'ngRoute', 'ngResource', 'gettext', 'hkbDirectives','LiWidServices','ui.bootstrap', 'LiWidFilters','angularSpinner']);

		
			// config for route.js
			app.config(route);

			app.config(['$httpProvider', function($httpProvider) {
				$httpProvider.interceptors.push('liwidHttpErrorResponseInterceptor');
			}]);
			
			app.filter('formatdate', function () {
				return function (input, lang) {
                    if(angular.isUndefined(input)){
                        return input
                    }
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
					gettextCatalog.setCurrentLanguage('nl');
					$rootScope.currentLanguage = 'nl';
					return false;
				};

				$scope.changetoEN = function() {
					gettextCatalog.setCurrentLanguage('en');
					$rootScope.currentLanguage = 'en';
					return false;
				};

			}]);

			return angularAMD.bootstrap(app);
		});