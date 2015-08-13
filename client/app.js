/**
 * Created by Joshua on 8/11/2015.
 */

var AppCtrl = function () {
    this.name = "AppCtrl"
};

angular.module('app', [
    'ui.router',
    'app.quizmanager',
    'ngMaterial'])
    .controller('AppCtrl', AppCtrl)
    .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {
        $stateProvider
            .state("home", {
                url: "/home",
                templateUrl: "components/quizmanager/quizmanager.html"
            });
        $urlRouterProvider.otherwise("/home");

        $mdThemingProvider.theme('default')
    });
