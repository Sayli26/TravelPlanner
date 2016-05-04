'use strict';
define(['gettext', 'angular-locale_nl'], function () {
    angular.module("gettext").run(['gettextCatalog', '$http', function (gettextCatalog, $http) {
        $http.get('/nl/widgetcontent/medewerkerapplicaties/phoenix/depotv.json').
            success(function (data) {
                gettextCatalog.setStrings('nl', data);
            }).
            error(function () {
                gettextCatalog.setStrings('nl', {

                    "LABEL_REPORT_SCREEN_NAME" : "Periodiek kosten overzicht",
                    "LABEL_NL_EN" :"NL EN",
                    "LABEL_PORTEFEUILLE_NUMMER" : "Portefeuille nummer",
                    "LABEL_MONTH" : "Maand",
                    "LABEL_YEAR" : "Jaar",
                    "LABEL_SEARCH" : "zoeken",
                    "LABEL_VALUE_IN_EUR" : "Bedrag in EUR",
                    "LABEL_NAME_REPORT_BLOCK1" : "Kosten voor de beleggingsdienstverlening",
					"LABEL_NAME_REPORT_BLOCK2" : "Door de bank ingehouden belastingen",
					"LABEL_TOTAL_REPORT_BLOCK1" : "Totaal door ABN AMRO ingehouden kosten deze periode",
					"LABEL_TOTAL_REPORT_BLOCK2" : "Totaal door ABN AMRO ingehouden kosten deze periode",
					"LABEL_DETAIL_SCREEN_NAME" : "HKB COSTING",
					"LABEL_SEARCH_DATE" : "Datum",
					"LABEL_POSITION_DATE" : "Positiedatum",
					"LABEL_LEDGER" : "Ledger",
					"LABEL_LEDGER_DESC" : "Omschrijving",
					"LABEL_FONDSCODE" : "Fondscode",
					"LABEL_FONDS_NAME" : "Fondsnaam",
					"LABEL_LEDGER_VALUE" : "Bedrag",
					"LABEL_PAGE_RANGE" : "Pagina ",
					"LABEL_PAGE_RESULTS" : "Resultaten per pagina",
					"LABEL_PAGE_PREVIOUS" : "Vorige",
					"LABEL_PAGE_NEXT" : "Volgende",
					"LABEL_BACK" : "terug",
					"LABEL_EXPORT" : "Export",
					"LABEL_NORESULTS" : "Dit depotnummer heeft geen gegevens in DEPO-TV.",
					"LABEL_TRANSACTIE_KOSTEN" : "Transactiekosten",
					"LABEL_PORTFOLIO_INVALID":"Porttefeuilli nummer mag alleen een numerieke waarde bevatten(lengte 1-6 cijfers)",
					"MONIKA" : "monika"
					
                });
            });
        $http.get('/en/widgetcontent/medewerkerapplicaties/phoenix/depotv.json').
            success(function (data) {
                gettextCatalog.setStrings('en', data);
            }).
            error(function () {
                gettextCatalog.setStrings('en', {
                    "LABEL_REPORT_SCREEN_NAME" : "Periodic cost overview",
                    "LABEL_NL_EN" :"NL EN",
					"LABEL_PORTEFEUILLE_NUMMER" : "Portfolio number",
					"LABEL_MONTH" : "Month",
                    "LABEL_YEAR" : "Year",
                    "LABEL_SEARCH" : "search",
                    "LABEL_VALUE_IN_EUR" : "Value in EUR",
                    "LABEL_NAME_REPORT_BLOCK1" : "Costs for investment services",
					"LABEL_NAME_REPORT_BLOCK2" : "Taxes charged by the bank",
					"LABEL_TOTAL_REPORT_BLOCK1" : "Total costs charged by ABN AMRO for the period",
					"LABEL_TOTAL_REPORT_BLOCK2" : "Total costs charged by ABN AMRO for the period",
					"LABEL_DETAIL_SCREEN_NAME" : "HKB COSTING",
					"LABEL_SEARCH_DATE" : "Date range",
					"LABEL_POSITION_DATE" : "Positiondate",
					"LABEL_LEDGER" : "Ledger",
					"LABEL_LEDGER_DESC" : "Description",
					"LABEL_FONDSCODE" : "Instrument",
					"LABEL_FONDS_NAME" : "Instrumentname",
					"LABEL_LEDGER_VALUE" : "Value",
					"LABEL_PAGE_RANGE" : "Page ",
					"LABEL_PAGE_RESULTS" : "Results per page",
					"LABEL_PAGE_PREVIOUS" : "Previous",
					"LABEL_PAGE_NEXT" : "Next",
					"LABEL_BACK" : "back",
					"LABEL_EXPORT" : "Export",
					"LABEL_NORESULTS" : "This code does not have data within DEPO-TV.",
					"LABEL_TRANSACTIE_KOSTEN" : "Transaction cost",
					"LABEL_PORTFOLIO_INVALID":"Portfolio number must only be filled with a numeric value (length 1 to 6 digits)",
					"MONIKA" : "monica"
					
					});
            });
    }]);
});