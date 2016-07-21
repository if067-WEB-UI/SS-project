(function(){
    'use strict';

    angular.module('app')
        .controller('SubjectCtrl', subjectController);
        subjectController.$inject = ['subjectService'];

        function subjectController(subjectService) {
            var self = this;
            self.list = {};
            self.subject = {subject_name: "", subject_description: ""};
            self.totalSubjects = 0;
            self.currentPage = 1;
            self.subjectsPerPage = 10;
            var firstSubjectInList = 0;
            self.pageChanged = pageChanged;
            self.showErrorMessage = false;
            self.message = "Loading...";
            self.addSubject = addSubject;

            activate();

            function activate() {
                subjectService.getRecordsRange(self.subjectsPerPage, firstSubjectInList)
                    .then(getRecordsRangeComplete, getRecordsRangeFailed);

                subjectService.countSubjects()
                    .then(countSubjectComplete, rejected);
            }

            function addSubject() {
                subjectService.addSubject(self.subject)
                    .then(addSubjectComplete, rejected)
            }

            function getRecordsRangeComplete(response) {
                self.list = response.data;
            }

            function getRecordsRangeFailed(response) {
                self.showErrorMessage = true;
                self.message = "Error:" + " " + response.status + " " + response.statusText;
            }

            function countSubjectComplete(response) {
                self.totalSubjects = response.data;
            }

            function addSubjectComplete(response) {
                if(response.data.response = "ok") {
                    self.subject = {};
                }
            }

            function pageChanged() {
                var begin = ((self.currentPage - 1) * self.subjectsPerPage);
                console.log("begin: " + begin);
                subjectService.getRecordsRange(self.subjectsPerPage, begin).then(getRecordsRangeComplete);
            }

            function rejected(response) {
                console.log(response.status + " " + response.statusText);
            }

        }
})();