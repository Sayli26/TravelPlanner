'use strict';
define( [ 'angularAMD' ], function (angularAMD) {
	function config ($routeProvider) {
		$routeProvider.when("/search", angularAMD.route( {
			templateUrl : 'modules/hkbsearch/views/hkbsearch.html',
			controller : 'hkbsearchCtr',
			controllerUrl : 'modules/hkbsearch/hkbSearchCtrl.js'
		})).when("/reports", angularAMD.route( {
			templateUrl : 'modules/hkbreports/views/hkbreport.html',
			controller : 'hkbreportCtr',
			controllerUrl : 'modules/hkbreports/hkbReportCtrl.js'
		})).when("/details", angularAMD.route( {
			templateUrl : 'modules/hkbdetails/views/hkbdetails.html',
			controller : 'hkbdetailsCtr',
			controllerUrl : 'modules/hkbdetails/hkbDetailsCtrl.js'
		})).otherwise( {
			redirectTo : "/search"
		});
	}

	config.$inject = [ '$routeProvider' ];

	return config;
});

/*define( ['app' 'angularAMD' ], function (app,angularAMD) {

app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/search');
    $stateProvider
        .state('search', {
            url: '/search',
            templateUrl: 'app/modules/hkbsearch/views/hkbsearch.html',
			controller : 'hkbsearchCtr',
			controllerUrl : 'app/modules/hkbsearch/hkbSearchCtrl.js'
        })
        .state('reports', {
            url: '/reports',
            templateUrl: 'app/modules/hkbreports/views/hkbreport.html',
			controller : 'hkbreportCtr',
			controllerUrl : 'app/modules/hkbreports/hkbReportCtrl.js'
        })
        .state('search', {
            url: '/search',
            templateUrl: 'app/modules/hkbsearch/views/hkbsearch.html',
			controller : 'hkbsearchCtr',
			controllerUrl : 'app/modules/hkbsearch/hkbSearchCtrl.js'
        });
        
});*/