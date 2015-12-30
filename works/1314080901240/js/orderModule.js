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
     return function (txt) {
         // filter code would go here
     };
 });// javascript.js