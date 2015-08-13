/**
 * Created by josh on 8/13/15.
 */


var QuizzerController = function(){

    var quizCtrl = this;

    this.quiz = [];
};

angular.module('app.quizzer', [])
    .controller('QuizzerController', QuizzerController);