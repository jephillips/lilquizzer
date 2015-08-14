/**
 * Created by josh on 8/13/15.
 */


var QuizzerController = function(quizService){

    var quizCtrl = this;
    quizCtrl.quizService = quizService;

    quizCtrl.quiz = quizService.getCurrentQuiz();
};

angular.module('app.quizzer', ['app.quizservice'
])
    .controller('QuizzerController', QuizzerController);