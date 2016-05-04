'use strict';
require
		.config({
        baseUrl : './scripts',

			// alias libraries paths. Must set 'angular'
        paths : {
            'jquery'  : '../../liwid_generic/lib/jquery/1.12.3/jquery',
			'jquery-ui'  : '../../liwid_generic/lib/jquery/ui/1.10.2/jquery-ui',
			'angular' : '../../liwid_generic/lib/angular/1.5.3/angular',
			'angularAMD' : '../../liwid_generic/lib/angular/AMD/angularAMD.min',
			'ui-router' : '../../liwid_generic/lib/angular/ui-router/angular-ui-router-0.2.18.min',
			'angular-route' : '../../liwid_generic/lib/angular/1.5.3/angular-route.min',
			'angular-resource':	'../../liwid_generic/lib/angular/1.5.3/angular-resource.min',
			'angular-locale_nl': '../../liwid_generic/lib/angular/1.5.3/i18n/angular-locale_nl-nl',
			'gettext': '../../liwid_generic/lib/angular/gettext/angular-gettext.min',
			'bootstrap' : '../../liwid_generic/lib/angular/ui-bootstrap/1.3.2/bootstrap.min',
			'ui-bootstrap-tpls' : '../../liwid_generic/lib/angular/ui-bootstrap/1.3.2/ui-bootstrap-tpls-0.11.0',
			'liwid-modules' : '../../liwid_generic/scripts/liwid-modules',
			'screen-header' : '../../liwid_generic/scripts/liwid-directives/screen-header/directive',
			'liwid-filters' : '../../liwid_generic/scripts/liwid-filters/filters',
			'spin' : '../../liwid_generic/lib/angular/spinner/spin.min',
		    'angular-spinner': '../../liwid_generic/lib/angular/spinner/angular-spinner.min'
					
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
            'screen-header' : { deps : ['angular', 'liwid-modules'] },
            'liwid-filters' : { deps : ['angular', 'liwid-modules'] },
			'spin' : { deps : ['jquery'] },
            'angular-spinner': { deps : ['angular', 'angularAMD', 'spin'] }
        },
		
        priority: [
			'angular'
        ],

			// kick start application
        deps : [ 'angular', 'app' ]
		
    });