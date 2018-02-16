var app = angular.module("myApp", []).controller("mainCtrl", function(){
    var vm = this;
    vm.task = [
        {
            header: "header01",
            button: "button01"
        },
        {
            header: "header02",
            button: "button02"
        },
        {
            header: "header03",
            button: "button03"
        }
    ];
    vm.taskOne = function(){
        vm.clicked = vm.task[0].header;
        vm.clickedBox1 = vm.task[0].header;
        vm.clickedBox2 = vm.task[0].button;
        vm.clickedBox3 = vm.task[0].button;
    }
    vm.taskTwo = function(){
        vm.clicked = vm.task[1].header;
        vm.clickedBox1 = vm.task[1].button;
        vm.clickedBox2 = vm.task[1].header;
        vm.clickedBox3 = vm.task[1].button;
    }
    vm.taskThree = function(){
        vm.clicked = vm.task[2].header;
        vm.clickedBox1 = vm.task[2].button;
        vm.clickedBox2 = vm.task[2].button;
        vm.clickedBox3 = vm.task[2].header;
    }
})