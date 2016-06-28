'use strict';
define(['gettext', 'angular-locale_nl'], function () {
	angular.module("gettext").run(['gettextCatalog', '$http', function (gettextCatalog, $http) {
		$http.get('/nl/widgetcontent/medewerkerapplicaties/hkb/hkb.json').
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
				"LABEL_TOTAL_REPORT_BLOCK2" : "Totaal door ABN AMRO ingehouden belastingen deze periode",
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
				"LABEL_PAGE_PREVIOUS" : "vorige",
				"LABEL_PAGE_NEXT" : "volgende",
				"LABEL_BACK" : "terug",
				"LABEL_PORTFOLIO_INVALID":"Portefeuille nummer mag alleen een numerieke waarde bevatten (lengte 9 of 10 cijfers)",
				"LABEL_AUTHORIZATION_ERROR":"Technische fout in de toegangsbeveiliging. Authenticatie is mislukt. Sluit browser af en probeer het nogmaals. Meld het incident bij de ICT Service Desk als dezelfde fout opnieuw optreedt."
			});
});
$http.get('/en/widgetcontent/medewerkerapplicaties/hkb/hkb.json').
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
		"LABEL_TOTAL_REPORT_BLOCK2" : "Total taxes charged by ABN AMRO for the period",
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
		"LABEL_PAGE_PREVIOUS" : "previous",
		"LABEL_PAGE_NEXT" : "next",
		"LABEL_BACK" : "back",
		"LABEL_PORTFOLIO_INVALID":"Portfolio number must only be filled with a numeric value (length 9 or 10 digits)",
		"LABEL_AUTHORIZATION_ERROR":"Technical error in the access security. Authentication failed. Close your browser and try again. Report the incident to the ICT Service Desk if the same error occurs again."
	});
});
}]);
});