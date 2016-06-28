'use strict';
require
.config({
	baseUrl : './scripts',

			// alias libraries paths. Must set 'angular'
			paths : {
				'jquery'  : '../../liwid/lib/jquery/1.12.3/jquery',
				'jquery-ui'  : '../../liwid/lib/jquery/ui/1.10.2/jquery-ui',
				'angular' : '../../liwid/lib/angular/1.5.3/angular',
				'angularAMD' : '../../liwid/lib/angular/AMD/angularAMD.min',
				'ui-router' : '../../liwid/lib/angular/ui-router/angular-ui-router-0.2.18.min',
				'angular-route' : '../../liwid/lib/angular/1.5.3/angular-route.min',
				'angular-resource':	'../../liwid/lib/angular/1.5.3/angular-resource.min',
				'angular-locale_nl': '../../liwid/lib/angular/1.5.3/i18n/angular-locale_nl-nl',
				'gettext': '../../liwid/lib/angular/gettext/angular-gettext',
				'bootstrap' : '../../liwid/lib/angular/ui-bootstrap/1.3.2/bootstrap.min',
				'ui-bootstrap-tpls' : '../../liwid/lib/angular/ui-bootstrap/1.3.2/ui-bootstrap-tpls-0.11.0',
				'liwid-modules' : '../../liwid/scripts/liwid-modules',
				'liwid-filters' : '../../liwid/scripts/liwid-filters/filters',
				'spin' : '../../liwid/lib/angular/spinner/spin.min',
				'angular-spinner': '../../liwid/lib/angular/spinner/angular-spinner.min',
				'http-error-handling' : '../../liwid/scripts/liwid-services/http-error-handling'				
			},

			// Add angular modules that does not support AMD out of the box, put
			// it in a shim
			shim : {
				'jquery': { 'deps' : [],  init: function () { return $; } },
				'angular' : { 'exports' : 'angular', 'deps': ['jquery']},
				'jquery-ui': {'export' : "$", 'deps' : ['jquery']},
				'angularAMD' :  { deps : ['angular'] },
				'ui-router' :  { deps : ['angular'] },
				'angular-route' :  { deps : ['angular'] },
				'angular-resource' :  { deps : ['angular'] },
				'angular-locale_nl' : { deps : ['angular'] },
				'ui-bootstrap-tpls' :  { deps : ['angular'] },
				'bootstrap' : { deps : ['angular'] },
				'gettext' : { deps : ['angular'] },
				'liwid-modules' : { deps : ['angular', 'gettext'] },
				'liwid-filters' : { deps : ['angular', 'liwid-modules'] },
				'spin' : { deps : ['jquery'] },
				'angular-spinner': { deps : ['angular', 'angularAMD', 'spin'] },
				'http-error-handling' : { deps : ['angular', 'liwid-modules'] },
				'print' : { deps : ['angular', 'liwid-modules'] }
				
			},
			
			priority: [
			'angular'
			],

			// kick start application
			deps : [ 'angular', 'app' ]
			
		});