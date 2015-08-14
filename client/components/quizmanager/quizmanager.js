/**
 * Created by josh on 8/13/15.
 */

var QuizManagerController = function(quizService){

    var managerCtrl = this;



    managerCtrl.quizzes = [{title: "Quiz 1"}, {title: "Quiz 2"}, {title: "Quiz 3"}];

};

angular.module('app.quizmanager', ['app.quizservice'])
    .controller('QuizManagerController', QuizManagerController)

