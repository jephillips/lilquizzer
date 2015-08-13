/**
 * Created by josh on 8/13/15.
 */

var QuizManagerController = function(){

    var managerCtrl = this;

    managerCtrl.quizzes = [{title: "Quiz 1"}, {title: "Quiz 2"}, {title: "Quiz 3"}];

};

angular.module('app.quizmanager', [])
    .controller('QuizManagerController', QuizManagerController)
    .directive('quizManager', function(){
        return {
            controller: QuizManagerController,
            replace: true,
            templateUrl: ''
        }
    });
