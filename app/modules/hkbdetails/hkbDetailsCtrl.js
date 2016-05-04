'use strict';
define(['app','jquery','models/getpositiondetails','liwid-modules','liwid-filters','models/exportpositions','spin','angular-spinner'], function (app) {

    app.controller('hkbdetailsCtr', ['$scope', '$rootScope', 'gettextCatalog', '$location','CostDetails','$timeout','ExportANPositions','hkbCache','usSpinnerService', function ($scope, $rootScope, gettextCatalog, $location,CostDetails,$timeout,ExportANPositions,hkbCache,usSpinnerService) {
        usSpinnerService.stop('spinner-1');
        //initializing to default
        $scope.portfolio = '0';
        $scope.month ='';
        $scope.blockNumber ='';
        $scope.groupNumber ='';
        $scope.year ='';
        $scope.groupNameNL ='';
        $scope.groupNameEN ='';
        $scope.groupTotal ='';
        $scope.fromDate = '';
        $scope.tillDate = '';
        
        $scope.search_clicked = false;
        $scope.nosearchoutput = false;
        $scope.options = [ 10, 20, 30, 50, 75, 100 ];
        $scope.reslt_per_page = 10;
        $scope.present_page = 1;
        $scope.data={};
        var pagechanged = false;
        var session_data = {};

        var cache = hkbCache.get('DetailsData');

        var searchObject = $location.search(); 

        //initializing with values passed from the search screen
        if(null !== searchObject && !angular.isUndefined(searchObject)){
            $scope.portfolio = searchObject.portfolioNumber;
            $scope.month = searchObject.month;
            $scope.blockNumber = searchObject.blockNumber;
            $scope.groupNumber = searchObject.groupNumber;
            $scope.year = searchObject.year;
            $scope.groupNameNL = searchObject.groupNameNL;
            $scope.groupNameEN = searchObject.groupNameEN;
            $scope.groupTotal = searchObject.groupTotal;    
        }

        //initializing with values stored in the details screen itself
        /*if(null !== cache && !angular.isUndefined(cache)){
            $scope.portfolio = cache.portfolioNumber;
            $scope.month = cache.month;
            $scope.blockNumber = cache.blockNumber;
            $scope.groupNumber = cache.groupNumber;
            $scope.year = cache.year;
            $scope.groupNameNL = cache.groupNameNL;
            $scope.groupNameEN = cache.groupNameEN;
            $scope.groupTotal = cache.groupTotal;    
        }
*/
        $scope.gotoReports = function () {
           storeSearchData(); 
           $location.path('/reports');

       };

       $scope.callResourceService = function() {

        usSpinnerService.spin('spinner-1');
        $scope.disablePaging = false;
        CostDetails(gettextCatalog.currentLanguage).get({ 
            view : "DETAIL",
            portfolioNumber : $scope.portfolio,
            month : $scope.month,
            reportBlockNumber : $scope.blockNumber,
            reportGroupNumber : $scope.groupNumber,
            year : $scope.year,
            pageNumber : $scope.present_page,
            pageSize : $scope.reslt_per_page,
            totalCost:0
        }, function(result) {


            if(angular.isDefined(result.investmentCost) && result.investmentCost !== null){
                $('#http-error-id').hide();
                    // $scope.search_clicked = true;

                    $scope.data = result.investmentCost;
                //$scope.data = result;
                console.log($scope.data );
                console.log($scope.data.positions );

                $scope.fromDate = result.dateFrom;
                $scope.tillDate = result.dateTill;
                //var positions = $scope.data.positionList;
                if($scope.data.positions.length < $scope.reslt_per_page){
                    $scope.totalItems = ($scope.present_page) * $scope.reslt_per_page;
                    if($scope.present_page==1 && $scope.data.positions.length<10){
                        $scope.disablePaging = true;
                    }
                }else{
                    $scope.totalItems = ($scope.present_page + 2) * $scope.reslt_per_page;
                }
                usSpinnerService.stop('spinner-1');
            }else {
                if($scope.present_page>1){
                    $scope.present_page = $scope.present_page - 1;
                    $scope.totalItems = ($scope.present_page) * $scope.reslt_per_page;
                    storeSearchData();

                }else if($scope.present_page<=1){
                    $scope.data = null;
                    $scope.nosearchoutputtext = true;
                }
                usSpinnerService.stop('spinner-1');
            }
        },function(response) {
            console.log("error")
            if($scope.present_page>1){
                $scope.present_page = $scope.present_page - 1;
                storeSearchData();
            }
        });
};

function storeSearchData(){
    session_data.portfolio = $scope.portfolio;
    session_data.month = $scope.month;
    session_data.year = $scope.year;
    session_data.blockNumber =  $scope.blockNumber;
    session_data.groupNumber = $scope.groupNumber;
    session_data.groupNameNL = $scope.groupNameNL;
    session_data.groupNameEN = $scope.groupNameEN;
    session_data.groupTotal =  $scope.groupTotal;
    session_data.present_page = $scope.present_page;
    session_data.reslt_per_page = $scope.reslt_per_page;
    hkbCache.put('DetailsData', session_data);
}    

$scope.getExcel = function () {

    window.location.href = 'http://s05ast0025-c08.nl.eu.abnamro.com:14592/investmentcosts/export?view=EXPORT&portfolioNumber='+$scope.portfolio+'&month='+$scope.month+'&reportBlockNumber='+$scope.blockNumber+'&reportGroupNumber='+$scope.groupNumber+'&year='+$scope.year+'&totalCost=0';


           /* ExportANPositions(gettextCatalog.currentLanguage).get({ 
                view : "EXPORT",
                portfolioNumber : $scope.portfolio,
                month : $scope.month,
                reportBlockNumber : $scope.blockNumber,
                reportGroupNumber : $scope.groupNumber,
                year : $scope.year,
                totalCost:0
        }, function(result) {          
        });*/
};

$scope.pageChanged = function(page) {
    if (page == 1 && pagechanged != true) {
        $scope.present_page = page;
        $scope.callResourceService();
        pagechanged = true;
    } else {
        pagechanged = true;
        $scope.callResourceService();
        storeSearchData();
    }
};

$scope.update = function() {
    $scope.present_page = 1;
    $scope.callResourceService();
    storeSearchData();
};

$scope.checkNull = function(val) {
    if(angular.isUndefined(val) || val==null){
        return '';
    }else{
        return val;
    }
};

$scope.callResourceService();
}]);

});