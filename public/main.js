
//  Requirejs configuration
require.config({
  paths: {
    // Major libraries
    jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery',
    underscore: 'js/libs/underscore/underscore-min', // https://github.com/amdjs
    backbone: 'js/libs/backbone/backbone-min', // https://github.com/amdjs

    // Require.js plugins
    text: 'js/libs/require/text',
    order: 'js/libs/require/order',

    app_helper: 'js/app_helper',
  }
  //urlArgs: "bust=" +  (new Date()).getTime()
});

require(['app_helper'], function(app_helper) {
});

$(document).ready(function() {

  console.log('good!');

});