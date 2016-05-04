'use strict';
define(['app', 'jquery','models/getcostreports','models/getpositiondetails','liwid-modules','liwid-filters','spin','angular-spinner'], function (app, $) {
	
    app.controller('hkbreportCtr', ['$scope', '$rootScope', 'gettextCatalog', '$location','CostReports','$filter','hkbCache','usSpinnerService', function ($scope, $rootScope, gettextCatalog, $location,CostReports,$filter,hkbCache,usSpinnerService) {


        $scope.monthsList = [{"nameEN" : "Jan", "nameNL" : "Jan", "value" : 1 }, {"nameEN" : "Feb","nameNL" : "Feb", "value" : 2 }, {"nameEN" : "Mar", "nameNL" :"Mrt" ,"value" : 3 }, {"nameEN" : "Apr","nameNL" : "Apr" , "value" : 4 }, {"nameEN" : "May","nameNL" : "Mei" , "value" : 5 }, {"nameEN" : "Jun","nameNL" : "Jun" , "value" : 6 }, {"nameEN" : "Jul", "nameNL" : "Jul" , "value" : 7 }, {"nameEN" : "Aug", "nameNL" : "Aug" ,"value" : 8 }, {"nameEN" : "Sep", "nameNL" : "Sep" ,"value" : 9 }, {"nameEN" : "Oct", "nameNL" : "Okt" ,"value" : 10 }, {"nameEN" : "Nov", "nameNL" : "Nov" ,"value" : 11 }, {"nameEN" : "Dec", "nameNL" : "Dec" ,"value" : 12 }];
        

        $scope.portfolio ='';
        $scope.year ='';
        $scope.monthObj = {};
        $scope.dataReport = {};


        $scope.getBlockLabel = function (index) {
            return "LABEL_NAME_REPORT_BLOCK" + (index+1);
        }
        
        var searchObject = $location.search(); 
        if(null !== searchObject && !angular.isUndefined(searchObject)){//true in case coming from search
           console.log(" search object mein");
           $scope.portfolio = searchObject.portfolioNumber;
           console.log( searchObject.month-1);
           $scope.monthObj = $scope.monthsList[searchObject.month-1];
           console.log( $scope.monthObj);
           $scope.year = searchObject.year;
       }      

       var session_data = {};
       var cache = hkbCache.get('SearchData');
        if(null!==cache && !angular.isUndefined(cache)){// true in case coming back from details
            console.log("cache mein");
            //initialising with previously selected/searched values
            $scope.portfolio = cache.portfolio;
            $scope.monthObj = $scope.monthsList[cache.month-1];
            $scope.year = cache.year;
        }

        $scope.loadData = function () {
            
            usSpinnerService.spin('spinner-1');
            CostReports(gettextCatalog.currentLanguage).get({
                view : "OVERVIEW",
                portfolioNumber : $scope.portfolio,
                month : $scope.monthObj.value,
                year : $scope.year    
            }, function(result) {
                $scope.dataReport = result.investmentCost;
                usSpinnerService.stop('spinner-1');
            },function(error){
                console.log("data not fetched");
                usSpinnerService.stop('spinner-1');
            });        
        };

        $scope.loadData();

        $scope.getDetails = function (blockIndex,groupIndex) {
            usSpinnerService.spin('spinner-1');
            var selectedBlock = $scope.dataReport.reportBlocks[blockIndex] ;
            var selectedGroup = selectedBlock.reportGroups[groupIndex];
            var blockNumber = selectedBlock.reportBlockNumber;
            var groupNumber = selectedGroup.reportGroupNumber;
            var groupNameNL = selectedGroup.reportGroupNameNL;
            var groupNameEN = selectedGroup.reportGroupNameEN;
            var selectedGroupValue = selectedGroup.reportGroupValue;

            console.log(blockNumber+" "+groupNumber);     
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
            $location.path('/search')
        }


        //setting search arameter in cache
        function storeSearchData() {
            session_data.portfolio = $scope.portfolio;
            session_data.month = $scope.monthObj.value;
            session_data.year = $scope.year;
            hkbCache.put('SearchData', session_data);
        };

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

});