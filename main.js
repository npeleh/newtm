var app = angular.module("myApp", []).controller("mainCtrl", function(){
    var vm = this;
    vm.task = [
        {
            header: "header01",
            button: "button01",
            boxStyle: "boxStyle01"
        },
        {
            header: "header02",
            button: "button02",
            boxStyle: "boxStyle02"
        },
        {
            header: "header03",
            button: "button03",
            boxStyle: "boxStyle03"
        }
    ];
    vm.taskOne = function(){
        var myEl = angular.element( document.querySelector( '#style1' ) ).addClass(vm.task[0].header);
        var myBox1 = angular.element( document.querySelector( '#styleBox1' ) ).addClass(vm.task[0].header);
        var myBox2 = angular.element( document.querySelector( '#styleBox2' ) ).addClass(vm.task[0].button);
        var myBox3 = angular.element( document.querySelector( '#styleBox3' ) ).addClass(vm.task[0].button);
        var btn1 = angular.element( document.querySelector( '#btn1' ) ).addClass(vm.task[0].button);
        var btn2 = angular.element( document.querySelector( '#btn2' ) ).addClass(vm.task[0].boxStyle);
        var btn3 = angular.element( document.querySelector( '#btn3' ) ).addClass(vm.task[0].boxStyle);
    }
    vm.taskTwo = function(){
        var myEl = angular.element( document.querySelector( '#style1' ) ).addClass(vm.task[1].header);
        var myBox1 = angular.element( document.querySelector( '#styleBox1' ) ).addClass(vm.task[1].button);
        var myBox2 = angular.element( document.querySelector( '#styleBox2' ) ).addClass(vm.task[1].header);
        var myBox3 = angular.element( document.querySelector( '#styleBox3' ) ).addClass(vm.task[1].button);
        var btn1 = angular.element( document.querySelector( '#btn1' ) ).addClass(vm.task[1].button);
        var btn2 = angular.element( document.querySelector( '#btn2' ) ).addClass(vm.task[1].header);
        var btn3 = angular.element( document.querySelector( '#btn3' ) ).addClass(vm.task[1].button);
    }
    vm.taskThree = function(){
        var myEl = angular.element( document.querySelector( '#style1' ) ).addClass(vm.task[2].header);
        var myBox1 = angular.element( document.querySelector( '#styleBox1' ) ).addClass(vm.task[2].button);
        var myBox2 = angular.element( document.querySelector( '#styleBox2' ) ).addClass(vm.task[2].button);
        var myBox3 = angular.element( document.querySelector( '#styleBox3' ) ).addClass(vm.task[2].header);
        var btn1 = angular.element( document.querySelector( '#btn1' ) ).addClass(vm.task[2].button);
        var btn2 = angular.element( document.querySelector( '#btn2' ) ).addClass(vm.task[2].button);
        var btn3 = angular.element( document.querySelector( '#btn3' ) ).addClass(vm.task[2].header);
    }
})