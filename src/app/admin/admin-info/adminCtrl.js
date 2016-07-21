(function(){
    'use strict';

    angular
        .module("app")
        .controller("AdminEditController", AdminEditController);

    AdminEditController.$inject = ["adminService","$state"];

    function AdminEditController(adminService,$state) {
        var self = this;
        self.edit = edit;
        self.showAdmins = showAdmins;
        self.update = update;
        self.remove = remove;
        self.list = [];
        self.show = false;
        self.password = "";
        self.password1 = "";
        self.currentObj = {};


        activate();

        function activate() {
            return adminService.getAdmins().then(function (data) {
                self.list = data;
                return self.list;
            });
        }

        function showAdmins() {
            self.show = false;
        }

        function edit(obj) {
            self.show = true;
            self.currentObj = obj;
        }

        function update(){
            console.log("pasword="+self.password);
            console.log("pasword1="+self.password1);
            if (self.password != ""){
                if (self.password == self.password1){
                    self.currentObj.password = self.password;
                }
                else {
                    alert("Паролі не співпадають");
                    return;
                }
            }
            adminService.editAdmin(self.currentObj);
            activate();
            $state.go("admin");
        }

        function remove(id) {
            adminService.deleteAdmin(id);
            activate();
        }
    }
})();