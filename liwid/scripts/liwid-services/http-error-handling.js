  'use strict';
  
  errorHandling.config(function($provide, $httpProvider, $compileProvider) {
      var elementsList = $();

      var showMessage = function(content, cl,key) {
    	  $('#http-error-id').empty();
    	  $('#http-error-id').addClass(cl).appendTo(elementsList).html("<div id='errorImage' style='margin:-6px;position:absolute;' class='mcf-notification-icon mcf-notification-icon-warning'></div>" +"<p style='margin-left:35px !important;margin-top:1px !important'>" + content +"</p>" );
    	  $('#errorImage').attr("title",key);
    	  $('#http-error-id').show();
      }; 

        // push function to the responseInterceptors which will intercept 
        // the http responses of the whole application
        $httpProvider.responseInterceptors.push(function($timeout, $q, $rootScope) {
        	return function(promise) {
            return promise.then(function(response) {
            	return response;
            },
            // if the message returns unsuccessful we display the error 
            function(errorResponse) {
            	$rootScope.restError=true;
            	if(errorResponse.data!=null && angular.isDefined(errorResponse.data.messages) && errorResponse.data.messages[0]!=null &&  $rootScope.isExportVerified!=false){
		            	showMessage(errorResponse.data.messages[0].messageText, 
		                'xx-http-error-message',errorResponse.data.messages[0].messageKey);
		                  if(errorResponse.data.messages.length > 0) {
		                      for(var i=0; i<errorResponse.data.messages.length; i++) {
		                        showMessage(errorResponse.data.messages[i].messageText, 
		                          'xx-http-error-validation-message',errorResponse.data.messages[0].messageKey);
		                      }
		                  }
            	}
              return $q.reject(errorResponse);
            });
          };
        });

        // this will display the message if there was a http return status
        $compileProvider.directive('httpErrorMessages', function() {
          return {
            link: function(scope, element, attrs) {
              elementsList.push($(element));
            }
          };
        });
});
