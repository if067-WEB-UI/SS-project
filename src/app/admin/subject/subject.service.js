(function() {
    'use strict';

    angular.module('app')
        .factory('subjectService', subjectService);
        subjectService.$inject = ['$http', 'appConstants', '$state'];

        function subjectService ($http, appConstants) {
            return {
                getSubjects: getSubjects,
                countSubjects: countSubjects,
                getRecordsRange: getRecordsRange,
                addSubject: addSubject
            };

            function getSubjects() {
                return $http.get(appConstants.getSubjects)
                    .then(fulfilled, rejected);
            }
            function countSubjects() {
                return $http.get(appConstants.countSubjects)
                    .then(fulfilled, rejected);
            }
            function getRecordsRange(quantity, begin) {
                return $http.get(appConstants.getRangeOfSubjects + "/" + quantity +"/" + begin)
                    .then(fulfilled, rejected);
            }
            function addSubject(data) {
                return $http.post(appConstants.addSubject, data)
                    .then(fulfilled, rejected);
            }

            function fulfilled(response) {
                return response;
            }
            function rejected(response) {
                return response;
            }
        }
})();