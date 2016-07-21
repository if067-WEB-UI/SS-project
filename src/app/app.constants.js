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
            delSubject: 'http://dtapi.local/subject/del/',

            getSpecialities: 'http://dtapi.local/speciality/getRecords',
            getRangeOfSpecialities: 'http://dtapi.local/speciality/getRecordsRange',
            countSpecialities: 'http://dtapi.local/speciality/countRecords',
            addSpeciality: 'http://dtapi.local/speciality/insertData',
            editSpeciality: 'http://dtapi.local/speciality/update/',
            delSpeciality: 'http://dtapi.local/speciality/del/'
        })

    ;
})();
