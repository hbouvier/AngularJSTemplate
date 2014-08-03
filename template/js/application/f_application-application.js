// To have one place where we define both the 'url' use in the javascript pages and the routes (because the
// $routeProvider cannot use the $rootScope, we have to define a global (beuark) variable here.
(function () {
    var ___g_#A_APPLICATION#RoutePrefix___ = '/home';
    angular
        .module('#A_APPLICATION#', ['ngRoute', '#A_APPLICATION#Services', '#A_APPLICATION#Controllers'])
        .run(function ($rootScope) {
            $rootScope.baseAPIurl = '/api/v1';
            $rootScope.baseUIurl = '/';
            $rootScope.urlBasePath = ___g_#A_APPLICATION#RoutePrefix___;
        })
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $routeProvider.
                when(___g_#A_APPLICATION#RoutePrefix___, {controller: '#A_APPLICATION#Ctrl', templateUrl: 'views/#F_APPLICATION#.html'}).
                otherwise({redirectTo: ___g_#A_APPLICATION#RoutePrefix___});
        }])
    ;
})();