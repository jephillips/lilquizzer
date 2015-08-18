/**
 * Created by josh on 8/13/15.
 */

var QuizManagerController = function (quizService) {

    var managerCtrl = this;
    managerCtrl.quizService = quizService;

    managerCtrl.newsQuiz = {
        title: "News Quiz",
        questions: [
            {
                question: 'What color is the most presedential toupee?',
                options: [
                    {option: "Red", correct: false},
                    {option: "Blonde", correct: true},
                    {option: 'Brown', correct: false}
                ],
                answer: 'Blonde'
            },
            {
                question: 'What recently lost a major IP case against Oracle?',
                options: [
                    {option: 'Google'},
                    {option: 'Jeff Bridges'},
                    {option: 'Intel'}
                ],
                answer: 'Google'
            },
            {
                question: 'Who is the current PM of Norway?',
                options: [
                    {option: 'Urna Dulberg'},
                    {option: 'Orda Halbad'},
                    {option: 'Erna Solberg'}
                ],
                answer: 'Erna Solberg'
            }
        ]
    };

    managerCtrl.computerQuiz = {
        title: "CompSci Quiz",
        questions: [
            {
                question: 'What is SSL?',
                options: [
                    {option: "Secure Socket Layer"},
                    {option: "Saucy Swedish Ladies"},
                    {option: 'Safe Security Language '}
                ],
                answer: 'Secure Socket Layer'
            },
            {
                question: 'Which element is used in the manufacture of micro chips?',
                options: [
                    {option: 'Propane'},
                    {option: 'Graphite'},
                    {option: 'Silicon'}
                ],
                answer: 'Silicon'
            },
            {
                question: "An internet address of 192.168.1.2 would indicate what about it's location?",
                options: [
                    {option: 'Local Network'},
                    {option: 'It is in Sweden'},
                    {option: 'Server 192 Port 168'}
                ],
                answer: 'Local Network'
            }
        ]
    };

    managerCtrl.foodQuiz = {
        title: "Food Quiz",
        questions: [
            {
                question: 'The Barossa Valley is a wine making area in which country??',
                options: [
                    {option: "Australia"},
                    {option: "Iran"},
                    {option: 'France '}
                ],
                answer: 'Australia'
            },
            {
                question: 'What is the most popular non-alcoholic beverage drunk in the world?',
                options: [
                    {option: 'Milk'},
                    {option: 'Coffee'},
                    {option: 'Coors Light'}
                ],
                answer: 'Coffee'
            },
            {
                question: "What is Gnocchi?",
                options: [
                    {option: 'Soft Noodles'},
                    {option: 'Hard Cheesecake'},
                    {option: 'Moist Pumpkin'}
                ],
                answer: 'Soft Noodles'
            }
        ]
    };

    managerCtrl.quizzes = [managerCtrl.newsQuiz, managerCtrl.computerQuiz, managerCtrl.foodQuiz];

};

angular.module('app.quizmanager', ['app.quizservice'])
    .controller('QuizManagerController', QuizManagerController)

