module.exports = function(config){
  config.set({

    basePath : './',

    files : [
      'liwid_generic/lib/angular/1.5.3/angular.js',
      'liwid_generic/lib/angular/1.5.3/angular-route.js',
      'liwid_generic/lib/angular/1.5.3/angular-mocks.js',
      'app/modules/**/*.js',
      'app/scripts*/**/*.js'
    ],

    autoWatch : true,

    frameworks: ['jasmine'],

    browsers : ['Chrome'],

    plugins : [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

  });
};
