/**
 * Created by josh on 8/13/15.
 */

var QuizManagerController = function(quizService){

    var managerCtrl = this;
    managerCtrl.quizService = quizService;

    managerCtrl.mockQuiz = {
        title: "Mock Quiz",
        questions:[
            {question:'What color is the most presedential toupee?',
                options: [
                    {option: "Red", correct: false},
                    {option: "Blonde", correct: true},
                    {option: 'Brown', correct: false}
                ],
                answer: 'Blonde',
                guess: null},
            {question:'What color is the sky?',
                options: [
                    {option: 'Red'},
                    {option: 'Blue'},
                    {option: 'Brown'}
                ],
            answer: 'Blue',
            }
        ]};

    managerCtrl.quizzes = [ managerCtrl.mockQuiz , {title: "Mock Quiz 2 (no Q's)"}, {title: "Mock Quiz 3 (no Q's)"}];

};

angular.module('app.quizmanager', ['app.quizservice'])
    .controller('QuizManagerController', QuizManagerController)

