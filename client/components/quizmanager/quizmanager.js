/**
 * Created by josh on 8/13/15.
 */

var QuizManagerController = function (quizService) {

    var managerCtrl = this;
    managerCtrl.quizService = quizService;

    quizService.getQuizList()
        .then(function(result){
            managerCtrl.quizzes = result.data;
            console.log(managerCtrl.quizzes)
        })

};

angular.module('app.quizmanager', ['app.quizservice'])
    .controller('QuizManagerController', QuizManagerController)

