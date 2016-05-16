/**
 * LiWidFilters module is defined in ./../liwid-modules.js and hence it
 * should be loaded before this file along with its depenedent modules.
 * This filter formats the account/depot/portfolio/tegenrekening number
 */

'use strict';
angular.module('LiWidFilters').filter('formatAccountNr', function () {
			return function (input) {
				if (input !== null) {
					var str1, str2, str3, str4, formatted, temp;
					input = input.toString();
					temp = input.replace(/^0+/, '');
					temp = temp.replace(/^\s+|\s+$/g, '');
					if (temp.length < 8 || temp.length > 10) {
						return input;
					} else {
						if (temp.length === 9) {
							str1 = temp.substring(0, 2);
							str2 = temp.substring(2, 4);
							str3 = temp.substring(4, 6);
							str4 = temp.substring(6, 9);
							formatted = str1 + '.' + str2 + '.' + str3 + '.' + str4;
							return formatted;
						} else if (temp.length === 10) {
							str1 = temp.substring(0, 3);
							str2 = temp.substring(3, 5);
							str3 = temp.substring(5, 7);
							str4 = temp.substring(7, 10);
							formatted = str1 + '.' + str2 + '.' + str3 + '.' + str4;
							return formatted;
						} else if (temp.length === 8) {
							str1 = temp.substring(0, 1);
							str2 = temp.substring(1, 4);
							str3 = temp.substring(4, 7);
							str4 = temp.substring(7, 8);
							formatted = str1 + '.' + str2 + '.' + str3 + '.' + str4;
							return formatted;
						}
					}
				}
			};
		});


angular.module('LiWidFilters').filter('trim', function () {
			return function (value) {
				if (!angular.isString(value)) {
					return value;
				}
				return value.replace(/^\s+|\s+$/g, ''); // you could use
				// .trim, but it's
				// not going to work
				// in IE<9
			};
		});