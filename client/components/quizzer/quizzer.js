/**
 * Created by josh on 8/13/15.
 */


var QuizzerController = function(quizService){

    var quizCtrl = this;
    quizCtrl.quizService = quizService;

    quizCtrl.quiz = quizService.getCurrentQuiz();

    quizCtrl.submit = function(){
        console.log(quizCtrl.quiz);
        for(var question in quizCtrl.quiz){
            console.log(question.guess);
        }
    }
};

angular.module('app.quizzer', [
    'app.quizservice',
    'ngMaterial'
])
    .controller('QuizzerController', QuizzerController);