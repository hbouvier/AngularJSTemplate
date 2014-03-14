angular.module('#A_APPLICATION#Controllers', ['#A_APPLICATION#Services', '#A_APPLICATION#Models'])
    .controller('#A_APPLICATION#Ctrl', function($scope, $location, ConfigModel, ToDoModel) {
        $scope.data = {
            message : "Hello!",
            config  : ConfigModel,
            todo    : ToDoModel.todo
        };
    })
;
