/**
 * Created by Joshua on 8/11/2015.
 */

angular.module('app', [
    'ui.router',
    'app.quizmanager',
    'app.quizzer',
    'app.quizzer.score',
    'ngMaterial'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("home", {
                url: "/home",
                abstract:true,
                templateUrl: "components/quizmanager/quizmanager.html"
            })
            .state('home.start', {
                url: '/start',
                templateUrl: "components/quizmanager/views/start.html"
            })
            .state('home.quizlist', {
                url: '/quizlist',
                templateUrl: "components/quizmanager/views/quizlist.html",
                controller: "QuizManagerController as managerCtrl"
            })
            .state('home.quizzer', {
                url: '/quizzer',
                templateUrl: "components/quizzer/quizzer.html",
                controller: "QuizzerController as quizCtrl"
            })
            .state('home.score', {
                url: '/score',
                templateUrl: 'components/quizzer/score/score.html',
                controller: "ScoreController as scoreCtrl"
                });


        $urlRouterProvider.otherwise("/home/start");

    });
