'use strict';
define(['app', 'jquery','models/getcostreports','models/getpositiondetails'], function (app, $) {
	
    app.controller('hkbsearchCtr', ['$scope', '$rootScope', 'gettextCatalog', '$location','CostReports','$filter','hkbCache', function ($scope, $rootScope, gettextCatalog, $location,CostReports,$filter,hkbCache) {

        $scope.input = {};

        $scope.input.portfolio ='';
        $scope.monthsList = [{"nameEN" : "Jan", "nameNL" : "Jan", "value" : 1 }, {"nameEN" : "Feb","nameNL" : "Feb", "value" : 2 }, {"nameEN" : "Mar", "nameNL" :"Mrt" ,"value" : 3 }, {"nameEN" : "Apr","nameNL" : "Apr" , "value" : 4 }, {"nameEN" : "May","nameNL" : "Mei" , "value" : 5 }, {"nameEN" : "Jun","nameNL" : "Jun" , "value" : 6 }, {"nameEN" : "Jul", "nameNL" : "Jul" , "value" : 7 }, {"nameEN" : "Aug", "nameNL" : "Aug" ,"value" : 8 }, {"nameEN" : "Sep", "nameNL" : "Sep" ,"value" : 9 }, {"nameEN" : "Oct", "nameNL" : "Okt" ,"value" : 10 }, {"nameEN" : "Nov", "nameNL" : "Nov" ,"value" : 11 }, {"nameEN" : "Dec", "nameNL" : "Dec" ,"value" : 12 }];
        $scope.yearMonthList = getYearMonthList();// list of object in which each year is binded with array of months
        
        $scope.years = getYearList();//array of years        
        $scope.input.year = new Date().getFullYear() - 1;//initializing to default
        $scope.months = $scope.monthsList;   //array of months
        $scope.input.month = $scope.monthsList[11];//initializing to default


        var session_data = {};
        var cache = hkbCache.get('SearchData');
       
        
         if(null!==cache && !angular.isUndefined(cache)){// true in case coming back from reports
            //initialising with previously selected value
            $scope.input.portfolio = cache.portfolio;
            $scope.input.month = $scope.monthsList[cache.month-1];
            $scope.input.year = cache.year;
        }   

        hkbCache.removeAll(); // removing cache if coming from details or report page     

        $scope.search = function () {
            $location.path('/reports').search({
                portfolioNumber : $scope.input.portfolio,
                month : $scope.input.month.value,
                year : $scope.input.year
            });
        };

        $scope.handleKeypress = function (key) {
            if (key === 13) {
                $scope.search();
            }
        };


        var currentMonth = new Date().getMonth() + 1;

        function getYearList(){
            var initial_year;
            var limit_year = 2014;
            var current_date = new Date();
            var current_year = current_date.getFullYear();
            
            if (current_year - 2 <= limit_year) {
                initial_year = limit_year;
            } else {
                initial_year = current_year - 2;
            }
            var yearList=[];
            for (var i = initial_year; i <= current_year; i++) {
                yearList.push(i);
            }
            return yearList;
        }


        function getYearMonthList () {
            var initial_year;
            var limit_year = 2014;
            var current_date = new Date();
            var current_year = current_date.getFullYear();
            var current_month = current_date.getMonth() + 1; // months starts with 0
            
            var yearMonthList = [];

            if (current_year - 2 <= limit_year) {
                initial_year = limit_year;
            } else {
                initial_year = current_year - 2;
            }

            for (var i = initial_year; i <= current_year; i++) {
                var yearMonth = {};
                yearMonth.months = [];

                yearMonth.year = i;
                for (var j = 0; j <= 11; j++) {

                    if (i === current_year && j === current_month-1) {
                        break;
                    }

                    yearMonth.months.push($scope.monthsList[j]); 
                }
                yearMonthList.push(yearMonth);
            }

            return yearMonthList;
        };

        //method to get list of months binded with a year
        $scope.getYearMonths = function(){
            var monthsList = ($filter('filter')($scope.yearMonthList, {year: $scope.input.year}));
            var selectedMonth = $scope.input.month;
            $scope.months =  monthsList[0].months;
            if(null===$scope.months[selectedMonth.value-1] || angular.isUndefined($scope.months[selectedMonth.value-1])){
                $scope.input.month = $scope.months[$scope.months.length-1];
            }
            
        };
        
        
        


    }]);

});