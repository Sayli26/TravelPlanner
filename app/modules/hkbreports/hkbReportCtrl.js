'use strict';
define(['app', 'jquery','models/getcostreports','models/getpositiondetails','liwid-modules','http-error-handling','liwid-filters','spin','angular-spinner','print'], function (app) {
	
    app.controller('hkbreportCtr', ['$scope', '$rootScope', 'gettextCatalog', '$location','CostReports','$filter','hkbCache','usSpinnerService','InitialAuthCheck', function ($scope, $rootScope, gettextCatalog, $location,CostReports,$filter,hkbCache,usSpinnerService,InitialAuthCheck) {

        InitialAuthCheck('/investmentcosts','LABEL_AUTHORIZATION_ERROR','MESSAGE_AUTH_ERROR_FRONTEND');

        usSpinnerService.stop('spinner-1');

        $scope.monthsList = [{"nameEN" : "Jan", "nameNL" : "Jan", "value" : 1 }, {"nameEN" : "Feb","nameNL" : "Feb", "value" : 2 }, {"nameEN" : "Mar", "nameNL" :"Mrt" ,"value" : 3 }, {"nameEN" : "Apr","nameNL" : "Apr" , "value" : 4 }, {"nameEN" : "May","nameNL" : "Mei" , "value" : 5 }, {"nameEN" : "Jun","nameNL" : "Jun" , "value" : 6 }, {"nameEN" : "Jul", "nameNL" : "Jul" , "value" : 7 }, {"nameEN" : "Aug", "nameNL" : "Aug" ,"value" : 8 }, {"nameEN" : "Sep", "nameNL" : "Sep" ,"value" : 9 }, {"nameEN" : "Oct", "nameNL" : "Okt" ,"value" : 10 }, {"nameEN" : "Nov", "nameNL" : "Nov" ,"value" : 11 }, {"nameEN" : "Dec", "nameNL" : "Dec" ,"value" : 12 }];
        

        $scope.portfolio ='';
        $scope.year ='';
        $scope.monthObj = {};
        $scope.dataReport = {};
        $scope.showCostDataNotFound = false;
        $scope.showTaxDataNotFound = false;

        var searchObject = $location.search();
        if(null !== searchObject && !angular.isUndefined(searchObject)) {//true in case coming from search
           $scope.portfolio = searchObject.portfolioNumber;
           $scope.monthObj = $scope.monthsList[searchObject.month-1];
           $scope.year = searchObject.year;
        }     

        var session_data = {};
        var cache = hkbCache.get('SearchData');
        if(null!==cache && !angular.isUndefined(cache)){// true in case coming back from details
            //initialising with previously selected/searched values
            $scope.portfolio = cache.portfolio;
            $scope.monthObj = $scope.monthsList[cache.month-1];
            $scope.year = cache.year;
        }

        $scope.loadData = function () {

            usSpinnerService.spin('spinner-1');
            CostReports($rootScope.currentLanguage).get({
                view : "OVERVIEW",
                portfolioNumber : $scope.portfolio,
                month : $scope.monthObj.value,
                year : $scope.year    
            }, function(result) {
                $scope.dataReport = result;
                usSpinnerService.stop('spinner-1');
            },function(error){
                usSpinnerService.stop('spinner-1');
            });        
        };

        if(angular.isDefined($scope.portfolio) && angular.isDefined($scope.monthObj) && angular.isDefined($scope.year)){
            $scope.loadData();
        }

        $scope.getDetails = function (blockIndex,groupIndex) {
            usSpinnerService.spin('spinner-1');
            var selectedBlock = $scope.dataReport.reportBlocks[blockIndex] ;
            var selectedGroup = selectedBlock.reportGroups[groupIndex];
            var blockNumber = selectedBlock.reportBlockNumber;
            var groupNumber = selectedGroup.reportGroupNumber;
            var groupNameNL = selectedGroup.reportGroupNameNL;
            var groupNameEN = selectedGroup.reportGroupNameEN;
            var selectedGroupValue = selectedGroup.reportGroupValue;

            storeSearchData();
            $location.path('/details').search({
                view : "DETAILS",
                portfolioNumber : $scope.portfolio,
                month : $scope.monthObj.value,
                blockNumber : blockNumber,
                groupNumber : groupNumber,
                year : $scope.year,
                groupNameNL : groupNameNL,
                groupNameEN : groupNameEN,
                groupTotal : selectedGroupValue
            });              
        };

        $scope.gotoSearch=function(){
            storeSearchData();
            $location.path('/search');
        }

        //setting search parameter in cache
        function storeSearchData() {
            if(angular.isDefined($scope.portfolio) && angular.isDefined($scope.monthObj) && angular.isDefined($scope.year)){
                session_data.portfolio = $scope.portfolio;
                session_data.month = $scope.monthObj.value;
                session_data.year = $scope.year;
                hkbCache.put('SearchData', session_data);
            }
        };

    }]);

});