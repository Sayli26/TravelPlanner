/**
 * LiWidDirectives module is defined in ./../liwid-modules.js and hence it
 * should be loaded before this file along with its depenedet modules
 * screenHeader - directive requires gettextCatalog which is injected through
 * module 'gettext'
 */
'use strict';
angular.module('LiWidDirectives').directive(
        'screenHeader',
        function ($timeout, gettextCatalog, $rootScope) {
            return {
                restrict : 'E',
                scope : {
                    // models
                    heading : '@',
                    backButtonLabel : '@',
                    // callbacks
                    onBackClick : '&',
                    onHomeClick : '&',
                    onPrintClick : '&',
                    onChangeLanguage : '&'
                },

                templateUrl : '../../generic/lib/liwid-directives/screen-header/templates/screen-header.html',
                replace : true,
                link : function ($scope, element, attrs) {
                    // initializing
                $scope.currentLanguage = $rootScope.currentLanguage;
                $scope.buttonsList = {
                    back : true,
                    home : true,
                    print : true,
                    multiLanguage : true
                };

                gettextCatalog.currentLanguage = $scope.currentLanguage;

                // On Click of NL EN Button
                $scope.changeLanguage = function (lang) {
                    $scope.currentLanguage = lang;
                    gettextCatalog.currentLanguage = lang;
                    $rootScope.currentLanguage = lang;
                    // Using timeout to ensure custom function in the controller
                    // is called after $digest cycle
                    $timeout($scope.onChangeLanguage, 0, false);
                };

                // On Click of Back Button
                $scope.goBackTo = function () {
                    $scope.onBackClick();
                };

                // On Click of Home Button
                $scope.goToHome = function () {
                    $scope.onHomeClick();
                };

                // On Click of Print Button
                $scope.print = function () {
                    $scope.onPrintClick();
                };

                // showing selected buttons
                for ( var property in $scope.buttonsList) {
                    if ($scope.buttonsList.hasOwnProperty(property)) {
                        if (typeof attrs.showButtons !== 'undefined' && attrs.showButtons.toUpperCase().indexOf(property.toUpperCase()) === -1) {
                            $scope.buttonsList[property] = false;
                        }
                    }
                }
            }
            };
        });