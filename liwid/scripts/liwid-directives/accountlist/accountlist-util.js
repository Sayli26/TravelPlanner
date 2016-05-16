'use strict';

/* util */
define(['app','jquery'], function (app) {
	app.factory('accountlistUtilService', [ function() {
		  return {
		  formatCurrency: function(currency) {
			  if(currency == '0.0' || currency == 0.0 || currency == 0 || currency == '' || currency == null) {
					return '0';
				}  else {
					return currency;
				}
		  },
		  formatAccountType: function(externalName) {var extname = '';
			 if(externalName.length <= 21) {
				 extname = $.trim(externalName)+ '   ';
		    } else {
		    	extname = $.trim(externalName).substring(0, 18) + "... ";
		     }
				return extname;
				}
		
		};
	}]);
	
});
angular.module("AABCustomDirectives", []).directive('screenHeader', function (

angular.module("AABCustomFactories", []).directive('accountlistUtilService', [function (	