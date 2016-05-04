'use strict';
define(['app', 'jquery', 'angular'], function (app, $, angular) {
    function daysInMonth(m, y) { // m is 0 indexed: 0-11
        switch (m) {
        case 1:
            return (y % 4 === 0 && y % 100) || y % 400 === 0 ? 29 : 28;
        case 8:
        case 3:
        case 5:
        case 10:
            return 30;
        default:
            return 31;
        }
    }
    app.factory('ErrorService', ['gettextCatalog', function (gettextCatalog) {
        return {
            showError: function (error) {
                $('#http-error-id').empty();
                var text = gettextCatalog.getString(error);
                $('#http-error-id').addClass("xx-http-error-message").html("<div class='mcf-notification-container' style='position:relative;'><div class='mcf-notification-icon mcf-notification-icon-warning' style='margin:-6px;position:absolute;'></div>" + "<div class='mcf-notification-message-container'><p style='margin-left:35px;'>" + text + "</p></div></div>");
                $('#http-error-id').show();
                $('#dbody').removeClass("transparent");
            },
            showErrors: function (errors) {
                $('#http-error-id').empty();
                $('#http-error-id').addClass("xx-http-error-message");
                angular.forEach(errors, function (er) {
                    var text = gettextCatalog.getString(er);
                    $('#http-error-id').append("<div class='mcf-notification-container' style='position:relative;'><div class='mcf-notification-icon mcf-notification-icon-warning' style='margin:-6px;position:absolute;'></div>" + "<div class='mcf-notification-message-container'><p style='margin-left:35px;'>" + text + "</p></div></div>");
                });
                $('#http-error-id').show();
                $('#dbody').removeClass("transparent");
            },
            showWarning: function (warnMsg) {
                $('#http-error-id').empty();
                var text = gettextCatalog.getString(warnMsg);
                $('#http-error-id').addClass("xx-http-error-message").html("<div class='mcf-notification-container' style='position:relative;'><div class='mcf-notification-icon mcf-notification-icon-warning' style='margin:-6px;position:absolute;'></div>" + "<div class='mcf-notification-message-container'><p style='margin-left:35px;'>" + text + "</p></div></div>");
                $('#http-error-id').show();
                $('#dbody').removeClass("transparent");
                return true;
            },
            isValid : function (d, m, y) {
                return m >= 0 && m < 12 && d > 0 && d <= daysInMonth(m, y);
            }
        };
    }]);
});