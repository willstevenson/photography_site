var app = angular.module('photographyApp', ['ngRoute', 'app.controllers', 'app.services', 'app.directives']);

var controllers = angular.module('app.controllers', []),
		services = angular.module('app.services', []),
		directives = angular.module('app.directives', []);

app.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'partials/home.html',
			controller: 'HomeCtrl',
			pageTitle: 'Home'
		})
		.when('/about', {
			templateUrl: 'partials/about.html',
			controller: 'HomeCtrl',
			pageTitle: 'About'
		})
		.when('/contact', {
			templateUrl: 'partials/contact.html',
			controller: 'HomeCtrl',
			pageTitle: 'Contact'
		})
		.when('/projects', {
			templateUrl: 'partials/projects.html',
			controller: 'HomeCtrl',
			pageTitle: 'Projects'
		})
		.when('/projects/:projectName', {
			templateUrl: 'partials/project.html',
			controller: 'HomeCtrl',
			pageTitle: 'Project'
		});

}]);