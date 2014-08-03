(function () {
	angular
		.module('#A_APPLICATION#Controllers', ['#A_APPLICATION#Services', '#A_APPLICATION#Models'])
	    .controller('#A_APPLICATION#Ctrl', function($scope, $location, #A_APPLICATION#Model) {
	        $scope.model = #A_APPLICATION#Model;
	    })
	;
})();