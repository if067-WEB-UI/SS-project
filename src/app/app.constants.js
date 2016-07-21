(function(){
    'use strict';

    angular.module('app')

        .constant('appConstants', {
            logInURL: 'http://dtapi.local/login/index',
            logOutURL: 'http://dtapi.local/login/logout',
            IsLoggedURL: 'http://dtapi.local/login/isLogged',

            getSubjects: 'http://dtapi.local/subject/getRecords',
            getRangeOfSubjects: 'http://dtapi.local/subject/getRecordsRange',
            countSubjects: 'http://dtapi.local/subject/countRecords',
            addSubject: 'http://dtapi.local/subject/insertData',
            editSubject: 'http://dtapi.local/subject/update/',
            delSubject: 'http://dtapi.local/subject/del/'
        })

    ;
})();
