/**
 * Created by josh on 8/13/15.
 */


var QuizzerController = function(quizService, $mdToast, $scope){

    var quizCtrl = this;
    quizCtrl.quizService = quizService;

    quizCtrl.quiz = quizService.getCurrentQuiz();

    quizCtrl.submit = function($event){
        console.log(quizCtrl.quiz);
        var score = 0;
        for(var x= 0; x < quizCtrl.quiz.questions.length; x++){
            if (quizCtrl.quiz.questions[x].guess == (quizCtrl.quiz.questions[x].answer)){
                score++
            }
        }

        quizService.setCurrentScore(score);
        quizService.setQuestionCount(quizCtrl.quiz.questions.length)
    };

    $scope.toastPosition = {
        bottom: false,
        top: true,
        left: false,
        right: true
    };

    $scope.showToast = function(score){
        $mdToast.show($mdToast.showSimple("Hello"))
    }
};

angular.module('app.quizzer', [
    'app.quizservice',
    'ngMaterial'
])
    .controller('QuizzerController', QuizzerController);