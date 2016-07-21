(function(){
    'use strict';

    angular.module('app')
        .controller('facultyCtrl', facultyController);
    facultyController.$inject = ['facultyFactory'];

    function facultyController(facultyFactory) {
        var self = this;
        /******** the list of faculties*********/
        self.list = {};
        /******** the amount of faculties*********/
        self.totalFaculties = 0;
        self.currentPage = 1;
        self.pageChange = pageChange;
        /*********** message to get know what the error ***********/
        self.showErrorMessage = false;
        self.message = "Loading...";

        activate();

        function activate() {
            facultyFactory.getFaculties().then(fullfilled, rejected);
            facultyFactory.countFaculties().then(success,error);

        }

        function pageChange() {
            facultyFactory.getRecordsRange().then(fullfilled, rejected);
        }

        function success(response) {
            self.totalFaculties = response.data;
        }
        function error(response) {
            console.log(response.status + " " + response.statusText);
        }

        function fullfilled(response) {
            self.list = response.data;
            console.log(self.list)
        }
        function rejected(response) {
            self.showErrorMessage = true;
            self.message = "Error" + " " + response.status + " " + response.statusText;
        }
    }
})();