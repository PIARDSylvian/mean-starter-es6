angular.module('app', ['ngRoute'])
        .service('todoService', todoService)
        .controller('mainController', mainController)
        .service('contactService', contactService)
        .controller('contactController', contactController)
        .config(routes)
        ;