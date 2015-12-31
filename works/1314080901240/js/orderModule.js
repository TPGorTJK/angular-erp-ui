<<<<<<< HEAD
﻿// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var goodsData={Liebie:"123",Banwenfx:"123",Name:"abc",Datags:'abc',Beizhu:'abc'};
var app = angular.module('app', ['ngRoute']); 
    function theRoute($routeProvider) {
    $routeProvider.when("/", {
      // route for the home page
        templateUrl: "pages/home.html",
         controller: "homeController"
    })
    .when("/about", {
      // route for the about page
        templateUrl: "pages/about.html",
         controller: "aboutController"
    })
    .when("/contact", {
      // route for the contact page
        templateUrl: "pages/contact.html",
         controller: "contactController"
    })
    .when("/Bankuai", {
      // route for the goodsList page
        templateUrl: "pages/Bankuai.html",
         controller: "goodsListController"
    })
    .otherwise({
      // when all else fails
        templateUrl: "pages/routeNotFound.html",
         controller: "notFoundController"
    });}
    app.controller("homeController", function ($scope) {
        $scope.message = "Welcome to my home page!";
    });
    app.controller("aboutController", function ($scope) {
        $scope.name = "Name:杨文聪";
        $scope.numbers = "Numbers:1314080901240";
    });
    app.controller("contactController", function ($scope) {
        $scope.message = "Contact us!";
    });
    app.controller("goodsListController", function ($scope,goodsListService) {
        var promise=goodsListService.getData();
          promise.success(function(data,status){
          alert(status+"：请求成功，获取文件里的json数据成功");
          var orderData=goodsData;
           orderData.Leibie = data[0].Leibie;
           orderData.Banwenfx = data[0].Banwenfx;
           orderData.Name = data[0].Name;
           orderData.Datags=data[0].Datags;
           orderData.Beizhu=data[0].Beizhu;
          $scope.theOrderDatas = [goodsData];
     });
     promise.error(function(data,status){
           alert(status);
           alert("请求出现错误，具体是什么错误还有待检查");
     });
    });
    app.controller("notFoundController", function ($scope,$location) {
      $scope.message = "There seems to be a problem finding the page you wanted";
      $scope.attemptedPath = $location.path();
    });
    app.config(theRoute);
app.factory('goodsListService',function($http){
     var getGoodsData={};
     getGoodsData.getData=function(){
            var promise=$http({
              url:"json/Bankuai.json",
              method:"get",
            });
            return promise;
      }
      return getGoodsData;
});


 // use the myAppModule variable to
  // configure the module with a filter
 app.filter('stripDashes', function () {
=======
// create a new module called 'myAppModule' and save 
// a reference to it in a variable called myAppModule 
var bankuaiData={Liebie:"123",Banwenfx:"123",Name:"abc",Datags:'abc',Beizhu:'abc'};

var orderModule = angular.module('orderModule',[]);

// use the myAppModule variable to
// configure the module with a controller
orderModule.factory('bankuaiService',function($http){
var getbankuaiData = {};
 +        getbankuaiData.getData = function () {
 +            var promise=$http({
 +              url:"json/bankuai.json",
 +              method:"get",
 +            });
 +            return promise;
 +      }
 +        return bankuaiData;
 +    }).controller('bankuaiController', function ($scope,bankuaiService) {
         // controller code would go here
          
 +        var promise=bankuaiService.getData();
 +          promise.success(function(data,status){
 +          alert(status+"������ɹ�����ȡ�ļ����json���ݳɹ�");
 +          var orderData=bankuaiData;
 +          orderData.Leibie = data[0].Leibie;
 +          orderData.Banwenfx = data[0].Banwenfx;
 +          orderData.Name = data[0].Name;
 +          orderData.Datags=data[0].Datags;
 +          orderData.Beizhu=data[0].Beizhu;
 +          $scope.theOrderDatas = [bankuaiData];
 +     });
 +     promise.error(function(data,status){
 +           alert(status);
 +           alert("������ִ��󣬾�����ʲô�����д����");
 +     });
 +});

 // use the myAppModule variable to
  // configure the module with a filter
 orderModule.filter('stripDashes', function () {
>>>>>>> origin/master
     return function (txt) {
         // filter code would go here
     };
 });// javascript.js