const routes = ($routeProvider, $httpProvider) => {

    $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'mainController',
            controllerAs: 'vm'
        })
        .when('/contact', {
            templateUrl: 'views/contact.html',
            controller: 'contactController',
            controllerAs: 'vm'
        })
        .otherwise({
            redirectTo: '/'
        })

}
