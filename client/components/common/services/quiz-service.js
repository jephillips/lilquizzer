/**
 * Created by Joshua on 8/13/2015.
 */


angular.module('app.quizservice', [])
    .service('quizService', function QuizService($http) {
        var quizService = this,
            URLS = {
              FETCH: 'quizzes.json'
            };

        quizService.currentQuiz = {};

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
        };


        quizService.getQuizList = function(){
            return $http.get(URLS.FETCH).then(cacheResults);
        };

        function extractData(result){
            return result.data;
        }

        function cacheResults(result){
            return extractData(result);
        }

    });