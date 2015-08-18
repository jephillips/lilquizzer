/**
 * Created by Joshua on 8/13/2015.
 */


angular.module('app.quizservice', [])
    .service('quizService', function QuizService() {
        var quizService = this;

        //not final implementation by any means

        quizService.currentQuiz = {}

        quizService.setCurrentQuiz = function(quiz){
            quizService.currentQuiz = quiz;
            console.log("Quiz set");
        };

        quizService.getCurrentQuiz = function(){
            console.log("Quiz get");
            console.log(quizService.currentQuiz);
            return quizService.currentQuiz;

        };

        quizService.setCurrentScore = function(score) {
            quizService.currentScore = score;
        };

        quizService.setQuestionCount = function(qCount) {
            quizService.questionCount = qCount;
        };

        quizService.getQuestionCount = function(){
            return quizService.questionCount;
        };

        quizService.getCurrentScore = function(){
            return quizService.currentScore;
        }


    });