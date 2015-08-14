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

                ]},
            {question:'What color is the sky?',
                options: [
                    {option: 'Red', correct: false},
                    {option: 'Blue', correct: true},
                    {option: 'Brown', correct:false}
                ]}
        ]};

    managerCtrl.quizzes = [{title: "Quiz 1"}, {title: "Quiz 2"}, {title: "Quiz 3"}];

};

angular.module('app.quizmanager', ['app.quizservice'])
    .controller('QuizManagerController', QuizManagerController)

