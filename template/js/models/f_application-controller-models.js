(function () {
    angular
        .module('#A_APPLICATION#Models', [])
        .factory('#A_APPLICATION#Model', function() {
            var model = {
                appVersion : '0.0.1',
                appName    : '#A_APPLICATION#'
            };
            return model;
        })
    ;
})();