/**
 * This file defines all the Custom modules that needs to injected into individual application modules
 * so as to utilise the LiWid libraires.
 */

//=============
/**
 * LiWidDirectives - module which binds all the custom directives added in the
 * framework. The dependencies should be added as requied.
 * 
 */

angular.module("LiWidDirectives", [ 'gettext' ]);

/**
 * LiWidServices - module which binds all the custom services - Values,
 * Constants, Factory, Service, Providers. The dependencies should be added as
 * requied.
 * 
 */

angular.module("LiWidServices", []);

/**
 * LiWidFilters - module which binds all the custom filters.The dependencies should be added as
 * requied.
 * 
 */

angular.module("LiWidFilters", []);