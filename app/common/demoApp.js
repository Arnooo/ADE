
// Declare app level module which depends on ade service
var app = angular.module('app', ['ADE', 'ngSanitize']);
var tagapp = angular.module('tagapp', ['ADE', 'ngSanitize','ngTagsInput']);

app.config(function($controllerProvider) {
  // Don't do this unless you *have* to
  $controllerProvider.allowGlobals();
});
