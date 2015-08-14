/**
 * Created by Joshua on 8/13/2015.
 */


angular.module('app.quizservice', [])
    .service('quizService', function QuizService() {
        var quizService = this;

        //not final implementation by any means

        quizService.currentQuiz = {
            title: "Mock Quiz",
            questions:[
                {question:'What color is the most presedential toupee?',
                 options: [
                     {option: "Red", correct: false},
                     {option: "Blonde", correct: true},
                     {option: 'Brown', correct: false}

                     ]},
                {question:'What color is the sky?',
                 options: [
                     {option: 'Red', correct: false},
                     {option: 'Blue', correct: true},
                     {option: 'Brown', correct:false}
                 ]}
            ]};

        quizService.setCurrentQuiz = function(quiz){
            quizService.currentQuiz = quiz;
            console.log("Quiz set");
        };

        quizService.getCurrentQuiz = function(){
            console.log("Quiz get");
            console.log(quizService.currentQuiz);
            return quizService.currentQuiz;

        }


    });