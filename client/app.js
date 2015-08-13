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
            })
            .state('home.start', {
                url: '/start',
                templateUrl: "components/quizmanager/views/start.html"
            })
            .state('home.quizlist', {
                url: '/quizlist',
                templateUrl: "components/quizmanager/views/quizlist.html"
            });

        $urlRouterProvider.otherwise("/home/start");

        $mdThemingProvider.theme('default')
    });
