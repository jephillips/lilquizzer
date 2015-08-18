/**
 * Created by josh on 8/17/15.
 */

var ScoreController = function(quizService){
    var scoreCtrl = this;

    scoreCtrl.currentScore = quizService.getCurrentScore();
    scoreCtrl.questionCount = quizService.getQuestionCount();
};

angular.module('app.quizzer.score', ['app.quizservice'])
    .controller("ScoreController", ScoreController);