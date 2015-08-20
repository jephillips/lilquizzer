/**
 * Created by josh on 8/13/15.
 */

var QuizManagerController = function (quizService) {

    var managerCtrl = this;
    managerCtrl.quizService = quizService;

    managerCtrl.quizzes = quizService.getQuizList();

};

angular.module('app.quizmanager', ['app.quizservice'])
    .controller('QuizManagerController', QuizManagerController)

