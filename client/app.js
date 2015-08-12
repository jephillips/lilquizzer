/**
 * Created by Joshua on 8/11/2015.
 */


var AppCtrl = function (){
    this.name = "AppCtrl"
};


angular.module('app', [
    'ui.router',
    'app.home'
    ])
    .controller('AppCtrl', AppCtrl)

    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "components/home/home.html"
            });

        $urlRouterProvider.otherwise("/home");
    });


